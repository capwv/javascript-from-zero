# JavaScript من الصفر

أكاديمية تفاعلية بالعربي (عامية مصرية) لتعلم JavaScript من الصفر تماماً، جزء من منصة أكاديميات Infinity University Activity، والجزء التاني بعد أكاديمية HTML و CSS في مسار تطوير الويب.

**الموقع المباشر:** https://capwv.github.io/javascript-from-zero/

## المحتوى

- **14 درس متدرج** (13 درس + مشروع ختامي): من "JavaScript بتعمل إيه؟" لحد بناء تطبيق Quiz تفاعلي كامل
- **56 سؤال تفاعلي** بتصحيح فوري وشرح لكل إجابة
- **28 تمرين عملي** بمحاولات وكشف حل نموذجي
- **معمل JavaScript تفاعلي** داخل المتصفح: playground حقيقي بيشغّل الكود بتاعك فوراً (console.log وقيمة الإرجاع والأخطاء)، مع حماية من اللوب اللانهائية، و12 تحدي موجه بتتصحح تلقائياً بمقارنة ناتج الكونسول سطر بسطر بالمطلوب
- تتبع تقدم محلي (localStorage) لكل درس وسؤال وتمرين وتحدي

## الدروس

1. إيه اللي JavaScript بتضيفه للصفحة؟
2. المتغيرات وأنواع البيانات
3. العمليات: حساب، مقارنة، ومنطق
4. الشروط: if و else و ternary و switch
5. اللوبات: for و while و for...of
6. الدوال: تعريف واستدعاء و arrow functions
7. المصفوفات: map و filter و reduce
8. الكائنات و JSON
9. DOM: قراءة وتعديل الصفحة
10. الأحداث: addEventListener
11. الفورمز والتحقق من المدخلات
12. المؤقتات والوقت: setTimeout و setInterval و Date
13. جلب البيانات من الإنترنت: fetch و async/await
14. المشروع الختامي: تطبيق Quiz تفاعلي

## التقنية

صفحة واحدة (index.html) بدون أي build: HTML + CSS + JavaScript خام، منهج في ملفين (curriculum-1.js + curriculum-2.js)، ومحرك المعمل مكتوب بالكامل بـ JavaScript (lab-core.js + lab.js) بيشغّل كود المستخدم جوه Web Worker مع timeout، خلفية متحركة مشتركة (sams-bg.js)، وتصميم داكن متجاوب مع الموبايل.

## التشغيل محلياً

افتح `index.html` مباشرة في المتصفح، أو:

```bash
python -m http.server 8000
```

---

من أسرة **Infinity University Activity**
