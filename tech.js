const indicatorsData = [
    // --- 主圖指標 ---
    {
        category: "🔥 主圖指標",
        title: "MA (Moving Average / 移動平均線)",
        official: "將特定時間段內的股票收盤價相加後平均，所畫出來的一條平滑曲線。常見的有5天線（週線）、20天線（月線）等。",
        metaphor: "就像<b>「毛毛蟲爬過留下的黏液足跡」</b>。股票價格每天上跳下竄像隻過動的小猴子，MA線能幫你看出這隻小猴子過去一段時間平均都在哪個高度爬行，才不會被它一瞬間的亂跳給騙了。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>當價格在 MA 線上方：</b> 代表毛毛蟲正在往山坡上爬（多頭趨勢），是安全的信號。</li><li style='margin-top: 8px;'><b>當價格跌破 MA 線：</b> 代表毛毛蟲腳滑摔下來了（空頭趨勢），可能要開始下山囉。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "EMA (Exponential Moving Average / 指數移動平均線)",
        official: "一種改良版的移動平均線。它在計算平均值時，賦予「越靠近現在的日期」更高的權重，因此反應比傳統 MA 更敏銳。",
        metaphor: "這是一條<b>「記憶力比較好、比較在乎今天發生什麼事」</b>的毛毛蟲。普通的 MA 把一個月前和今天發生的事看得一樣重；但 EMA 覺得今天的價格最重要，所以只要今天股價一變，它轉彎的速度比誰都快！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>適合短線交易：</b> 因為反應極快，當 EMA 開始拐頭向上或向下時，通常暗示著極短期的爆發性新趨勢正在出現。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "BOLL (Bollinger Bands / 布林通道)",
        official: "由三條線組成的帶狀通道。中間是移動平均線（中軌），上下兩條線（上軌與下軌）是根據價格標準差計算出的壓力與支撐範圍。統計學上價格有 95% 的機率會在通道內波動。",
        metaphor: "就像是一條<b>「會充氣收縮的彈力橡膠水管」</b>。股價是一顆在水管裡面彈來彈去的小皮球。當球快要撞到水管頂端（上軌）時，通常會被彈回來；撞到水管底（下軌）時也會被彈起來。如果水管突然變得很窄，代表小皮球快要大暴衝了！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>撞到上軌：</b> 代表買得太瘋狂了（超買區），價格可能準備回檔彈回中間。</li><li style='margin-top: 8px;'><b>撞到下軌：</b> 代表賣得太過頭了（超賣區），價格可能準備止跌反彈。</li><li style='margin-top: 8px;'><b>通道突然變窄：</b> 代表市場正在憋大招，隨後通常會迎來一波劇烈的暴漲或暴跌。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "SAR (Stop and Reverse / 拋物線轉向指標)",
        official: "又稱停損轉向操作點。在圖表上表現為點狀線，點在價格下方代表上升趨勢，點在價格上方代表下跌趨勢。當價格碰觸到點時即為轉折訊號。",
        metaphor: "就像是跟在小精靈屁股後面的<b>「隱形安全氣墊」</b>。當小精靈一直往上爬，氣墊就會在下面死死跟著，保護他不掉下來；如果小精靈哪天不小心踩到了這個氣墊，氣墊就會瞬間「啪」一聲跑到他的頭頂上，變成防撞安全帽，提醒他現在換成下坡囉！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>點點在股價下方：</b> 安全期！代表趨勢向上，可以繼續抱著股票。</li><li style='margin-top: 8px;'><b>點點跑到股價上方：</b> 警告！代表趨勢轉向變差，通常是提醒你該賣出停損的最後防線。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "KC (Keltner Channel / 肯特納通道)",
        official: "以指數移動平均線（EMA）為中軌，並結合平均真實波幅（ATR）來設定上下軌幅度的波動通道指標。與布林通道類似，但邊界線條更平滑。",
        metaphor: "這是一條<b>「畫在高速公路上的賽車跑道線」</b>。相較於布林通道那種容易大肚子或縮水的橡膠管，KC 通道更像水泥畫的標準跑道。賽車（股價）平常都在跑道裡安穩行駛，可是一旦賽車強行衝出跑道外，就代表車速已經快到失控了！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>股價衝破上軌：</b> 代表超級強勢！這不是過熱，而是賽車啟用了氮氣加速，通常會順著方向繼續狂飆。</li><li style='margin-top: 8px;'><b>股價跌破下軌：</b> 代表走勢極度虛弱，車子已經翻出護欄，不要隨便去接。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "壹目均衡表 (Ichimoku Cloud)",
        official: "源自日本的一套全方位指標，由五條不同週期的線組合而成，中間交織出的陰影區域稱為「雲區 (Cloud)」，用來判斷未來的多空與支撐。",
        metaphor: "這是一本超厲害的<b>「多功能天氣預報圖」</b>。圖表上會畫出一大片花花綠綠的「雲朵」。如果股價爬到了雲朵的上面，代表現在是萬里無雲的晴天，可以安心出去玩；如果股價掉進雲朵裡或是雲朵下方，代表進入了狂風暴雨的大陰天，非常容易迷路摔倒。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>股價在雲區上方：</b> 大吉！雲層會變成強力的地板（支撐），掉下來也會被雲接住。</li><li style='margin-top: 8px;'><b>股價在雲區下方：</b> 大凶！雲層會變成厚厚的天花板（壓力），很難彈上去。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "VWAP (Volume Weighted Average Price / 成交量加權平均價)",
        official: "將某一段時間內的總成交金額除以總成交量得出的平均價格。它是大資金和法人機構用來評估自己買入成本是否合理的關鍵指標。",
        metaphor: "這是全班同學今天一起投票選出來的<b>「絕對公平正義價」</b>。因為它把大戶花大錢買的股份權重算得更重。如果現在的價格比這條線還要低，就代表你撿到了便宜，買得比今天市場上的大老闆們還要划算！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>股價在 VWAP 線之上：</b> 說明今天的買盤非常強勁，大家願意溢價搶貨，市場情緒樂觀。</li><li style='margin-top: 8px;'><b>股價在 VWAP 線之下：</b> 說明今天市場很弱，價格被壓在平均成本以下，屬於弱勢。</li></ul>"
    },
    {
        category: "🔥 主圖指標",
        title: "神奇九轉 (TD Sequential / 趨勢反轉計數器)",
        official: "一種用來尋找趨勢衰竭點和反轉點的計數指標。當價格連續符合特定條件時會觸發數字標記，連續數到「9」時，通常暗示當前趨勢已經到了極限，即將迎來變盤。",
        metaphor: "這是一個<b>「大野狼抓小豬的倒數計時器」</b>。當股價一直漲、一直漲，計時器就會在畫面上打出 1、2、3... 一直數到 9。當數到 9 的那一刻，就代表大野狼氣喘吁吁已經沒力氣再追了，小豬（股價）隨時準備轉身反擊，往反方向跑！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>畫面上出現綠色的「9」：</b> 代表已經連續跌過頭了，彈藥用盡，通常是準備「見底反彈」的買進訊號。</li><li style='margin-top: 8px;'><b>畫面上出現紅色的「9」：</b> 代表已經連續漲得太誇張，多頭沒力了，通常是準備「見頂回落」的危險訊號。</li></ul>"
    },

    // --- 副圖指標 ---
    {
        category: "📊 副圖指標",
        title: "Volume (成交量)",
        official: "在特定的交易時間內，市場上成功撮合買賣的股票總手數或股數。",
        metaphor: "就像是操場演唱會上<b>「台下觀眾拍手鼓掌的尖叫聲多大聲」</b>。台上的歌手（股價）唱得再好聽，如果台下根本沒人拍手（成交量極小），那就只是在假嗨；但如果拍手聲大到震耳欲聾（爆大量），代表全場焦點都在這裡！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>價漲量增：</b> 最健康的狀態！代表大家一邊拍手鼓掌一邊看著股價往上衝，後面很有後勁。</li><li style='margin-top: 8px;'><b>價漲量縮：</b> 虛胖警告！股價雖然在漲，但台下觀眾都走光了沒人在拍手，隨時可能摔下來。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "MACD (Moving Average Convergence Divergence / 指數平滑異同移動平均線)",
        official: "利用兩條不同速度的快慢指數移動平均線（EMA）來計算兩者的差額（DIF），並搭配一條訊號線（DEA）與紅綠柱狀圖（Histogram）來判斷買賣時機與動能強度。",
        metaphor: "這是一台<b>「安裝在汽車地板上的終極油門探測器」</b>。它有一條零度水平線（零軸）。當開車的人踩下油門暴衝時，雷達就會噴出長長的紅柱子；當踩下煞車減速時，就會換成綠柱子。它可以讓你在車子還沒完全停下來之前，就知道司機有沒有在偷偷踩煞車。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>黃金交叉（快線向上穿過慢線）：</b> 司機大腳踩油門！車子要加速前進了，適合買進.</li><li style='margin-top: 8px;'><b>死亡交叉（快線向下穿過慢線）：</b> 司機鬆開油門踩煞車！車子要減速甚至倒車了，適合賣出。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "KDJ (Stochastic Oscillator / 隨機指標)",
        official: "透過計算特定週期內的最高價、最低價及最後收盤價的比例關係，得出 K 線、D 線和 J 線，是一檔對價格波動非常敏銳的短線超買超賣指標。",
        metaphor: "就像是一隻<b>「被鬆緊帶牽著在主人前面跑的調皮小狗」</b>。小狗（J線）總是跑得最快最前面，主人（K線和D線）在後面慢慢走。當小狗興奮地往前衝得太遠，鬆緊帶拉得太緊時，小狗遲早會被狠狠地彈回主人身邊。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>數值大於 80：</b> 小狗跑太遠啦！市場太過興奮（超買），小心隨時被彈回來摔倒。</li><li style='margin-top: 8px;'><b>數值小於 20：</b> 小狗落後太多啦！市場太過悲觀（超賣），隨時可能會往前跳反彈。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "ARBR (Attractiveness and Buying Ratio / 人氣意願指標)",
        official: "由 AR（人氣指標，以上限開盤價的強弱來推算買賣氣勢）與 BR（意願指標，以昨天的收盤價為基礎來反射市場情緒）組成的指標組合。",
        metaphor: "這是一個<b>「追星俱樂部的粉絲瘋狂度量表」</b>。AR 告訴你今天有多少粉絲「起大早去排隊買周邊商品」（人氣足不足）；BR 則告訴你這些粉絲「昨晚回家後在網路上討論得有多興奮」（明天想不想繼續買）。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>AR 和 BR 一起衝得非常高：</b> 粉絲們已經追星追到失去理智了！通常代表行情熱到快見頂了，要小心。</li><li style='margin-top: 8px;'><b>兩者跌到極低谷：</b> 演唱會門可羅雀，大家都熱情熄滅，這時候反而往往是默默進場撿便宜的時機。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "CR (Energy Indicator / 能量指標)",
        official: "類似於 BR 指標，但它是以每交易日的「中間價」作為基礎來計算多空雙方積累的能量強度，主要用來捕捉股價的神秘支撐點與壓力點。",
        metaphor: "這是股票的<b>「隱形電池電量百分比」</b>。有時候你看外表股價好像沒有動，但 CR 指標就像檢查電池內部一樣，能看出裡面的「多頭電力」是不是正在悄悄充飽。只要電力充足，就算股價現在躺著，遲早也會充飽電噴射出去！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>CR 指標先於股價開始往上爬：</b> 偷偷充電中！暗示雖然價格還沒漲，但底部的買盤能量已經成形，可能即將發動攻擊。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "DMA (Difference of Moving Average / 平行線差指標)",
        official: "計算兩條不同週期的移動平均線之間的差值，並對該差值再做一次平均所得出的趨勢轉折指標。作用類似 MACD，但計算較為簡化直接。",
        metaphor: "這是<b>「龜兔賽跑的距離觀測儀」</b>。它觀察一隻跑得快的兔子（短期均線）和一隻走得慢的烏龜（長期均線）。當兔子跟烏龜的距離越拉越遠，代表兔子跑得正嗨；當兔子突然停下來等烏龜，甚至回頭找烏龜時，就知道趨勢要變了。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>DMA 線由下往上穿過 AMA 線：</b> 兔子重新振作往前暴衝！為買進訊號。</li><li style='margin-top: 8px;'><b>由上往下穿過：</b> 兔子跑累了開始往回倒退，為賣出訊號。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "EMV (Ease of Movement / 簡易波動指標)",
        official: "將價格的變動幅度與成交量結合考量，用來觀察市場價格在外來資金推動下，移動起來是「輕鬆」還是「吃力」。",
        metaphor: "這是在測試<b>「這檔股票今天是在柏油路上跑步，還是在厚泥巴裡散步」</b>。如果今天只用了小小的拍手聲（小成交量），股價就輕輕鬆鬆往上跳了一大截，EMV 就會高高噴起，代表前方暢通無阻！反之如果大家拍破了手掌股價卻動都不動，代表前方全是爛泥巴。",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>EMV 數值大於 0 且很高：</b> 代表多頭開車在高速公路上，完全沒有阻力，股價非常容易繼續往上衝。</li><li style='margin-top: 8px;'><b>EMV 跌破 0 且很低：</b> 代表下跌非常輕鬆，賣壓在順風滑行，千萬不要用手去擋。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "RSI (Relative Strength Index / 相對強弱指標)",
        official: "藉由比較一段時間內「股價上漲的幅度」與「下跌的幅度」，來評估市場買賣雙方的力道對比，數值永遠介於 0 到 100 之間。",
        metaphor: "這是一個<b>「拔河比賽的力氣分配計」</b>。如果最近 10 天內有 9 天都是買方贏，計時器就會顯示 RSI 接近 90，代表買方簡真是神力女超人。可是力氣總有開開用完的時候，當力氣用得太誇張，接下來就換對方把繩子拉回去囉！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>RSI 超過 70 或 80：</b> 「超買」！代表買方把力氣一口氣用完了，小心隨時腿軟跌倒（股價回檔）。</li><li style='margin-top: 8px;'><b>RSI 低於 30 或 20：</b> 「超賣」！代表賣方把繩子拉到極限沒力氣了，隨時可能被買方一個反撲拉回去（股價反彈）。</li></ul>"
    },
    {
        category: "📊 副圖指標",
        title: "IV (Implied Volatility / 隱含波動率)",
        official: "將選擇權（期權）的市場價格帶入定價模型反推發表的波動率數值。代表市場預期該資產在未來一段時間內可能出現的劇烈震盪程度。",
        metaphor: "這是一支<b>「驚悚電影的恐怖配樂音量鈕」</b>。當電影演到平淡的日常生活時，配樂非常平靜（IV極低），代表接下來不太會有大意外；但如果配樂突然變得非常激昂、心跳聲咚咚咚很大聲（IV暴增），代表大魔王要出來了，接下來不是大喜就是大悲，心臟要大顆！",
        highLow: "<ul style='margin: 0; padding-left: 20px;'><li><b>IV 處於歷史高位：</b> 代表市場現在非常緊張或極度興奮，預期股價接下來會有「翻天覆地」的大地震，風險極高。</li><li style='margin-top: 8px;'><b>IV 處於歷史低位：</b> 代表大家都在打瞌睡，市場平淡無奇，價格預計只會像老爺車一樣慢慢挪動。</li></ul>"
    }
];

// DOM 元素載入與卡片渲染邏輯
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('indicators-container');
    const modal = document.getElementById('infoModal');
    const closeBtn = document.getElementById('closeBtn');

    const groupedData = indicatorsData.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    for (const [category, items] of Object.entries(groupedData)) {
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = category;
        section.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'grid';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.official}</p>
            `;
            
            card.addEventListener('click', () => openModal(item));
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    }

    function openModal(item) {
        document.getElementById('modalTitle').textContent = item.title;
        document.getElementById('modalCategory').textContent = item.category;
        document.getElementById('modalOfficial').innerHTML = item.official;
        
        const metaphorBlock = document.getElementById('blockMetaphor');
        if(item.metaphor) {
            document.getElementById('modalMetaphor').innerHTML = item.metaphor;
            metaphorBlock.style.display = 'block';
        } else {
            metaphorBlock.style.display = 'none';
        }

        document.getElementById('modalHighLow').innerHTML = item.highLow;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
});