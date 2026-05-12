import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const sections = [
  {
    id: 'patients',
    eyebrow: '01 Patient Data',
    title: '病患資料管理',
    summary: '建立、編輯與快速查詢病患資料，讓臨床操作從正確的病患資訊開始。',
    accent: '病歷號 / 姓名 / 身分證字號',
    items: [
      {
        title: '新增病患資料',
        description: '在病患管理主介面建立新病患，填入基本資料後完成儲存。',
        steps: [
          { text: '在病患管理主介面，點擊右下角的「新增病患」按鈕。', image: '000.jpg' },
          { text: '在彈出的視窗中輸入病歷號、姓名、身分證字號、出生日期及性別，點擊「確認」儲存資料。', image: '001.jpg' }
        ]
      },
      {
        title: '編輯病患資料',
        description: '選取既有病患後進入編輯流程，完成資訊修改與更新。',
        steps: [
          { text: '在病患清單中選取欲修改的對象。', image: '002.jpg' },
          { text: '點擊右下角「編輯病患」按鈕。', image: '003.jpg' },
          { text: '修改資訊後點擊「確認」完成更新。', image: '004.jpg' }
        ]
      },
      {
        title: '查詢病患',
        description: '透過搜尋欄位輸入關鍵字，快速篩選出目標病患。',
        steps: [
          { text: '於上方搜尋欄位輸入病歷號、姓名或身分證字號關鍵字。', image: '005.jpg' },
          { text: '點擊「執行查詢」按鈕篩選出目標病患。', image: '006.jpg' }
        ]
      }
    ]
  },
  {
    id: 'team',
    eyebrow: '02 Medical Team',
    title: '醫療團隊管理',
    summary: '管理醫師帳號與資料，支援診所內部角色維護與登入權限調整。',
    accent: '醫師 ID / 姓名 / 密碼',
    items: [
      {
        title: '醫師帳號管理',
        description: '新增醫師帳號，或針對既有醫師進行密碼與資料調整。',
        steps: [
          { text: '點選介面左側選單的「醫生管理」頁面。', image: '007.jpg' },
          { text: '點擊「新增醫師」並輸入醫師 ID 與姓名。', image: '008.jpg' },
          { text: '選取醫師後點擊「編輯醫師資料」可進行密碼修改或資訊調整。', image: '009.jpg' }
        ]
      }
    ]
  },
  {
    id: 'records',
    eyebrow: '03 Records & Analysis',
    title: '病歷紀錄與影像分析',
    summary: '進入病患歷史紀錄，依檢查設備查看影像、模型與牙周分析資料。',
    accent: '檢查日期 / 醫師 / 設備',
    items: [
      {
        title: '進入病歷清單',
        description: '由病患管理介面進入病歷管理，查看病患所有歷史檢查。',
        steps: [
          { text: '於病患管理介面點選特定病患後，進入「病歷管理」檢視歷史紀錄，系統會列出該病患的所有檢查日期、醫師及對應設備。', image: '010.jpg' }
        ]
      }
    ]
  }
];

const devices = [
  {
    name: 'Sync Kit',
    badgeImage: '011-1.jpg',
    image: '011.jpg',
    description: '提供白光與螢光影像對照，並顯示 PI 牙菌斑指數。'
  },
  {
    name: '口內攝影機',
    badgeImage: '012-1.jpg',
    image: '012.jpg',
    description: '瀏覽包含口腔各角度（九宮格）之高解析度照片。'
  },
  {
    name: '口內攝影機補充畫面',
    badgeImage: '013.jpg',
    image: '013.jpg',
    description: '附檔中的補充截圖，保留於網站中作為口內攝影或病歷影像瀏覽的輔助畫面。'
  },
  {
    name: '口掃機 Scanner',
    badgeImage: '014-1.jpg',
    image: '014.jpg',
    description: '檢視並旋轉操作上、下顎之 3D 數位化模型。'
  },
  {
    name: '牙齦萎縮與超音波探測 PD',
    badgeImage: '015-1.jpg',
    image: '015.jpg',
    description: '顯示牙周袋深度分析數值與相關警示紀錄。'
  },
  {
    name: 'QRay Cam',
    badgeImage: '016-1.jpg',
    image: '016.jpg',
    description: '專屬之螢光影像感測與分析介面。'
  }
];

