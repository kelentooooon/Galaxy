// Simple language switching for Galaxy app
const translations = {
  en: {
    home: "Home",
    services: "Our Services",
    about: "About Us",
    contact: "Contact Us",
    ourServices: "Our Services",
    falseCeiling: "False Ceiling & Light Partitions",
    plumbing: "Plumbing & Sanitary",
    airConditioning: "Air Conditioning System",
    engraving: "Engraving & Ornamentation",
    electrical: "Electrical Fittings",
    electrotechnical: "Electrotechnical Equipment",
    plaster: "Plaster Works",
    aboutTitle: "About <span>Us</span>",
    aboutText: " At Galaxy, we provide comprehensive home maintenance solutions tailored to meet every need. As a newly established company in Dubai, our strength lies in delivering reliable, high-quality services around the clock. From quick fixes to complete repairs, our dedicated team is available 24/7 to ensure your home runs smoothly and stress-free .",
    // Add more keys as needed
  },
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    about: "من نحن",
    contact: "اتصل بنا",
    ourServices: "خدماتنا",
    aboutTitle: "<span> من نحن</span>",
    aboutText: " في جالاكسي، نقدم حلول صيانة منزلية شاملة مصممة خصيصًا لتلبية جميع الاحتياجات. بصفتنا شركة حديثة التأسيس في دبي، تكمن قوتنا في تقديم خدمات موثوقة وعالية الجودة على مدار الساعة. من الحلول السريعة إلى الإصلاحات الكاملة، فريقنا المتخصص متاح على مدار الساعة طوال أيام الأسبوع لضمان سير عمل منزلك بسلاسة وراحة بال.",
        falseCeiling: "False Ceiling & Light Partitions",
    plumbing: "Plumbing & Sanitary",
    airConditioning: "Air Conditioning System",
    engraving: "Engraving & Ornamentation",
    electrical: "Electrical Fittings",
    electrotechnical: "Electrotechnical Equipment",
    plaster: "Plaster Works",
    // Add more keys as needed
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  //   document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Navigation
  document.querySelectorAll(".nav-link")[0].textContent =
    translations[lang].home;
  document.querySelectorAll(".nav-link")[1].textContent =
    translations[lang].services;
  document.querySelectorAll(".nav-link")[2].textContent =
    translations[lang].about;
  document.querySelectorAll(".nav-link")[3].textContent =
    translations[lang].contact;
  // Section titles
  document.querySelectorAll(".section-title")[0].innerHTML = `<span>${translations[lang].ourServices.split(" ")[0]
    }</span> ${translations[lang].ourServices.split(" ").slice(1).join(" ")}`;
  document.querySelectorAll(
    ".section-title"
  )[1].innerHTML = `${translations[lang].aboutTitle}`;
  // About text
  document.querySelector(".about-section .lead").textContent =
    translations[lang].aboutText;
      document.querySelector(".footer-section .footer-describtion").textContent =
    translations[lang].aboutText;
  // Footer links
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[0].textContent = translations[lang].falseCeiling;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[1].textContent = translations[lang].plumbing;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[2].textContent = translations[lang].airConditioning;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[3].textContent = translations[lang].engraving;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[4].textContent = translations[lang].plumbing;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[5].textContent = translations[lang].electrical;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[6].textContent = translations[lang].electrotechnical;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[7].textContent = translations[lang].plaster;
  // Footer nav
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[8].textContent = translations[lang].home;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[9].textContent = translations[lang].services;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[10].textContent = translations[lang].about;
  document.querySelectorAll(
    ".footer-section .list-unstyled li a"
  )[11].textContent = translations[lang].contact;
}

// Default language
setLanguage("en");
