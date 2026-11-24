/* معمل JavaScript التفاعلي — core: runner + challenges (no DOM, testable in node) */
(function (global) {
'use strict';

/* ---------- value formatting (same in browser and node) ---------- */
function fmt(v) {
  if (typeof v === 'string') return v;
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  if (typeof v === 'function') return String(v);
  if (typeof v === 'object') {
    try {
      var s = JSON.stringify(v);
      if (s !== undefined) return s;
    } catch (e) { /* circular -> fall through */ }
    return String(v);
  }
  return String(v);
}

/* ---------- run code, capture console + return value (sync only) ---------- */
function run(code) {
  var lines = [];
  function push(cls) {
    return function () {
      var parts = [];
      for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]));
      lines.push({ text: parts.join(' '), cls: cls });
    };
  }
  var fakeConsole = {
    log: push(''), info: push(''), debug: push('t-dim'),
    warn: push('t-warn'), error: push('t-err')
  };
  var value;
  try {
    var fn = new Function('console', '"use strict";\n' + code);
    value = fn(fakeConsole);
  } catch (e) {
    lines.push({ text: String((e && e.name) || 'Error') + ': ' + ((e && e.message) || e), cls: 't-err' });
    return { lines: lines, error: true, value: undefined };
  }
  return { lines: lines, error: false, value: value };
}

/* ---------- normalize console output for challenge checking ---------- */
function outText(result) {
  return result.lines.map(function (l) { return l.text; }).join('\n').replace(/\s+$/g, '');
}

function checkChallenge(ch, code) {
  var res = run(code);
  if (res.error) {
    return { pass: false, res: res, reason: 'الكود فيه خطأ. اقرأ رسالة الخطأ في الكونسول وحاول تاني.' };
  }
  var got = outText(res);
  var want = String(ch.expected).replace(/\s+$/g, '');
  if (got === want) return { pass: true, res: res };
  return {
    pass: false, res: res,
    reason: got === ''
      ? 'الكونسول فاضي. لازم تطبع الناتج المطلوب بـ console.log.'
      : 'الناتج مش زي المطلوب. قارن سطر سطر: المطلوب موضح في وصف التحدي.'
  };
}

