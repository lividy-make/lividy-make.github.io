const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelectorAll(".nav__links a");
const chips = document.querySelectorAll(".chip");
const skills = document.querySelectorAll(".skill");
const form = document.querySelector("#contact-form");
const statusEl = document.querySelector(".form__status");

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

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const replyto = String(data.get("replyto") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!replyto) {
    statusEl.textContent = "请填写邮箱地址";
    statusEl.classList.add("is-error");
    return;
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyto)) {
    statusEl.textContent = "请完整填写姓名、有效邮箱和消息。";
    statusEl.classList.add("is-error");
    return;
  }

  const originalLabel = submitBtn?.textContent || "发送消息";
  statusEl.classList.remove("is-error");
  statusEl.textContent = "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "发送中……";
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
      statusEl.textContent = "消息已发送，我会尽快回复。";
      form.reset();
    } else {
      statusEl.classList.add("is-error");
      statusEl.textContent =
        result.message || "发送失败，请稍后重试或直接发邮件联系我。";
    }
  } catch {
    statusEl.classList.add("is-error");
    statusEl.textContent = "网络异常，发送失败，请稍后重试。";
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  }
});
