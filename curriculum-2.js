/* Curriculum part 2: objects, DOM selection, DOM events, forms, timers, fetch, capstone */
var CURRICULUM = window.CURRICULUM || [];
CURRICULUM.push(
{
  id: 'objects',
  nav: 'الكائنات',
  title: 'الكائنات: بيانات ليها أسماء',
  subtitle: 'objects و methods و this ببساطة، و JSON اللي بيسافر بيه الداتا',
  blocks: [
    { type: 'p', text: 'المصفوفة بتخزن قائمة مرقمة. الكائن (object) بيخزن بيانات ليها أسماء: كل قيمة ليها مفتاح (key). طالب واحد بكل بياناته مثلاً: اسم وسن ومدينة، كلها في كائن واحد.' },
    { type: 'code', code: `const student = {
  name: 'علي',
  age: 20,
  city: 'القاهرة'
};
console.log(student.name);  // علي
console.log(student['age']); // 20
console.log(student.city);  // القاهرة` },
    { type: 'p', text: 'الوصول بنقطة `.` هو الشائع. الأقواس المربعة بتنفع لما المفتاح يكون في متغير أو فيه مسافات.' },
    { type: 'code', code: `const student = { name: 'علي', age: 20 };
student.grade = 95;        // إضافة مفتاح جديد
student.age = 21;          // تعديل قيمة
delete student.grade;      // حذف مفتاح
console.log(student.email); // undefined ← مفتاح مش موجود` },
    { type: 'h', text: 'objects جوه مصفوفات: أشهر شكل للبيانات' },
    { type: 'code', code: `const students = [
  { name: 'علي', grade: 95 },
  { name: 'منى', grade: 88 },
  { name: 'كريم', grade: 72 }
];
const top = students.filter(s => s.grade >= 85);
console.log(top.length);       // 2
console.log(top[0].name);      // علي` },
    { type: 'h', text: 'methods: functions جوه الكائن' },
    { type: 'code', code: `const user = {
  name: 'سارة',
  sayHi: function () {
    return 'أهلاً، أنا ' + this.name;
  }
};
console.log(user.sayHi()); // أهلاً، أنا سارة` },
    { type: 'p', text: '`this` جوه method بتشاور على الكائن نفسه اللي اتنادت منه. خليها بسيطة دلوقتي: this يعني "الكائن ده".' },
    { type: 'h', text: 'JSON: شكل البيانات وهي مسافرة' },
    { type: 'code', code: `const user = { name: 'علي', age: 20 };
const text = JSON.stringify(user);
console.log(text); // {"name":"علي","age":20}

const back = JSON.parse(text);
console.log(back.name); // علي` },
    { type: 'p', text: 'JSON هو التنسيق اللي بتتبعت بيه البيانات بين المتصفح والسيرفرات وبتتخزن بيه (زي ما الموقع ده بيحفظ تقدمك). `JSON.stringify` بيحول الكائن لنص، و `JSON.parse` بيرجعه كائن تاني.' }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const u = { name: 'علي', age: 25 };
console.log(u.name);`, options: [
      { text: 'علي', mono: true },
      { text: 'name', mono: true },
      { text: '25', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'الوصول بنقطة بيجيب قيمة المفتاح name وهي علي.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const u = { name: 'علي' };
console.log(u.city);`, options: [
      { text: 'undefined', mono: true },
      { text: 'null', mono: true },
      { text: 'خطأ: city مش موجودة', mono: true },
      { text: 'علي', mono: true }
    ], answer: 0, explain: 'قراءة مفتاح مش موجود بترجع undefined، مش خطأ. دي ميزة ومصيدة في نفس الوقت: راقب الأخطاء الإملائية في أسماء المفاتيح.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const u = { name: 'علي', age: 25 };
console.log(Object.keys(u).length);`, options: [
      { text: '2', mono: true },
      { text: '1', mono: true },
      { text: 'name,age', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'Object.keys بترجع مصفوفة فيها أسماء المفاتيح، وطولها هنا 2.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `console.log(JSON.stringify({ a: 1 }));`, options: [
      { text: '{"a":1}', mono: true },
      { text: '{ a: 1 }', mono: true },
      { text: '[object Object]', mono: true },
      { text: 'a=1', mono: true }
    ], answer: 0, explain: 'JSON.stringify بيحول الكائن لنص بصيغة JSON: المفاتيح بين علامتي تنصيص مزدوجة ومن غير مسافات.' }
  ],
  exercises: [
    { task: 'اعمل object لكتاب فيه title و author و pages، واطبع جملة بالشكل: كتاب X لـ Y عدد صفحاته Z', code: `const book = {
  title: 'مقدمة ابن خلدون',
  author: 'ابن خلدون',
  pages: 640
};
console.log('كتاب ' + book.title + ' لـ ' + book.author + ' عدد صفحاته ' + book.pages);
// الناتج: كتاب مقدمة ابن خلدون لـ ابن خلدون عدد صفحاته 640`, why: 'بنلصق قيم المفاتيح في جملة واحدة بـ +. لو عندك كتب كتير، اعمل مصفوفة objects واطبع كل واحد بـ for...of.' },
    { task: 'عندك مصفوفة طلاب objects فيها name و grade لكل واحد. اطبع أسماء الطلاب اللي درجتهم فوق 80 بس.', code: `const students = [
  { name: 'علي', grade: 95 },
  { name: 'منى', grade: 76 },
  { name: 'كريم', grade: 84 }
];
for (const s of students) {
  if (s.grade > 80) {
    console.log(s.name);
  }
}
// الناتج:
// علي
// كريم`, why: 'دمجنا لوب على مصفوفة مع شرط على مفتاح جوه كل object. نفس المنطق ده هتستخدمه مع filter: students.filter(s => s.grade > 80).' }
  ]
},
{
  id: 'dom-select',
  nav: 'DOM: قراءة وتعديل الصفحة',
  title: 'DOM: JavaScript بتمسك الصفحة',
  subtitle: 'querySelector وتغيير النص والكلاسات والستايل، من الكود للصفحة مباشرة',
  blocks: [
    { type: 'p', text: 'لحد هنا كنا بنطبع في الكونسول. المتعة الحقيقية بتبدأ لما JavaScript تمسك عناصر الصفحة نفسها وتغيرها. المتصفح بيحول HTML لشجرة عناصر اسمها DOM (Document Object Model)، وكل عنصر فيها بقى object تقدر تقراه وتعدله.' },
    { type: 'code', browser: true, code: `<h1 id="title">أهلاً</h1>
<button id="btn">غيّر العنوان</button>

<script>
  const h1 = document.querySelector('#title');
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function () {
    h1.textContent = 'JavaScript شغالة!';
  });
</script>` },
    { type: 'p', text: '`document.querySelector` بترجع أول عنصر يطابق أي selector من CSS: `#title` للـ id، `.card` للـ class، `p` لاسم الوسم. لو مفيش عنصر مطابق بترجع null.' },
    { type: 'h', text: 'تغيير المحتوى والشكل' },
    { type: 'code', browser: true, code: `const box = document.querySelector('.box');

box.textContent = 'نص جديد';        // يغير النص بأمان
box.innerHTML = '<b>نص غامق</b>';   // يحط HTML جواه
box.style.color = 'red';            // يغير ستايل مباشر
box.classList.add('active');        // يضيف كلاس
box.classList.remove('hidden');     // يشيل كلاس
box.classList.toggle('open');       // يبدل الكلاس` },
    { type: 'note', warn: true, text: 'فضل textContent على innerHTML لما بتعرض نص جاي من المستخدم. innerHTML بتنفذ أي وسوم في النص، ولو النص فيه script خبيث ممكن يتنفذ (ثغرة اسمها XSS). القاعدة: نص من المستخدم؟ textContent.' },
    { type: 'h', text: 'عناصر كتير مرة واحدة' },
    { type: 'code', browser: true, code: `const items = document.querySelectorAll('.item');
items.forEach(function (el, i) {
  el.textContent = 'عنصر رقم ' + (i + 1);
});` },
    { type: 'p', text: '`querySelectorAll` بترجع كل العناصر المطابقة في قائمة تقدر تلف عليها بـ forEach. الفرق عن querySelector إنها مش أول عنصر بس.' },
    { type: 'h', text: 'قراءة قيم المدخلات' },
    { type: 'code', browser: true, code: `const input = document.querySelector('#name');
console.log(input.value);   // اللي مكتوب في الخانة دلوقتي` }
  ],
  quiz: [
    { q: 'عايز تمسك العنصر اللي id بتاعه title. تكتب إيه؟', options: [
      { text: "document.querySelector('#title')", mono: true },
      { text: "document.querySelector('title')", mono: true },
      { text: "document.querySelector('.title')", mono: true },
      { text: "document.getElementById('.title')", mono: true }
    ], answer: 0, explain: 'querySelector بتاخد selector زي CSS بالظبط: الـ id بيتحط قبله #. و getElementById بتاخد الاسم من غير أي رموز.' },
    { q: 'إيه الفرق بين textContent و innerHTML؟', options: [
      { text: 'textContent بيحط نص بس بأمان، و innerHTML بيفسر الوسوم كـ HTML فعلي' },
      { text: 'مفيش فرق، الاتنين نفس الشغلانة وبيفسروا الوسوم بنفس الطريقة' },
      { text: 'innerHTML للنصوص العادية و textContent للأكواد والرموز الخاصة' },
      { text: 'textContent أسرع في الأداء بس، ومفيش فرق في الأمان أو التفسير' }
    ], answer: 0, explain: 'innerHTML بتنفذ الوسوم اللي في النص، فمع مدخلات المستخدم ممكن تبقى ثغرة. النص العادي يتحط بـ textContent.' },
    { q: 'querySelectorAll رجعتلك قائمة عناصر. إزاي تعدل كل عنصر فيهم؟', options: [
      { text: 'ألف عليهم بـ forEach وأعدل كل عنصر لوحده' },
      { text: 'أعدل القائمة نفسها مرة واحدة بـ textContent' },
      { text: 'مستحيل، لازم querySelector عادي' },
      { text: 'أستخدم innerHTML على الـ document كله' }
    ], answer: 0, explain: 'القائمة مش عنصر واحد، فمش هينفع تعدلها كأنها عنصر. بتلف عليها وتتعامل مع كل عنصر على حدة.' },
    { q: 'querySelector ملقاش العنصر اللي طلبته. بترجع إيه؟', options: [
      { text: 'null' },
      { text: 'undefined' },
      { text: 'مصفوفة فاضية' },
      { text: 'خطأ ويوقف الكود' }
    ], answer: 0, explain: 'بترجع null. لو حاولت بعدها تعمل null.textContent هيطلع خطأ، فاتأكد إن العنصر موجود فعلاً.' }
  ],
  exercises: [
    { task: 'اعمل صفحة فيها h1 وزرار، ولما تدوس الزرار يتغير نص الـ h1 ويتضاف عليه كلاس اسمه big.', browser: true, code: `<h1 id="title">عنوان عادي</h1>
<button id="btn">كبّر العنوان</button>
<style>.big { font-size: 48px; color: #3b82f6; }</style>
<script>
  const h1 = document.querySelector('#title');
  document.querySelector('#btn').addEventListener('click', function () {
    h1.textContent = 'عنوان كبير!';
    h1.classList.add('big');
  });
</script>`, why: 'خطوتين في حدث واحد: تغيير النص بـ textContent وإضافة كلاس جاهز بـ classList.add. الفصل ده (JS يبدل كلاس و CSS يحدد شكله) أنضف من تغيير style من الكود.' },
    { task: 'عندك ul فيها 3 li بالكلاس item. اكتب كود يحول نص كل واحد فيهم لـ "مهمة رقم 1" و "مهمة رقم 2" وهكذا.', browser: true, code: `<ul>
  <li class="item">؟</li>
  <li class="item">؟</li>
  <li class="item">؟</li>
</ul>
<script>
  document.querySelectorAll('.item').forEach(function (el, i) {
    el.textContent = 'مهمة رقم ' + (i + 1);
  });
</script>`, why: 'forEach بتديك العنصر ورقمه i (من 0)، فبنضيف 1 عشان العد يبدأ من 1 زي البشر.' }
  ]
},
{
  id: 'dom-events',
  nav: 'الأحداث',
  title: 'الأحداث: الصفحة بترد عليك',
  subtitle: 'addEventListener، أنواع الأحداث، الـ event object، وإضافة عناصر جديدة',
  blocks: [
    { type: 'p', text: 'الحدث (event) هو أي حاجة بتحصل في الصفحة: ضغطة زرار، كتابة في خانة، حركة ماوس، تحميل الصفحة. `addEventListener` بتقول للمتصفح: أول ما الحدث ده يحصل على العنصر ده، نفذ الـ function دي.' },
    { type: 'code', browser: true, code: `const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  console.log('اتداس عليا!');
});` },
    { type: 'h', text: 'أحداث هتستخدمها كل يوم' },
    { type: 'table', head: ['الحدث', 'بيحصل امتى'], rows: [
      ['click', 'ضغطة على عنصر'],
      ['input', 'كل حرف بيتكتب في خانة'],
      ['submit', 'إرسال فورم'],
      ['keydown', 'ضغطة زرار من الكيبورد'],
      ['change', 'قيمة select أو checkbox اتغيرت']
    ] },
    { type: 'h', text: 'مثال كامل: عداد' },
    { type: 'code', browser: true, code: `<p>العداد: <span id="count">0</span></p>
<button id="plus">+1</button>
<script>
  let count = 0;
  const span = document.querySelector('#count');
  document.querySelector('#plus').addEventListener('click', function () {
    count++;
    span.textContent = count;
  });
</script>` },
    { type: 'p', text: 'لاحظ النمط: المتغير `count` هو "الحالة"، والحدث بيغير الحالة، وبعدين بنعكس الحالة على الصفحة. الفكرة دي (حالة ← حدث ← تحديث العرض) هي أساس كل تطبيقات الويب.' },
    { type: 'h', text: 'الـ event object' },
    { type: 'code', browser: true, code: `const input = document.querySelector('#search');
input.addEventListener('input', function (event) {
  console.log(event.target.value); // المكتوب لحد دلوقتي
});

document.addEventListener('keydown', function (event) {
  console.log(event.key); // اسم الزرار اللي اتداس
});` },
    { type: 'p', text: 'المتصفح بيبعت للـ function object فيه تفاصيل الحدث. أهم خاصيتين: `event.target` (العنصر اللي حصل عليه الحدث) و `event.key` (اسم الزرار في أحداث الكيبورد).' },
    { type: 'h', text: 'إنشاء عناصر جديدة' },
    { type: 'code', browser: true, code: `const li = document.createElement('li');
li.textContent = 'مهمة جديدة';
document.querySelector('#list').appendChild(li);` },
    { type: 'p', text: 'بـ `createElement` و `appendChild` تقدر تضيف عناصر للصفحة أثناء التشغيل. دي الطريقة اللي بتتعمل بيها قوائم المهام ونتايج البحث والتعليقات.' }
  ],
  quiz: [
    { q: 'إيه الكود الصح عشان تنفذ function لما حد يدوس على زرار؟', options: [
      { text: "btn.addEventListener('click', myFunc)", mono: true },
      { text: "btn.onClick('myFunc')", mono: true },
      { text: "addEventListener(btn, 'click', myFunc)", mono: true },
      { text: "btn.click = myFunc()", mono: true }
    ], answer: 0, explain: 'addEventListener بتتنده على العنصر نفسه: اسم الحدث نص، والـ function تتبعت من غير أقواس استدعاء. كتابة myFunc() مع أقواس بتشغلها فوراً بدل ما تسجلها.' },
    { q: 'إيه الفرق بين حدث input و حدث change؟', options: [
      { text: 'input بيحصل مع كل حرف بيتكتب، و change بعد ما القيمة تستقر وتسيب الخانة' },
      { text: 'مفيش فرق نهائياً، الحدثين بيتنفذوا في نفس اللحظة مع كل ضغطة' },
      { text: 'input للكيبورد و change للماوس، وبيتحددوا حسب جهاز الإدخال' },
      { text: 'change أسرع بس في التنفيذ، و input بيتأخر لحد ما المتصفح يخلص' }
    ], answer: 0, explain: 'لو عايز تفاعل لحظي (زي عداد حروف) استخدم input. لو عايز تتصرف بعد ما المستخدم يخلص استخدم change.' },
    { q: 'في event.target.value، إيه target بالظبط؟', options: [
      { text: 'العنصر اللي حصل عليه الحدث نفسه' },
      { text: 'أول عنصر في الصفحة اللي ليه نفس الـ id وبيتمسك تلقائياً' },
      { text: 'الزرار اللي في الفورم دايماً حتى لو الحدث على حقل تاني' },
      { text: 'الـ document كله بعد ما الصفحة تتحمل وقبل ما تتعرض' }
    ], answer: 0, explain: 'target هو العنصر اللي وقع عليه الحدث، فـ event.target.value بتديك قيمة الخانة اللي اتكتب فيها مثلاً.' },
    { q: 'إزاي تضيف li جديدة لقايمة موجودة؟', options: [
      { text: 'createElement يعمل العنصر، تحط محتواه، وبعدين appendChild يلحقه بالقايمة' },
      { text: 'document.add(li) على طول وهي بتضيف العنصر في آخر الصفحة' },
      { text: 'innerHTML += على أي عنصر في الصفحة وهو بيضيف li للقايمة لوحده' },
      { text: 'العناصر الجديدة مابتتعملش من JavaScript، بتتعمل في ملف HTML بس' }
    ], answer: 0, explain: 'الثلاث خطوات: إنشاء بـ createElement، تعبئة المحتوى، إلحاق بـ appendChild. جربها في المشروع الختامي.' }
  ],
  exercises: [
    { task: 'اعمل عداد بزرارين: واحد يزود وواحد ينقص، والرقم يظهر في span.', browser: true, code: `<p>العداد: <span id="count">0</span></p>
<button id="plus">+1</button>
<button id="minus">-1</button>
<script>
  let count = 0;
  const span = document.querySelector('#count');
  document.querySelector('#plus').addEventListener('click', function () {
    count++;
    span.textContent = count;
  });
  document.querySelector('#minus').addEventListener('click', function () {
    count--;
    span.textContent = count;
  });
</script>`, why: 'حالة واحدة (count) وحدثين بيغيروها، وبعد كل تغيير بنحدث العرض. نفس البنية دي هتلاقيها في أي counter أو score في أي تطبيق.' },
    { task: 'اعمل خانة input وتحتها p تعرض اللي بيتكتب لحظة بلحظة (مرآة فورية).', browser: true, code: `<input id="name" placeholder="اكتب اسمك">
<p>أهلاً يا <span id="mirror">...</span></p>
<script>
  const input = document.querySelector('#name');
  const mirror = document.querySelector('#mirror');
  input.addEventListener('input', function (event) {
    mirror.textContent = event.target.value || '...';
  });
</script>`, why: 'حدث input بيشتغل مع كل حرف، فالمرآة بتحدث فوراً. الجزء || \'...\' بيرجع النص الافتراضي لما الخانة تفضى.' }
  ]
},
{
  id: 'forms',
  nav: 'الفورمز والتحقق',
  title: 'الفورمز والتحقق من المدخلات',
  subtitle: 'preventDefault، قراءة القيم، والتحقق قبل الإرسال',
  blocks: [
    { type: 'p', text: 'الفورم هو بوابة المستخدم لإدخال بيانات: تسجيل دخول، بحث، طلب. من غير JavaScript، إرسال الفورم بيعمل reload للصفحة كلها. أول مهارة: منع السلوك الافتراضي والتحكم بنفسك.' },
    { type: 'code', browser: true, code: `const form = document.querySelector('#login');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // وقف الـ reload
  // هنا نقرأ القيم ونتصرف
});` },
    { type: 'p', text: '`event.preventDefault()` بيوقف السلوك الافتراضي بتاع الحدث. مع submit يعني: الصفحة مش هتعمل reload وانت اللي هتقرر يحصل إيه بالبيانات.' },
    { type: 'h', text: 'مثال كامل: فورم مع تحقق' },
    { type: 'code', browser: true, code: `<form id="reg">
  <input id="username" placeholder="اسم المستخدم">
  <input id="age" type="number" placeholder="السن">
  <button type="submit">سجّل</button>
  <p id="msg"></p>
</form>
<script>
  const form = document.querySelector('#reg');
  const msg = document.querySelector('#msg');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#username').value.trim();
    const age = Number(document.querySelector('#age').value);
    if (name.length < 3) {
      msg.textContent = 'الاسم لازم يكون 3 حروف على الأقل';
      return;
    }
    if (isNaN(age) || age < 13) {
      msg.textContent = 'السن لازم يكون 13 أو أكتر';
      return;
    }
    msg.textContent = 'تمام يا ' + name + '! تم التسجيل';
  });
</script>` },
    { type: 'list', items: [
      '`value` بتجيب اللي في الخانة كنص دايماً، حتى لو type="number". حوله بـ Number().',
      '`trim()` بتشيل المسافات من الأطراف عشان "   " ماتتحسبش اسم.',
      '`return` بعد كل رسالة خطأ بيوقف باقي الكود: مفيش داعي نكمل فحص لو أول شرط وقع.',
      'رسالة الخطأ بتظهر في عنصر موجود بدل alert المزعجة.'
    ] },
    { type: 'note', warn: true, text: 'التحقق في المتصفح للراحة بس، مش للأمان: أي حد يقدر يعدله من أدوات المطور. التحقق الحقيقي لازم يتعمل على السيرفر كمان. بس للمستخدم العادي، التحقق الفوري بيوفر عليه رحلة submit وفشل.' },
    { type: 'h', text: 'خصائص HTML بتساعدك' },
    { type: 'code', browser: true, code: `<input required minlength="3" type="email" placeholder="إيميلك">` },
    { type: 'p', text: 'المتصفح نفسه بيعمل تحقق أساسي بخصائص زي `required` و `minlength` و `type="email"`. استخدمها أولاً، وضيف تحقق JavaScript للقواعد الخاصة بيك.' }
  ],
  quiz: [
    { q: 'إيه وظيفة event.preventDefault() في حدث submit؟', options: [
      { text: 'بتمنع السلوك الافتراضي: الصفحة مش هتعمل reload وانت تتحكم في اللي يحصل' },
      { text: 'بتمنع المستخدم من الكتابة في الفورم لحد ما يتأكد من البيانات' },
      { text: 'بتمسح كل قيم الفورم بعد ما المستخدم يضغط على زرار الإرسال' },
      { text: 'بتقفل المتصفح مؤقتاً لحد ما السيرفر يرد على الطلب' }
    ], answer: 0, explain: 'من غيرها، submit بيعمل reload وتضيع أي حالة في الصفحة. مع preventDefault انت اللي بتقرر: تحقق، إرسال بالخلفية، أو أي حاجة تانية.' },
    { q: 'خانة input نوعها number. إيه نوع القيمة اللي بترجعها input.value؟', options: [
      { text: 'string دايماً، ولازم نحولها بـ Number() لو هنحسب بيها' },
      { text: 'number جاهزة على طول، فمتحتاجش تحول لأي نوع قبل ما تحسب بيها' },
      { text: 'bigint لو الرقم كبير، و number لو الرقم صغير بحسب حجمه' },
      { text: 'بتختلف حسب المتصفح اللي بيشتغل بيه المستخدم ونسخته' }
    ], answer: 0, explain: 'value بترجع نص حتى من خانات الأرقام. 5 + 5 من inputين هتطلع "55" لو ما حولتش.' },
    { q: 'ليه بنستخدم trim() قبل التحقق من النصوص؟', options: [
      { text: 'عشان مسافات زي "   " ماتتحسبش قيمة صحيحة' },
      { text: 'عشان الكود يبقى أسرع في التنفيذ ومياخدش وقت في المراجعة' },
      { text: 'عشان نمنع الحروف العربية من الدخول في الخانة اللي بنفحصها' },
      { text: 'مش ليها فايدة حقيقية، مجرد عادة عند ناس كتير في الكتابة' }
    ], answer: 0, explain: '"   " طولها 3 وبتعدي شرط length < 3. trim بتشيل المسافات من الطرفين فتكشف الخانة الفاضية الحقيقية.' },
    { q: 'التحقق في المتصفح كافي لوحده لحماية التطبيق؟', options: [
      { text: 'لا: هو لتحسين تجربة المستخدم، والتحقق الحقيقي لازم يتعمل على السيرفر' },
      { text: 'أيوه: المتصفح بيمنع أي بيانات غلط نهائياً فمفيش داعي نراجع تاني' },
      { text: 'أيوه بس مع type="password" في الحقول الحساسة، وبعدها بتكفي' },
      { text: 'لا: لأن JavaScript بطيئة في التحقق وبتحتاج أدوات تانية' }
    ], answer: 0, explain: 'أي حد يقدر يوقف أو يعدل كود الصفحة من أدوات المطور. تحقق المتصفح للراحة، وتحقق السيرفر للأمان.' }
  ],
  exercises: [
    { task: 'اعمل فورم تسجيل دخول بسيط: إيميل وباسورد، ولو أي واحدة فاضية اعرض رسالة خطأ، ولو مليانين اعرض "جاري تسجيل الدخول...".', browser: true, code: `<form id="login">
  <input id="email" type="email" placeholder="إيميلك">
  <input id="pass" type="password" placeholder="الباسورد">
  <button type="submit">دخول</button>
  <p id="msg"></p>
</form>
<script>
  document.querySelector('#login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const pass = document.querySelector('#pass').value;
    const msg = document.querySelector('#msg');
    if (email === '' || pass === '') {
      msg.textContent = 'املأ الخانتين الأول';
      return;
    }
    msg.textContent = 'جاري تسجيل الدخول...';
  });
</script>`, why: 'أبسط تحقق: الرفض على القيم الفاضية. لاحظ إن الباسورد منعملهاش trim عشان المسافة ممكن تكون جزء منها فعلاً.' },
    { task: 'ضيف تحقق إن خانة الإيميل فيها @ ونقطة بعدها، واعرض رسالة واضحة لو مش موجودين.', browser: true, code: `const email = document.querySelector('#email').value.trim();
const at = email.indexOf('@');
const dot = email.lastIndexOf('.');
if (at < 1 || dot < at + 2) {
  msg.textContent = 'صيغة الإيميل مش صحيحة';
  return;
}`, why: 'من غير regex معقد: لازم @ تكون مش أول حرف، والنقطة تيجي بعدها بمكانين على الأقل. ده تحقق تقريبي كافي للتجربة، والتحقق النهائي دايماً على السيرفر.' }
  ]
},
{
  id: 'timers',
  nav: 'المؤقتات',
  title: 'المؤقتات والوقت',
  subtitle: 'setTimeout و setInterval، وإزاي توقفهم، وقراءة التاريخ والساعة',
  blocks: [
    { type: 'p', text: 'JavaScript بتعرف تاجل شغل لبعدين: `setTimeout` بتنفذ كود مرة واحدة بعد مدة، و `setInterval` بتنفذه كل مدة طول ما هي شغالة. المدة بالمللي ثانية: 1000 يعني ثانية واحدة.' },
    { type: 'code', browser: true, code: `setTimeout(function () {
  console.log('عدت 3 ثواني');
}, 3000);

setInterval(function () {
  console.log('كل ثانية بطبع');
}, 1000);` },
    { type: 'h', text: 'إيقاف المؤقتات' },
    { type: 'code', browser: true, code: `const timerId = setTimeout(function () {
  console.log('مش هيظهر أبداً');
}, 5000);
clearTimeout(timerId); // لغيناه قبل ما يشتغل

const intervalId = setInterval(function () {
  console.log('tick');
}, 1000);
// في وقت لاحق:
clearInterval(intervalId);` },
    { type: 'p', text: 'الاتنين بيرجعوا id تحفظه في متغير. `clearTimeout` و `clearInterval` بيوقفوا المؤقت بالـ id ده. من غير clearInterval، الـ interval هتفضل شغالة للأبد.' },
    { type: 'h', text: 'مثال كامل: عداد تنازلي' },
    { type: 'code', browser: true, code: `<p>باقي: <span id="t">10</span> ثواني</p>
<script>
  let left = 10;
  const span = document.querySelector('#t');
  const id = setInterval(function () {
    left--;
    span.textContent = left;
    if (left === 0) {
      clearInterval(id);
      span.textContent = 'خلص الوقت!';
    }
  }, 1000);
</script>` },
    { type: 'note', text: 'المؤقتات مش دقيقة بالمللي: المتصفح ممكن يأخرها شوية لو مشغول، وتبويبات الخلفية بيتبطئ فيها المؤقتات عمداً. متبناش عليها حسابات وقت حساسة؛ استخدم Date للمقارنات الزمنية.' },
    { type: 'h', text: 'التاريخ والساعة: Date' },
    { type: 'code', code: `const now = new Date();
console.log(now.getFullYear()); // السنة الحالية
console.log(now.getMonth());    // الشهر من 0 لـ 11 (يناير = 0)
console.log(now.getDate());     // رقم اليوم في الشهر
console.log(now.getDay());      // يوم الأسبوع من 0 (الأحد) لـ 6
console.log(now.getHours());    // الساعة من 0 لـ 23
console.log(now.getMinutes());  // الدقايق` }
  ],
  quiz: [
    { q: 'عايز كود يتنفذ كل 5 ثواني. تستخدم إيه؟', options: [
      { text: 'setInterval بمدة 5000' },
      { text: 'setTimeout بمدة 5000' },
      { text: 'setInterval بمدة 5' },
      { text: 'for loop فيها sleep(5)' }
    ], answer: 0, explain: 'setInterval بتكرر كل مدة، والمدة بالمللي ثانية: 5 ثواني = 5000. setTimeout بتشتغل مرة واحدة بس، ومفيش sleep في JavaScript.' },
    { q: 'setInterval شغالة وعايز توقفها. تعمل إيه؟', options: [
      { text: 'تحفظ الـ id اللي بترجعه وتنده clearInterval بيه' },
      { text: 'تقفل المتصفح وتفتحه تاني عشان الـ timer يتمسح من الذاكرة' },
      { text: 'تكتب stopInterval() وتديها الـ id بتاع الـ interval اللي شغال' },
      { text: 'مش ممكن توقفها بعد ما بدأت، لازم تستنى لحد ما تخلص لوحدها' }
    ], answer: 0, explain: 'كل مؤقت ليه id. clearInterval(intervalId) بيوقفه نهائياً. عشان كده بنحفظ الـ id في متغير دايماً.' },
    { q: 'إيه اللي هيظهر في الكونسول لو النهارده 15 من الشهر؟', code: `const d = new Date();
console.log(typeof d.getDate());`, options: [
      { text: 'number', mono: true },
      { text: 'string', mono: true },
      { text: 'object', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'دوال Date زي getDate بترجع أرقام، مش نصوص ولا objects.' },
    { q: 'new Date().getMonth() رجعت 0. ده معناه إيه؟', options: [
      { text: 'إحنا في يناير: الشهور بتتعد من 0 لـ 11' },
      { text: 'التاريخ مش مظبوط على الجهاز فالدالة بترجع صفر كقيمة افتراضية' },
      { text: 'إحنا في ديسمبر، لأن الشهور بتتعد من آخر السنة لأولها' },
      { text: 'حصل خطأ في الكود وجافاسكريبت رجعت 0 كعلامة على الفشل' }
    ], answer: 0, explain: 'من غرابات JavaScript: الشهور بتبدأ من 0 (يناير) لـ 11 (ديسمبر)، بينما الأيام بتبدأ من 1 عادي. لما تعرض الشهر للمستخدم زود 1.' }
  ],
  exercises: [
    { task: 'اعمل ساعة رقمية بسيطة: عنصر بيتحدث كل ثانية ويعرض الساعة والدقايق والثواني الحالية.', browser: true, code: `<p id="clock"></p>
<script>
  const clock = document.querySelector('#clock');
  setInterval(function () {
    const now = new Date();
    clock.textContent = now.getHours() + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');
  }, 1000);
</script>`, why: 'padStart(2, \'0\') بتخلي 5 ثواني تظهر 05 مش 5. من غيرها الساعة هتظهر بشكل مكسور زي 9:5:3.' },
    { task: 'اعمل زرار "ابدأ" وزرار "قف": الأول يشغل interval بيزود عداد كل ثانية، والتاني يوقفها.', browser: true, code: `<p>ثواني الشغل: <span id="s">0</span></p>
<button id="start">ابدأ</button>
<button id="stop">قف</button>
<script>
  let seconds = 0;
  let id = null;
  const s = document.querySelector('#s');
  document.querySelector('#start').addEventListener('click', function () {
    if (id !== null) return; // ممنوع interval تانية
    id = setInterval(function () {
      seconds++;
      s.textContent = seconds;
    }, 1000);
  });
  document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(id);
    id = null;
  });
</script>`, why: 'حفظنا الـ id في متغير وعملناه null لما توقف. الشرط if (id !== null) بيمنع تشغيل أكتر من interval في نفس الوقت، ودي غلطة شائعة بتخلي العداد يجري مضاعف.' }
  ]
},
{
  id: 'fetch',
  nav: 'جلب البيانات',
  title: 'جلب البيانات من الإنترنت: fetch',
  subtitle: 'async و await و JSON، وحالات التحميل والخطأ',
  blocks: [
    { type: 'p', text: 'أي تطبيق حقيقي بيجيب بيانات من سيرفر: أخبار، منتجات، طقس. `fetch` هي طريقة JavaScript لطلب بيانات من رابط (API) من غير ما الصفحة تعمل reload.' },
    { type: 'h', text: 'المشكلة: الشبكة بطيئة' },
    { type: 'p', text: 'طلب الشبكة ممكن ياخد ثانية أو أكتر. JavaScript مش بتستنى: بتسجل الطلب وتكمل شغلها، ولما الرد يوصل بتنفذ اللي طلبته. ده اسمه asynchronous code، والطريقة الحديثة لكتابته هي `async` و `await`:' },
    { type: 'code', browser: true, code: `async function loadUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();
  console.log(user.name); // Leanne Graham
}
loadUser();` },
    { type: 'list', items: [
      '`async` قبل الـ function بتخليها تقدر تستخدم await جواها.',
      '`await` بتستنى العملية تخلص وترجع نتيجتها، من غير ما تهنج باقي الصفحة.',
      '`res.json()` بيحول جسم الرد من نص JSON لـ object جاهز.',
      'jsonplaceholder.typicode.com هو API تجريبي مجاني للتدريب.'
    ] },
    { type: 'h', text: 'لما حاجة تبوظ: try و catch' },
    { type: 'code', browser: true, code: `async function loadUser() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!res.ok) throw new Error('السيرفر رد بخطأ: ' + res.status);
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.log('حصلت مشكلة: ' + err.message);
  }
}
loadUser();` },
    { type: 'p', text: 'fetch مش بترمي خطأ لو السيرفر رد بـ 404 أو 500: لازم تفحص `res.ok` بنفسك. ولو النت فصل خالص، الـ catch هتستلم الخطأ. أي await حقيقي محتاج try/catch حواليه.' },
    { type: 'h', text: 'النمط الكامل: تحميل ← عرض ← خطأ' },
    { type: 'code', browser: true, code: `<p id="status">اضغط الزرار</p>
<button id="load">جيب المستخدم</button>
<script>
  const status = document.querySelector('#status');
  document.querySelector('#load').addEventListener('click', async function () {
    status.textContent = 'جاري التحميل...';
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!res.ok) throw new Error('خطأ ' + res.status);
      const user = await res.json();
      status.textContent = 'الاسم: ' + user.name + ', ' + user.email;
    } catch (err) {
      status.textContent = 'مش قادر أجيب البيانات دلوقتي';
    }
  });
</script>` },
    { type: 'p', text: 'دي البنية اللي هتلاقيها في كل تطبيق: حالة تحميل، ثم عرض النتيجة، أو رسالة خطأ مفهومة للمستخدم.' }
  ],
  quiz: [
    { q: 'إيه فايدة await جوه async function؟', options: [
      { text: 'بتستنى العملية غير المتزامنة تخلص وترجع نتيجتها من غير ما تهنج الصفحة' },
      { text: 'بتوقف المتصفح كله لحد ما الرد يوصل ومبتسمحش بأي حاجة تتنفذ' },
      { text: 'بتخلي الكود أسرع في التنفيذ لأنها بتشغل العملية على thread منفصل' },
      { text: 'بتحول أي function لـ function عادية وبتلغي الـ async منها' }
    ], answer: 0, explain: 'await بتوقف الـ function دي بس (مش الصفحة) لحد ما العملية تخلص. باقي الصفحة شغال عادي، وده سر إن المواقع مابتهنجش وهي بتحمل بيانات.' },
    { q: 'fetch ردت بـ 404 (الصفحة مش موجودة). إيه اللي هيحصل؟', options: [
      { text: 'مفيش خطأ بيترمى: لازم تفحص res.ok بنفسك' },
      { text: 'بيطلع خطأ تلقائي ويوقف الكود لأن fetch بتعتبر 404 فشل' },
      { text: 'fetch بتحاول تاني لوحدها كذا مرة لحد ما الصفحة ترد بنجاح' },
      { text: 'res.json() بترجع الصفحة المفقودة كنص عادي بدل ما ترمي خطأ' }
    ], answer: 0, explain: 'fetch بترمي خطأ بس لو الشبكة نفسها فشلت. ردود الخطأ من السيرفر (404, 500) بتعتبر رد ناجح، فلازم تفحص res.ok أو res.status.' },
    { q: 'ليه بنكتب await res.json() بـ await برضه؟', options: [
      { text: 'لأن قراءة جسم الرد وتحويله لـ JSON عملية غير متزامنة برضه' },
      { text: 'عشان الكود يبقى شكله حلو ومرتب ومتناسق مع باقي السطور' },
      { text: 'لأن fetch محتاجة await مرتين دايماً، وبدونهم بتديك error' },
      { text: 'مش محتاجينها فعلاً، res.json() بترجع البيانات مباشرة من غير await' }
    ], answer: 0, explain: 'الرد ممكن يكون كبير وقراءته بتاخد وقت، فـ res.json() برضه بترجع Promise محتاجة await.' },
    { q: 'إيه أفضل مكان لرسالة "جاري التحميل..."؟', options: [
      { text: 'قبل الـ fetch مباشرة، وتتشال لما النتيجة أو الخطأ يوصل' },
      { text: 'بعد ما البيانات توصل وتتعرض عشان المستخدم يعرف إنها خلصت' },
      { text: 'مش مهمة أصلاً لأن التحميل بيخلص بسرعة في كل الحالات' },
      { text: 'في الكونسول بس عشان المستخدم متتشتتش وهو بيستنى النتيجة' }
    ], answer: 0, explain: 'المستخدم لازم يعرف إن في حاجة بتحصل فور ضغطه، وإلا هيدوس تاني وتالت. حالة التحميل جزء أساسي من تجربة الاستخدام.' }
  ],
  exercises: [
    { task: 'اكتب async function اسمها showPosts بتجيب أول 5 posts من https://jsonplaceholder.typicode.com/posts?_limit=5 وتطبع عنوان كل واحد في سطر.', browser: true, code: `async function showPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();
  for (const post of posts) {
    console.log(post.title);
  }
}
showPosts();`, why: 'الرابط بيرجع مصفوفة objects، فنلف عليها ونطبع مفتاح title من كل واحد. جربها في كونسول المتصفح على أي موقع وشوف العناوين الحقيقية.' },
    { task: 'ضيف للحل اللي فوق try/catch بحيث لو النت فصل تطبع "افحص اتصالك بالإنترنت" بدل ما الكود يبوظ.', browser: true, code: `async function showPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('خطأ ' + res.status);
    const posts = await res.json();
    for (const post of posts) {
      console.log(post.title);
    }
  } catch (err) {
    console.log('افحص اتصالك بالإنترنت');
  }
}
showPosts();`, why: 'أي حاجة ممكن تبوظ في الطريق: النت، السيرفر، الرد نفسه. try/catch بتحول الكارثة لرسالة مفهومة.' }
  ]
},
{
  id: 'capstone',
  nav: 'المشروع الختامي',
  title: 'المشروع الختامي: تطبيق Quiz تفاعلي',
  subtitle: 'كل اللي اتعلمناه في تطبيق واحد حقيقي: بيانات، عرض، أحداث، ونتيجة',
  blocks: [
    { type: 'p', text: 'وصلت للنهاية: هتبني تطبيق أسئلة وأجوبة كامل بإيدك. التطبيق بيعرض سؤال و4 اختيارات، يصحح فوراً، ويحسب النتيجة في الآخر. كل حاجة هنا اتعلمتها: objects، arrays، DOM، events، functions.' },
    { type: 'h', text: '1. البيانات أولاً' },
    { type: 'p', text: 'أي تطبيق بيبدأ من شكل بياناته. كل سؤال object في مصفوفة:' },
    { type: 'code', browser: true, code: `const questions = [
  {
    q: 'عاصمة مصر؟',
    options: ['القاهرة', 'الإسكندرية', 'الجيزة', 'أسوان'],
    answer: 0
  },
  {
    q: '2 + 2 × 2 = ؟',
    options: ['8', '6', '4', '10'],
    answer: 1
  },
  {
    q: 'كام يوم في السنة الكبيسة؟',
    options: ['365', '364', '366', '360'],
    answer: 2
  }
];` },
    { type: 'h', text: '2. هيكل الصفحة' },
    { type: 'code', browser: true, code: `<div id="quiz">
  <h2 id="question"></h2>
  <div id="options"></div>
  <p id="feedback"></p>
</div>
<div id="result" hidden>
  <h2 id="score"></h2>
  <button id="restart">العب تاني</button>
</div>` },
    { type: 'h', text: '3. المنطق' },
    { type: 'code', browser: true, code: `let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.querySelector('#question').textContent = q.q;
  const box = document.querySelector('#options');
  box.innerHTML = '';
  q.options.forEach(function (opt, i) {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', function () { pick(i); });
    box.appendChild(btn);
  });
}

function pick(i) {
  const q = questions[current];
  const fb = document.querySelector('#feedback');
  if (i === q.answer) {
    score++;
    fb.textContent = 'صح!';
  } else {
    fb.textContent = 'غلط. الإجابة: ' + q.options[q.answer];
  }
  current++;
  if (current < questions.length) {
    setTimeout(showQuestion, 1200);
  } else {
    setTimeout(showResult, 1200);
  }
}

function showResult() {
  document.querySelector('#quiz').hidden = true;
  document.querySelector('#result').hidden = false;
  document.querySelector('#score').textContent =
    'نتيجتك: ' + score + ' من ' + questions.length;
}

document.querySelector('#restart').addEventListener('click', function () {
  current = 0;
  score = 0;
  document.querySelector('#result').hidden = true;
  document.querySelector('#quiz').hidden = false;
  document.querySelector('#feedback').textContent = '';
  showQuestion();
});

showQuestion();` },
    { type: 'h', text: 'إزاي الكود ده بيفكر' },
    { type: 'list', items: [
      'الحالة: current و score متغيرات في الذاكرة، والعرض دايماً انعكاس ليهم.',
      'showQuestion بتبني أزرار الاختيارات كل مرة من جديد بالبيانات الحالية.',
      'pick بتصحح، تحدث الحالة، وتقرر: سؤال جديد ولا نتيجة.',
      'setTimeout بتدي المستخدم لحظة يشوف التصحيح قبل السؤال اللي بعده.',
      'restart بترجع الحالة للبداية وتعيد العرض. مفيش reload خالص.'
    ] },
    { type: 'note', text: 'دي نفس البنية بتاعت الموقع ده نفسه: البيانات في ملف، والمنطق في ملف، والعرض بيتبني من البيانات. اللي اتعلمته في 14 درس هو بالظبط اللي بيتبني بيه أي تطبيق ويب: بيانات ← حالة ← أحداث ← عرض.' },
    { type: 'h', text: 'طورها بنفسك' },
    { type: 'list', items: [
      'ضيف عداد أسئلة: سؤال 2 من 10.',
      'ضيف مؤقت لكل سؤال بـ setInterval وخصم السؤال لو الوقت خلص.',
      'اجيب الأسئلة من API بـ fetch بدل ما تكون مكتوبة في الكود.',
      'احفظ أعلى نتيجة في localStorage واعرضها.',
      'ارفع المشروع على GitHub Pages زي ما اتعلمت في أكاديمية Git.'
    ] }
  ],
  quiz: [
    { q: 'ليه بنخزن الأسئلة كـ مصفوفة objects بدل متغيرات منفصلة؟', options: [
      { text: 'عشان نقدر نلف عليها ونعرض أي سؤال بنفس الكود من غير تكرار' },
      { text: 'عشان الكود يبقى أسرع في التنفيذ وياخد مساحة أقل في الذاكرة' },
      { text: 'لأن JavaScript مابتدعمش عدد كبير من المتغيرات في نفس الملف' },
      { text: 'مفيش سبب حقيقي، دي مجرد طريقة تانية ومفيش فرق في الكود' }
    ], answer: 0, explain: 'لما البيانات منظمة في مصفوفة، سؤال جديد = سطر جديد في البيانات بس. الكود مابيتغيرش مهما زاد عدد الأسئلة.' },
    { q: 'في الكود بتاع التطبيق، ليه بنعمل box.innerHTML = \'\' قبل بناء أزرار السؤال الجديد؟', options: [
      { text: 'عشان نمسح أزرار السؤال اللي فات قبل ما نضيف الجديدة' },
      { text: 'عشان نسرّع الصفحة' },
      { text: 'ده سطر مالوش لازمة' },
      { text: 'عشان نمنع الـ XSS' }
    ], answer: 0, explain: 'من غير مسح، أزرار كل سؤال هتتراكم فوق اللي قبلها. بنمسح القديم ونبني الجديد من البيانات الحالية.' },
    { q: 'إيه اللي بيحافظ على نتيجة المستخدم بين الأسئلة؟', options: [
      { text: 'متغيرات الحالة current و score اللي بتعيش بره الدوال' },
      { text: 'الأزرار نفسها بتفتكر النتيجة وبتحتفظ بيها بين كل سؤال والتاني' },
      { text: 'المتصفح بيحفظها تلقائياً من غير ما نكتب أي كود في المتغيرات' },
      { text: 'الـ HTML بيخزنها في العناصر اللي بتتعرض على الشاشة نفسها' }
    ], answer: 0, explain: 'الحالة في متغيرات بره أي function فبتفضل موجودة طول عمر الصفحة. العرض بيتبني منها في أي لحظة.' },
    { q: 'عايز تضيف مؤقت 30 ثانية لكل سؤال. أنهي أداة من اللي اتعلمناها هتستخدم؟', options: [
      { text: 'setInterval مع clearInterval عند الإجابة أو انتهاء الوقت' },
      { text: 'for loop تعد من 1 لـ 30 وتطبع الرقم كل ثانية في الصفحة' },
      { text: 'await 30 وبتوقف الكود لحد ما الثواني تعدي وبعدين تكمل' },
      { text: 'CSS animation بس، لأنها بتحسب الوقت وبتقفل السؤال لوحدها' }
    ], answer: 0, explain: 'interval كل ثانية تنقص العداد وتحدث العرض، و clearInterval توقفها لما يجاوب أو الوقت يخلص. زي تمرين العداد التنازلي بالظبط.' }
  ],
  exercises: [
    { task: 'ابني التطبيق كامل في ملف HTML واحد: انسخ الأجزاء من الدرس، ضيف سؤالين من عندك، وشغله في المتصفح.', browser: true, code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>Quiz</title>
<style>
  body { font-family: sans-serif; max-width: 500px; margin: 40px auto; padding: 0 16px; }
  button { display: block; width: 100%; margin: 8px 0; padding: 12px; font-size: 1rem; cursor: pointer; }
</style>
</head>
<body>
<!-- الصق هنا: هيكل الصفحة ثم كود JavaScript من الدرس جوه وسم script -->
</body>
</html>`, why: 'الهدف إنك تمرن على تجميع الأجزاء بنفسك: HTML + CSS + JS في صفحة واحدة شغالة. لو حاجة متشتغلش، افتح Console واقرأ الخطأ.' },
    { task: 'ضيف خاصية جديدة للتطبيق: بعد عرض النتيجة النهائية، اعرض تقييم بالكلام: 3 من 3 "ممتاز"، 2 "كويس جداً"، 1 "محتاج تراجع"، 0 "حاول تاني".', browser: true, code: `function grade(s, total) {
  if (s === total) return 'ممتاز';
  if (s >= total - 1) return 'كويس جداً';
  if (s >= 1) return 'محتاج تراجع';
  return 'حاول تاني';
}
// في showResult:
// scoreEl.textContent = 'نتيجتك: ' + score + ' من ' + questions.length + ', ' + grade(score, questions.length);`, why: 'function صغيرة منفصلة للتقييم أسهل في التعديل من كلام مكتوب جوه showResult. فصل المنطق عن العرض عادة هتفرق معاك في كل مشروع.' }
  ]
}
);
