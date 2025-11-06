const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if(!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add('hidden');
  }
});

// Translations
const translations = {
  vi: {
    heroTitle: "Xin chào, tôi là [Tên Bạn]",
    heroSubtitle: "Sinh viên CNTT năm 3 | DevOps & Web Developer",
    aboutTitle: "Về tôi",
    aboutText: "Tôi là sinh viên năm 3 ngành CNTT, yêu thích lập trình, DevOps và phát triển web. Tôi đang tìm kiếm cơ hội thực tập để áp dụng kỹ năng và học hỏi thêm trong môi trường chuyên nghiệp.",
    projectsTitle: "Dự án",
    proj1: {title: "Website Portfolio", desc: "Giới thiệu bản thân và dự án, responsive.", tech: "HTML, CSS, Tailwind, JS", link: "#"},
    proj2: {title: "To-do App", desc: "Ứng dụng quản lý công việc với CRUD.", tech: "React, Node.js, MongoDB", link: "#"},
    proj3: {title: "CI/CD Pipeline", desc: "Build, test, deploy tự động.", tech: "GitHub Actions, Docker", link: "#"},
    proj4: {title: "Docker App", desc: "Container hóa Node.js app.", tech: "Docker, Node.js", link: "#"},
    proj5: {title: "Phân tích dữ liệu", desc: "Dashboard dữ liệu bán hàng.", tech: "Python, Pandas, Matplotlib", link: "#"},
    skillsTitle: "Kỹ năng",
    skillsList: ["HTML/CSS","JavaScript","React.js","Node.js","Git/GitHub","Docker","CI/CD","Python/Pandas"],
    contactTitle: "Liên hệ",
    contactText: "Bạn có thể liên hệ với tôi qua:"
  },
  en: {
    heroTitle: "Hello, I am [Your Name]",
    heroSubtitle: "3rd-year IT Student | DevOps & Web Developer",
    aboutTitle: "About Me",
    aboutText: "I am a 3rd-year IT student, passionate about programming, DevOps, and web development. Seeking internship opportunities to apply my skills and gain experience.",
    projectsTitle: "Projects",
    proj1: {title: "Portfolio Website", desc: "Showcase yourself and your projects, responsive.", tech: "HTML, CSS, Tailwind, JS", link: "#"},
    proj2: {title: "To-do App", desc: "Task management app with CRUD.", tech: "React, Node.js, MongoDB", link: "#"},
    proj3: {title: "CI/CD Pipeline", desc: "Automatic build, test, deploy.", tech: "GitHub Actions, Docker", link: "#"},
    proj4: {title: "Docker App", desc: "Containerized Node.js application.", tech: "Docker, Node.js", link: "#"},
    proj5: {title: "Data Analysis", desc: "Sales data dashboard.", tech: "Python, Pandas, Matplotlib", link: "#"},
    skillsTitle: "Skills",
    skillsList: ["HTML/CSS","JavaScript","React.js","Node.js","Git/GitHub","Docker","CI/CD","Python/Pandas"],
    contactTitle: "Contact",
    contactText: "You can reach me via:"
  },
  fr: {
    heroTitle: "Bonjour, je suis [Votre Nom]",
    heroSubtitle: "Étudiant en IT 3ème année | DevOps & Développeur Web",
    aboutTitle: "À propos de moi",
    aboutText: "Je suis étudiant en IT en 3ème année, passionné par la programmation, le DevOps et le développement web. Je recherche un stage pour appliquer mes compétences et acquérir de l'expérience professionnelle.",
    projectsTitle: "Projets",
    proj1: {title: "Portfolio Website", desc: "Présentation de soi et projets, responsive.", tech: "HTML, CSS, Tailwind, JS", link: "#"},
    proj2: {title: "To-do App", desc: "Application de gestion des tâches CRUD.", tech: "React, Node.js, MongoDB", link: "#"},
    proj3: {title: "CI/CD Pipeline", desc: "Build, test, déploiement automatique.", tech: "GitHub Actions, Docker", link: "#"},
    proj4: {title: "Docker App", desc: "Application Node.js containerisée.", tech: "Docker, Node.js", link: "#"},
    proj5: {title: "Analyse de données", desc: "Dashboard des ventes.", tech: "Python, Pandas, Matplotlib", link: "#"},
    skillsTitle: "Compétences",
    skillsList: ["HTML/CSS","JavaScript","React.js","Node.js","Git/GitHub","Docker","CI/CD","Python/Pandas"],
    contactTitle: "Contact",
    contactText: "Vous pouvez me contacter via:"
  }
};

function setLanguage(lang){
  document.getElementById('hero-title').textContent = translations[lang].heroTitle;
  document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
  document.getElementById('about-title').textContent = translations[lang].aboutTitle;
  document.getElementById('about-text').textContent = translations[lang].aboutText;
  document.getElementById('projects-title').textContent = translations[lang].projectsTitle;

  ['proj2','proj3','proj4','proj5'].forEach(p=>{
    document.getElementById(`${p}-title`).textContent = translations[lang][p].title;
    document.getElementById(`${p}-desc`).textContent = translations[lang][p].desc;
    document.getElementById(`${p}-tech`).textContent = translations[lang][p].tech;
    document.getElementById(`${p}-link`).href = translations[lang][p].link;
  });

  document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
  const skillsContainer = document.getElementById('skills-list');
  skillsContainer.innerHTML = '';
  translations[lang].skillsList.forEach(skill=>{
    const span = document.createElement('span');
    span.className = "bg-blue-100 px-4 py-2 rounded-full";
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });

  document.getElementById('contact-title').textContent = translations[lang].contactTitle;
  document.getElementById('contact-text').textContent = translations[lang].contactText;

  langDropdown.classList.add('hidden'); // ẩn dropdown sau khi chọn
}

// Default language
setLanguage('vi');