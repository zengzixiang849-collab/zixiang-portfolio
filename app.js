const translations = {
  zh: {
    "nav.about": "关于",
    "nav.news": "动态",
    "nav.education": "教育",
    "nav.projects": "项目",
    "nav.experience": "经历",
    "profile.kicker": "酒店管理 · 文化 · 数字创作",
    "profile.role1": "酒店管理专业本科生",
    "profile.role2": "学生组织者",
    "profile.role3": "AI 辅助网页与视觉创作者",
    "profile.role4": "海南观察者",
    "profile.skills": "技能与工具",
    "profile.cta": "查看精选作品",
    "profile.updated": "最后更新 · 2026 年 11 月",
    "sections.about": "关于",
    "sections.news": "动态",
    "sections.education": "教育经历",
    "sections.projects": "精选项目",
    "sections.experience": "实践经历",
    "sections.certificates": "证书与亮点",
    "sections.snapshots": "片段",
    "about.lead": "我把酒店管理看作一种理解人、地点与体验之间关系的方式。",
    "about.p1": "我就读于海南大学—亚利桑那州立大学联合国际旅游学院，酒店管理专业旅游开发与管理方向，预计于 2029 年毕业。",
    "about.p2": "我的实践横跨学生组织、地方文化观察，以及 AI 辅助的网页与视觉创作。我喜欢把一个想法变成真正可以被进入、使用和记住的体验。",
    "about.p3": "目前在海口，我正继续发展 SPARC 社团，担任 U-First 新生导师，并通过小型数字项目记录我所看到的海南。",
    "about.imageCaption": "义馆 · 海南大学观澜湖校区",
    "about.imageCredit": "摄影：曾子翔",
    "news.n1": "开始担任 U-First Happiness 班学生导师，协助为期七周的新生适应与学习计划。",
    "news.n2": "完成 Stillwater 与 Century Light 的新版本，以网页实验记录个人学习与城市观察。",
    "news.n3": "国庆期间再次在骑楼老街担任英语志愿讲解员。",
    "news.n4": "作为负责人之一组织 SPARC 首场校园活动，为 8 名参与者策划正念欢迎活动。",
    "news.n5": "在海口骑楼老街参与英语讲解志愿服务。",
    "news.n6": "完成红十字急救培训，取得初级救护员及 CPR+AED 证书。",
    "education.place": "中国 · 海口",
    "education.school": "海南大学—亚利桑那州立大学联合国际旅游学院",
    "education.degree": "管理学学士 · 酒店管理专业 · 旅游开发与管理方向",
    "education.courseLabel": "部分 A 等级课程",
    "education.course1": "管理学原理",
    "education.course2": "高等数学",
    "education.course3": "环境科学概论",
    "education.highlightLabel": "学业亮点",
    "education.highlight1": "大学英语四级 · 586",
    "education.highlight2": "ASU EUGA 证书",
    "education.highlight3": "课程采用等级制评价",
    "projects.stillwater": "一个持续生长的个人学习、思考与视觉实验档案；它被设计成一处让想法安静流动的空间。",
    "projects.century": "以海口世纪大桥为对象的日光观察。时间、天气与色彩共同形成一幅可交互的城市肖像。",
    "projects.desk": "把个人作品集变成可探索空间的 3D 工作台，使用 AI 辅助的 Three.js 与 Blender 工作流完成。",
    "projects.culture": "一项独立文化节策划，通过活动、共享空间与学生参与，让文化交流变得更直接、更有趣。",
    "projects.sparc": "SPARC 的首次校园聚会：面向 8 名参与者的小型正念活动，从教授邀请、流程设计到主持、音乐、冥想与现场协调均参与完成。",
    "common.openProject": "打开项目",
    "common.present": "至今",
    "experience.sparcRole": "负责人之一 · 发起人与核心组织者",
    "experience.sparcBody": "继续发展由上一届学姐从 ASU 总部带回的社团，并共同负责本地发展方向。首场活动涵盖教授邀请、流程设计、联合宣传、主持、音乐、冥想与现场执行。",
    "experience.ufirstRole": "学生导师",
    "experience.ufirstBody": "在七周新生项目中负责学生联络、名单与签到、活动组织、团队建设、现场带领，以及与教授的沟通协调。",
    "experience.qilouOrg": "骑楼老街 · 龙华区",
    "experience.qilouRole": "英语讲解志愿者",
    "experience.qilouBody": "在海口历史街区为国际游客提供英语讲解与参观引导，帮助他们理解骑楼老街及其本地文化背景。",
    "certificates.caption": "急救实操培训 · 2026.04",
    "certificates.firstAid": "红十字初级救护员证",
    "certificates.cpr": "CPR + AED 证书",
    "certificates.redCross": "海口红十字",
    "certificates.english": "全国大学英语四级考试",
    "certificates.euga": "本科阶段学术英语能力",
    "snapshots.library": "海南大学观澜湖校区 · 义馆",
    "snapshots.qilou": "骑楼老街志愿服务",
    "snapshots.sparc": "SPARC · 首次活动",
    "snapshots.century": "在光线中观察海口",
    "more.title": "继续学习，继续组织，也继续观察。",
    "more.body": "这不是一份已经封存的总结，而是一份持续更新的记录。新的经历会在真正发生后加入这里。",
    "more.email": "发送邮件",
    "footer": "以海南的光线与一段持续生长的学生旅程为设计线索。"
  }
};

const english = {};
document.querySelectorAll("[data-i18n]").forEach((node) => {
  english[node.dataset.i18n] = node.textContent;
});

const toggle = document.querySelector(".language-toggle");
let language = localStorage.getItem("portfolio-language") || "en";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  const dictionary = language === "zh" ? translations.zh : english;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "曾子翔 · 个人网站" : "Zixiang Zeng · Portfolio";
  toggle.querySelector(".language-current").textContent = language === "zh" ? "中" : "EN";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  localStorage.setItem("portfolio-language", language);
}

toggle.addEventListener("click", () => applyLanguage(language === "en" ? "zh" : "en"));
applyLanguage(language);

const sectionLinks = [...document.querySelectorAll(".site-header nav a")];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.toggleAttribute("aria-current", active);
    });
  });
}, { rootMargin: "-25% 0px -65%", threshold: 0 });

sections.forEach((section) => observer.observe(section));