/* ---------- guided challenges (expected outputs verified by real execution) ---------- */
var CHALLENGES = [
  { id: 'hello', title: 'أول طباعة',
    desc: 'اطبع الجملة دي بالظبط في الكونسول: أهلاً يا عالم',
    starter: "// اطبع الجملة المطلوبة بـ console.log\nconsole.log('');\n",
    solution: "console.log('أهلاً يا عالم');",
    expected: 'أهلاً يا عالم' },
  { id: 'math', title: 'حاسبة سريعة',
    desc: 'احسب 17 × 24 واطبع الناتج (رقم واحد بس).',
    starter: "// اضرب 17 في 24 واطبع الناتج\n",
    solution: "console.log(17 * 24);",
    expected: '408' },
  { id: 'vars', title: 'متغيرات ونصوص',
    desc: 'عرّف const باسم city قيمتها القاهرة، وبعدين اطبع: أنا من القاهرة',
    starter: "// عرّف المتغير واطبع الجملة\n",
    solution: "const city = 'القاهرة';\nconsole.log('أنا من ' + city);",
    expected: 'أنا من القاهرة' },
  { id: 'even-odd', title: 'زوجي ولا فردي؟',
    desc: 'عندك الرقم 42. لو زوجي اطبع زوجي، ولو فردي اطبع فردي (استخدم if والباقي %).',
    starter: "const n = 42;\n// لو n زوجي اطبع 'زوجي' غير كده اطبع 'فردي'\n",
    solution: "const n = 42;\nif (n % 2 === 0) {\n  console.log('زوجي');\n} else {\n  console.log('فردي');\n}",
    expected: 'زوجي' },
  { id: 'sum-100', title: 'مجموع المية',
    desc: 'اجمع كل الأرقام من 1 لـ 100 باستخدام for loop واطبع المجموع.',
    starter: "let sum = 0;\n// كمّل اللوب\nconsole.log(sum);\n",
    solution: "let sum = 0;\nfor (let i = 1; i <= 100; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    expected: '5050' },
  { id: 'square-fn', title: 'اكتب function',
    desc: 'اكتب function اسمها square بتاخد رقم وترجع مربعه، وبعدين اطبع square(12).',
    starter: "// عرّف square هنا\n\nconsole.log(square(12));\n",
    solution: "function square(n) {\n  return n * n;\n}\nconsole.log(square(12));",
    expected: '144' },
  { id: 'fizzbuzz', title: 'FizzBuzz المصري',
    desc: 'اطبع الأرقام من 1 لـ 15 سطر بسطر، بس اللي يقبل القسمة على 3 اطبع مكانه Fizz، وعلى 5 اطبع Buzz، وعلى الاتنين FizzBuzz.',
    starter: "for (let i = 1; i <= 15; i++) {\n  // FizzBuzz هنا\n}\n",
    solution: "for (let i = 1; i <= 15; i++) {\n  if (i % 15 === 0) console.log('FizzBuzz');\n  else if (i % 3 === 0) console.log('Fizz');\n  else if (i % 5 === 0) console.log('Buzz');\n  else console.log(i);\n}",
    expected: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' },
  { id: 'sort-arr', title: 'رتّب المصفوفة',
    desc: 'عندك المصفوفة دي: [3, 7, 2, 9, 4]. رتّبها تصاعدياً واطبعها سطر واحد مفصولة بفواصل من غير مسافات.',
    starter: "const nums = [3, 7, 2, 9, 4];\n// رتّب واطبع مثال الشكل: 1,2,3\n",
    solution: "const nums = [3, 7, 2, 9, 4];\nnums.sort(function (a, b) { return a - b; });\nconsole.log(nums.join(','));",
    expected: '2,3,4,7,9' },
  { id: 'student-obj', title: 'كائن طالب',
    desc: 'اعمل object فيه name بقيمة علي و grade بقيمة 95، واطبع بالظبط: علي: 95',
    starter: "// عرّف الـ object واطبع السطر المطلوب\n",
    solution: "const student = { name: 'علي', grade: 95 };\nconsole.log(student.name + ': ' + student.grade);",
    expected: 'علي: 95' },
  { id: 'strings', title: 'لعبة النصوص',
    desc: 'عندك النص javascript. اطبع في سطرين: السطر الأول النص بحروف كبيرة (capital)، والتاني عدد حروفه.',
    starter: "const word = 'javascript';\n// سطرين: الحروف الكبيرة ثم الطول\n",
    solution: "const word = 'javascript';\nconsole.log(word.toUpperCase());\nconsole.log(word.length);",
    expected: 'JAVASCRIPT\n10' },
  { id: 'even-squares', title: 'مربعات الأزواج',
    desc: 'احسب مجموع مربعات الأرقام الزوجية من 1 لـ 10 واطبع الناتج. (ممكن map و filter و reduce، أو لوب عادية).',
    starter: "// مجموع: 2² + 4² + 6² + 8² + 10²\n",
    solution: "const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst total = nums\n  .filter(function (n) { return n % 2 === 0; })\n  .map(function (n) { return n * n; })\n  .reduce(function (acc, n) { return acc + n; }, 0);\nconsole.log(total);",
    expected: '220' },
  { id: 'countdown', title: 'العد التنازلي',
    desc: 'اطبع عد تنازلي من 5 لـ 1 (كل رقم في سطر) وبعدين في السطر الأخير اطبع: انطلق!',
    starter: "// لوب من 5 لـ 1 وبعدين رسالة الانطلاق\n",
    solution: "for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log('انطلق!');",
    expected: '5\n4\n3\n2\n1\nانطلق!' }
];

var DEFAULT_CODE = "// اكتب كود JavaScript هنا واضغط: شغّل الكود\nconsole.log('أهلاً يا عالم');\n";

global.JS_LAB_CORE = {
  fmt: fmt,
  run: run,
  outText: outText,
  checkChallenge: checkChallenge,
  CHALLENGES: CHALLENGES,
  DEFAULT_CODE: DEFAULT_CODE
};
global.JS_LAB_META = { challenges: CHALLENGES.length };
})(typeof window !== 'undefined' ? window : globalThis);
