const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelectorAll(".nav__links a");
const chips = document.querySelectorAll(".chip");
const skills = document.querySelectorAll(".skill");
const form = document.querySelector("#contact-form");
const statusEl = document.querySelector(".form__status");
const langToggle = document.querySelector("#lang-toggle");

let currentLang = localStorage.getItem("lang") === "en" ? "en" : "zh";

function t(key) {
  return translations[currentLang]?.[key] ?? translations.zh[key] ?? key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang]?.[key];
    if (text != null) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = translations[lang]?.[key];
    if (text != null) el.setAttribute("placeholder", text);
  });

  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
  }
}

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    const filter = chip.dataset.filter;
    skills.forEach((skill) => {
      const match = filter === "all" || skill.dataset.cat === filter;
      skill.classList.toggle("is-dim", !match);
    });
  });
});

langToggle?.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

applyLanguage(currentLang);

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const replyto = String(data.get("replyto") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!replyto) {
    statusEl.textContent = t("form.error.replyto");
    statusEl.classList.add("is-error");
    return;
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyto)) {
    statusEl.textContent = t("form.error.incomplete");
    statusEl.classList.add("is-error");
    return;
  }

  const originalLabel = t("form.submit");
  statusEl.classList.remove("is-error");
  statusEl.textContent = "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    const result = await response.json();

    if (response.ok && result.success) {
      statusEl.classList.remove("is-error");
      statusEl.textContent = t("form.success");
      form.reset();
    } else {
      statusEl.classList.add("is-error");
      statusEl.textContent = result.message || t("form.error.fail");
    }
  } catch {
    statusEl.classList.add("is-error");
    statusEl.textContent = t("form.error.network");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  }
});
