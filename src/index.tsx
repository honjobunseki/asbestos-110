import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { phoneData, prefectures, getMunicipalitiesByPrefecture, searchByMunicipality } from './data'

const app = new Hono()

app.use('/api/*', cors())

// ── セキュリティ共通ヘルパー ──────────────────────────────
/** クエリ文字列を安全に取得（長さ制限・制御文字除去） */
function safeQuery(raw: string | undefined, maxLen = 50): string {
  if (!raw) return ''
  // 制御文字・nullバイトを除去し、最大文字数を制限
  return raw.replace(/[\x00-\x1F\x7F]/g, '').slice(0, maxLen).trim()
}

// ── API ──────────────────────────────────────────────────

// 都道府県一覧
app.get('/api/prefectures', (c) => {
  return c.json({ prefectures })
})

// 都道府県 → 市区町村一覧
app.get('/api/municipalities', (c) => {
  const prefecture = safeQuery(c.req.query('prefecture'), 10)
  if (!prefecture) return c.json({ error: '都道府県を指定してください' }, 400)
  // 存在しない都道府県への問い合わせは空配列を返す（情報漏洩しない）
  if (!prefectures.includes(prefecture)) return c.json({ municipalities: [] })
  const municipalities = getMunicipalitiesByPrefecture(prefecture)
  return c.json({ municipalities })
})

// テキスト検索（部分一致）
app.get('/api/search', (c) => {
  const q = safeQuery(c.req.query('q'), 50)
  if (!q) return c.json({ results: [] })
  const results = searchByMunicipality(q)
  return c.json({ results })
})

// 都道府県 + 市区町村 → 電話番号
app.get('/api/phone', (c) => {
  const prefecture = safeQuery(c.req.query('prefecture'), 10)
  const municipality = safeQuery(c.req.query('municipality'), 50)
  if (!prefecture || !municipality) {
    return c.json({ error: '都道府県と市区町村を指定してください' }, 400)
  }
  // 都道府県が存在しない場合は即 not found（列挙攻撃対策）
  if (!prefectures.includes(prefecture)) {
    return c.json({ found: false })
  }
  const entry = phoneData.find(e =>
    e.prefecture === prefecture &&
    e.municipalities.some(m => m === municipality || m.includes(municipality) || municipality.includes(m))
  )
  if (!entry) return c.json({ found: false })
  return c.json({ found: true, entry })
})

