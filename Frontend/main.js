// Cambio de idioma
const langBtns = document.querySelectorAll(".lang-switch button");
const elements = document.querySelectorAll("[data-key]");
let currentLang = localStorage.getItem("lang") || "es";

async function setLanguage(lang) {
    const res = await fetch("lang.json");
    const data = await res.json();
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = data[lang][key] || el.textContent;
    });
    localStorage.setItem("lang", lang);
    currentLang = lang;
}

langBtns.forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.id));
});

// Inicializar idioma
setLanguage(currentLang);

// Navegación a secciones
document.querySelectorAll("nav ul li button").forEach(btn => {
    btn.addEventListener("click", () => {
        const section = document.getElementById(btn.getAttribute("data-key").replace("nav","").toLowerCase());
        section.scrollIntoView({behavior: "smooth"});
    });
});

// Formulario de contacto (sin backend aún)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "¡Mensaje enviado!";
    form.reset();
});
