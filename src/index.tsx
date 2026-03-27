import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { phoneData, prefectures, getMunicipalitiesByPrefecture, searchByMunicipality } from './data'

const app = new Hono()

app.use('/api/*', cors())

// API: 都道府県一覧
app.get('/api/prefectures', (c) => {
  return c.json({ prefectures })
})

// API: 都道府県から市区町村一覧
app.get('/api/municipalities', (c) => {
  const prefecture = c.req.query('prefecture')
  if (!prefecture) return c.json({ error: '都道府県を指定してください' }, 400)
  const municipalities = getMunicipalitiesByPrefecture(prefecture)
  return c.json({ municipalities })
})

// API: テキスト検索
app.get('/api/search', (c) => {
  const q = c.req.query('q') || ''
  const results = searchByMunicipality(q)
  return c.json({ results })
})

// API: 都道府県+市区町村から電話番号
app.get('/api/phone', (c) => {
  const prefecture = c.req.query('prefecture')
  const municipality = c.req.query('municipality')
  if (!prefecture || !municipality) {
    return c.json({ error: '都道府県と市区町村を指定してください' }, 400)
  }
  const entry = phoneData.find(e =>
    e.prefecture === prefecture &&
    e.municipalities.some(m => m === municipality || m.includes(municipality) || municipality.includes(m))
  )
  if (!entry) {
    return c.json({ found: false, message: '該当する連絡先が見つかりませんでした' })
  }
  return c.json({ found: true, entry })
})

