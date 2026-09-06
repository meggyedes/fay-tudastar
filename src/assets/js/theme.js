(() => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  if (!toggle) return;

  const setLabel = (theme) => {
    const next = theme === "dark" ? "Világos mód bekapcsolása" : "Sötét mód bekapcsolása";
    toggle.setAttribute("aria-label", next);
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    if (label) label.textContent = theme === "dark" ? "Világos mód" : "Sötét mód";
  };

  setLabel(document.documentElement.dataset.bsTheme);
  toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.bsTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.bsTheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (_) {
      // A téma ettől még az aktuális oldalon érvényes marad.
    }
    setLabel(next);
  });
})();
