/* معمل JavaScript التفاعلي — UI: editor, worker runner, challenges panel */
(function (global) {
'use strict';
var CORE = global.JS_LAB_CORE;
var CHALLENGES = CORE.CHALLENGES;

var LAB_KEY = 'js-zero-lab-v1';

var inEl = document.getElementById('js-input');
var outEl = document.getElementById('js-out');
var runBtn = document.getElementById('run-js');
var clearBtn = document.getElementById('clear-out');
var missionsPanel = document.getElementById('missions-panel');

var done = {};
var activeChallenge = null;

/* ---------- persistence ---------- */
function save() {
  try {
    localStorage.setItem(LAB_KEY, JSON.stringify({ code: inEl.value, done: done }));
  } catch (e) {}
}
function load() {
  try {
    var raw = localStorage.getItem(LAB_KEY);
    if (raw) {
      var d = JSON.parse(raw);
      if (d && typeof d === 'object') {
        if (typeof d.code === 'string' && d.code !== '') inEl.value = d.code;
        done = d.done || {};
      }
    }
  } catch (e) {}
}

/* ---------- output ---------- */
function printLines(lines) {
  lines.forEach(function (l) {
    var div = document.createElement('div');
    if (l.cls) div.className = l.cls;
    div.textContent = l.text;
    outEl.appendChild(div);
  });
  outEl.scrollTop = outEl.scrollHeight;
}

/* ---------- worker-based runner (kills infinite loops) ---------- */
var workerUrl = null;
function makeWorker() {
  if (workerUrl) return workerUrl;
  var src =
    'var fmt = ' + CORE.fmt.toString() + ';\n' +
    'var run = ' + CORE.run.toString() + ';\n' +
    'onmessage = function (e) {\n' +
    '  var res = run(e.data);\n' +
    '  if (res.value !== undefined && !res.error) {\n' +
    '    res.lines.push({ text: "← " + fmt(res.value), cls: "t-ok" });\n' +
    '  }\n' +
    '  postMessage(res);\n' +
    '};\n';
  workerUrl = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
  return workerUrl;
}

var running = false;
function runCode(code, cb) {
  if (running) return;
  running = true;
  runBtn.disabled = true;
  printLines([{ text: '▶ جاري التشغيل...', cls: 't-dim' }]);
  var settled = false;
  try {
    var w = new Worker(makeWorker());
    var killer = setTimeout(function () {
      if (settled) return;
      settled = true;
      w.terminate();
      finish({ lines: [{ text: '⏱️ الكود خد وقت أطول من ثانيتين فاتوقف. غالباً عندك loop لا نهائية: راجع شرط الوقف بتاعها.', cls: 't-err' }], error: true, value: undefined });
    }, 2000);
    w.onmessage = function (e) {
      if (settled) return;
      settled = true;
      clearTimeout(killer);
      w.terminate();
      finish(e.data);
    };
    w.onerror = function () {
      if (settled) return;
      settled = true;
      clearTimeout(killer);
      w.terminate();
      finish({ lines: [{ text: 'حصل خطأ غير متوقع أثناء التشغيل.', cls: 't-err' }], error: true, value: undefined });
    };
    w.postMessage(code);
  } catch (err) {
    /* no Worker support: run in-page (no timeout protection) */
    var res = CORE.run(code);
    if (res.value !== undefined && !res.error) {
      res.lines.push({ text: '← ' + CORE.fmt(res.value), cls: 't-ok' });
    }
    finish(res);
  }
  function finish(res) {
    running = false;
    runBtn.disabled = false;
    printLines(res.lines.length ? res.lines : [{ text: '(الكود اشتغل من غير ما يطبع حاجة)', cls: 't-dim' }]);
    cb(res);
  }
}

/* ---------- challenges ---------- */
function currentChallenge() {
  for (var i = 0; i < CHALLENGES.length; i++) if (!done[CHALLENGES[i].id]) return CHALLENGES[i];
  return null;
}

function renderMissions() {
  var doneCount = Object.keys(done).length;
  var cur = currentChallenge();
  var html = '<div class="mission"><div class="m-title">🎯 تحديات التدريب (' + doneCount + '/' + CHALLENGES.length + ')</div></div>';
  CHALLENGES.forEach(function (m) {
    var isDone = !!done[m.id];
    var isCur = cur && cur.id === m.id;
    html += '<div class="mission' + (isDone ? ' done' : '') + '"' + (isCur ? ' style="border-color:rgba(122,167,255,.6)"' : '') + '>' +
      '<div class="m-title">' + (isDone ? '<span class="m-check">✓</span>' : '') + escText(m.title) + '</div>' +
      '<p>' + escText(m.desc) + '</p>' +
      '<div class="lab-actions">' +
      '<button class="solution-toggle" data-act="start" data-id="' + m.id + '">' + (isDone ? 'جرب تاني' : 'ابدأ التحدي') + '</button>' +
      '<button class="solution-toggle" data-act="sol" data-id="' + m.id + '">أظهر الحل</button>' +
      '</div></div>';
  });
  missionsPanel.innerHTML = html;
  missionsPanel.querySelectorAll('button[data-act]').forEach(function (b) {
    b.addEventListener('click', function () {
      var m = null;
      CHALLENGES.forEach(function (c) { if (c.id === b.dataset.id) m = c; });
      if (!m) return;
      if (b.dataset.act === 'start') {
        inEl.value = m.starter;
        activeChallenge = m.id;
        printLines([{ text: '🎯 تحدي نشط: ' + m.title + ' — عدّل الكود واضغط شغّل، وهنقارن الناتج بالمطلوب.', cls: 't-hint' }]);
      } else {
        inEl.value = m.solution;
        printLines([{ text: '💡 ده الحل النموذجي لتحدي "' + m.title + '". شغّله وشوف الناتج، وبعدين حاول تكتبه بنفسك.', cls: 't-hint' }]);
      }
      save();
      inEl.focus();
    });
  });
}

function escText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function afterRun(res) {
  if (!activeChallenge) return;
  var m = null;
  CHALLENGES.forEach(function (c) { if (c.id === activeChallenge) m = c; });
  if (!m) return;
  if (done[m.id]) return;
  var verdict = CORE.checkChallenge(m, inEl.value);
  if (verdict.pass) {
    done[m.id] = true;
    save();
    renderMissions();
    var nxt = currentChallenge();
    printLines([{ text: '✅ صح! خلصت تحدي "' + m.title + '".' + (nxt ? ' حملنا لك التحدي اللي بعده: ' + nxt.title : ' خلصت كل التحديات، وحش! 🏆'), cls: 't-ok' }]);
    if (!nxt) {
      activeChallenge = null;
    } else {
      activeChallenge = nxt.id;
      inEl.value = nxt.starter;
      save();
    }
  } else {
    printLines([{ text: '❌ لسه: ' + verdict.reason, cls: 't-err' }]);
  }
}

/* ---------- wire up ---------- */
runBtn.addEventListener('click', function () {
  runCode(inEl.value, afterRun);
  save();
});
inEl.addEventListener('input', save);
inEl.addEventListener('keydown', function (ev) {
  if ((ev.ctrlKey || ev.metaKey) && ev.key === 'Enter') {
    ev.preventDefault();
    runCode(inEl.value, afterRun);
    save();
  }
});
clearBtn.addEventListener('click', function () { outEl.innerHTML = ''; });
document.getElementById('term').addEventListener('click', function () { inEl.focus(); });
document.getElementById('reset-lab').addEventListener('click', function () {
  inEl.value = CORE.DEFAULT_CODE;
  outEl.innerHTML = '';
  activeChallenge = null;
  bootText();
  save();
  inEl.focus();
});
document.getElementById('missions-toggle').addEventListener('click', function () {
  missionsPanel.hidden = !missionsPanel.hidden;
  if (!missionsPanel.hidden) renderMissions();
});

function bootText() {
  printLines([
    { text: 'أهلاً بيك في معمل JavaScript 👋', cls: 't-hint' },
    { text: 'اكتب كود في المحرر واضغط "شغّل الكود" أو Ctrl+Enter. النتيجة بتظهر هنا.', cls: 't-dim' }
  ]);
  var m = currentChallenge();
  if (m) printLines([{ text: '🎯 التحدي الحالي: ' + m.title + ' — ' + m.desc, cls: 't-hint' }]);
}

global.JS_LAB_FOCUS = function () { inEl.focus(); };

load();
bootText();
renderMissions();

global.JS_LAB = { CHALLENGES: CHALLENGES };
})(typeof window !== 'undefined' ? window : globalThis);
