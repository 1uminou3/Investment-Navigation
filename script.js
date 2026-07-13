// 將所有股票指標內容整理為結構化陣列
const indicatorsData = [
    // --- 交易與活躍度指標 ---
    {
        category: "🔥 交易與活躍度指標",
        title: "1. 成交量與成交額",
        official: "「成交量」是指當天總共買賣了多少「股」；「成交額」是指這些買賣的總金額。",
        metaphor: "就像一間超市，「成交量」是一天賣出了多少顆蘋果，「成交額」是收銀機裡賣蘋果收到的總金額。",
        highLow: "<ul><li><b>高代表：</b> 市場對這檔股票極度關注，資金進出頻繁，交投熱絡.</li><li><b>低代表：</b> 市場冷清，缺乏資金關注，買賣雙方都不太活躍。</li></ul>"
    },
    {
        category: "🔥 交易與活躍度指標",
        title: "2. 換手率 (Turnover Rate)",
        official: "在一定時間內，市場中股票轉手買賣的頻率（成交股數 ÷ 流通總股數）。",
        metaphor: "餐廳的「翻桌率」。翻桌率越高，代表進出餐廳的客人越多。",
        highLow: "<ul><li><b>高代表：</b> 股票流通性好，買賣活躍；但也可能代表投機氣氛濃厚，大家都在做短線。</li><li><b>低代表：</b> 交易不活躍，多數股東選擇緊抱不放（持股觀望），或者根本沒人想買。</li></ul><br><b>🎯 1% 法則與極限值：</b><ul><li><b>低過 1% 代表什麼：</b> 股票處於「冰凍期」或「無人問津」的狀態。圖中這檔股票換手率只有 0.17%，代表它目前非常冷門，絕大多數的股東都抱著股票不動，市場上買賣意願極低。</li><li><b>高過 1% 代表什麼：</b> 1% 到 3% 是正常的交易狀態。如果超過 3%，甚至大於 5%、10%，代表這檔股票非常火熱，大家都在瘋狂買進賣出，可能是因為有大新聞或主力資金在炒作。</li><li><b>最高是多少 %：</b> 沒有絕對上限，但單日極少超過 100%。理論上，如果市場上的股票在一天之內被買賣了好幾次（當沖交易極度頻繁），換手率是可以超過 100% 的。但在正常情況下，一天能有 20% 的換手率就已經是極度活躍的妖股了。</li></ul>"
    },
    {
        category: "🔥 交易與活躍度指標",
        title: "3. 委比 (Bid-Ask Ratio)",
        official: "衡量買盤（想買的人）與賣盤（想賣的人）強弱比例的指標。計算方式為：(買單總數 - 賣單總數) ÷ (買單總數 + 賣單總數) × 100%。",
        metaphor: "買方和賣方在玩「拔河比賽」。委比就是看哪邊的力氣大、人數多。",
        highLow: "<ul><li><b>高代表（正數且大）：</b> 買盤強勁，想買的人遠多於想賣的人，短期股價有上漲動力。</li><li><b>低代表（反數且大）：</b> 賣壓沉重，急著脫手的人多，短期股價有下跌壓力。</li></ul><br><b>🎯 1% 法則與極限值：</b><ul><li><b>1% 附近代表什麼：</b> 無論是 +1% 還是 -1%，都代表「勢均力敵」。想買的人和想賣的人數量幾乎一模一樣，雙方僵持不下。</li><li><b>圖中的 -22.28% 代表什麼：</b> 負數且數字不小，代表「賣方力量大於買方」，目前掛單想賣出的人，比想買入的人多了 20% 左右，短期有下跌壓力。</li><li><b>最高 / 最低極限 (+100% 到 -100%)：</b><br>最高 +100%：代表市場上「只有買單，沒有賣單」（通常發生在股票漲停板，大家搶著買但沒人肯賣）。<br>最低 -100%：代表市場上「只有賣單，沒有買單」（通常發生在跌停板，大家逃命想賣卻沒人接盤）。</li></ul>"
    },
    {
        category: "🔥 交易與活躍度指標",
        title: "4. 量比 (Volume Ratio)",
        official: "開市後平均每分鐘的成交量，與過去5個交易日平均每分鐘成交量的比值。",
        metaphor: "水管今天早上的「出水量」，跟過去五天平均出水量的對比。",
        highLow: "<ul><li><b>高代表（大於1）：</b> 交易比平時「放量」（異常熱絡），可能有突發消息或大資金進場。</li><li><b>低代表（小於1）：</b> 交易「縮量」，比平時更加冷清。</li></ul>"
    },
    {
        category: "🔥 交易與活躍度指標",
        title: "5. 振幅 (Amplitude)",
        official: "當天最高價與最低價的差額，佔前一個交易日收盤價的百分比。",
        metaphor: "這檔股票今天心情的「情緒起伏」程度，或者是雲霄飛車的高低落差。",
        highLow: "<ul><li><b>高代表：</b> 當天價格上下震盪劇烈，多空雙方交戰激烈。</li><li><b>低代表：</b> 價格平穩，波動不大，處於橫盤整理狀態。</li></ul><br><b>🎯 1% 法則與極限值：</b><ul><li><b>低過 1% 代表什麼：</b> 股票就像是一灘死水。開盤到收盤的價格幾乎沒有變動，通常發生在極度冷門的股票，或者是大戶牢牢控盤。</li><li><b>高過 1% 代表什麼：</b> 正常的股票每天都會有 1% 到 3% 的波動（如圖中的 3.15%，屬於健康正常的起伏）。如果振幅高達 10% 甚至 20%，代表多空雙方打得非常激烈。</li><li><b>最高是多少 %：</b> 取決於當地的交易所規定。<br>若為台股 (漲跌幅限制10%)，極限振幅大約是 20%（從跌停一路拉到漲停）。<br>若為港股或美股 (無漲跌幅限制)，振幅理論上沒有上限，有些小市值股票一天內可高達 50% 甚至 100% 以上。</li></ul>"
    },

    // --- 估值與風險指標 ---
    {
        category: "⚖️ 估值與風險指標",
        title: "6. 市盈率 (P/E Ratio)",
        official: "股價除以每股盈利（EPS）。<br>- TTM (滾動)：過去12個月的數據。<br>- 靜 (靜態)：上一個完整財年的數據。<br>- 動 (動態)：預測未來一年的數據。",
        metaphor: "假設你買了一台能幫你賺錢的機器（公司），「市盈率」就是你需要幾年才能回本。市盈率10倍，代表以目前的賺錢速度，10年回本。",
        highLow: "<ul><li><b>高代表：</b> 股票估值偏「貴」。可能是市場極度看好它未來的爆發性成長，但也可能是公司盈利暴跌導致的假象。</li><li><b>低代表：</b> 股票估值偏「便宜」，回本快。可能是物超所值，但也可能是市場對其未來前景極度悲觀。</li></ul>"
    },
    {
        category: "⚖️ 估值與風險指標",
        title: "7. 市淨率 (P/B Ratio)",
        official: "股價除以每股淨資產。",
        metaphor: "你花多少錢去買公司「一塊錢的真實家當」。如果公司今天破產變賣所有資產還清債務，剩下的價值就是淨資產。",
        highLow: "<ul><li><b>高代表：</b> 市場願意給予比資產本身更高的溢價，通常是因為看好其品牌價值、專利或未來盈利能力。</li><li><b>低代表（小於1）：</b> 股價甚至低於公司的清算價值。代表被嚴重低估，或是公司的資產質量極差。</li></ul>"
    },
    {
        category: "⚖️ 估值與風險指標",
        title: "8. Beta (貝塔係數)",
        official: "衡量單一股票相對於整體市場（大盤）波動程度的指標。",
        metaphor: "股票脾氣跟大盤脾氣的「連動性」。大盤是老闆，Beta是員工。Beta為1，老闆走一步員工走一步；Beta為2，老闆走一步員工跑兩步。",
        highLow: "<ul><li><b>高代表（大於1）：</b> 股價波動比大盤劇烈（大盤漲它暴漲，大盤跌它暴跌），風險較高，潛在回報也較大。</li><li><b>低代表（小於1）：</b> 股價波動比大盤小，屬於防守型股票，風險較低。</li></ul>"
    },

    // --- 規模與股本指標 ---
    {
        category: "🏢 規模與股本指標",
        title: "9. 總股本與市值",
        official: "「總股本」是公司發行的總股數；「市值」是股價乘以總股本（即整間公司的總價值）。",
        metaphor: "「總股本」是這塊披薩總共被切成了多少片；「市值」是你要把整塊披薩（整間公司）買下來需要花多少錢。",
        highLow: "<ul><li><b>高代表：</b> 公司規模大（通常是藍籌股、權值股），抗風險能力強，股價較難被少數人操控。</li><li><b>低代表：</b> 公司規模小（中小型股），容易被大資金操控炒作，股價波動風險較大。</li></ul>"
    },
    {
        category: "🏢 規模與股本指標",
        title: "10. 流通股與流通值",
        official: "扣除大股東鎖定不賣的股份後，真正在市場上可以自由買賣的股數（流通股）與其總價值（流通值）。",
        metaphor: "雖然披薩切了100片（總股本）， fooled 老闆自己鎖進保險箱80片，真正在餐桌上能讓大家搶的只有20片（流通股）。",
        highLow: "<ul><li><b>高代表：</b> 市場上可交易的籌碼多，流動性好。</li><li><b>低代表：</b> 市場上籌碼少，只要有一點資金進來買，就很容易把股價推高（俗稱「貨源歸邊」）。</li></ul>"
    },
    {
        category: "🏢 規模與股本指標",
        title: "11. 每手 (Lot Size)",
        official: "交易所規定買賣該股票的最低數量單位。",
        metaphor: "超市賣雞蛋，不能只買1顆，必須買「一盒」（每手）。",
        highLow: "<ul><li><b>高（數量大）：</b> 買賣的入場門檻高，需要準備更多本金才能買賣一次。</li><li><b>低（數量小）：</b> 入場門檻低，方便散戶小資金參與。</li></ul>"
    },

    // --- 派息指標 ---
    {
        category: "💰 派息指標",
        title: "12. 股息與股息率 (Dividend Yield)",
        official: "「股息」是每股派發的現金金額；「股息率」是每股派息金額除以當前股價的百分比。TTM代表過去12個月，LFY代表上一財年。",
        metaphor: "就像銀行存款的「利息」。「股息」是你拿到的現金，「股息率」是你的存款年利率。",
        highLow: "<ul><li><b>高代表：</b> 買這檔股票能獲得豐厚的現金回報，通常是成熟穩定的企業。但也需注意「高息陷阱」。</li><li><b>低代表：</b> 現金回報少。可能是公司把賺到的錢拿去擴張業務，或者是公司根本沒賺錢所以發不出股息。</li></ul><br><b>🎯 1% 法則與極限值：</b><ul><li><b>低過 1% 代表什麼：</b> 算是一檔「鐵公雞」股票，或者是股價被炒得太高了。你花 100 元買這間公司，他一年分給你的現金不到 1 元，比放在銀行的定存利息還要差。</li><li><b>高過 1% 代表什麼：</b> 當然是越高越好。圖中的 5.13% 是一個相當不錯的數字，代表你投資 100 元，一年可以拿到超過 5 元的現金股利，這通常是業務穩定、願意把賺的錢分給股東的好公司。</li><li><b>最高是多少 %：</b> 沒有理論上限，打過高要小心。如果一檔股票的股息率高達 15% 甚至 20%，通常不是因為公司大方，而是因為「股價暴跌」導致比例失真，這時候反而要警覺公司是不是出大問題了。</li></ul>"
    },
    {
        category: "💰 派息指標",
        title: "13. 股息計算方式",
        official: "介紹如何計算總股息、每股股息以及股息率的三種核心公式。",
        metaphor: "就像算算看你買的果樹每年能為你結出多少蘋果、能換多少現金，或是這棵樹的產出回報率高不高。",
        highLow: "<ul><li><b>① 計算你能領到的「總股息」</b><br>公式：<b>總股息 = 每股股息 × 持有股數</b><br><i>實例：</i> 若股票的「股息 TTM」為 0.350 元，你買了 2 手（共 2,000 股），計算為：0.350 × 2000 = 700 元現金。</li><br><li><b>② 從「股息率」回推「每股股息」</b><br>公式：<b>每股股息 = 當前股價 × 股息率</b><br><i>實例：</i> 若當前股價為 6.820 元，股息率為 5.13%，計算為：6.820 × 5.13% ≈ 0.350 元。</li><br><li><b>③ 計算「股息率 (Dividend Yield)」</b><br>公式：<b>股息率 = (每股股息 ÷ 當前股價) × 100%</b><br><i>實例：</i> 某檔股票現在股價 100 元，今年每股發 5 元股息，計算為：(5 ÷ 100) × 100% = 5%（年化現金回報率）。</li></ul>"
    },

    // --- 基本價格指標 ---
    {
        category: "🏷️ 基本價格指標",
        title: "14. 基本價格組合",
        official: "<b>開市 / 前收：</b> 開市是今天第一筆交易的價格；前收是昨天的最終收盤價。<br><b>最高 / 最低：</b> 今天盤中出現過的最高和最低成交價。<br><b>平均價：</b> 當天所有成交金額除以總成交量得出的平均成本價。<br><b>52周最高/最低 & 歷史最高/最低：</b> 過去一年內或上市以來的極限價格紀錄。",
        metaphor: "紀錄這檔股票價格走過的「足跡」，幫助你判斷目前價格是處於山頂、半山腰還是谷底。",
        highLow: "<ul><li><b>開盤高低：</b> 開市高於前收（高開）代表開盤前市場情緒樂觀；反之則悲觀。</li><li><b>52周高低：</b> 接近52周最高代表股票處於強勢期；接近最低代表處於弱勢期或谷底。</li></ul>"
    }
];

// DOM 元素載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('indicators-container');
    const modal = document.getElementById('infoModal');
    const closeBtn = document.getElementById('closeBtn');

    // 依據類別對資料進行分組
    const groupedData = indicatorsData.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    // 動態生成 HTML
    for (const [category, items] of Object.entries(groupedData)) {
        // 建立分類標題區塊
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = category;
        section.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'grid';

        // 建立卡片
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.official}</p>
            `;
            
            // 點擊卡片開啟彈出視窗
            card.addEventListener('click', () => openModal(item));
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    }

    // 開啟彈出視窗函式
    function openModal(item) {
        document.getElementById('modalTitle').textContent = item.title;
        document.getElementById('modalCategory').textContent = item.category;
        
        document.getElementById('modalOfficial').innerHTML = item.official;
        
        // 處理可能有空值的區塊
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

    // 關閉彈出視窗邏輯
    function closeModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);

    // 點擊彈出視窗背景(黑底區域)時自動關閉
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});