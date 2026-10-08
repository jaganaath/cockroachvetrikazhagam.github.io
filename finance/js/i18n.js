/* ── CVK Finance — Translations (English / Tamil / Hindi) ── */
const TRANSLATIONS = {
  en: {
    lang_en: 'EN', lang_ta: 'TA', lang_hi: 'HI',
    nav_home: 'Home', nav_finance: 'Finance Hub', nav_back: '← Back to CVK',
    nav_overview: 'Overview', nav_budget: 'Budget', nav_debt: 'Debt',
    nav_psu: 'PSUs', nav_cag: 'CAG', nav_compare: 'Compare States',
    nav_central: 'Central Finance',

    finance_hub_eyebrow: 'Data Platform',
    finance_hub_title: 'Tamil Nadu Finance Data Hub',
    finance_hub_desc: 'Explore 10+ years of Tamil Nadu state finance data. Compare with other states. All sources cited.',

    overview_title: 'Economic Overview',
    budget_title: 'State Budget Analysis',
    debt_title: 'Debt & Fiscal Stress',
    psu_title: 'Public Sector Enterprises',
    cag_title: 'CAG Audit Findings',
    compare_title: 'State Comparison Tool',
    central_title: 'Central Government & TN Share',

    select_year: 'Select Year',
    select_metric: 'Select Metric',
    select_state: 'Select States to Compare',
    select_chart: 'Chart Type',

    chart_bar: 'Bar', chart_line: 'Line', chart_area: 'Area', chart_pie: 'Pie',

    help_gsdp: 'Gross State Domestic Product — the total value of all goods and services produced in Tamil Nadu. Like a country\'s GDP but for one state.',
    help_fiscal_deficit: 'Fiscal Deficit = Total Spending minus Total Income. Government borrows to fill this gap. FRBM law limits this to 3% of GSDP.',
    help_debt: 'Total outstanding loans of the state government. Includes market borrowings, loans from Centre, and institutional loans.',
    help_capex: 'Capital Expenditure — money spent creating long-term assets like roads, hospitals, schools. Unlike revenue spending, capex adds productive value.',
    help_interest: 'Annual interest paid on all government loans. When interest exceeds capital expenditure, the state is paying more to service old debt than building new assets.',
    help_sotr: 'State\'s Own Tax Revenue — taxes collected directly by Tamil Nadu (GST state share, stamps, vehicles, excise). Measures fiscal self-reliance.',
    help_revenue_deficit: 'Revenue Deficit = when daily expenses exceed daily income. A positive revenue deficit means borrowing for consumption — not investment.',
    help_psu: 'Public Sector Undertaking — government-owned companies. Losses in PSUs are hidden liabilities on the state.',
    help_cag: 'Comptroller and Auditor General — India\'s independent constitutional auditor. CAG reports reveal financial irregularities the budget does not show.',
    help_off_budget: 'Borrowings taken by state-owned companies or special purpose vehicles that don\'t appear in the official state budget but are the state\'s ultimate liability.',

    source_label: 'Source',
    sources_title: 'Data Sources & References',

    loading: 'Loading data...',
    no_data: 'No data available',
    all_india_avg: 'All India Average',
    tn_label: 'Tamil Nadu',
    frbm_limit: 'FRBM Limit (3%)',
    in_lakh_crore: '₹ Lakh Crore',
    in_crore: '₹ Crore',
    in_pct: '%',
    yoy_change: 'YoY Change',
    five_yr_avg: '5-Yr Average',

    cag_finding: 'CAG Finding',
    cag_impact: 'Impact',
    cag_year: 'Report Year',

    debt_per_child: 'Debt per Child Born',
    note_approx: '* Approximate figures based on available public data. Verify with original sources.',

    lang_switch_tooltip: 'Switch Language / மொழி மாற்று / भाषा बदलें',
    footer_text: 'Data sourced from RBI, Finance Ministry, CAG, TN Finance Dept. For educational purposes.',
    footer_cvk: 'Cockroach Vetri Kazhagam · நேர்மையான தகவலே கிடைக்கும்',

    hub_overview_desc: 'GSDP, per capita income, sector growth, employment. Tamil Nadu\'s economic big picture.',
    hub_budget_desc: 'Revenue vs expenditure, fiscal deficit, subsidies, salaries & pensions by year.',
    hub_debt_desc: 'Debt stock, off-budget borrowings, interest burden. How deep is the hole?',
    hub_psu_desc: 'TANGEDCO, TNSTC, Metro Water and other PSU profits, losses, and liabilities.',
    hub_cag_desc: 'Independent audit findings — budget deviations, hidden liabilities, irregularities.',
    hub_compare_desc: 'Compare Tamil Nadu against any state on any fiscal metric. Pick your states and chart.',
    hub_central_desc: 'Central taxes, devolution to TN, GST impact, Finance Commission awards.',
  },

  ta: {
    lang_en: 'EN', lang_ta: 'TA', lang_hi: 'HI',
    nav_home: 'முகப்பு', nav_finance: 'நிதி மையம்', nav_back: '← CVK-க்கு திரும்பு',
    nav_overview: 'கண்ணோட்டம்', nav_budget: 'பட்ஜெட்', nav_debt: 'கடன்',
    nav_psu: 'PSU கழகங்கள்', nav_cag: 'CAG', nav_compare: 'மாநிலங்கள் ஒப்பீடு',
    nav_central: 'மத்திய நிதி',

    finance_hub_eyebrow: 'தரவு தளம்',
    finance_hub_title: 'தமிழ்நாடு நிதி தரவு மையம்',
    finance_hub_desc: '10+ ஆண்டுகள் தமிழ்நாட்டு நிதி தரவுகளை ஆராயுங்கள். மற்ற மாநிலங்களுடன் ஒப்பிடுங்கள்.',

    overview_title: 'பொருளாதார கண்ணோட்டம்',
    budget_title: 'மாநில பட்ஜெட் பகுப்பாய்வு',
    debt_title: 'கடன் மற்றும் நிதி அழுத்தம்',
    psu_title: 'பொதுத்துறை நிறுவனங்கள்',
    cag_title: 'CAG தணிக்கை கண்டுபிடிப்புகள்',
    compare_title: 'மாநில ஒப்பீட்டு கருவி',
    central_title: 'மத்திய அரசு & தமிழ்நாட்டு பங்கு',

    select_year: 'ஆண்டு தேர்வு',
    select_metric: 'அளவீடு தேர்வு',
    select_state: 'ஒப்பிட மாநிலங்கள் தேர்வு',
    select_chart: 'வரைபட வகை',

    chart_bar: 'பட்டை', chart_line: 'கோடு', chart_area: 'பரப்பு', chart_pie: 'வட்டம்',

    help_gsdp: 'மொத்த மாநில உள்நாட்டு உற்பத்தி — தமிழ்நாட்டில் உற்பத்தியான அனைத்து பொருட்கள் மற்றும் சேவைகளின் மொத்த மதிப்பு.',
    help_fiscal_deficit: 'நிதி பற்றாக்குறை = மொத்த செலவு கழித்து மொத்த வருமானம். FRBM சட்டம் இதை GSDP-யின் 3% க்குள் வைக்க வேண்டும் என்று நிர்ணயிக்கிறது.',
    help_debt: 'மாநில அரசின் மொத்த கடன். சந்தை கடன், மத்திய அரசு கடன், நிறுவன கடன்கள் அனைத்தையும் உள்ளடக்கியது.',
    help_capex: 'மூலதன செலவு — சாலை, மருத்துவமனை, பள்ளி போன்ற நீண்டகால சொத்துக்களை உருவாக்க செய்யப்படும் முதலீடு.',
    help_interest: 'அனைத்து கடன்களுக்கும் வருடாந்திர வட்டி. வட்டி செலவு மூலதன செலவை தாண்டும்போது, மாநிலம் புதிய சொத்துக்கள் உருவாக்குவதை விட பழைய கடனை திருப்பிச் செலுத்துவதில் அதிக பணம் செலவிடுகிறது.',
    help_sotr: 'மாநிலத்தின் சொந்த வரி வருவாய் — தமிழ்நாடே நேரடியாக வசூலிக்கும் வரிகள் (SGST, ஸ்டாம்ப், வாகன வரி, மாநில கலால்). நிதி சுயசார்பின் அளவீடு.',
    help_revenue_deficit: 'வருவாய் பற்றாக்குறை = தினசரி செலவு தினசரி வருமானத்தை தாண்டும்போது. நுகர்வுக்காக கடன் வாங்குவது — முதலீட்டிற்காக அல்ல.',
    help_psu: 'பொதுத்துறை நிறுவனம் — அரசு சொந்தமான நிறுவனங்கள். PSU-க்களின் நஷ்டங்கள் மாநிலத்தின் மறைந்த கடன்களாகும்.',
    help_cag: 'கணக்கு தணிக்கையாளர் மற்றும் தணிக்கை நிறுவனம் — இந்தியாவின் சுதந்திர அரசியலமைப்பு தணிக்கையாளர். CAG அறிக்கைகள் பட்ஜெட்டில் வெளிப்படாத நிதி முறைகேடுகளை வெளிப்படுத்துகின்றன.',
    help_off_budget: 'மாநில நிறுவனங்கள் அல்லது சிறப்பு நோக்க வாகனங்கள் வாங்கும் கடன்கள் — அதிகாரப்பூர்வ மாநில பட்ஜெட்டில் தெரியாது, ஆனால் இறுதியில் மாநிலமே திரும்பிச் செலுத்த வேண்டியது.',

    source_label: 'ஆதாரம்',
    sources_title: 'தரவு ஆதாரங்கள் மற்றும் குறிப்புகள்',

    loading: 'தரவு ஏற்றுகிறது...',
    no_data: 'தரவு இல்லை',
    all_india_avg: 'அகில இந்திய சராசரி',
    tn_label: 'தமிழ்நாடு',
    frbm_limit: 'FRBM வரம்பு (3%)',
    in_lakh_crore: '₹ லட்சம் கோடி',
    in_crore: '₹ கோடி',
    in_pct: '%',
    yoy_change: 'ஆண்டுவாரி மாற்றம்',
    five_yr_avg: '5 ஆண்டு சராசரி',

    cag_finding: 'CAG கண்டுபிடிப்பு',
    cag_impact: 'தாக்கம்',
    cag_year: 'அறிக்கை ஆண்டு',

    debt_per_child: 'பிறக்கும் குழந்தைக்கு கடன்',
    note_approx: '* கிடைக்கக்கூடிய பொது தகவல்களின் அடிப்படையில் தோராய எண்கள். அசல் ஆதாரங்களில் சரிபாருங்கள்.',

    lang_switch_tooltip: 'Switch Language / மொழி மாற்று / भाषा बदलें',
    footer_text: 'RBI, நிதி அமைச்சகம், CAG, TN நிதித்துறையிலிருந்து தரவு. கல்வி நோக்கங்களுக்காக.',
    footer_cvk: 'Cockroach Vetri Kazhagam · நேர்மையான தகவலே கிடைக்கும்',

    hub_overview_desc: 'GSDP, தலா வருமானம், துறை வளர்ச்சி, வேலைவாய்ப்பு. தமிழ்நாட்டின் பொருளாதார பெரும்படம்.',
    hub_budget_desc: 'வருவாய் vs செலவு, நிதி பற்றாக்குறை, மானியங்கள், சம்பளம் & ஓய்வூதியம்.',
    hub_debt_desc: 'கடன் இருப்பு, வரவு செலவு வெளி கடன்கள், வட்டி சுமை. குழி எவ்வளவு ஆழம்?',
    hub_psu_desc: 'TANGEDCO, TNSTC, மெட்ரோ வாட்டர் மற்றும் பிற PSU இலாபம், நஷ்டம், பொறுப்புகள்.',
    hub_cag_desc: 'சுதந்திர தணிக்கை கண்டுபிடிப்புகள் — பட்ஜெட் விலகல்கள், மறைந்த கடன்கள்.',
    hub_compare_desc: 'தமிழ்நாட்டை எந்த மாநிலத்துடனும் எந்த அளவீட்டிலும் ஒப்பிடுங்கள்.',
    hub_central_desc: 'மத்திய வரிகள், தமிழ்நாட்டுக்கான ஒதுக்கீடு, GST தாக்கம், நிதி ஆயோக்.',
  },

  hi: {
    lang_en: 'EN', lang_ta: 'TA', lang_hi: 'HI',
    nav_home: 'होम', nav_finance: 'वित्त केंद्र', nav_back: '← CVK पर वापस',
    nav_overview: 'अवलोकन', nav_budget: 'बजट', nav_debt: 'ऋण',
    nav_psu: 'PSU', nav_cag: 'CAG', nav_compare: 'राज्य तुलना',
    nav_central: 'केंद्रीय वित्त',

    finance_hub_eyebrow: 'डेटा प्लेटफॉर्म',
    finance_hub_title: 'तमिलनाडु वित्त डेटा केंद्र',
    finance_hub_desc: '10+ वर्षों के तमिलनाडु राज्य वित्त डेटा का अन्वेषण करें। अन्य राज्यों से तुलना करें।',

    overview_title: 'आर्थिक अवलोकन',
    budget_title: 'राज्य बजट विश्लेषण',
    debt_title: 'ऋण और वित्तीय तनाव',
    psu_title: 'सार्वजनिक क्षेत्र के उपक्रम',
    cag_title: 'CAG लेखापरीक्षा निष्कर्ष',
    compare_title: 'राज्य तुलना उपकरण',
    central_title: 'केंद्र सरकार और TN का हिस्सा',

    select_year: 'वर्ष चुनें',
    select_metric: 'मेट्रिक चुनें',
    select_state: 'तुलना के लिए राज्य चुनें',
    select_chart: 'चार्ट प्रकार',

    chart_bar: 'बार', chart_line: 'रेखा', chart_area: 'क्षेत्र', chart_pie: 'पाई',

    help_gsdp: 'सकल राज्य घरेलू उत्पाद — तमिलनाडु में उत्पादित सभी वस्तुओं और सेवाओं का कुल मूल्य।',
    help_fiscal_deficit: 'राजकोषीय घाटा = कुल व्यय minus कुल आय। FRBM कानून इसे GSDP के 3% तक सीमित करता है।',
    help_debt: 'राज्य सरकार का कुल बकाया ऋण। बाजार उधार, केंद्र से ऋण, और संस्थागत ऋण शामिल।',
    help_capex: 'पूंजीगत व्यय — सड़कें, अस्पताल, स्कूल जैसी दीर्घकालिक संपत्तियां बनाने पर खर्च।',
    help_interest: 'सभी सरकारी ऋणों पर वार्षिक ब्याज। जब ब्याज पूंजीगत व्यय से अधिक हो, राज्य नई संपत्तियां बनाने से अधिक पुराने ऋण चुकाने में खर्च करता है।',
    help_sotr: 'राज्य का अपना कर राजस्व — तमिलनाडु द्वारा सीधे एकत्र किए गए कर। वित्तीय आत्मनिर्भरता का माप।',
    help_revenue_deficit: 'राजस्व घाटा = दैनिक खर्च दैनिक आय से अधिक होने पर। उपभोग के लिए उधार लेना — निवेश के लिए नहीं।',
    help_psu: 'सार्वजनिक उपक्रम — सरकारी स्वामित्व वाली कंपनियां। PSU घाटे राज्य की छिपी देनदारियां हैं।',
    help_cag: 'नियंत्रक और महालेखापरीक्षक — भारत का स्वतंत्र संवैधानिक लेखापरीक्षक। CAG रिपोर्ट बजट में न दिखने वाली वित्तीय अनियमितताओं को उजागर करती हैं।',
    help_off_budget: 'राज्य के स्वामित्व वाली कंपनियों द्वारा लिए गए ऋण जो आधिकारिक राज्य बजट में नहीं दिखते लेकिन अंततः राज्य की देनदारी हैं।',

    source_label: 'स्रोत',
    sources_title: 'डेटा स्रोत और संदर्भ',

    loading: 'डेटा लोड हो रहा है...',
    no_data: 'डेटा उपलब्ध नहीं',
    all_india_avg: 'अखिल भारतीय औसत',
    tn_label: 'तमिलनाडु',
    frbm_limit: 'FRBM सीमा (3%)',
    in_lakh_crore: '₹ लाख करोड़',
    in_crore: '₹ करोड़',
    in_pct: '%',
    yoy_change: 'वर्ष दर वर्ष परिवर्तन',
    five_yr_avg: '5-वर्ष औसत',

    cag_finding: 'CAG निष्कर्ष',
    cag_impact: 'प्रभाव',
    cag_year: 'रिपोर्ट वर्ष',

    debt_per_child: 'पैदा होने वाले बच्चे पर ऋण',
    note_approx: '* उपलब्ध सार्वजनिक डेटा के आधार पर अनुमानित आंकड़े। मूल स्रोतों से सत्यापित करें।',

    lang_switch_tooltip: 'Switch Language / மொழி மாற்று / भाषा बदलें',
    footer_text: 'RBI, वित्त मंत्रालय, CAG, TN वित्त विभाग से डेटा। शैक्षिक उद्देश्यों के लिए।',
    footer_cvk: 'Cockroach Vetri Kazhagam · நேர்மையான தகவலே கிடைக்கும்',

    hub_overview_desc: 'GSDP, प्रति व्यक्ति आय, क्षेत्रीय विकास, रोजगार। तमिलनाडु की आर्थिक तस्वीर।',
    hub_budget_desc: 'राजस्व बनाम व्यय, राजकोषीय घाटा, सब्सिडी, वेतन और पेंशन।',
    hub_debt_desc: 'ऋण स्टॉक, ऑफ-बजट उधार, ब्याज बोझ। गड्ढा कितना गहरा है?',
    hub_psu_desc: 'TANGEDCO, TNSTC, मेट्रो वाटर और अन्य PSU लाभ, हानि और देनदारियां।',
    hub_cag_desc: 'स्वतंत्र ऑडिट निष्कर्ष — बजट विचलन, छिपी देनदारियां, अनियमितताएं।',
    hub_compare_desc: 'किसी भी राज्य से किसी भी वित्तीय मेट्रिक पर तमिलनाडु की तुलना करें।',
    hub_central_desc: 'केंद्रीय कर, TN को हस्तांतरण, GST प्रभाव, वित्त आयोग पुरस्कार।',
  }
};