// メインページ
app.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>アスベスト110番</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    body { font-family: 'Hiragino Sans', 'Meiryo', sans-serif; }
    .fade-in { animation: fadeIn 0.3s ease-in; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
    .result-card { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }
    .header-gradient { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); }
    .section-card { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .highlight { background: linear-gradient(120deg, #fef3c7 0%, #fde68a 100%); }
    input:focus, select:focus { outline: none; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15); }
    .phone-number { font-size: 2rem; font-weight: 800; color: #1d4ed8; letter-spacing: 0.05em; }
    .suggest-item:hover { background: #eff6ff; }
    .no-result { background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); }
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
          <h1 class="text-2xl font-bold tracking-wide">アスベスト110番</h1>
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
      
      <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 左：テキスト検索 -->
        <div>
          <p class="text-sm font-semibold text-gray-600 mb-1 flex items-center gap-1">
            <i class="fas fa-keyboard text-blue-400 text-xs"></i>
            簡単検索
          </p>
          <p class="text-xs text-gray-400 mb-2">市区町村名を入力</p>
          <div class="relative">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <input
              type="text"
              id="textSearch"
              placeholder="例：本庄、渋谷、横浜"
              class="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm transition-all duration-200"
              autocomplete="off"
            >
          </div>
          <div id="suggestions" class="mt-1 border border-gray-200 rounded-lg overflow-hidden hidden bg-white shadow-md z-10"></div>
          <p class="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
            <i class="fas fa-lightbulb text-yellow-400"></i>
            入力すると候補が表示されます
          </p>
        </div>

        <!-- 区切り線（縦） -->
        <div class="hidden md:flex items-stretch">
          <div class="w-px bg-gray-200 mx-auto"></div>
        </div>
        <div class="md:hidden border-t border-gray-100"></div>

        <!-- 右：プルダウン選択 -->
        <div class="md:-ml-6">
          <p class="text-sm font-semibold text-gray-600 mb-1 flex items-center gap-1">
            <i class="fas fa-list text-green-500 text-xs"></i>
            プルダウン選択
          </p>
          <p class="text-xs text-gray-400 mb-2">都道府県を選択</p>
          <select
            id="prefectureSelect"
            class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white transition-all duration-200 mb-3"
          >
            <option value="">都道府県を選択してください</option>
          </select>
          <p class="text-xs text-gray-400 mb-2">市区町村を選択</p>
          <select
            id="municipalitySelect"
            class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white transition-all duration-200"
            disabled
          >
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
        <li>緊急の場合は消防署（119番）または警察（110番）にご連絡ください。</li>
        <li>アスベストの除去・処理は専門業者に依頼してください。</li>
      </ul>
    </div>

  </main>

  <footer class="bg-gray-800 text-gray-400 text-xs text-center py-4 mt-8">
    <p>アスベスト110番 | 全国アスベスト相談窓口案内サービス</p>
  </footer>

<script>
const API_BASE = '';

// 都道府県リスト読み込み
async function loadPrefectures() {
  const res = await fetch(API_BASE + '/api/prefectures');
  const data = await res.json();
  const sel = document.getElementById('prefectureSelect');
  data.prefectures.forEach(pref => {
    const opt = document.createElement('option');
    opt.value = pref;
    opt.textContent = pref;
    sel.appendChild(opt);
  });
}

// 都道府県選択時に市区町村を読み込む
document.getElementById('prefectureSelect').addEventListener('change', async function() {
  const pref = this.value;
  const munSel = document.getElementById('municipalitySelect');
  munSel.innerHTML = '<option value="">市区町村を選択してください</option>';
  munSel.disabled = !pref;
  hideResult();
  if (!pref) return;

  const res = await fetch(API_BASE + '/api/municipalities?prefecture=' + encodeURIComponent(pref));
  const data = await res.json();
  data.municipalities.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    munSel.appendChild(opt);
  });
});

// 市区町村選択時に電話番号を検索
document.getElementById('municipalitySelect').addEventListener('change', async function() {
  const municipality = this.value;
  const prefecture = document.getElementById('prefectureSelect').value;
  if (!municipality || !prefecture) { hideResult(); return; }

  const res = await fetch(API_BASE + '/api/phone?prefecture=' + encodeURIComponent(prefecture) + '&municipality=' + encodeURIComponent(municipality));
  const data = await res.json();
  showResult(data, municipality, prefecture);
});

// テキスト検索
let searchTimer = null;
let currentSuggestions = [];

document.getElementById('textSearch').addEventListener('input', function() {
  const q = this.value.trim();
  clearTimeout(searchTimer);
  if (!q) {
    hideSuggestions();
    hideResult();
    return;
  }
  searchTimer = setTimeout(() => doTextSearch(q), 250);
});

document.getElementById('textSearch').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const q = this.value.trim();
    if (q) doTextSearch(q, true);
  }
});

async function doTextSearch(q, forceShow = false) {
  const res = await fetch(API_BASE + '/api/search?q=' + encodeURIComponent(q));
  const data = await res.json();
  
  if (data.results.length === 0) {
    hideSuggestions();
    if (forceShow) showNoResult(q);
    return;
  }
  
  // サジェスト表示
  showSuggestions(data.results, q);
  
  // 完全一致または1件のみの場合は自動で結果表示
  if (data.results.length === 1) {
    hideSuggestions();
    const entry = data.results[0];
    showResult({ found: true, entry }, q, entry.prefecture);
  }
}

