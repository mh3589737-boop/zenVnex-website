# ZENVNEX — تغییرات این نسخه

این فایل صادقانه فهرست می‌کند دقیقاً چه چیزی در این نسخه عوض شده و چه چیزی هنوز باقی مانده. آن را نگه دار؛ برای خودت و برای هر توسعه‌دهنده دیگری که بعداً روی این پروژه کار کند مفید است.

## ✅ رفع شد (Blockerهای واقعی)

1. **lesson-view.html** — خط تکراری `const params = ...` که باعث `SyntaxError` و توقف کامل JS این صفحه می‌شد، حذف شد.
2. **alphabet.html** — تگ `<div class="progress-track">` که بسته نشده بود، اصلاح شد.
3. **math-grade9.html** — لینک به `style.css` (که در پروژه اصلاً وجود نداشت) حذف شد. صفحه استایل داخلی خودش را دارد و ظاهرش نباید تغییر کند.
4. **donate.html** — لینک `contact.html` (که وجود نداشت) به `mailto:hello@zenvnex.org` تغییر کرد.
5. **partner.html** — لینک `humanitarian.html` (که وجود نداشت) به `#` تغییر کرد؛ دقیقاً همان الگویی که کارت «Education» کناری‌اش از قبل استفاده می‌کرد.
6. **english-grade7.html** — واحدهای ۱ تا ۳ که به `unit.html` (فایلی که وجود ندارد) لینک می‌شدند، به همان حالت «به زودی» تبدیل شدند که واحد ۴ همین صفحه از قبل داشت.
7. **math-grade8.html** — اسکریپت `polyfill.io` حذف شد.
8. **subject.html** — تمام `console.log` های دیباگ (شامل چاپ UID و ایمیل کاربر) حذف شدند.
9. **submit-story.html** — پیام «کاملاً امن» که ادعای حقوقی/امنیتی بزرگی بود، به پیام ساده و صادقانه تغییر کرد.
10. **همه‌ی صفحات‌ دارای lucide** — نسخه `@latest` (که هر روز می‌تواند چیز متفاوتی بیاورد) به نسخه ثابت `1.43.0` تغییر کرد.

## 🔴 مهم‌ترین کار امنیتی — firestore.rules

فایل `firestore.rules` ساخته شد. **این فایل به‌تنهایی هیچ کاری نمی‌کند** — باید آن را در Firebase Console (Firestore Database → Rules) پیست کنی، یا با دستور:

```
firebase deploy --only firestore:rules
```

منتشرش کنی. تا وقتی این کار را نکنی، پروژه‌ات هنوز با هر rule‌ای که الان روی Firebase فعال است کار می‌کند (که معمولاً یعنی باز و ناامن).

قوانین نوشته‌شده:
- کسی از طریق مرورگر نمی‌تواند `support_requests` را بخواند (فقط خودت از طریق Firebase Console).
- کسی نمی‌تواند `stories` را بخواند تا وقتی خودت آگاهانه این کار را باز کنی.
- نوشتن در هر دو کالکشن محدود و validate شده است.
- هر مسیر دیگری که تعریف نشده، به‌طور پیش‌فرض بسته است.

## ✅ کارهای معماری کوچک

- Firebase config که در ۲۵ فایل کپی شده بود، به یک فایل مشترک `/js/firebase-config.js` منتقل شد. از این به بعد فقط همین یک فایل را برای تغییر پروژه Firebase ویرایش کن.
- `netlify.toml` هدرهای امنیتی امن (بدون شکستن سایت) گرفت: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`. بخش قدیمی و ناقص `functions = "netlify/functions"` هم حذف شد (چون چنین پوشه‌ای در پروژه نیست).
- `robots.txt` و `sitemap.xml` ساخته شدند، به‌همراه `<meta name="description">` و `<link rel="canonical">` روی ۱۰ صفحه عمومی اصلی (index, donate, partner, women-rights, lifestory, stories, emergency-aid, bamyan-school, herat, privacy).
  ⚠️ در `sitemap.xml`/`canonical` فرض کردم دامنه نهایی‌ات `https://zenvnex.org` است (چون ایمیل فوتر همین دامنه را دارد) — قبل از پابلیش نهایی این را با دامنه واقعی‌ات چک کن.

## ✅ تست‌هایی که روی همین نسخه انجام شد

- هر ۴۳ صفحه: تمام بلوک‌های `<script>` inline با `node --check` از نظر Syntax Error بررسی شدند — **هیچ خطای دیگری پیدا نشد** (فقط همان یکی که در lesson-view.html بود).
- تعداد تگ‌های `<div>`, `<section>`, `<form>` و... در هر صفحه شمارش و balance آن‌ها بررسی شد.
- تمام لینک‌های داخلی (href/src) در هر ۴۳ صفحه با فایل‌های واقعی پروژه چک شدند — لینک شکسته‌ی دیگری پیدا نشد.

## 🟠 هنوز باقی مانده (عمداً در این مرحله دست نزدم)

اینها را عمداً انجام ندادم چون تغییر بزرگ و پرریسک هستند و بدون تست واقعی روی Firebase/Netlify، ریسک خراب کردن سایت را بالا می‌برند. پیشنهادم این است که در پیام‌های بعدی، یکی‌یکی سراغشان برویم:

- Content-Security-Policy واقعی (نیاز به حذف/بازنویسی ۴۲۳ `onclick` inline قبل از آن دارد).
- یکی‌کردن ۱۲ فایل lesson-*.html در یک lesson-engine مشترک (الان هرکدام کپی جدا از Tailwind/Lucide/Three.js/Firebase هستند).
- سرویس‌ورکر واقعی برای PWA (الان manifest دارد ولی service worker ندارد).
- انتقال پیشرفت کاربر (progress) از localStorage به Firestore.
- حذف دو مورد باقی‌مانده `document.write()` (در lesson-1.html و lesson-5.html).
- یکسان‌سازی سه stack متفاوت ریاضی (MathJax / Bootstrap+Chart.js / KaTeX).
- پاکسازی `package.json`/Capacitor (الان ناقص و بلااستفاده به نظر می‌رسد).
- جداسازی واقعی `src/` از `dist/` به‌جای `publish = "."`.
- لیبل‌های accessibility روی فرم‌های login/signup در چند صفحه.