let currentLang = localStorage.getItem('cvk_lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cvk_lang', lang);
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val) el.placeholder = val;
  });
}

function initLang() {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/* ── Shared chart color palette ── */
const CHART_COLORS = [
  '#D4A017','#3399CC','#CC3344','#44BB66','#9966CC',
  '#FF8800','#00BBCC','#FF6699','#88CC00','#CC6600'
];

function getStateColor(stateId) {
  const map = {
    TN:'#D4A017', MH:'#3399CC', KA:'#44BB66', AP:'#FF6699',
    TG:'#9966CC', KL:'#00BBCC', GJ:'#FF8800', RJ:'#CC3344',
    UP:'#88CC00', WB:'#CC6600'
  };
  return map[stateId] || '#AAAAAA';
}

/* ── Chart.js default config override ── */
function applyChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.color = '#AAAAAA';
  Chart.defaults.borderColor = '#2A2A2A';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
  Chart.defaults.plugins.tooltip.backgroundColor = '#1e1e1e';
  Chart.defaults.plugins.tooltip.borderColor = '#333';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.titleColor = '#F5F5F0';
  Chart.defaults.plugins.tooltip.bodyColor = '#AAAAAA';
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 4;
  Chart.defaults.font.family = "'Inter', 'Noto Sans Tamil', sans-serif";
  Chart.defaults.font.size = 12;
}

/* ── Scroll reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Number formatting ── */
function fmtLC(val, dp=2) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return '₹' + Number(val).toFixed(dp) + ' L.Cr';
}
function fmtPct(val, dp=1) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return Number(val).toFixed(dp) + '%';
}
function fmtINR(val) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  if (Math.abs(val) >= 100000) return '₹' + (val/100000).toFixed(1) + 'L Cr';
  if (Math.abs(val) >= 1000) return '₹' + (val/1000).toFixed(1) + 'K Cr';
  return '₹' + val + ' Cr';
}
function fmtNum(val, dp=0) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return Number(val).toLocaleString('en-IN', {maximumFractionDigits: dp});
}
