document.querySelectorAll('a[href]').forEach(link => {
  const url = new URL(link.href, window.location.href);

  if (url.hostname !== window.location.hostname) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});

// ==================================
// Light / Dark Mode
// ==================================

(() => {
  const root = document.documentElement;
  const key = "site-theme";

  // 前回選択したモードを取得
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem(key) || "light";
  } catch (e) {}

  root.dataset.theme =
    savedTheme === "dark" ? "dark" : "light";

  // ヘッダーのナビゲーションにボタンを追加
  const nav = document.querySelector(".site-header nav");

  if (!nav) return;

  const button = document.createElement("button");

  button.type = "button";
  button.className = "theme-toggle";

  // ボタンの表示を更新
  function updateButton() {
    const isDark = root.dataset.theme === "dark";

    button.textContent = isDark ? "☀" : "☾";

    button.setAttribute(
      "aria-label",
      isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"
    );

    button.title = isDark ? "Light mode" : "Dark mode";
  }

  updateButton();

  nav.appendChild(button);

  // ボタンクリックで切り替え
  button.addEventListener("click", () => {
    const isDark = root.dataset.theme === "dark";

    const newTheme = isDark ? "light" : "dark";

    root.dataset.theme = newTheme;

    try {
      localStorage.setItem(key, newTheme);
    } catch (e) {}

    updateButton();
  });
})();