/* Gestos e ajustes para mobile – swipe nas questões e no modal do guia */
(function () {
  "use strict";

  function swipe(el, onLeft, onRight, opts) {
    var o = opts || {}, sx = 0, sy = 0, st = 0, track = false;
    el.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1 || (o.skip && o.skip(e))) { track = false; return; }
      var t = e.touches[0]; sx = t.clientX; sy = t.clientY; st = Date.now(); track = true;
    }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (!track) return; track = false;
      var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (Date.now() - st > 600 || Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
      if (dx < 0) onLeft(); else onRight();
    }, { passive: true });
  }

  // Swipe entre questões (ignora quando o toque começa em área rolável/controle)
  var qs = document.getElementById("qs");
  swipe(qs, function () {
    if (typeof S !== "undefined" && S && S.ids) nextAct();
  }, function () {
    if (typeof S !== "undefined" && S && S.ids) goTo(S.cur - 1);
  }, { skip: function (e) { return !!e.target.closest("button,input,.pgbtn"); } });

  // Swipe no modal do guia (somente sem zoom)
  var body = document.getElementById("pmBody");
  swipe(body, function () {
    if (!body.classList.contains("zoom") && pmCur < PM_MAX) openGuide(pmCur + 1);
  }, function () {
    if (!body.classList.contains("zoom") && pmCur > 1) openGuide(pmCur - 1);
  });

  // Trava rolagem do fundo enquanto o modal está aberto
  var modal = document.getElementById("pmodal");
  new MutationObserver(function () {
    document.body.style.overflow = modal.classList.contains("hide") ? "" : "hidden";
  }).observe(modal, { attributes: true, attributeFilter: ["class"] });

  // Botão voltar do Android/iOS fecha o modal em vez de sair do simulado
  var origOpen = window.openGuide, origClose = window.closeGuide, pushed = false;
  window.openGuide = function (p) {
    if (!pushed) { try { history.pushState({ guide: 1 }, ""); pushed = true; } catch (e) {} }
    origOpen(p);
  };
  window.closeGuide = function () {
    origClose();
    if (pushed) { pushed = false; try { history.back(); } catch (e) {} }
  };
  window.addEventListener("popstate", function () {
    if (!modal.classList.contains("hide")) { pushed = false; origClose(); }
  });
  document.getElementById("pmClose").onclick = window.closeGuide;
  modal.onclick = function (e) { if (e.target === modal) window.closeGuide(); };
})();


/* Evita finalizar sem querer: no celular o "Finalizar" da barra só aparece
   na última questão e, em qualquer tela, pede confirmação antes de encerrar. */
(function () {
  "use strict";
  var send = document.getElementById("send");

  function sync() {
    var on = typeof S !== "undefined" && S && S.ids && !S.done && S.cur === S.ids.length - 1;
    document.body.classList.toggle("lastq", !!on);
  }
  var _u = window.updateNav;
  window.updateNav = function () { _u.apply(this, arguments); sync(); };

  var go = send.onclick;
  send.onclick = function () {
    var n = Object.keys(S.ans || {}).length, t = S.ids.length;
    var msg = n < t
      ? "Você respondeu " + n + " de " + t + " questões.\nDeseja finalizar mesmo assim?"
      : "Finalizar o simulado e ver o resultado?";
    if (!window.confirm(msg)) return;
    go.apply(this, arguments);
  };
})();

/* Alternador manual de tema (Sol e Lua) */
(function () {
  var btn = document.getElementById("themeToggle");
  if (!btn) return;

  function isSystemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  var cur = localStorage.getItem("pqo_theme"); // 'dark' | 'light' | null

  function apply(theme) {
    var isDark = theme === "dark" || (!theme && isSystemDark());
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    // Se está no escuro, o ícone mostra ☀️ para ir para o claro; se está claro, mostra 🌙 para ir ao escuro
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("title", isDark ? "Mudar para modo claro" : "Mudar para modo escuro");
  }

  apply(cur);

  btn.onclick = function () {
    var currentlyDark = document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") && isSystemDark());
    var next = currentlyDark ? "light" : "dark";
    localStorage.setItem("pqo_theme", next);
    apply(next);
  };

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (!localStorage.getItem("pqo_theme")) apply(null);
    });
  }
})();
