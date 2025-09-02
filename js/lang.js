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
    serviceTitles: [
      "False Ceiling & <br> <span>Light Partitions</span>",
      "Plumbing & <br> <span>Sanitary</span>",
      "Air Conditioning & <br> <span>System</span>",
      "Engraving & <br> <span>Ornamentation</span>",
      "Plumbing & <br> <span>Sanitary</span>",
      "Electrical & <br> <span>Fittings</span>",
      "Electrotechnical <br><span>Equipment</span>",
      "Plaster <br><span>Works</span>"
    ],
    aboutTitle: "About <span>Us</span>",
    aboutText: " At Galaxy, we provide comprehensive home maintenance solutions tailored to meet every need. As a newly established company in Dubai, our strength lies in delivering reliable, high-quality services around the clock. From quick fixes to complete repairs, our dedicated team is available 24/7 to ensure your home runs smoothly and stress-free .",
    Link: "Quick Links",
    ContactInfo: "Contact Info",
    // Add more keys as needed
  },
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    about: "من نحن",
    contact: "اتصل بنا",
    ourServices: "خدماتنا",
    falseCeiling: "أسقف مستعارة و حواجز خفيفة",
    plumbing: "السباكة والصرف الصحي",
    plumbing2: "السباكة والصرف الصحي", 
    airConditioning: "نظام التكييف",
    engraving: "النقش والزخرفة",
    electrical: "التوصيلات الكهربائية",
    electrotechnical: "المعدات الكهربائية التقنية",
    plaster: "أعمال الجبس",
    serviceTitles: [
      "أسقف مستعارة و <br><span>حواجز خفيفة</span>",
      "السباكة و <br><span>الصرف الصحي</span>",
      "نظام <br> <span>التكييف</span>",
      "النقش و <br><span>الزخرفة</span>",
      "السباكة و <br><span>الصرف الصحي</span>",
      "التوصيلات و <br><span>الكهربائية</span>",
      "المعدات و <br><span>الكهربائية التقنية</span>",
      "أعمال و <br><span>الجبس</span>"
    ],
    aboutTitle: "من نحن",
    aboutText: "في جالاكسي، نقدم حلول صيانة منزلية شاملة مصممة خصيصًا لتلبية جميع الاحتياجات. بصفتنا شركة حديثة التأسيس في دبي، تكمن قوتنا في تقديم خدمات موثوقة وعالية الجودة على مدار الساعة. من الحلول السريعة إلى الإصلاحات الكاملة، فريقنا المتخصص متاح على مدار الساعة طوال أيام الأسبوع لضمان سير عمل منزلك بسلاسة وراحة بال.",
    address: "الإمارات العربية المتحدة<br>دبي<br>جميرا بيتش ريزيدنس",
    Link: "روابط سريعة",
    ContactInfo: "معلومات الاتصال",
    // Add more keys as needed
  },
};


function setLanguage(lang) {
  document.documentElement.lang = lang;
    // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
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
  // Service titles
  document.querySelectorAll('.service-title').forEach((el, idx) => {
    if (translations[lang].serviceTitles && translations[lang].serviceTitles[idx]) {
      el.innerHTML = translations[lang].serviceTitles[idx];
    }
  });
  // About text
  document.querySelector(".about-section .lead").textContent =
    translations[lang].aboutText;
      document.querySelector(".footer-section .footer-describtion").textContent =
    translations[lang].aboutText;
  // Address
  var addressEl = document.querySelector('.contact-info a[href*="maps"]');
  if (addressEl) addressEl.innerHTML = translations[lang].address || addressEl.innerHTML;
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
  //footer title
  document.querySelectorAll(".footer-section .row .footer-link").forEach(el => el.textContent =
    translations[lang].Link);
  document.querySelectorAll(".footer-section .row .footer-contact").forEach(el => el.textContent =
    translations[lang].ContactInfo);
  document.querySelectorAll(".footer-section .row .footer-service").forEach(el => el.textContent =
    translations[lang].ourServices);
}

// Default language
setLanguage("en");