// ── メインページ ──────────────────────────────────────────
app.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>アスベストお問い合わせ窓口</title>
  <!-- CSP: インラインスクリプトはnonce不要のため unsafe-inline を最小限許可 -->
  <!-- 外部リソースは信頼できるCDNのみ許可 -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    body { font-family: 'Hiragino Sans', 'Meiryo', sans-serif; }
    .fade-in { animation: fadeIn 0.3s ease-in; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
    .result-card { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }
    .header-gradient { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); }
    .section-card { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    input:focus, select:focus { outline: none; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15); }
    .phone-number { font-size: 2rem; font-weight: 800; color: #1d4ed8; letter-spacing: 0.05em; }
    .suggest-item:hover { background: #eff6ff; }
    .no-result { background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); }
    #suggestions { position: absolute; width: 100%; z-index: 50; }
    .search-wrap { position: relative; }
  </style>
</head>
<body class="bg-gray-50 min-h-screen">

  <!-- ヘッダー -->
  <header class="header-gradient text-white shadow-lg">
    <div class="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="bg-yellow-400 rounded-full p-2">
          <i class="fas fa-exclamation-triangle text-white text-xl"></i>
        </div>
        <div>
          <h1 class="text-2xl font-bold tracking-wide">アスベストお問い合わせ窓口</h1>
          <p class="text-blue-200 text-sm mt-0.5">お住まいの地域のアスベスト相談窓口をご案内します</p>
        </div>
      </div>
      <div class="hidden sm:block text-right">
        <p class="text-blue-200 text-xs">全国対応</p>
        <p class="text-white text-sm font-semibold">相談窓口検索</p>
      </div>
    </div>
  </header>

  <!-- お知らせバナー -->
  <div class="bg-yellow-50 border-b border-yellow-200">
    <div class="max-w-4xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-yellow-800">
      <i class="fas fa-info-circle text-yellow-600"></i>
      <span>アスベスト（石綿）に関する相談・通報は、お住まいの地域の相談窓口にお電話ください。</span>
    </div>
  </div>

  <main class="max-w-4xl mx-auto px-4 py-6 space-y-5">

    <!-- 検索セクション -->
    <div class="bg-white rounded-xl section-card overflow-hidden">
      <div class="bg-gray-50 border-b border-gray-100 px-5 py-3">
        <h2 class="text-base font-bold text-gray-700 flex items-center gap-2">
          <i class="fas fa-search text-blue-500"></i>
          相談窓口を検索
        </h2>
      </div>

      <div class="p-5 flex flex-col md:flex-row gap-6">
        <!-- 左：テキスト検索 -->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-600 mb-1 flex items-center gap-1">
            <i class="fas fa-keyboard text-blue-400 text-xs"></i>
            簡単検索
          </p>
          <p class="text-xs text-gray-400 mb-2">市区町村名を入力</p>
          <div class="search-wrap">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style="top:18px">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <input
              type="text"
              id="textSearch"
              placeholder="例：渋谷、横浜、札幌"
              maxlength="50"
              autocomplete="off"
              spellcheck="false"
              class="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-200"
            >
            <div id="suggestions" class="hidden border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md mt-1"></div>
          </div>
          <p class="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
            <i class="fas fa-lightbulb text-yellow-400"></i>
            入力すると候補が表示されます
          </p>
        </div>

        <!-- 区切り線 -->
        <div class="hidden md:block w-px bg-gray-200 self-stretch"></div>
        <div class="md:hidden border-t border-gray-100"></div>

        <!-- 右：プルダウン選択 -->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-600 mb-1 flex items-center gap-1">
            <i class="fas fa-list text-green-500 text-xs"></i>
            プルダウン選択
          </p>
          <p class="text-xs text-gray-400 mb-2">都道府県を選択</p>
          <select id="prefectureSelect"
            class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white transition-all duration-200 mb-3">
            <option value="">都道府県を選択してください</option>
          </select>
          <p class="text-xs text-gray-400 mb-2">市区町村を選択</p>
          <select id="municipalitySelect"
            class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white transition-all duration-200"
            disabled>
            <option value="">まず都道府県を選択</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 結果表示エリア -->
    <div id="resultArea" class="hidden"></div>

    <!-- 使い方ガイド -->
    <div class="bg-white rounded-xl section-card p-5">
      <h3 class="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
        <i class="fas fa-question-circle text-blue-400"></i>
        ご利用方法
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="flex items-start gap-3 bg-blue-50 rounded-lg p-3">
          <div class="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
          <p class="text-xs text-gray-600">左の検索欄に市区町村名を入力するか、右のプルダウンから都道府県・市区町村を選択</p>
        </div>
        <div class="flex items-start gap-3 bg-green-50 rounded-lg p-3">
          <div class="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
          <p class="text-xs text-gray-600">該当する地域の相談窓口電話番号が表示されます</p>
        </div>
        <div class="flex items-start gap-3 bg-orange-50 rounded-lg p-3">
          <div class="bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
          <p class="text-xs text-gray-600">表示された番号に電話してアスベストに関する相談・通報を行ってください</p>
        </div>
      </div>
    </div>

    <!-- 注意事項 -->
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <h3 class="text-sm font-bold text-amber-800 mb-2 flex items-center gap-2">
        <i class="fas fa-exclamation-triangle text-amber-600"></i>
        ご注意
      </h3>
      <ul class="text-xs text-amber-700 space-y-1 list-disc list-inside">
        <li>電話番号は変更される場合があります。最新情報は各相談窓口にご確認ください。</li>
        <li>アスベストの除去・処理は専門業者に依頼してください。</li>
      </ul>
    </div>

  </main>

  <footer class="bg-gray-800 text-gray-400 text-xs text-center py-4 mt-8">
    <p>アスベストお問い合わせ窓口 | 全国アスベスト相談窓口案内サービス</p>
  </footer>

<script>
'use strict';

// ── XSS対策: テキストノードのみ使う安全なDOM操作ヘルパー ──
function txt(str) {
  return document.createTextNode(String(str));
}
function el(tag, attrs, ...children) {
  const e = document.createElement(tag);
  if (attrs) Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'style') e.style.cssText = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  });
  children.forEach(c => {
    if (c == null) return;
    e.appendChild(typeof c === 'string' ? txt(c) : c);
  });
  return e;
}

