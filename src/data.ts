// アスベスト110番 電話番号データ
// 各エントリ: { municipalities: string[], phone: string }

export interface PhoneEntry {
  municipalities: string[]
  phone: string
  prefecture: string
}

export const phoneData: PhoneEntry[] = [
  // 北海道
  { prefecture: "北海道", municipalities: ["札幌市"], phone: "011-211-2882" },
  { prefecture: "北海道", municipalities: ["旭川市"], phone: "0166-25-6369" },
  { prefecture: "北海道", municipalities: ["函館市"], phone: "0138-21-3358" },
  { prefecture: "北海道", municipalities: ["小樽市", "石狩市", "江別市", "北広島市", "恵庭市", "千歳市", "当別町", "新篠津村"], phone: "011-204-5822" },
  { prefecture: "北海道", municipalities: ["室蘭市", "登別市", "伊達市", "豊浦町", "壮瞥町", "洞爺湖町"], phone: "0143-24-9846" },
  { prefecture: "北海道", municipalities: ["苫小牧市", "白老町", "厚真町", "安平町", "むかわ町"], phone: "0144-34-9592" },

  // 青森県
  { prefecture: "青森県", municipalities: ["東津軽郡", "野辺地町", "横浜町", "六ヶ所村"], phone: "017-763-5292" },
  { prefecture: "青森県", municipalities: ["弘前市", "黒石市", "五所川原市", "つがる市", "平川市", "西津軽郡", "中津軽郡", "南津軽郡", "北津軽郡"], phone: "0172-31-1900" },
  { prefecture: "青森県", municipalities: ["十和田市", "三沢市", "三戸郡", "七戸町", "六戸町", "東北町", "おいらせ町"], phone: "0178-27-5111" },
  { prefecture: "青森県", municipalities: ["むつ市", "下北郡"], phone: "0175-33-1900" },
  { prefecture: "青森県", municipalities: ["青森市"], phone: "017-718-0293" },
  { prefecture: "青森県", municipalities: ["八戸市"], phone: "0178-43-9107" },

  // 秋田県
  { prefecture: "秋田県", municipalities: ["秋田市"], phone: "018-866-2075" },
  { prefecture: "秋田県", municipalities: ["大館市", "鹿角市", "小坂町", "北秋田市", "上小阿仁村"], phone: "0186-52-3954" },
  { prefecture: "秋田県", municipalities: ["能代市", "三種町", "八峰町", "藤里町"], phone: "0185-52-4331" },
  { prefecture: "秋田県", municipalities: ["男鹿市", "潟上市", "五城目町", "八郎潟町", "井川町", "大潟村"], phone: "018-855-5173" },
  { prefecture: "秋田県", municipalities: ["由利本荘市", "にかほ市"], phone: "0184-22-4121" },
  { prefecture: "秋田県", municipalities: ["大仙市", "仙北市", "美郷町"], phone: "0187-63-3694" },
  { prefecture: "秋田県", municipalities: ["横手市", "湯沢市", "羽後町", "東成瀬村"], phone: "0182-45-6139" },

  // 岩手県
  { prefecture: "岩手県", municipalities: ["盛岡市"], phone: "019-613-8419" },
  { prefecture: "岩手県", municipalities: ["花巻市", "北上市", "遠野市", "西和賀町"], phone: "0198-22-4921" },
  { prefecture: "岩手県", municipalities: ["奥州市", "金ケ崎町", "一関市", "平泉町"], phone: "0197-22-2831" },
  { prefecture: "岩手県", municipalities: ["宮古市", "山田町", "岩泉町", "田野畑村"], phone: "0193-64-2218" },
  { prefecture: "岩手県", municipalities: ["大船渡市", "陸前高田市", "住田町", "釜石市", "大槌町"], phone: "0192-27-9913" },
  { prefecture: "岩手県", municipalities: ["久慈市", "普代村", "野田村", "洋野町", "二戸市", "軽米町", "九戸村", "一戸町"], phone: "0194-53-4987" },

  // 山形県
  { prefecture: "山形県", municipalities: ["山形市", "天童市", "上山市", "山辺町", "中山町", "寒河江市", "河北町", "西川町", "朝日町", "大江町"], phone: "023-621-8429" },
  { prefecture: "山形県", municipalities: ["新庄市", "最上町", "舟形町", "真室川町", "大蔵村", "鮭川村", "戸沢村"], phone: "0233-29-1286" },
  { prefecture: "山形県", municipalities: ["米沢市", "長井市", "南陽市", "高畠町", "川西町", "小国町", "白鷹町", "飯豊町"], phone: "0238-26-6035" },
  { prefecture: "山形県", municipalities: ["鶴岡市", "酒田市", "三川町", "庄内町", "遊佐町"], phone: "0235-66-4744" },

  // 宮城県
  { prefecture: "宮城県", municipalities: ["白石市", "角田市", "蔵王町", "七ヶ宿町", "大河原町", "村田町", "柴田町", "川崎町", "丸森町"], phone: "0224-53-3118" },
  { prefecture: "宮城県", municipalities: ["塩竈市", "多賀城市", "松島町", "七ヶ浜町", "利府町", "大和町", "大郷町", "富谷市", "大衡村"], phone: "022-363-5506" },
  { prefecture: "宮城県", municipalities: ["名取市", "岩沼市", "亘理町", "山元町"], phone: "0223-22-6295" },
  { prefecture: "宮城県", municipalities: ["栗原市", "大崎市", "色麻町", "加美町", "涌谷町", "美里町"], phone: "0229-87-8002" },
  { prefecture: "宮城県", municipalities: ["石巻市", "登米市", "東松島市", "女川町"], phone: "0225-95-1418" },
  { prefecture: "宮城県", municipalities: ["気仙沼市", "南三陸町"], phone: "0226-22-5127" },
  { prefecture: "宮城県", municipalities: ["仙台市"], phone: "022-214-8222" },

  // 福島県
  { prefecture: "福島県", municipalities: ["二本松市", "伊達市", "本宮市", "伊達郡", "安達郡"], phone: "024-521-2721" },
  { prefecture: "福島県", municipalities: ["須賀川市", "田村市", "岩瀬郡", "石川郡", "田村郡"], phone: "024-935-1503" },
  { prefecture: "福島県", municipalities: ["白河市", "西白河郡", "東白川郡"], phone: "0248-23-1421" },
  { prefecture: "福島県", municipalities: ["会津若松市", "喜多方市", "耶麻郡", "河沼郡", "大沼郡"], phone: "0242-29-3908" },
  { prefecture: "福島県", municipalities: ["南会津郡"], phone: "0241-62-2061" },
  { prefecture: "福島県", municipalities: ["相馬市", "南相馬市", "双葉郡", "相馬郡"], phone: "0244-26-1232" },
  { prefecture: "福島県", municipalities: ["福島市"], phone: "024-573-2557" },
  { prefecture: "福島県", municipalities: ["郡山市"], phone: "024-923-3400" },
  { prefecture: "福島県", municipalities: ["いわき市"], phone: "0246-54-1585" },

  // 長野県
  { prefecture: "長野県", municipalities: ["小諸市", "佐久市", "南佐久郡", "北佐久郡"], phone: "0267-63-3111" },
  { prefecture: "長野県", municipalities: ["上田市", "東御市", "小県郡"], phone: "0268-23-1260" },
  { prefecture: "長野県", municipalities: ["岡谷市", "諏訪市", "茅野市", "諏訪郡"], phone: "0266-53-6000" },
  { prefecture: "長野県", municipalities: ["伊那市", "駒ヶ根市", "上伊那郡"], phone: "0265-78-2111" },
  { prefecture: "長野県", municipalities: ["飯田市", "下伊那郡"], phone: "0265-23-1111" },
  { prefecture: "長野県", municipalities: ["木曽郡"], phone: "0264-24-2211" },
  { prefecture: "長野県", municipalities: ["塩尻市", "安曇野市", "東筑摩郡"], phone: "0263-47-7800" },
  { prefecture: "長野県", municipalities: ["大町市", "北安曇郡"], phone: "0261-22-5111" },
  { prefecture: "長野県", municipalities: ["須坂市", "千曲市", "埴科郡", "上高井郡", "上水内郡"], phone: "026-233-5151" },
  { prefecture: "長野県", municipalities: ["中野市", "飯山市", "下高井郡", "下水内郡"], phone: "0269-22-3111" },
  { prefecture: "長野県", municipalities: ["長野市"], phone: "026-224-8034" },
  { prefecture: "長野県", municipalities: ["松本市"], phone: "0263-34-3267" },

  // 東京都
  { prefecture: "東京都", municipalities: ["千代田区"], phone: "03-5211-4254" },
  { prefecture: "東京都", municipalities: ["中央区"], phone: "03-3546-5404" },
  { prefecture: "東京都", municipalities: ["港区"], phone: "03-3578-2111" },
  { prefecture: "東京都", municipalities: ["新宿区"], phone: "03-5273-3764" },
  { prefecture: "東京都", municipalities: ["文京区"], phone: "03-5803-1260" },
  { prefecture: "東京都", municipalities: ["台東区"], phone: "03-5246-1283" },
  { prefecture: "東京都", municipalities: ["墨田区"], phone: "03-5608-6210" },
  { prefecture: "東京都", municipalities: ["江東区"], phone: "03-3647-6147" },
  { prefecture: "東京都", municipalities: ["品川区"], phone: "03-5742-6751" },
  { prefecture: "東京都", municipalities: ["目黒区"], phone: "03-5722-9384" },
  { prefecture: "東京都", municipalities: ["大田区"], phone: "03-5744-1369" },
  { prefecture: "東京都", municipalities: ["世田谷区"], phone: "03-6432-7137" },
  { prefecture: "東京都", municipalities: ["渋谷区"], phone: "03-3463-2750" },
  { prefecture: "東京都", municipalities: ["中野区"], phone: "03-3228-5799" },
  { prefecture: "東京都", municipalities: ["杉並区"], phone: "03-3312-2111" },
  { prefecture: "東京都", municipalities: ["豊島区"], phone: "03-3981-2405" },
  { prefecture: "東京都", municipalities: ["北区"], phone: "03-3908-8611" },
  { prefecture: "東京都", municipalities: ["荒川区"], phone: "03-3802-4697" },
  { prefecture: "東京都", municipalities: ["板橋区"], phone: "03-3579-2594" },
  { prefecture: "東京都", municipalities: ["練馬区"], phone: "03-3993-1111" },
  { prefecture: "東京都", municipalities: ["足立区"], phone: "03-3880-5304" },
  { prefecture: "東京都", municipalities: ["葛飾区"], phone: "03-5654-8238" },
  { prefecture: "東京都", municipalities: ["江戸川区"], phone: "03-5662-1995" },
  { prefecture: "東京都", municipalities: ["八王子市"], phone: "042-620-7255" },
  { prefecture: "東京都", municipalities: ["立川市"], phone: "042-523-2111" },
  { prefecture: "東京都", municipalities: ["武蔵野市"], phone: "0422-60-1842" },
  { prefecture: "東京都", municipalities: ["三鷹市"], phone: "0422-29-9612" },
  { prefecture: "東京都", municipalities: ["青梅市"], phone: "0428-22-1111" },
  { prefecture: "東京都", municipalities: ["府中市"], phone: "042-335-4196" },
  { prefecture: "東京都", municipalities: ["昭島市"], phone: "042-544-5111" },
  { prefecture: "東京都", municipalities: ["調布市"], phone: "042-481-7087" },
  { prefecture: "東京都", municipalities: ["町田市"], phone: "042-724-2711" },
  { prefecture: "東京都", municipalities: ["小金井市"], phone: "042-387-9817" },
  { prefecture: "東京都", municipalities: ["小平市"], phone: "042-346-9536" },
  { prefecture: "東京都", municipalities: ["日野市"], phone: "042-585-1111" },
  { prefecture: "東京都", municipalities: ["東村山市"], phone: "042-393-5111" },
  { prefecture: "東京都", municipalities: ["国分寺市"], phone: "042-325-0111" },
  { prefecture: "東京都", municipalities: ["国立市"], phone: "042-576-2111" },
  { prefecture: "東京都", municipalities: ["福生市"], phone: "042-551-1718" },
  { prefecture: "東京都", municipalities: ["狛江市"], phone: "03-3430-1111" },
  { prefecture: "東京都", municipalities: ["東大和市"], phone: "042-563-2111" },
  { prefecture: "東京都", municipalities: ["清瀬市"], phone: "042-492-5111" },
  { prefecture: "東京都", municipalities: ["東久留米市"], phone: "042-470-7753" },
  { prefecture: "東京都", municipalities: ["武蔵村山市"], phone: "042-565-1111" },
  { prefecture: "東京都", municipalities: ["多摩市"], phone: "042-338-6831" },
  { prefecture: "東京都", municipalities: ["稲城市"], phone: "042-378-2111" },
  { prefecture: "東京都", municipalities: ["羽村市"], phone: "042-555-1111" },
  { prefecture: "東京都", municipalities: ["あきる野市"], phone: "042-558-1111" },
  { prefecture: "東京都", municipalities: ["西東京市"], phone: "042-438-4042" },
  { prefecture: "東京都", municipalities: ["瑞穂町"], phone: "042-557-0544" },
  { prefecture: "東京都", municipalities: ["日の出町"], phone: "042-597-0511" },
  { prefecture: "東京都", municipalities: ["檜原村"], phone: "042-598-1011" },
  { prefecture: "東京都", municipalities: ["奥多摩町"], phone: "0428-83-2182" },
  { prefecture: "東京都", municipalities: ["大島町"], phone: "04992-2-1487" },
  { prefecture: "東京都", municipalities: ["利島村"], phone: "04992-9-0011" },
  { prefecture: "東京都", municipalities: ["新島村"], phone: "04992-5-0240" },
  { prefecture: "東京都", municipalities: ["神津島村"], phone: "04992-8-0011" },
  { prefecture: "東京都", municipalities: ["三宅村"], phone: "04994-5-0981" },
  { prefecture: "東京都", municipalities: ["御蔵島村"], phone: "04994-8-2121" },
  { prefecture: "東京都", municipalities: ["八丈町"], phone: "04996-2-1123" },
  { prefecture: "東京都", municipalities: ["青ヶ島村"], phone: "04996-9-0111" },
  { prefecture: "東京都", municipalities: ["小笠原村"], phone: "04998-2-3115" },

  // 神奈川県
  { prefecture: "神奈川県", municipalities: ["横浜市"], phone: "045-671-3843" },
  { prefecture: "神奈川県", municipalities: ["川崎市"], phone: "044-200-2517" },
  { prefecture: "神奈川県", municipalities: ["相模原市（緑区橋本・大沢）", "相模原市緑区橋本", "相模原市緑区大沢", "相模原市中央区", "相模原市南区"], phone: "042-769-8241" },
  { prefecture: "神奈川県", municipalities: ["相模原市（緑区城山・津久井・相模湖・藤野）", "相模原市緑区城山", "相模原市緑区津久井", "相模原市緑区相模湖", "相模原市緑区藤野"], phone: "042-780-1404" },
  { prefecture: "神奈川県", municipalities: ["横須賀市"], phone: "046-822-8328" },
  { prefecture: "神奈川県", municipalities: ["平塚市"], phone: "0463-21-9764" },
  { prefecture: "神奈川県", municipalities: ["藤沢市"], phone: "0466-50-3519" },
  { prefecture: "神奈川県", municipalities: ["鎌倉市", "逗子市", "三浦市", "葉山町"], phone: "046-823-0210" },
  { prefecture: "神奈川県", municipalities: ["厚木市", "大和市", "海老名市", "座間市", "綾瀬市", "愛川町", "清川村"], phone: "046-224-1111" },
  { prefecture: "神奈川県", municipalities: ["茅ヶ崎市", "秦野市", "伊勢原市", "寒川町", "大磯町", "二宮町"], phone: "0463-45-3150" },
  { prefecture: "神奈川県", municipalities: ["小田原市", "南足柄市", "中井町", "大井町", "松田町", "山北町", "開成町", "箱根町", "真鶴町", "湯河原町"], phone: "0465-32-8000" },

  // 埼玉県
  { prefecture: "埼玉県", municipalities: ["鴻巣市", "戸田市", "蕨市", "桶川市", "北本市", "伊奈町"], phone: "048-822-5199" },
  { prefecture: "埼玉県", municipalities: ["飯能市", "狭山市", "入間市", "志木市", "朝霞市", "和光市", "新座市", "富士見市", "ふじみ野市", "日高市", "三芳町"], phone: "049-244-1250" },
  { prefecture: "埼玉県", municipalities: ["東松山市", "坂戸市", "鶴ヶ島市", "川島町", "吉見町", "滑川町", "嵐山町", "小川町", "毛呂山町", "越生町", "鳩山町", "ときがわ町", "東秩父村"], phone: "0493-23-4050" },
  { prefecture: "埼玉県", municipalities: ["秩父市", "横瀬町", "皆野町", "長瀞町", "小鹿野町"], phone: "0494-23-1511" },
  { prefecture: "埼玉県", municipalities: ["本庄市", "深谷市", "美里町", "神川町", "上里町", "寄居町"], phone: "048-523-2800" },
  { prefecture: "埼玉県", municipalities: ["八潮市", "三郷市", "吉川市", "松伏町"], phone: "048-966-2311" },
  { prefecture: "埼玉県", municipalities: ["行田市", "加須市", "羽生市", "蓮田市", "幸手市", "白岡市", "宮代町", "杉戸町"], phone: "0480-34-4011" },
  { prefecture: "埼玉県", municipalities: ["さいたま市"], phone: "048-829-1330" },
  { prefecture: "埼玉県", municipalities: ["川越市"], phone: "049-224-8811" },
  { prefecture: "埼玉県", municipalities: ["川口市"], phone: "048-228-5389" },
  { prefecture: "埼玉県", municipalities: ["所沢市"], phone: "04-2998-9230" },
  { prefecture: "埼玉県", municipalities: ["越谷市"], phone: "048-963-9186" },
  { prefecture: "埼玉県", municipalities: ["春日部市"], phone: "048-736-1111" },
  { prefecture: "埼玉県", municipalities: ["熊谷市"], phone: "048-536-1521" },
  { prefecture: "埼玉県", municipalities: ["上尾市"], phone: "048-775-6940" },
  { prefecture: "埼玉県", municipalities: ["草加市"], phone: "048-922-1520" },
  { prefecture: "埼玉県", municipalities: ["久喜市"], phone: "0480-85-1111" },

  // 千葉県
  { prefecture: "千葉県", municipalities: ["千葉市"], phone: "043-245-5189" },
  { prefecture: "千葉県", municipalities: ["船橋市"], phone: "047-436-2453" },
  { prefecture: "千葉県", municipalities: ["柏市"], phone: "04-7167-1695" },
  { prefecture: "千葉県", municipalities: ["市川市", "松戸市", "野田市", "流山市", "我孫子市", "鎌ケ谷市"], phone: "047-361-4048" },
  { prefecture: "千葉県", municipalities: ["木更津市", "君津市", "富津市", "袖ケ浦市"], phone: "0438-23-1111" },
  { prefecture: "千葉県", municipalities: ["成田市", "佐倉市", "四街道市", "八街市", "印西市", "白井市", "酒々井町", "栄町"], phone: "043-483-1131" },
  { prefecture: "千葉県", municipalities: ["銚子市", "旭市", "匝瑳市", "香取市", "神崎町", "多古町", "東庄町"], phone: "0479-22-0206" },
  { prefecture: "千葉県", municipalities: ["館山市", "鴨川市", "南房総市", "鋸南町"], phone: "0470-22-8711" },
  { prefecture: "千葉県", municipalities: ["茂原市", "東金市", "勝浦市", "いすみ市", "大網白里市", "長生村", "白子町", "長柄町", "長南町", "御宿町", "大多喜町"], phone: "0475-24-1171" },

  // 栃木県
  { prefecture: "栃木県", municipalities: ["宇都宮市"], phone: "028-632-2420" },
  { prefecture: "栃木県", municipalities: ["鹿沼市", "日光市"], phone: "0288-23-1000" },
  { prefecture: "栃木県", municipalities: ["真岡市", "上三川町", "益子町", "茂木町", "市貝町", "芳賀町"], phone: "0285-81-9002" },
  { prefecture: "栃木県", municipalities: ["大田原市", "矢板市", "那須塩原市", "さくら市", "那須烏山市", "塩谷町", "高根沢町", "那須町", "那珂川町"], phone: "0287-22-2277" },
  { prefecture: "栃木県", municipalities: ["足利市", "佐野市"], phone: "0283-23-4445" },
  { prefecture: "栃木県", municipalities: ["栃木市", "小山市", "下野市", "壬生町", "野木町"], phone: "0285-22-4309" },

  // 茨城県
  { prefecture: "茨城県", municipalities: ["水戸市", "笠間市", "ひたちなか市", "那珂市", "小美玉市", "茨城町", "大洗町", "城里町", "東海村"], phone: "029-301-3044" },
  { prefecture: "茨城県", municipalities: ["日立市", "常陸太田市", "高萩市", "北茨城市", "常陸大宮市", "大子町"], phone: "0294-80-3355" },
  { prefecture: "茨城県", municipalities: ["鹿嶋市", "潮来市", "神栖市", "行方市", "鉾田市"], phone: "0291-33-6056" },
  { prefecture: "茨城県", municipalities: ["土浦市", "石岡市", "龍ケ崎市", "取手市", "牛久市", "つくば市", "守谷市", "稲敷市", "かすみがうら市", "つくばみらい市", "美浦村", "阿見町", "河内町", "利根町"], phone: "029-822-7048" },
  { prefecture: "茨城県", municipalities: ["古河市", "結城市", "下妻市", "常総市", "筑西市", "坂東市", "桜川市", "八千代町", "五霞町", "境町"], phone: "0296-24-9134" },

  // 群馬県
  { prefecture: "群馬県", municipalities: ["前橋市"], phone: "027-219-2021" },
  { prefecture: "群馬県", municipalities: ["高崎市", "安中市", "藤岡市", "富岡市", "神流町", "下仁田町", "南牧村", "甘楽町"], phone: "027-323-5530" },
  { prefecture: "群馬県", municipalities: ["中之条町", "長野原町", "嬬恋村", "草津町", "高山村", "東吾妻町"], phone: "0279-75-4611" },
  { prefecture: "群馬県", municipalities: ["沼田市", "片品村", "川場村", "昭和村", "みなかみ町"], phone: "0278-22-4481" },
  { prefecture: "群馬県", municipalities: ["太田市", "館林市", "桐生市", "みどり市", "板倉町", "明和町", "千代田町", "大泉町", "邑楽町"], phone: "0276-31-2517" },

  // 新潟県
  { prefecture: "新潟県", municipalities: ["新潟市"], phone: "025-226-1367" },
  { prefecture: "新潟県", municipalities: ["三条市", "燕市", "加茂市", "田上町", "弥彦村"], phone: "0256-36-2231" },
  { prefecture: "新潟県", municipalities: ["新発田市", "村上市", "阿賀野市", "胎内市", "聖籠町", "関川村", "粟島浦村"], phone: "0254-26-9047" },
  { prefecture: "新潟県", municipalities: ["長岡市", "柏崎市", "小千谷市", "見附市", "出雲崎町", "刈羽村"], phone: "0258-38-2533" },
  { prefecture: "新潟県", municipalities: ["南魚沼市", "魚沼市", "湯沢町"], phone: "025-772-8154" },
  { prefecture: "新潟県", municipalities: ["上越市", "妙高市", "糸魚川市"], phone: "025-524-4237" },
  { prefecture: "新潟県", municipalities: ["佐渡市"], phone: "" },

  // 山梨県
  { prefecture: "山梨県", municipalities: ["韮崎市", "南アルプス市", "北杜市", "甲斐市", "中央市", "昭和町"], phone: "0551-23-3090" },
  { prefecture: "山梨県", municipalities: ["山梨市", "笛吹市", "甲州市"], phone: "0553-20-2739" },
  { prefecture: "山梨県", municipalities: ["市川三郷町", "早川町", "身延町", "南部町", "富士川町"], phone: "055-240-4141" },
  { prefecture: "山梨県", municipalities: ["富士吉田市", "都留市", "大月市", "上野原市", "道志村", "西桂町", "忍野村", "山中湖村", "鳴沢村", "富士河口湖町", "小菅村", "丹波山村"], phone: "0554-45-7811" },
  { prefecture: "山梨県", municipalities: ["甲府市"], phone: "055-241-4312" },

  // 富山県
  { prefecture: "富山県", municipalities: ["富山市"], phone: "076-443-2086" },
  { prefecture: "富山県", municipalities: ["高岡市", "魚津市", "氷見市", "滑川市", "黒部市", "砺波市", "小矢部市", "南砺市", "射水市", "舟橋村", "上市町", "立山町", "入善町", "朝日町"], phone: "076-444-3145" },

  // 石川県
  { prefecture: "石川県", municipalities: ["小松市", "加賀市", "能美市", "川北町"], phone: "0761-22-0795" },
  { prefecture: "石川県", municipalities: ["かほく市", "白山市", "野々市市", "津幡町", "内灘町"], phone: "076-275-2642" },
  { prefecture: "石川県", municipalities: ["七尾市", "羽咋市", "志賀町", "宝達志水町", "中能登町"], phone: "0767-53-2482" },
  { prefecture: "石川県", municipalities: ["輪島市", "珠洲市", "穴水町", "能登町"], phone: "0768-22-2011" },
  { prefecture: "石川県", municipalities: ["金沢市"], phone: "076-220-2508" },

  // 福井県
  { prefecture: "福井県", municipalities: ["福井市"], phone: "0776-20-5398" },
  { prefecture: "福井県", municipalities: ["坂井市", "あわら市"], phone: "0776-73-0601" },
  { prefecture: "福井県", municipalities: ["大野市", "勝山市"], phone: "0779-66-8133" },
  { prefecture: "福井県", municipalities: ["鯖江市", "越前市", "池田町", "南越前町", "越前町"], phone: "0778-23-0456" },
  { prefecture: "福井県", municipalities: ["敦賀市", "美浜町", "若狭町"], phone: "0770-22-3747" },
  { prefecture: "福井県", municipalities: ["小浜市", "おおい町", "高浜町"], phone: "0770-52-1300" },

  // 岐阜県
  { prefecture: "岐阜県", municipalities: ["岐阜市"], phone: "058-214-2179" },
  { prefecture: "岐阜県", municipalities: ["大垣市", "海津市", "養老町", "垂井町", "関ケ原町", "神戸町", "輪之内町", "安八町"], phone: "0584-73-1111" },
  { prefecture: "岐阜県", municipalities: ["関市", "美濃市", "郡上市"], phone: "0575-33-4011" },
  { prefecture: "岐阜県", municipalities: ["美濃加茂市", "可児市", "加茂郡"], phone: "0574-25-3111" },
  { prefecture: "岐阜県", municipalities: ["多治見市", "土岐市", "瑞浪市"], phone: "0572-23-1111" },
  { prefecture: "岐阜県", municipalities: ["中津川市", "恵那市"], phone: "0573-26-1111" },
  { prefecture: "岐阜県", municipalities: ["高山市", "飛騨市", "下呂市", "白川村"], phone: "0577-33-1111" },

  // 静岡県
  { prefecture: "静岡県", municipalities: ["静岡市"], phone: "054-221-1350" },
  { prefecture: "静岡県", municipalities: ["浜松市"], phone: "053-453-6145" },
  { prefecture: "静岡県", municipalities: ["沼津市", "三島市", "御殿場市", "裾野市", "伊豆市", "伊豆の国市", "函南町", "清水町", "長泉町", "小山町"], phone: "055-920-2100" },
  { prefecture: "静岡県", municipalities: ["富士市", "富士宮市"], phone: "0545-65-2730" },
  { prefecture: "静岡県", municipalities: ["焼津市", "藤枝市", "島田市", "牧之原市", "吉田町", "川根本町"], phone: "054-644-1111" },
  { prefecture: "静岡県", municipalities: ["掛川市", "菊川市", "御前崎市"], phone: "0537-22-2111" },
  { prefecture: "静岡県", municipalities: ["磐田市", "袋井市", "湖西市", "森町"], phone: "0538-37-2702" },
  { prefecture: "静岡県", municipalities: ["下田市", "東伊豆町", "河津町", "南伊豆町", "西伊豆町", "松崎町"], phone: "0558-24-2055" },

  // 愛知県
  { prefecture: "愛知県", municipalities: ["名古屋市"], phone: "052-972-2675" },
  { prefecture: "愛知県", municipalities: ["豊橋市"], phone: "0532-51-2399" },
  { prefecture: "愛知県", municipalities: ["岡崎市"], phone: "0564-23-6194" },
  { prefecture: "愛知県", municipalities: ["豊田市"], phone: "0565-34-6628" },
  { prefecture: "愛知県", municipalities: ["一宮市", "瀬戸市", "半田市", "春日井市", "豊川市", "津島市", "碧南市", "刈谷市", "安城市", "西尾市", "蒲郡市", "犬山市", "常滑市", "江南市", "小牧市", "稲沢市", "新城市", "東海市", "大府市", "知多市", "知立市", "尾張旭市", "高浜市", "岩倉市", "豊明市", "日進市", "田原市", "愛西市", "清須市", "北名古屋市", "弥富市", "みよし市", "あま市", "長久手市", "東郷町", "豊山町", "大口町", "扶桑町", "大治町", "蟹江町", "飛島村", "阿久比町", "東浦町", "南知多町", "美浜町", "武豊町", "幸田町", "設楽町", "東栄町", "豊根村"], phone: "052-954-6219" },

  // 三重県
  { prefecture: "三重県", municipalities: ["津市", "四日市市", "伊勢市", "松阪市", "桑名市", "鈴鹿市", "名張市", "尾鷲市", "亀山市", "鳥羽市", "熊野市", "いなべ市", "志摩市", "伊賀市", "桑名郡", "員弁郡", "三重郡", "多気郡", "度会郡", "北牟婁郡", "南牟婁郡"], phone: "059-224-2380" },

  // 滋賀県
  { prefecture: "滋賀県", municipalities: ["大津市"], phone: "077-528-2762" },
  { prefecture: "滋賀県", municipalities: ["彦根市", "長浜市", "米原市"], phone: "0749-27-2255" },
  { prefecture: "滋賀県", municipalities: ["近江八幡市", "東近江市", "日野町", "竜王町"], phone: "0748-22-7754" },
  { prefecture: "滋賀県", municipalities: ["草津市", "守山市", "栗東市", "野洲市"], phone: "077-567-5444" },
  { prefecture: "滋賀県", municipalities: ["甲賀市", "湖南市"], phone: "0748-63-6114" },
  { prefecture: "滋賀県", municipalities: ["高島市"], phone: "0740-22-6066" },

  // 京都府
  { prefecture: "京都府", municipalities: ["京都市"], phone: "075-222-3953" },
  { prefecture: "京都府", municipalities: ["宇治市", "城陽市", "八幡市", "京田辺市", "木津川市", "久御山町", "井手町", "宇治田原町", "精華町", "笠置町", "和束町", "南山城村"], phone: "0774-21-2911" },
  { prefecture: "京都府", municipalities: ["亀岡市", "南丹市", "京丹波町"], phone: "0771-62-4754" },
  { prefecture: "京都府", municipalities: ["福知山市", "舞鶴市", "綾部市"], phone: "0773-22-6382" },
  { prefecture: "京都府", municipalities: ["宮津市", "京丹後市", "伊根町", "与謝野町"], phone: "0772-62-4304" },

  // 大阪府
  { prefecture: "大阪府", municipalities: ["大阪市"], phone: "06-6615-7984" },
  { prefecture: "大阪府", municipalities: ["堺市"], phone: "072-228-7474" },
  { prefecture: "大阪府", municipalities: ["豊中市", "池田市", "箕面市", "豊能町", "能勢町"], phone: "06-6841-3049" },
  { prefecture: "大阪府", municipalities: ["吹田市", "高槻市", "茨木市", "摂津市", "島本町"], phone: "072-620-6706" },
  { prefecture: "大阪府", municipalities: ["枚方市", "寝屋川市", "交野市"], phone: "072-844-1331" },
  { prefecture: "大阪府", municipalities: ["守口市", "門真市", "大東市", "四條畷市"], phone: "06-6902-0590" },
  { prefecture: "大阪府", municipalities: ["八尾市", "柏原市", "東大阪市"], phone: "072-994-1515" },
  { prefecture: "大阪府", municipalities: ["富田林市", "河内長野市", "松原市", "羽曳野市", "藤井寺市", "大阪狭山市", "太子町", "河南町", "千早赤阪村"], phone: "0721-23-2681" },
  { prefecture: "大阪府", municipalities: ["岸和田市", "泉大津市", "貝塚市", "泉佐野市", "和泉市", "高石市", "泉南市", "阪南市", "忠岡町", "熊取町", "田尻町", "岬町"], phone: "072-439-3601" },

  // 兵庫県
  { prefecture: "兵庫県", municipalities: ["神戸市"], phone: "078-322-5285" },
  { prefecture: "兵庫県", municipalities: ["姫路市"], phone: "079-221-2464" },
  { prefecture: "兵庫県", municipalities: ["尼崎市"], phone: "06-6489-6305" },
  { prefecture: "兵庫県", municipalities: ["西宮市"], phone: "0798-35-3818" },
  { prefecture: "兵庫県", municipalities: ["芦屋市"], phone: "0797-38-2051" },
  { prefecture: "兵庫県", municipalities: ["伊丹市", "宝塚市", "川西市", "三田市", "猪名川町"], phone: "072-785-7464" },
  { prefecture: "兵庫県", municipalities: ["明石市", "加古川市", "高砂市", "稲美町", "播磨町"], phone: "078-912-2323" },
  { prefecture: "兵庫県", municipalities: ["西脇市", "三木市", "小野市", "加西市", "加東市", "多可町"], phone: "0795-22-3111" },
  { prefecture: "兵庫県", municipalities: ["豊岡市", "養父市", "朝来市", "香美町", "新温泉町"], phone: "0796-26-3660" },
  { prefecture: "兵庫県", municipalities: ["丹波篠山市", "丹波市"], phone: "0795-73-3760" },
  { prefecture: "兵庫県", municipalities: ["洲本市", "南あわじ市", "淡路市"], phone: "0799-26-2062" },

  // 奈良県
  { prefecture: "奈良県", municipalities: ["奈良市"], phone: "0742-34-4591" },
  { prefecture: "奈良県", municipalities: ["大和高田市", "大和郡山市", "天理市", "橿原市", "桜井市", "御所市", "生駒市", "香芝市", "葛城市", "宇陀市", "山添村", "平群町", "三郷町", "斑鳩町", "安堵町", "川西町", "三宅町", "田原本町", "高取町", "明日香村", "上牧町", "王寺町", "広陵町", "河合町", "吉野町", "大淀町", "下市町", "黒滝村", "天川村", "野迫川村", "十津川村", "下北山村", "上北山村", "川上村", "東吉野村"], phone: "0742-27-8734" },

  // 和歌山県
  { prefecture: "和歌山県", municipalities: ["和歌山市"], phone: "073-435-1185" },
  { prefecture: "和歌山県", municipalities: ["海南市", "紀美野町"], phone: "073-441-2670" },
  { prefecture: "和歌山県", municipalities: ["橋本市", "かつらぎ町", "九度山町", "高野町"], phone: "0736-33-4923" },
  { prefecture: "和歌山県", municipalities: ["有田市", "湯浅町", "広川町", "有田川町"], phone: "0737-64-1293" },
  { prefecture: "和歌山県", municipalities: ["御坊市", "美浜町", "日高町", "由良町", "印南町", "みなべ町", "日高川町"], phone: "0738-22-3481" },
  { prefecture: "和歌山県", municipalities: ["田辺市", "白浜町", "上富田町", "すさみ町"], phone: "0739-26-7934" },
  { prefecture: "和歌山県", municipalities: ["新宮市", "那智勝浦町", "太地町", "古座川町", "北山村", "串本町"], phone: "0735-21-9631" },

  // 鳥取県
  { prefecture: "鳥取県", municipalities: ["鳥取市", "岩美町", "若桜町", "智頭町", "八頭町"], phone: "0857-20-3674" },
  { prefecture: "鳥取県", municipalities: ["米子市", "境港市", "日吉津村", "大山町", "南部町", "伯耆町", "日南町", "日野町", "江府町"], phone: "0859-31-9627" },
  { prefecture: "鳥取県", municipalities: ["倉吉市", "三朝町", "湯梨浜町", "琴浦町", "北栄町"], phone: "0858-23-3149" },

  // 島根県
  { prefecture: "島根県", municipalities: ["松江市", "安来市"], phone: "0852-32-5911" },
  { prefecture: "島根県", municipalities: ["出雲市", "雲南市", "奥出雲町", "飯南町"], phone: "0853-30-5503" },
  { prefecture: "島根県", municipalities: ["浜田市", "江津市", "川本町", "美郷町", "邑南町"], phone: "0855-29-5533" },
  { prefecture: "島根県", municipalities: ["益田市", "津和野町", "吉賀町"], phone: "0856-31-9551" },
  { prefecture: "島根県", municipalities: ["隠岐の島町", "海士町", "西ノ島町", "知夫村"], phone: "08512-2-9710" },

  // 岡山県
  { prefecture: "岡山県", municipalities: ["岡山市"], phone: "086-803-1282" },
  { prefecture: "岡山県", municipalities: ["倉敷市"], phone: "086-426-3394" },
  { prefecture: "岡山県", municipalities: ["津山市", "美作市", "鏡野町", "勝央町", "奈義町", "西粟倉村", "久米南町", "美咲町"], phone: "0868-23-1263" },
  { prefecture: "岡山県", municipalities: ["玉野市", "笠岡市", "井原市", "総社市", "高梁市", "新見市", "備前市", "瀬戸内市", "赤磐市", "浅口市", "和気町", "早島町", "里庄町", "矢掛町", "吉備中央町"], phone: "086-224-2111" },

  // 広島県
  { prefecture: "広島県", municipalities: ["広島市"], phone: "082-504-2187" },
  { prefecture: "広島県", municipalities: ["呉市"], phone: "0823-25-3551" },
  { prefecture: "広島県", municipalities: ["福山市"], phone: "084-928-1072" },
  { prefecture: "広島県", municipalities: ["三原市", "尾道市", "府中市", "世羅町", "神石高原町"], phone: "0848-25-2011" },
  { prefecture: "広島県", municipalities: ["東広島市", "竹原市", "大崎上島町"], phone: "082-422-6911" },
  { prefecture: "広島県", municipalities: ["三次市", "庄原市", "安芸高田市", "北広島町", "安芸太田町"], phone: "0824-63-5181" },

  // 山口県
  { prefecture: "山口県", municipalities: ["下関市"], phone: "083-252-7152" },
  { prefecture: "山口県", municipalities: ["宇部市", "山陽小野田市"], phone: "0836-31-4111" },
  { prefecture: "山口県", municipalities: ["山口市", "防府市"], phone: "083-933-3030" },
  { prefecture: "山口県", municipalities: ["周南市", "下松市", "光市"], phone: "0834-33-6422" },
  { prefecture: "山口県", municipalities: ["岩国市", "和木町"], phone: "0827-29-1523" },
  { prefecture: "山口県", municipalities: ["萩市", "長門市", "美祢市", "阿武町"], phone: "0838-25-3131" },

  // 徳島県
  { prefecture: "徳島県", municipalities: ["徳島市"], phone: "088-621-5217" },
  { prefecture: "徳島県", municipalities: ["鳴門市", "小松島市", "勝浦町", "上勝町", "佐那河内村", "石井町", "神山町", "松茂町", "北島町", "藍住町", "板野町", "上板町"], phone: "088-602-8907" },
  { prefecture: "徳島県", municipalities: ["阿南市", "那賀町"], phone: "0884-24-4181" },
  { prefecture: "徳島県", municipalities: ["美馬市", "三好市", "つるぎ町", "東みよし町"], phone: "0883-53-2063" },

  // 香川県
  { prefecture: "香川県", municipalities: ["高松市"], phone: "087-839-2381" },
  { prefecture: "香川県", municipalities: ["丸亀市", "坂出市", "善通寺市", "宇多津町", "綾川町"], phone: "0877-24-9966" },
  { prefecture: "香川県", municipalities: ["観音寺市", "三豊市"], phone: "0875-25-4384" },
  { prefecture: "香川県", municipalities: ["さぬき市", "東かがわ市", "三木町", "直島町", "小豆島町", "土庄町"], phone: "087-831-1111" },

  // 愛媛県
  { prefecture: "愛媛県", municipalities: ["松山市"], phone: "089-948-6434" },
  { prefecture: "愛媛県", municipalities: ["今治市", "新居浜市", "西条市", "四国中央市", "上島町"], phone: "0897-56-1300" },
  { prefecture: "愛媛県", municipalities: ["宇和島市", "八幡浜市", "大洲市", "西予市", "内子町", "伊方町", "松野町", "鬼北町", "愛南町"], phone: "0895-22-5211" },

  // 高知県
  { prefecture: "高知県", municipalities: ["高知市"], phone: "088-823-9471" },
  { prefecture: "高知県", municipalities: ["室戸市", "安芸市", "南国市", "香南市", "香美市", "東洋町", "奈半利町", "田野町", "安田町", "北川村", "馬路村", "芸西村"], phone: "0887-35-5972" },
  { prefecture: "高知県", municipalities: ["土佐市", "須崎市", "いの町", "仁淀川町", "佐川町", "越知町", "日高村", "津野町", "四万十町"], phone: "0889-42-1875" },
  { prefecture: "高知県", municipalities: ["四万十市", "宿毛市", "土佐清水市", "大月町", "三原村", "黒潮町"], phone: "0880-34-5111" },

  // 福岡県
  { prefecture: "福岡県", municipalities: ["北九州市"], phone: "093-582-2175" },
  { prefecture: "福岡県", municipalities: ["福岡市"], phone: "092-711-4300" },
  { prefecture: "福岡県", municipalities: ["久留米市"], phone: "0942-30-9146" },
  { prefecture: "福岡県", municipalities: ["大牟田市", "柳川市", "八女市", "筑後市", "大川市", "みやま市", "大木町"], phone: "0944-41-2735" },
  { prefecture: "福岡県", municipalities: ["直方市", "飯塚市", "田川市", "宮若市", "嘉麻市", "小竹町", "鞍手町", "桂川町", "香春町", "添田町", "糸田町", "川崎町", "大任町", "赤村", "福智町"], phone: "0948-21-4812" },
  { prefecture: "福岡県", municipalities: ["行橋市", "豊前市", "苅田町", "みやこ町", "吉富町", "上毛町", "築上町"], phone: "0930-23-0380" },
  { prefecture: "福岡県", municipalities: ["筑紫野市", "春日市", "大野城市", "太宰府市", "那珂川市", "宇美町", "篠栗町", "志免町", "須恵町", "新宮町", "久山町", "粕屋町"], phone: "092-735-5111" },
  { prefecture: "福岡県", municipalities: ["宗像市", "古賀市", "福津市"], phone: "0940-36-2475" },
  { prefecture: "福岡県", municipalities: ["朝倉市", "筑前町", "東峰村"], phone: "0946-22-4185" },

  // 佐賀県
  { prefecture: "佐賀県", municipalities: ["佐賀市", "多久市", "小城市", "神埼市", "吉野ヶ里町"], phone: "0952-30-1907" },
  { prefecture: "佐賀県", municipalities: ["唐津市", "玄海町"], phone: "0955-73-4185" },
  { prefecture: "佐賀県", municipalities: ["鳥栖市", "基山町", "みやき町", "上峰町"], phone: "0942-83-6820" },
  { prefecture: "佐賀県", municipalities: ["伊万里市", "有田町"], phone: "0955-23-2101" },
  { prefecture: "佐賀県", municipalities: ["武雄市", "鹿島市", "嬉野市", "大町町", "江北町", "白石町", "太良町"], phone: "0954-22-2101" },

  // 長崎県
  { prefecture: "長崎県", municipalities: ["長崎市"], phone: "095-829-1156" },
  { prefecture: "長崎県", municipalities: ["佐世保市"], phone: "0956-26-1787" },
  { prefecture: "長崎県", municipalities: ["島原市", "雲仙市", "南島原市"], phone: "0957-62-3289" },
  { prefecture: "長崎県", municipalities: ["諫早市", "大村市"], phone: "0957-22-1500" },
  { prefecture: "長崎県", municipalities: ["平戸市", "松浦市", "佐々町"], phone: "0950-23-3933" },
  { prefecture: "長崎県", municipalities: ["壱岐市", "対馬市", "新上五島町", "小値賀町"], phone: "0920-52-1311" },

  // 熊本県
  { prefecture: "熊本県", municipalities: ["熊本市"], phone: "096-328-2489" },
  { prefecture: "熊本県", municipalities: ["八代市", "人吉市", "水俣市", "宇土市", "上天草市", "宇城市", "美里町", "氷川町", "芦北町", "津奈木町", "錦町", "多良木町", "湯前町", "水上村", "相良村", "五木村", "山江村", "球磨村", "あさぎり町"], phone: "0965-33-3198" },
  { prefecture: "熊本県", municipalities: ["荒尾市", "玉名市", "玉東町", "南関町", "長洲町", "和水町"], phone: "0968-25-4271" },
  { prefecture: "熊本県", municipalities: ["山鹿市", "菊池市", "合志市", "大津町", "菊陽町"], phone: "0968-25-4271" },
  { prefecture: "熊本県", municipalities: ["阿蘇市", "南小国町", "小国町", "産山村", "高森町", "西原村", "南阿蘇村"], phone: "0967-22-3865" },
  { prefecture: "熊本県", municipalities: ["天草市", "苓北町"], phone: "0969-23-0172" },

  // 大分県
  { prefecture: "大分県", municipalities: ["大分市"], phone: "097-537-5758" },
  { prefecture: "大分県", municipalities: ["別府市", "杵築市", "国東市", "日出町"], phone: "0978-72-0858" },
  { prefecture: "大分県", municipalities: ["中津市", "豊後高田市", "宇佐市"], phone: "0979-22-2210" },
  { prefecture: "大分県", municipalities: ["日田市", "玖珠町", "九重町"], phone: "0973-23-3131" },
  { prefecture: "大分県", municipalities: ["佐伯市", "臼杵市", "津久見市", "豊後大野市", "竹田市"], phone: "0972-22-0562" },

  // 宮崎県
  { prefecture: "宮崎県", municipalities: ["宮崎市"], phone: "0985-21-1762" },
  { prefecture: "宮崎県", municipalities: ["都城市", "三股町"], phone: "0986-23-4518" },
  { prefecture: "宮崎県", municipalities: ["延岡市", "日向市", "門川町", "美郷町", "諸塚村", "椎葉村"], phone: "0982-33-5373" },
  { prefecture: "宮崎県", municipalities: ["日南市", "串間市"], phone: "0987-23-3141" },
  { prefecture: "宮崎県", municipalities: ["小林市", "えびの市", "高原町"], phone: "0984-23-3111" },
  { prefecture: "宮崎県", municipalities: ["西都市", "高鍋町", "新富町", "西米良村", "木城町", "川南町", "都農町"], phone: "0983-23-3171" },

  // 鹿児島県
  { prefecture: "鹿児島県", municipalities: ["鹿児島市"], phone: "099-216-1296" },
  { prefecture: "鹿児島県", municipalities: ["鹿屋市", "垂水市", "志布志市", "大崎町", "東串良町", "錦江町", "南大隅町", "肝付町"], phone: "0994-52-2111" },
  { prefecture: "鹿児島県", municipalities: ["薩摩川内市", "いちき串木野市", "阿久根市", "出水市", "長島町"], phone: "0996-23-5111" },
  { prefecture: "鹿児島県", municipalities: ["霧島市", "姶良市", "湧水町"], phone: "0995-44-5111" },
  { prefecture: "鹿児島県", municipalities: ["南さつま市", "枕崎市", "南九州市"], phone: "0993-52-2111" },
  { prefecture: "鹿児島県", municipalities: ["奄美市", "大和村", "宇検村", "瀬戸内町", "龍郷町", "喜界町", "徳之島町", "天城町", "伊仙町", "和泊町", "知名町", "与論町"], phone: "0997-52-5411" },
  { prefecture: "鹿児島県", municipalities: ["西之表市", "中種子町", "南種子町", "屋久島町"], phone: "0997-22-1111" },

  // 沖縄県
  { prefecture: "沖縄県", municipalities: ["那覇市"], phone: "098-951-3213" },
  { prefecture: "沖縄県", municipalities: ["沖縄市", "うるま市", "宜野湾市", "浦添市", "豊見城市", "糸満市", "南城市", "読谷村", "嘉手納町", "北谷町", "北中城村", "中城村", "西原町", "与那原町", "南風原町", "八重瀬町"], phone: "098-945-2686" },
  { prefecture: "沖縄県", municipalities: ["名護市", "国頭村", "大宜味村", "東村", "今帰仁村", "本部町", "恩納村", "宜野座村", "金武町", "伊江村"], phone: "0980-52-2636" },
  { prefecture: "沖縄県", municipalities: ["宮古島市", "多良間村"], phone: "0980-72-3501" },
  { prefecture: "沖縄県", municipalities: ["石垣市", "竹富町", "与那国町"], phone: "0980-82-1285" },
]

// 都道府県リスト
export const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
]

// 都道府県ごとの市区町村リストを生成
export function getMunicipalitiesByPrefecture(prefecture: string): string[] {
  const entries = phoneData.filter(e => e.prefecture === prefecture)
  const allMunicipalities: string[] = []
  for (const entry of entries) {
    for (const m of entry.municipalities) {
      if (!allMunicipalities.includes(m)) {
        allMunicipalities.push(m)
      }
    }
  }
  return allMunicipalities.sort()
}

// 市区町村名から電話番号を検索
export function searchByMunicipality(query: string): PhoneEntry[] {
  if (!query) return []
  const q = query.trim()
  return phoneData.filter(entry =>
    entry.municipalities.some(m => m.includes(q) || q.includes(m))
  )
}