function ImageFrame({ file, caption, compact = false }) {
  return (
    <figure className={`image-frame ${compact ? 'image-frame--compact' : ''}`}>
      <img src={`/images/${file}`} alt={caption} loading="lazy" />
      <figcaption>
        <span>{file}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

function Header() {
  return (
    <header className="hero">
      <nav className="nav" aria-label="主選單">
        <a className="brand" href="#top" aria-label="SmileGuard II 首頁">
          <span className="brand-mark">SG</span>
          <span>SmileGuard II</span>
        </a>
        <div className="nav-links">
          <a href="#patients">病患資料</a>
          <a href="#team">醫療團隊</a>
          <a href="#records">病歷影像</a>
          <a href="#devices">設備預覽</a>
        </div>
      </nav>

      <div className="hero-grid" id="top">
        <div className="hero-copy">
          <p className="kicker">Software Operation Guide</p>
          <h1>SmileGuard II 軟體操作手冊</h1>
          <p className="hero-text">以「整合所需的一切功能」式的功能展示區塊為靈感，將病患管理、醫療團隊管理、病歷紀錄與影像分析整理成清楚可讀的網站版操作說明。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#manual">開始閱讀手冊</a>
            <a className="button button-ghost" href="#devices">查看設備預覽</a>
          </div>
        </div>
        <div className="hero-card" aria-label="操作手冊重點">
          <div className="hero-card-topline">Manual Overview</div>
          <div className="metric-list">
            <div><strong>3</strong><span>大功能章節</span></div>
            <div><strong>16+</strong><span>操作畫面</span></div>
            <div><strong>5</strong><span>設備分析預覽</span></div>
          </div>
          <ImageFrame file="000.jpg" caption="病患管理主介面與新增病患入口。" compact />
        </div>
      </div>
    </header>
  );
}

function ManualSection({ section, index }) {
  return (
    <section className="manual-section" id={section.id}>
      <div className="section-heading">
        <p className="kicker">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.summary}</p>
        <span className="pill">{section.accent}</span>
      </div>

      <div className="feature-stack">
        {section.items.map((item, itemIndex) => (
          <article className="feature-card" key={item.title}>
            <div className="feature-number">{String(index + 1).padStart(2, '0')}.{itemIndex + 1}</div>
            <div className="feature-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="steps-grid">
                {item.steps.map((step, stepIndex) => (
                  <div className="step-card" key={`${item.title}-${step.image}`}>
                    <div className="step-copy">
                      <div className="step-label">步驟 {stepIndex + 1}</div>
                      <p>{step.text}</p>
                      <p className="screenshot-note">下方以完整寬度顯示操作畫面，避免縮圖造成介面文字不易辨識。</p>
                    </div>
                    <ImageFrame file={step.image} caption={step.text} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Devices() {
  return (
    <section className="devices" id="devices">
      <div className="section-heading section-heading--center">
        <p className="kicker">Device Analysis Preview</p>
        <h2>各項分析設備操作預覽</h2>
        <p>每一項設備皆以功能卡呈現設備識別畫面、操作截圖與圖片說明，方便使用者快速理解不同影像分析模組。</p>
      </div>

      <div className="device-grid">
        {devices.map((device, index) => (
          <article className="device-card" key={`${device.name}-${index}`}>
            <div className="device-card-header">
              <div>
                <span className="device-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{device.name}</h3>
              </div>
              <img src={`/images/${device.badgeImage}`} alt={`${device.name} 設備畫面`} loading="lazy" />
            </div>
            <p>{device.description}</p>
            <ImageFrame file={device.image} caption={device.description} />
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="manual">
        <section className="intro-panel" aria-label="網站內容說明">
          <div>
            <p className="kicker">All-in-one Manual</p>
            <h2>把操作流程整理成一個可部署的網站</h2>
          </div>
          <p>此頁面專注於軟體教學內容，不加入其他行銷段落；圖片、檔名與步驟說明皆配合原始操作手冊呈現。</p>
        </section>
        {sections.map((section, index) => (
          <ManualSection section={section} index={index} key={section.id} />
        ))}
        <Devices />
      </main>
      <footer className="footer">
        <span>SmileGuard II Software Manual</span>
        <span>Built for Vercel deployment</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
