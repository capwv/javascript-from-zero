/* Curriculum part 1: intro, variables, operators, conditions, loops, functions, arrays */
var CURRICULUM = window.CURRICULUM || [];
CURRICULUM.push(
{
  id: 'intro',
  nav: 'JavaScript بتعمل إيه؟',
  title: 'إيه اللي JavaScript بتضيفه للصفحة؟',
  subtitle: 'ليه الصفحة من غيرها "ثابتة"، وإزاي أول سطر كود ليك هيشتغل دلوقتي',
  blocks: [
    { type: 'p', text: 'لو جايلك من أكاديمية HTML و CSS بتاعتنا، انت عارف تبني هيكل الصفحة بـ HTML وتظبط شكلها وألوانها بـ CSS. بس لسه فيه حاجة ناقصة: الصفحة ثابتة. الزرار مابيعملش حاجة لما تدوس عليه، الفورم مابيتراجعش، والمحتوى مابيتغيرش. دي شغلانة JavaScript.' },
    { type: 'p', text: 'JavaScript هي لغة البرمجة الوحيدة اللي المتصفح بيفهمها بشكل أصلي. أي حاجة "حية" بتشوفها في أي موقع: منو بتفتح وتقفل، عداد بيزيد، بحث بيقترح عليك وانت بتكتب، رسايل بتظهر من غير ما الصفحة تعمل refresh، كل ده JavaScript.' },
    { type: 'table', head: ['التقنية', 'دورها', 'مثال من الحياة'], rows: [
      ['HTML', 'الهيكل والمحتوى', 'عظام البيت وحيطانه'],
      ['CSS', 'الشكل والألوان', 'الدهانات والديكور'],
      ['JavaScript', 'الحركة والتفاعل والمنطق', 'الكهربا والأجهزة اللي بتشتغل']
    ] },
    { type: 'h', text: 'أول سطر كود في حياتك' },
    { type: 'p', text: 'أشهر أداة هتستخدمها كل يوم: `console.log` بيطبع أي حاجة في الـ Console بتاع المتصفح. متستناش لحد ما تعمل صفحة: معمل JavaScript في الشريط فوق شغال من دلوقتي. انسخ الكود ده وجربه هناك:' },
    { type: 'code', code: `console.log('أهلاً يا عالم');
console.log(2 + 3);
// الناتج في الكونسول:
// أهلاً يا عالم
// 5` },
    { type: 'p', text: 'سطرين اتنفذوا بالترتيب من فوق لتحت: الأول طبع نص، والتاني حسب العملية الحسابية وطبع نتيجتها. دي أهم قاعدة في البرمجة: الكود بيشتغل سطر سطر بالترتيب.' },
    { type: 'h', text: 'فين بيتكتب الكود في صفحة حقيقية؟' },
    { type: 'p', text: 'في مشروع حقيقي، الكود بيتكتب جوه وسم `script` في آخر الـ body، أو في ملف لوحده بامتداد `.js` بتستورده كده:' },
    { type: 'code', browser: true, code: `<!-- في آخر الـ body في ملف HTML -->
<script src="app.js"></script>` },
    { type: 'note', text: 'لما حاجة تبوظ (وهتبوظ، دي طبيعة الشغل)، افتح أدوات المطور بزرار F12 وروح على تبويب Console. رسالة الخطأ الحمرا هناك بتقولك المشكلة في أنهي سطر وليه. مفيش مبرمج بيشتغل من غيرها.' },
    { type: 'h', text: 'الرحلة اللي جاية' },
    { type: 'list', items: [
      'المتغيرات وأنواع البيانات: إزاي تخزن معلومة وتستخدمها.',
      'العمليات والشروط واللوبات: إزاي تحسب وتقرر وتكرر.',
      'الدوال والمصفوفات والكائنات: إزاي تنظم الكود والبيانات.',
      'الـ DOM والأحداث والفورمز: إزاي تخلي الصفحة ترد على المستخدم.',
      'المؤقتات وجلب البيانات من الإنترنت.',
      'وفي الآخر: مشروع ختامي تبني فيه تطبيق ويب تفاعلي كامل بإيدك.'
    ] }
  ],
  quiz: [
    { q: 'إيه الدور الأساسي بتاع JavaScript في صفحة الويب؟', options: [
      { text: 'بتحدد هيكل الصفحة وعناصرها' },
      { text: 'بتظبط الألوان والخطوط والتنسيق' },
      { text: 'بتضيف التفاعل والمنطق والحركة للصفحة' },
      { text: 'بترفع الموقع على الإنترنت' }
    ], answer: 2, explain: 'HTML للهيكل و CSS للشكل و JavaScript للتفاعل والمنطق. التقسيمة دي ثابتة في كل الويب.' },
    { q: 'إيه اللي هيظهر في الكونسول لما تشغّل الكود ده؟', code: `console.log(10 + 5);`, options: [
      { text: '15', mono: true },
      { text: '10 + 5', mono: true },
      { text: '105', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'console.log بتحسب القيمة الأول وبعدين تطبعها. 10 + 5 عملية حسابية نتيجتها 15.' },
    { q: 'الكود بتاعك وقف وفيه خطأ. فين تلاقي رسالة توصف المشكلة؟', options: [
      { text: 'في تبويب Console في أدوات المطور (F12)' },
      { text: 'في عنوان الصفحة فوق' },
      { text: 'في ملف HTML نفسه بيتسطر أحمر لوحده' },
      { text: 'لازم أعيد تشغيل الجهاز' }
    ], answer: 0, explain: 'الـ Console هو صاحبك: كل خطأ بيظهر فيه برسالة ورقم السطر. F12 بيفتح أدوات المطور في أغلب المتصفحات.' },
    { q: 'إزاي تستورد ملف JavaScript خارجي اسمه app.js في صفحة HTML؟', options: [
      { text: '<script src="app.js"></script>', mono: true },
      { text: '<link rel="js" href="app.js">', mono: true },
      { text: '<js src="app.js"></js>', mono: true },
      { text: '<script href="app.js"></script>', mono: true }
    ], answer: 0, explain: 'وسم script مع خاصية src هو الطريقة القياسية، وبيتحط في آخر الـ body عشان الصفحة تكون اتحملت.' }
  ],
  exercises: [
    { task: 'افتح معمل JavaScript من الشريط فوق واطبع اسمك في سطر وسنك في سطر باستخدام console.log مرتين.', code: `console.log('أحمد');
console.log(21);`, why: 'كل استدعاء لـ console.log بيطبع سطر جديد بالترتيب. جرب تغير القيم لبياناتك انت.' },
    { task: 'احسب في المعمل كام ساعة في السنة (365 يوم × 24 ساعة) واطبع الناتج.', code: `console.log(365 * 24);
// 8760`, why: 'علامة * هي الضرب في JavaScript. المتصفح بيحسب العملية وبعدين console.log بتطبع النتيجة: 8760 ساعة.' }
  ]
},
{
  id: 'variables',
  nav: 'المتغيرات والأنواع',
  title: 'المتغيرات وأنواع البيانات',
  subtitle: 'let و const، وأنواع القيم اللي بتعيش جواهم، وإزاي تسمي صح',
  blocks: [
    { type: 'p', text: 'المتغير زي علبة ليها اسم: بتحط جواها قيمة وتستخدمها بعدين باسمها. في JavaScript بنعرف المتغير بـ `let` لو قيمته هتتغير، وبـ `const` لو ثابتة مش هتتغير طول البرنامج.' },
    { type: 'code', code: `let name = 'أحمد';
const birthYear = 2004;
let age = 21;
age = 22; // تمام: let بتتغير
console.log(name);
console.log(age);
// الناتج:
// أحمد
// 22` },
    { type: 'p', text: 'لو حاولت تغير قيمة `const` هيطلع خطأ `TypeError` ويوقف الكود. فيه كمان `var` قديمة هتقابلها في أكواد قديمة، بس احنا مش بنستخدمها: `let` و `const` أوضح وأأمن.' },
    { type: 'code', expectError: true, code: `const x = 5;
x = 6; // TypeError: Assignment to constant variable.` },
    { type: 'note', text: 'قاعدة محترمين الكود بيمشوا عليها: ابدأ دايماً بـ const، ولو لقيت نفسك فعلاً محتاج تغير القيمة، حولها لـ let. كده الكود بيبقى أسهل في الفهم والتتبع.' },
    { type: 'h', text: 'أنواع البيانات الأساسية' },
    { type: 'table', head: ['النوع', 'مثال', 'بيستخدم في إيه'], rows: [
      ['string (نص)', "'أهلاً' أو \"مرحبا\"", 'أسماء، جمل، أي كلام'],
      ['number (رقم)', '42 أو 3.14 أو -7', 'أرقام وحسابات (مفيش فرق بين صحيح وعشري)'],
      ['boolean (منطقي)', 'true أو false', 'إجابات سؤال أيوه/لأ'],
      ['undefined', 'متغير معمول من غير قيمة', 'لسه ماتعينتش قيمة'],
      ['null', 'قيمة فاضية بالعمد', 'أنا عارف إن مفيش قيمة هنا']
    ] },
    { type: 'p', text: 'تقدر تعرف نوع أي قيمة بـ `typeof`:' },
    { type: 'code', code: `let a = 'نص';
let b = 42;
let c = true;
let d;
console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // undefined
console.log(typeof null); // object ← غريبة؟ اقرأ الملاحظة تحت` },
    { type: 'note', text: 'غريبة مشهورة: typeof null بيطبع object رغم إن null مش object. ده bug في اللغة من 1995 ومش هيتصلح عشان مواقع كتير بتعتمد عليه. اعرفه وعديه.' },
    { type: 'h', text: 'قواعد التسمية' },
    { type: 'list', items: [
      'الاسم ممكن يحتوي حروف وأرقام و _ و $، بس مابيبدأش برقم أبداً.',
      'JavaScript حساسة لحالة الحرف: age غير Age غير AGE تماماً.',
      'التقليد المتبع: camelCase، يعني أول كلمة صغيرة وكل كلمة بعدها تبدأ كبيرة: firstName, totalScore, userAge.',
      'اختار أسماء توصف المحتوى: score أحسن من x، و userName أحسن من n.'
    ] },
    { type: 'h', text: 'لصق النصوص في بعضها' },
    { type: 'p', text: 'عندك طريقتين تبني بيهم جملة فيها متغيرات: اللصق بعلامة +، أو الـ template literals بعلامة الـ backtick ( ` ) والمتغير جوه `${}`. التانية أنضف بكتير:' },
    { type: 'code', code: `const name = 'سارة';
const age = 22;
console.log('أنا ' + name + ' وعندي ' + age + ' سنة');
console.log(\`أنا \${name} وعندي \${age} سنة\`);
// الاتنين بيطبعوا نفس الجملة:
// أنا سارة وعندي 22 سنة` }
  ],
  quiz: [
    { q: 'عايز متغير قيمته مش هتتغير طول البرنامج. تعرفه بإيه؟', options: [
      { text: 'const', mono: true },
      { text: 'let', mono: true },
      { text: 'var', mono: true },
      { text: 'static', mono: true }
    ], answer: 0, explain: 'const للثوابت و let للمتغيرات اللي بتتغير. var قديمة و static مش موجودة لتعريف المتغيرات في JavaScript.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `let y = '10';
console.log(typeof y);`, options: [
      { text: 'string', mono: true },
      { text: 'number', mono: true },
      { text: 'undefined', mono: true },
      { text: 'NaN', mono: true }
    ], answer: 0, explain: 'القيمة جوه علامتي تنصيص يبقى نوعها string حتى لو شكلها رقم. typeof بترجع اسم النوع كنص.' },
    { q: 'أني اسم متغير صحيح في JavaScript؟', options: [
      { text: 'userName', mono: true },
      { text: '2ndName', mono: true },
      { text: 'user-name', mono: true },
      { text: 'let', mono: true }
    ], answer: 0, explain: 'الاسم مابيبدأش برقم (2ndName غلط)، ومابيحتويش شرطة (user-name غلط)، و let كلمة محجوزة. userName هو الوحيد الصح.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `let z;
console.log(z);`, options: [
      { text: 'undefined', mono: true },
      { text: 'null', mono: true },
      { text: '0', mono: true },
      { text: 'خطأ: z غير معرفة', mono: true }
    ], answer: 0, explain: 'متغير اتعمل بـ let من غير قيمة بيبقى undefined. دي مش غلطة، دي القيمة الافتراضية لحد ما تعين قيمة.' }
  ],
  exercises: [
    { task: 'عرّف 3 متغيرات: اسمك في const، ومدينتك في let، وسنك في let، واطبع جملة واحدة فيها التلاتة باستخدام template literal.', code: `const name = 'أحمد';
let city = 'أسيوط';
let age = 21;
console.log(\`أنا \${name} من \${city} وعندي \${age} سنة\`);
// الناتج: أنا أحمد من أسيوط وعندي 21 سنة`, why: 'الـ template literal بتوفر عليك لصق النصوص بـ + كتير، وأي تعبير جوه ${} بيتحسب مكانه.' },
    { task: 'عندك متغيرين a بقيمة 5 و b بقيمة 9. اكتب كود يبدل قيمهم (يبقى a فيه 9 و b فيه 5) واطبعهم. هتحتاج متغير تالت مؤقت.', code: `let a = 5;
let b = 9;
let temp = a;
a = b;
b = temp;
console.log(a); // 9
console.log(b); // 5`, why: 'لو كتبت a = b على طول، قيمة a الأصلية بتضيع قبل ما تتحفظ في b. المتغير المؤقت بيمسك القيمة القديمة لحد ما تسلمها.' }
  ]
},
{
  id: 'operators',
  nav: 'العمليات الحسابية والمقارنة',
  title: 'العمليات: حساب، مقارنة، ومنطق',
  subtitle: 'الجمع والطرح وباقي القسمة، == ضد ===، و && و || بيعملوا إيه',
  blocks: [
    { type: 'p', text: 'JavaScript بتعمل كل العمليات الحسابية اللي تعرفها، وزيادة عليهم علامتين مهمين جداً: `%` (باقي القسمة) و `**` (الأس).' },
    { type: 'code', code: `console.log(7 + 3);   // 10
console.log(7 - 3);   // 4
console.log(7 * 3);   // 21
console.log(7 / 2);   // 3.5
console.log(7 % 2);   // 1 ← باقي قسمة 7 على 2
console.log(2 ** 10); // 1024 ← 2 أس 10` },
    { type: 'p', text: 'باقي القسمة `%` هتستخدمه كتير: أشهر استخدام ليه إنك تعرف الرقم زوجي ولا فردي: لو `n % 2` بيساوي 0 يبقى زوجي.' },
    { type: 'note', text: 'مفاجأة أرقام عشرية: 0.1 + 0.2 بتطلع 0.30000000000000004 مش 0.3 بالظبط. ده بسبب طريقة تخزين الكمبيوتر للأرقام العشرية (floating point) وهتلاقيها في كل لغات البرمجة تقريباً. لو بتتعامل مع فلوس، اشتغل بالقروش كأرقام صحيحة.' },
    { type: 'h', text: 'المقارنة: الفرق بين == و ===' },
    { type: 'code', code: `console.log(5 == '5');   // true ← بيحول النوع ويقارن
console.log(5 === '5');  // false ← بيقارن القيمة والنوع
console.log(5 !== 3);    // true
console.log(7 > 5);      // true
console.log(7 <= 7);     // true` },
    { type: 'note', warn: true, text: 'القاعدة الذهبية: استخدم دايماً === و !== وسيب == و != خالص. المقارنة اللي بتحول النوع لوحدها بتعمل نتايج محيرة زي: 0 == \'\' بتطلع true!' },
    { type: 'h', text: 'العمليات المنطقية' },
    { type: 'p', text: '`&&` معناها "و" (الاتنين لازم صح)، `||` معناها "أو" (يكفي واحدة صح)، و `!` معناها "مش" (بتقلب القيمة):' },
    { type: 'code', code: `console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

const age = 20;
console.log(age >= 18 && age < 30); // true` },
    { type: 'h', text: 'اختصارات التحديث' },
    { type: 'code', code: `let score = 10;
score += 5;  // زي score = score + 5 ← بقت 15
score++;     // زيادة واحد ← بقت 16
score -= 3;  // نقص 3 ← بقت 13
console.log(score); // 13` }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `console.log(10 % 3);`, options: [
      { text: '1', mono: true },
      { text: '3', mono: true },
      { text: '0', mono: true },
      { text: '3.33', mono: true }
    ], answer: 0, explain: '10 على 3 فيها 3 وباقي 1. علامة % بترجع الباقي بس، مش ناتج القسمة.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `console.log('5' + 3);`, options: [
      { text: '53', mono: true },
      { text: '8', mono: true },
      { text: 'NaN', mono: true },
      { text: 'خطأ', mono: true }
    ], answer: 0, explain: 'لما + تلاقي نص في أي طرف، بتلصق بدل ما تجمع: الرقم 3 بيتحول لنص ويتلزق على 5 فتطلع 53.' },
    { q: 'طيب والكود ده؟', code: `console.log('5' * 3);`, options: [
      { text: '15', mono: true },
      { text: '53', mono: true },
      { text: 'NaN', mono: true },
      { text: 'خطأ', mono: true }
    ], answer: 0, explain: 'الضرب مالوش معنى مع النصوص، فـ JavaScript بتحاول تحول النص لرقم: 5 في 3 تطلع 15. دي حاجة مربكة في اللغة فعلاً، عشان كده بنحول النصوص لأرقام بإيدنا بـ Number() لما نحتاج.' },
    { q: 'إيه الفرق بين == و ===؟', options: [
      { text: '== بتحول النوع وتقارن القيمة بس، و === بتقارن القيمة والنوع مع بعض' },
      { text: 'مفيش فرق، دي كتابتين لنفس الحاجة' },
      { text: '=== أسرع في التنفيذ بس' },
      { text: '== للأرقام و === للنصوص' }
    ], answer: 0, explain: '=== صارمة: 5 === \'5\' تطلع false لأن الأنواع مختلفة. == بتحاول توصلهم لنفس النوع الأول فتطلع true. عشان كده === دايماً.' }
  ],
  exercises: [
    { task: 'احسب متوسط 3 درجات: 85 و 90 و 78، واطبعه. (المتوسط = المجموع على عددهم)', code: `const avg = (85 + 90 + 78) / 3;
console.log(avg);
// 84.33333333333333`, why: 'الأقواس ليها أولوية زي الرياضيات بالظبط. الناتج عدد عشري لأن 253 على 3 مابتتقسمش بالتساوي.' },
    { task: 'اكتب تعبير بيتحقق إن رقم زوجي واطبع نتيجته لـ 42 ولبعديها 43 في سطرين.', code: `const n1 = 42;
const n2 = 43;
console.log(n1 % 2 === 0); // true
console.log(n2 % 2 === 0); // false`, why: 'باقي القسمة على 2 إما 0 (زوجي) أو 1 (فردي). المقارنة === 0 بترجع boolean تقدر تستخدمه في شروط بعدين.' }
  ]
},
{
  id: 'conditions',
  nav: 'الشروط',
  title: 'الشروط: خلي الكود ياخد قرارات',
  subtitle: 'if و else و ternary و switch، وإيه هي القيم الـ falsy',
  blocks: [
    { type: 'p', text: 'لحد هنا الكود بيشتغل سطر سطر من غير تفكير. الشروط بتخلي البرنامج ياخد قرارات: لو الشرط ده حقيقي اعمل كذا، غير كده اعمل حاجة تانية.' },
    { type: 'code', code: `const score = 72;
if (score >= 85) {
  console.log('ممتاز');
} else if (score >= 75) {
  console.log('جيد جداً');
} else if (score >= 65) {
  console.log('جيد');
} else if (score >= 50) {
  console.log('مقبول');
} else {
  console.log('راسب');
}
// الناتج: جيد` },
    { type: 'p', text: 'الشروط بتتفحص من فوق لتحت، وأول شرط يتحقق بيتنفذ اللي جواه وباقي السلسلة بيتخطى. ترتيب الشروط مهم: لو بدأت بـ score >= 50 كان كل الناجحين هيطلعوا مقبول.' },
    { type: 'h', text: 'القيم اللي بتتحسب غلط: falsy' },
    { type: 'p', text: 'أي قيمة جوه if بتتحول لـ boolean. فيه 6 قيم بس بتتحسب `false` واسمهم القيم الـ falsy، وكل حاجة تانية `true`:' },
    { type: 'code', code: `// القيم الـ falsy الستة:
// false , 0 , '' , null , undefined , NaN
if ('أهلاً') { console.log('نص مليان بيتحسب true'); }
if (0) { console.log('مش هيظهر أبداً'); }

const name = '';
if (name === '') { console.log('لازم تكتب اسمك'); }` },
    { type: 'note', warn: true, text: 'مصيدة شهيرة: النص \'0\' بيتحسب true لأنه نص مش فاضي، رغم إن الرقم 0 نفسه falsy. والمصفوفة الفاضية [] برضه true. متقارنش بـ ==، قارن بشكل صريح زي === 0 أو === \'\'.' },
    { type: 'h', text: 'الاختصار في سطر: ternary' },
    { type: 'code', code: `const age = 17;
const status = age >= 18 ? 'بالغ' : 'قاصر';
console.log(status); // قاصر` },
    { type: 'h', text: 'لما الاختيارات تبقى كتير: switch' },
    { type: 'code', code: `const day = 'الجمعة';
switch (day) {
  case 'الجمعة':
    console.log('ويك إند أخيراً');
    break;
  case 'السبت':
    console.log('لسه في راحة');
    break;
  default:
    console.log('يوم شغل عادي');
}
// الناتج: ويك إند أخيراً` },
    { type: 'note', text: 'كل case لازم تخلص بـ break. لو نسيتها، التنفيذ بيكمل في الـ case اللي بعدها حتى لو شرطها مش متحقق. و default بتشتغل لو مفيش أي case طابقت.' }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const n = 7;
if (n % 2 === 0) {
  console.log('زوجي');
} else {
  console.log('فردي');
}`, options: [
      { text: 'فردي', mono: true },
      { text: 'زوجي', mono: true },
      { text: '7', mono: true },
      { text: 'مش هيظهر حاجة', mono: true }
    ], answer: 0, explain: '7 % 2 بيساوي 1، يعني الشرط false، فبيتنفذ اللي جوه else.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `console.log(!!'');`, options: [
      { text: 'false', mono: true },
      { text: 'true', mono: true },
      { text: 'undefined', mono: true },
      { text: 'خطأ', mono: true }
    ], answer: 0, explain: 'النص الفاضي falsy. أول ! بتحوله لـ true، وتاني ! بترجعه false. التريك دي (!!) بتحول أي قيمة لـ boolean بتاعها الحقيقي.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const age = 20;
console.log(age >= 18 ? 'بالغ' : 'قاصر');`, options: [
      { text: 'بالغ', mono: true },
      { text: 'قاصر', mono: true },
      { text: 'true', mono: true },
      { text: 'خطأ في الصياغة', mono: true }
    ], answer: 0, explain: 'الـ ternary: شرط ? قيمة لو صح : قيمة لو غلط. 20 أكبر من أو تساوي 18 فالنتيجة بالغ.' },
    { q: 'في switch، إيه اللي بيحصل لو نسيت break في آخر case؟', options: [
      { text: 'التنفيذ بيكمل في الـ case اللي بعدها حتى لو شرطها مش متحقق' },
      { text: 'بيحصل خطأ ويوقف البرنامج' },
      { text: 'الـ switch بتتجاهل خالص' },
      { text: 'الـ default بتشتغل تلقائياً' }
    ], answer: 0, explain: 'دي ظاهرة اسمها fall-through. break هي اللي بتقفل كل فرع. نسيانها غلطة شائعة وصعبة تتكشف.' }
  ],
  exercises: [
    { task: 'اكتب سلسلة if/else تحسب تقدير طالب من درجته: 85 فأكثر ممتاز، 75 فأكثر جيد جداً، 65 فأكثر جيد، 50 فأكثر مقبول، وأقل راسب. جربها مع score = 91.', code: `const score = 91;
if (score >= 85) {
  console.log('ممتاز');
} else if (score >= 75) {
  console.log('جيد جداً');
} else if (score >= 65) {
  console.log('جيد');
} else if (score >= 50) {
  console.log('مقبول');
} else {
  console.log('راسب');
}
// الناتج: ممتاز`, why: '91 أكبر من 85 فأول شرط بيتحقق ويطبع ممتاز ويتخطى الباقي. لاحظ إن الترتيب من الأعلى للأقل هو اللي بيخلي المنطق صح.' },
    { task: 'متجر بيعمل خصم 10% لو المشتريات 500 جنيه أو أكتر. اكتب كود يحسب السعر النهائي لطلب بـ 600 جنيه واطبعه.', code: `const total = 600;
let finalPrice = total;
if (total >= 500) {
  finalPrice = total - total * 0.1;
}
console.log(finalPrice);
// 540`, why: 'خصم 10% يعني نطرح عُشر القيمة. 600 × 0.1 = 60، فيبقى السعر النهائي 540.' }
  ]
},
{
  id: 'loops',
  nav: 'اللوبات',
  title: 'اللوبات: التكرار من غير ما تكرر نفسك',
  subtitle: 'for و while و for...of، و break و continue، وإزاي متعملش لوب لا نهائية',
  blocks: [
    { type: 'p', text: 'تخيل عايز تطبع الأرقام من 1 لـ 1000. محدش هيحط 1000 سطر. اللوب بتنفذ نفس الكود عدد مرات بشروط تحددها انت.' },
    { type: 'code', code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// الناتج:
// 1
// 2
// 3
// 4
// 5` },
    { type: 'p', text: 'لوب `for` فيها 3 أجزاء بين القوسين: البداية (`let i = 1`)، شرط الاستمرار (`i <= 5`)، والتحديث بعد كل لفة (`i++`). اللوب بتفضل شغالة طول ما الشرط true.' },
    { type: 'h', text: 'مثال حقيقي: الجمع التراكمي' },
    { type: 'code', code: `let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050` },
    { type: 'h', text: 'while: لما متعرفش عدد اللفات مقدماً' },
    { type: 'code', code: `let battery = 100;
while (battery > 20) {
  battery -= 30;
}
console.log(battery); // 10` },
    { type: 'p', text: '`while` بتلف طول ما الشرط true. استخدمها لما عدد التكرارات مش معروف: زي انتظار قيمة توصل لحد معين. لازم تتأكد إن جوه اللوب فيه حاجة بتقربك من إنهاء الشرط، وإلا هتلف للأبد.' },
    { type: 'note', warn: true, text: 'اللوب اللانهائية بتهنج الصفحة كلها. في معملنا احنا حاطين حماية: أي تشغيل يعدي ثانيتين بيتوقف لوحده. بس في صفحة حقيقية، لوب زي while (true) من غير break جواها هتعلق المتصفح.' },
    { type: 'h', text: 'for...of: اللف على المصفوفات' },
    { type: 'code', code: `const names = ['علي', 'منى', 'كريم'];
for (const name of names) {
  console.log('أهلاً يا ' + name);
}
// الناتج:
// أهلاً يا علي
// أهلاً يا منى
// أهلاً يا كريم` },
    { type: 'h', text: 'break و continue' },
    { type: 'list', items: [
      'break بتخرج من اللوب كله فوراً.',
      'continue بتتخطى اللفة الحالية بس وتكمل اللي بعدها.'
    ] },
    { type: 'code', code: `for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // خطّي الأزواج
  if (i > 7) break;          // وقف بعد 7
  console.log(i);
}
// الناتج: 1 ثم 3 ثم 5 ثم 7` }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `let s = 0;
for (let i = 1; i <= 4; i++) {
  s += i;
}
console.log(s);`, options: [
      { text: '10', mono: true },
      { text: '4', mono: true },
      { text: '15', mono: true },
      { text: '0', mono: true }
    ], answer: 0, explain: '1 + 2 + 3 + 4 = 10. الـ i بتقف عند 4 لأن الشرط <= 4.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `let count = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  count++;
}
console.log(count);`, options: [
      { text: '5', mono: true },
      { text: '10', mono: true },
      { text: '4', mono: true },
      { text: '0', mono: true }
    ], answer: 0, explain: 'continue بتخطي الأرقام الزوجية، فالعداد بيعد الأرقام الفردية بس من 0 لـ 9: 1 و3 و5 و7 و9، يعني 5.' },
    { q: 'إيه الفرق بين break و continue؟', options: [
      { text: 'break بتخرج من اللوب كله، و continue بتتخطى اللفة الحالية وتكمل' },
      { text: 'break بتتخطى اللفة الحالية، و continue بتخرج من اللوب' },
      { text: 'الاتنين بيعملوا نفس الحاجة بالظبط' },
      { text: 'break للأرقام و continue للنصوص' }
    ], answer: 0, explain: 'break بتوقف اللوب نهائياً، أما continue بتوصل لآخر اللفة الحالية بسرعة وتبدأ اللي بعدها.' },
    { q: 'لوب while (x > 0) مش بتوصل لنهايتها أبداً. إيه السبب الأكثر شيوعاً؟', options: [
      { text: 'نسيت تحدث قيمة x جوه اللوب فالشرط فضل true للأبد' },
      { text: 'while مبتشتغلش مع الأرقام الموجبة' },
      { text: 'المتصفح قديم' },
      { text: 'لازم أكتب while بأحرف كبيرة' }
    ], answer: 0, explain: 'لو مفيش حاجة جوه اللوب بتغير الشرط، هيفضل true للأبد: لوب لا نهائية. دايماً اسأل نفسك: إيه اللي بيقربني من إنهاء اللوب؟' }
  ],
  exercises: [
    { task: 'اطبع جدول ضرب 7 من 1 لـ 10، كل سطر بالشكل: 7 × 3 = 21', code: `for (let i = 1; i <= 10; i++) {
  console.log('7 × ' + i + ' = ' + 7 * i);
}
// الناتج (أول وآخر سطر):
// 7 × 1 = 7
// ...
// 7 × 10 = 70`, why: 'جمعنا نصوص وأرقام بـ + فطلعت جملة كاملة. علامة × هنا مجرد حرف في النص، والضرب الحقيقي بيحصل في 7 * i.' },
    { task: 'اجمع كل الأرقام الفردية من 1 لـ 50 واطبع المجموع النهائي.', code: `let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) continue;
  sum += i;
}
console.log(sum); // 625`, why: 'الأرقام الفردية من 1 لـ 49 عددهم 25 ومجموعهم 625. ممكن تتأكد: 25 × 25 = 625 (مجموع أول n رقم فردي دايماً n²).' }
  ]
},
{
  id: 'functions',
  nav: 'الدوال',
  title: 'الدوال: كود بتستخدمه تاني وتالت',
  subtitle: 'تعريف واستدعاء، parameters و return، arrow functions، والـ scope',
  blocks: [
    { type: 'p', text: 'الـ function هي قطعة كود ليها اسم بتنفذ لما تناديها. بدل ما تكتب نفس المنطق 10 مرات، بتكتبه مرة جوه function وتناديها 10 مرات. دي أهم فكرة في تنظيم أي برنامج.' },
    { type: 'code', code: `function greet(name) {
  return 'أهلاً يا ' + name;
}
console.log(greet('منى'));
console.log(greet('كريم'));
// الناتج:
// أهلاً يا منى
// أهلاً يا كريم` },
    { type: 'p', text: 'التعريف لوحده مابيعملش حاجة: لازم الاستدعاء `greet("منى")`. الاسم اللي جوه التعريف (`name`) اسمه parameter، والقيمة اللي بتبعتها عند الاستدعاء اسمها argument. و `return` بترجع النتيجة للمكان اللي نادى، وبعدها الكود اللي جوه الـ function بيقف.' },
    { type: 'note', text: 'function من غير return بترجع undefined. لو طبعت نتيجة function وطلعلك undefined، غالباً نسيت كلمة return: الكونسول مش بتطبع قيمة لوحدها، لازم ترجعها.' },
    { type: 'h', text: 'الشكل المختصر: arrow functions' },
    { type: 'code', code: `const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const square = n => n * n;
console.log(square(9)); // 81` },
    { type: 'p', text: 'الـ arrow function اختصار حديث: لو جسمها سطر واحد، مابتحتاجش `return` ولا أقواس معقوفة. هتقابلها في كل الأكواد الحديثة، خصوصاً مع دوال المصفوفات اللي جاية في الدرس الجاي.' },
    { type: 'h', text: 'المتغيرات جوه الدوال: scope' },
    { type: 'code', code: `function calc() {
  let secret = 42;
  return secret;
}
console.log(calc()); // 42
// console.log(secret); // ReferenceError: secret مش معروفة بره` },
    { type: 'p', text: 'المتغير المعمول جوه function عايش جواها بس (local scope). دي ميزة مش عيب: بتحمي أجزاء البرنامج من بعضها. المتغيرات المعمولة بره أي function بتبان في كل حتة (global scope)، وقللها على قد ما تقدر.' },
    { type: 'h', text: 'parameters اختيارية' },
    { type: 'code', code: `function greet(name = 'يا بطل') {
  return 'أهلاً ' + name;
}
console.log(greet('سلمى')); // أهلاً سلمى
console.log(greet());       // أهلاً يا بطل` }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `function double(n) {
  return n * 2;
}
console.log(double(21));`, options: [
      { text: '42', mono: true },
      { text: '21', mono: true },
      { text: 'n * 2', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'الاستدعاء double(21) بيحط 21 مكان n ويرجع 21 × 2 = 42.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `function doNothing() {
  let x = 5;
}
console.log(doNothing());`, options: [
      { text: 'undefined', mono: true },
      { text: '5', mono: true },
      { text: 'null', mono: true },
      { text: 'خطأ', mono: true }
    ], answer: 0, explain: 'مفيش return، فالدالة بترجع undefined مهما عملت جواها.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const mul = (a, b) => a * b;
console.log(mul(6, 7));`, options: [
      { text: '42', mono: true },
      { text: '13', mono: true },
      { text: '67', mono: true },
      { text: 'NaN', mono: true }
    ], answer: 0, explain: 'الـ arrow function بسطر واحد بترجع ناتج التعبير مباشرة: 6 × 7 = 42.' },
    { q: 'عرّفت function بس ماشغلتهاش. إيه اللي بيحصل؟', options: [
      { text: 'ولا حاجة: التعريف بيخزن الدالة، والتنفيذ بيحصل عند الاستدعاء بس' },
      { text: 'بتتنفذ مرة واحدة لوحدها' },
      { text: 'بيحصل خطأ لازم تستدعيها فوراً' },
      { text: 'بتتنفذ لما الصفحة تقفل' }
    ], answer: 0, explain: 'زي الوصفة: كتابتها مابتطبخش. التنفيذ بيحصل بس لما تناديها باسمها مع أقواس.' }
  ],
  exercises: [
    { task: 'اكتب function اسمها isEven بتاخد رقم وترجع true لو زوجي و false لو فردي، واطبع نتيجتها على 10 و 7.', code: `function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(10)); // true
console.log(isEven(7));  // false`, why: 'باقي القسمة على 2 بيدينا إجابة أيوه/لأ، وهي دي بالظبط القيمة اللي المفروض ترجع. ممكن دلوقتي تستخدم isEven في أي شرط أو لوب.' },
    { task: 'اكتب function اسمها max بتاخد رقمين وترجع الأكبر فيهم من غير ما تستخدم Math.max، واطبع max(15, 9) و max(4, 22).', code: `function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(15, 9));  // 15
console.log(max(4, 22));  // 22`, why: 'لو a أكبر نرجعها، غير كده b هي الأكبر أو مساوية فنرجعها. لاحظ إن return الأولى بتقفل الدالة لو الشرط تحقق.' }
  ]
},
{
  id: 'arrays',
  nav: 'المصفوفات',
  title: 'المصفوفات: قوائم منظمة من البيانات',
  subtitle: 'التخزين والوصول بالفهرس، وأقوى دوال المصفوفات: map و filter و reduce',
  blocks: [
    { type: 'p', text: 'لو عندك 30 درجة طلاب، مش هتعمل 30 متغير. المصفوفة (array) بتخزن قائمة كاملة في متغير واحد، وبتوصل لأي عنصر فيها برقمه (الفهرس) اللي بيبدأ من 0 مش 1.' },
    { type: 'code', code: `const grades = [85, 90, 78, 92];
console.log(grades[0]);    // 85 ← أول عنصر
console.log(grades[3]);    // 92 ← رابع عنصر
console.log(grades.length); // 4 ← العدد
console.log(grades[10]);   // undefined ← بره الحدود` },
    { type: 'h', text: 'إضافة وحذف' },
    { type: 'code', code: `const cart = ['شاحن', 'سماعة'];
cart.push('كابل');      // يضيف في الآخر
cart.unshift('ماوس');   // يضيف في الأول
console.log(cart);
// ["ماوس","شاحن","سماعة","كابل"]
cart.pop();             // يشيل آخر عنصر
console.log(cart.length); // 3` },
    { type: 'h', text: 'البحث والتقطيع' },
    { type: 'code', code: `const nums = [10, 20, 30, 40];
console.log(nums.includes(30)); // true
console.log(nums.indexOf(20));  // 1
console.log(nums.slice(1, 3));  // [20,30] ← من 1 لقبل 3
console.log(nums.join(' - '));  // "10 - 20 - 30 - 40"` },
    { type: 'h', text: 'الثلاثة الكبار: map و filter و find' },
    { type: 'p', text: 'دي الدوال اللي هتستخدمها كل يوم. كلهم بياخدوا function بتتنفذ على كل عنصر:' },
    { type: 'code', code: `const prices = [100, 200, 300];

const afterVat = prices.map(p => p * 1.14);
console.log(afterVat); // [114,228,342] ← نسخة جديدة متحولة

const expensive = prices.filter(p => p >= 200);
console.log(expensive); // [200,300] ← اللي يعدي الشرط بس

const firstBig = prices.find(p => p > 150);
console.log(firstBig); // 200 ← أول عنصر يطابق` },
    { type: 'h', text: 'reduce: من قائمة لقيمة واحدة' },
    { type: 'code', code: `const prices = [100, 200, 300];
const total = prices.reduce((acc, p) => acc + p, 0);
console.log(total); // 600` },
    { type: 'p', text: '`reduce` بتمشي على العناصر واحد واحد وتحافظ على "مجمّع" (`acc`) بيبدأ من القيمة اللي انت محددها (هنا 0)، وفي الآخر بترجعه. مجموع، متوسط، أكبر قيمة، كلهم reduce.' },
    { type: 'note', text: 'map و filter مش بيغيروا المصفوفة الأصلية، بيرجعوا نسخة جديدة. الأصلية بتفضل زي ما هي. دي نقطة بتتلخبط ناس كتير.' }
  ],
  quiz: [
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const a = [10, 20, 30];
console.log(a[1]);`, options: [
      { text: '20', mono: true },
      { text: '10', mono: true },
      { text: '30', mono: true },
      { text: '1', mono: true }
    ], answer: 0, explain: 'الفهرس بيبدأ من 0: a[0] فيها 10 و a[1] فيها 20.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const a = [1, 2, 3];
a.push(4);
console.log(a.length);`, options: [
      { text: '4', mono: true },
      { text: '3', mono: true },
      { text: '10', mono: true },
      { text: 'خطأ', mono: true }
    ], answer: 0, explain: 'push بتضيف في الآخر، فالمصفوفة بقت فيها 4 عناصر. لاحظ: const بتمنع إعادة تعيين المتغير نفسه، بس تعديل محتوى المصفوفة مسموح.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const a = [1, 2, 3, 4];
const b = a.map(x => x * 2);
console.log(b[2]);`, options: [
      { text: '6', mono: true },
      { text: '3', mono: true },
      { text: '8', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'map بترجع مصفوفة جديدة فيها كل عنصر مضروب في 2: [2,4,6,8]. العنصر التالت (فهرس 2) هو 6.' },
    { q: 'إيه اللي هيظهر في الكونسول؟', code: `const a = [5, 12, 8, 130, 44];
const f = a.find(x => x > 10);
console.log(f);`, options: [
      { text: '12', mono: true },
      { text: '130', mono: true },
      { text: '[12,130,44]', mono: true },
      { text: 'undefined', mono: true }
    ], answer: 0, explain: 'find بترجع أول عنصر يعدي الشرط وتقف: 12. لو عايز كل اللي يعدي الشرط استخدم filter.' }
  ],
  exercises: [
    { task: 'عندك مصفوفة درجات: [60, 85, 45, 90, 72]. استخدم filter عشان تجيب الدرجات الناجحة (50 فأكتر)، واطبعهم وبعدهم اطبع عددهم.', code: `const grades = [60, 85, 45, 90, 72];
const passed = grades.filter(g => g >= 50);
console.log(passed);        // [60,85,90,72]
console.log(passed.length); // 4`, why: 'filter بتلف على كل درجة وتحتفظ بس باللي الشرط بيرجع true معاها. 45 هي الوحيدة اللي اتشالت.' },
    { task: 'استخدم reduce عشان تجمع أسعار مصفوفة: [120, 80, 45, 300]، واطبع المجموع.', code: `const prices = [120, 80, 45, 300];
const total = prices.reduce((acc, p) => acc + p, 0);
console.log(total); // 545`, why: 'المجمع acc بيبدأ من 0 ويجمع كل سعر بالترتيب: 120 ثم 200 ثم 245 ثم 545.' }
  ]
}
);