// ── 入力サニタイズ（クライアント側、念のため） ──
function sanitizeInput(str, maxLen = 50) {
  return String(str).replace(/[\\x00-\\x1F\\x7F]/g, '').slice(0, maxLen);
}

// ── 都道府県リスト読み込み ──
async function loadPrefectures() {
  try {
    const res = await fetch('/api/prefectures');
    if (!res.ok) return;
    const data = await res.json();
    const sel = document.getElementById('prefectureSelect');
    data.prefectures.forEach(pref => {
      sel.appendChild(el('option', { value: pref }, pref));
    });
  } catch(e) { /* ネットワークエラーは無視 */ }
}

// ── 都道府県選択 → 市区町村リスト ──
document.getElementById('prefectureSelect').addEventListener('change', async function() {
  const pref = this.value;
  const munSel = document.getElementById('municipalitySelect');
  munSel.innerHTML = '';
  munSel.appendChild(el('option', { value: '' }, '市区町村を選択してください'));
  munSel.disabled = !pref;
  hideResult();
  if (!pref) return;
  try {
    const res = await fetch('/api/municipalities?prefecture=' + encodeURIComponent(pref));
    if (!res.ok) return;
    const data = await res.json();
    data.municipalities.forEach(m => {
      munSel.appendChild(el('option', { value: m }, m));
    });
  } catch(e) {}
});

// ── 市区町村選択 → 電話番号 ──
document.getElementById('municipalitySelect').addEventListener('change', async function() {
  const municipality = this.value;
  const prefecture = document.getElementById('prefectureSelect').value;
  if (!municipality || !prefecture) { hideResult(); return; }
  try {
    const res = await fetch('/api/phone?prefecture=' + encodeURIComponent(prefecture) + '&municipality=' + encodeURIComponent(municipality));
    if (!res.ok) return;
    const data = await res.json();
    showResult(data, municipality, prefecture);
  } catch(e) {}
});

// ── テキスト検索 ──
let searchTimer = null;

document.getElementById('textSearch').addEventListener('input', function() {
  const q = sanitizeInput(this.value.trim());
  clearTimeout(searchTimer);
  if (!q) { hideSuggestions(); hideResult(); return; }
  searchTimer = setTimeout(() => doTextSearch(q), 250);
});

document.getElementById('textSearch').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    clearTimeout(searchTimer);
    const q = sanitizeInput(this.value.trim());
    if (q) doTextSearch(q, true);
  }
  // ESCでサジェストを閉じる
  if (e.key === 'Escape') hideSuggestions();
});

async function doTextSearch(q, forceShow = false) {
  try {
    const res = await fetch('/api/search?q=' + encodeURIComponent(q));
    if (!res.ok) return;
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      hideSuggestions();
      if (forceShow) showNoResult(q);
      return;
    }

    // 1件かつ完全一致 → そのまま結果表示
    if (data.results.length === 1) {
      const entry = data.results[0];
      const exactMatch = entry.municipalities.some(m => m === q);
      hideSuggestions();
      showResult({ found: true, entry }, q, entry.prefecture);
      return;
    }

    showSuggestions(data.results, q);
  } catch(e) {}
}

// ── サジェスト表示（DOM操作のみ・XSS安全） ──
function showSuggestions(results, q) {
  const box = document.getElementById('suggestions');
  box.innerHTML = '';

  // 候補をフラットに展開：入力文字列を含む市区町村を優先的に収集
  const shown = [];
  for (const entry of results) {
    // まず入力を含む市区町村を探す
    const matched = entry.municipalities.filter(m => m.includes(q));
    const targets = matched.length > 0 ? matched : [entry.municipalities[0]];
    for (const m of targets) {
      if (shown.length >= 10) break;
      const label = m + '（' + entry.prefecture + '）';
      if (!shown.some(s => s.label === label)) {
        shown.push({ label, m, entry });
      }
    }
    if (shown.length >= 10) break;
  }

  if (shown.length === 0) { box.classList.add('hidden'); return; }

  shown.forEach(item => {
    const icon = el('i', { class: 'fas fa-map-pin text-blue-400 text-xs mr-2' });
    const div = el('div',
      { class: 'suggest-item px-4 py-2.5 text-sm text-gray-700 cursor-pointer border-b border-gray-100 flex items-center' },
      icon,
      item.label  // textNode として安全に挿入
    );
    div.addEventListener('click', () => {
      document.getElementById('textSearch').value = item.m;
      hideSuggestions();
      showResult({ found: true, entry: item.entry }, item.m, item.entry.prefecture);
    });
    box.appendChild(div);
  });

  box.classList.remove('hidden');
}