function showSuggestions(results, q) {
  const box = document.getElementById('suggestions');
  box.innerHTML = '';
  // 最大10件のユニークな結果を表示
  const shown = [];
  results.forEach(entry => {
    entry.municipalities
      .filter(m => m.includes(q) || q.includes(m))
      .forEach(m => {
        if (shown.length < 10 && !shown.find(s => s.text === m + '（' + entry.prefecture + '）')) {
          shown.push({ text: m + '（' + entry.prefecture + '）', entry, m });
        }
      });
    if (shown.length === 0) {
      // 部分マッチが無い場合はエントリ自体を表示
      if (shown.length < 10) {
        shown.push({ text: entry.municipalities[0] + '（' + entry.prefecture + '）', entry, m: entry.municipalities[0] });
      }
    }
  });
  
  shown.forEach(item => {
    const div = document.createElement('div');
    div.className = 'suggest-item px-4 py-2.5 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-0 flex items-center gap-2';
    div.innerHTML = '<i class="fas fa-map-pin text-blue-400 text-xs"></i>' + escHtml(item.text);
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

function showResult(data, query, prefecture) {
  const area = document.getElementById('resultArea');
  area.classList.remove('hidden');
  
  if (!data.found) {
    area.innerHTML = \`
      <div class="no-result rounded-xl p-5 section-card fade-in">
        <div class="flex items-center gap-3">
          <div class="bg-orange-100 rounded-full p-3">
            <i class="fas fa-search text-orange-500 text-xl"></i>
          </div>
          <div>
            <p class="font-bold text-orange-800 text-base">「\${escHtml(query)}」の相談窓口が見つかりませんでした</p>
            <p class="text-sm text-orange-600 mt-1">別の市区町村名でお試しいただくか、都道府県プルダウンからお探しください。</p>
          </div>
        </div>
      </div>
    \`;
    return;
  }
  
  const entry = data.entry;
  const phoneDisplay = entry.phone || '電話番号が登録されていません';
  const coverArea = entry.municipalities.join('、');
  
  area.innerHTML = \`
    <div class="result-card rounded-xl p-5 section-card fade-in border border-blue-200">
      <div class="flex items-center gap-2 mb-4">
        <div class="bg-blue-500 rounded-full p-2">
          <i class="fas fa-phone-alt text-white text-lg"></i>
        </div>
        <div>
          <p class="text-xs text-blue-500 font-semibold uppercase tracking-wide">相談窓口が見つかりました</p>
          <h3 class="text-lg font-bold text-gray-800">\${escHtml(entry.prefecture)} アスベスト相談窓口</h3>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-5 mb-4 text-center shadow-sm border border-blue-100">
        <p class="text-xs text-gray-500 mb-1 uppercase tracking-wide">お電話番号</p>
        \${entry.phone
          ? \`<a href="tel:\${entry.phone.replace(/-/g, '')}" class="phone-number block hover:text-blue-900 transition-colors">
              <i class="fas fa-phone-alt mr-2 text-2xl"></i>\${escHtml(entry.phone)}
            </a>
            <p class="text-xs text-gray-400 mt-2">番号をタップすると電話をかけられます</p>\`
          : \`<p class="text-lg font-bold text-gray-400 mt-2">電話番号が登録されていません</p>
             <p class="text-xs text-gray-400 mt-1">各都道府県の担当窓口にお問い合わせください</p>\`
        }
      </div>
      
      <div class="bg-blue-50 rounded-lg p-3">
        <p class="text-xs text-blue-600 font-semibold mb-1 flex items-center gap-1">
          <i class="fas fa-map text-blue-400"></i>
          この番号が担当する地域
        </p>
        <p class="text-sm text-gray-700">\${escHtml(coverArea)}</p>
      </div>
    </div>
  \`;
}

function showNoResult(query) {
  const area = document.getElementById('resultArea');
  area.classList.remove('hidden');
  area.innerHTML = \`
    <div class="no-result rounded-xl p-5 section-card fade-in">
      <div class="flex items-center gap-3">
        <div class="bg-orange-100 rounded-full p-3">
          <i class="fas fa-search text-orange-500 text-xl"></i>
        </div>
        <div>
          <p class="font-bold text-orange-800 text-base">「\${escHtml(query)}」の相談窓口が見つかりませんでした</p>
          <p class="text-sm text-orange-600 mt-1">別の市区町村名でお試しいただくか、都道府県プルダウンからお探しください。</p>
        </div>
      </div>
    </div>
  \`;
}

function hideResult() {
  const area = document.getElementById('resultArea');
  area.classList.add('hidden');
  area.innerHTML = '';
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 初期化
loadPrefectures();
</script>
</body>
</html>`
  return c.html(html)
})

export default app