function hideSuggestions() {
  document.getElementById('suggestions').classList.add('hidden');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#textSearch') && !e.target.closest('#suggestions')) {
    hideSuggestions();
  }
});

// ── 結果表示（DOM操作のみ・XSS安全） ──
function showResult(data, query, prefecture) {
  const area = document.getElementById('resultArea');
  area.classList.remove('hidden');
  area.innerHTML = '';

  if (!data.found) {
    const card = el('div', { class: 'no-result rounded-xl p-5 section-card fade-in' },
      el('div', { class: 'flex items-center gap-3' },
        el('div', { class: 'bg-orange-100 rounded-full p-3' },
          el('i', { class: 'fas fa-search text-orange-500 text-xl' })
        ),
        el('div', null,
          el('p', { class: 'font-bold text-orange-800 text-base' }, '「' + query + '」の相談窓口が見つかりませんでした'),
          el('p', { class: 'text-sm text-orange-600 mt-1' }, '別の市区町村名でお試しいただくか、都道府県プルダウンからお探しください。')
        )
      )
    );
    area.appendChild(card);
    return;
  }

  const entry = data.entry;
  const coverArea = entry.municipalities.join('、');

  // 電話番号部分
  let phoneNode;
  if (entry.phone) {
    // tel: リンクは href属性に電話番号のみ（数字とハイフン）を使用
    const cleanPhone = entry.phone.replace(/[^0-9\\-]/g, '');
    const link = el('a',
      { class: 'phone-number block hover:text-blue-900 transition-colors', href: 'tel:' + cleanPhone },
      el('i', { class: 'fas fa-phone-alt mr-2 text-2xl' }),
      entry.phone
    );
    phoneNode = el('div', null,
      link,
      el('p', { class: 'text-xs text-gray-400 mt-2' }, '番号をタップすると電話をかけられます')
    );
  } else {
    phoneNode = el('div', null,
      el('p', { class: 'text-lg font-bold text-gray-400 mt-2' }, '電話番号が登録されていません'),
      el('p', { class: 'text-xs text-gray-400 mt-1' }, '各都道府県の担当窓口にお問い合わせください')
    );
  }

  const card = el('div', { class: 'result-card rounded-xl p-5 section-card fade-in border border-blue-200' },
    el('div', { class: 'flex items-center gap-2 mb-4' },
      el('div', { class: 'bg-blue-500 rounded-full p-2' },
        el('i', { class: 'fas fa-phone-alt text-white text-lg' })
      ),
      el('div', null,
        el('p', { class: 'text-xs text-blue-500 font-semibold uppercase tracking-wide' }, '相談窓口が見つかりました'),
        el('h3', { class: 'text-lg font-bold text-gray-800' }, entry.prefecture + ' アスベスト相談窓口')
      )
    ),
    el('div', { class: 'bg-white rounded-xl p-5 mb-4 text-center shadow-sm border border-blue-100' },
      el('p', { class: 'text-xs text-gray-500 mb-1 uppercase tracking-wide' }, 'お電話番号'),
      phoneNode
    ),
    el('div', { class: 'bg-blue-50 rounded-lg p-3' },
      el('p', { class: 'text-xs text-blue-600 font-semibold mb-1 flex items-center gap-1' },
        el('i', { class: 'fas fa-map text-blue-400' }),
        ' この番号が担当する地域'
      ),
      el('p', { class: 'text-sm text-gray-700' }, coverArea)
    )
  );
  area.appendChild(card);
}

function showNoResult(query) {
  showResult({ found: false }, query, '');
}

function hideResult() {
  const area = document.getElementById('resultArea');
  area.classList.add('hidden');
  area.innerHTML = '';
}

// 初期化
loadPrefectures();
</script>
</body>
</html>`
  return c.html(html)
})

export default app
