توضیحات:
در این چالش قصد داریم صفحه issues سایت github را بسازیم.
برای گرفتن لیست issue ها از سرور باید درخواست GET به
http://localhost:9000/issues
این آدرس دوتا query دارد.
http://localhost:9000/issues?page=1&issuesFilter=0
پارامتر page: برای صفحه بندی استفاده میشود. فرض کنید اگر اندازه هر صفحه ۱۵ باشد صفحه اول ۱۵ تای اول و صفحه دوم ۱۵ تای بعدی و ... . مقدار پیش‌فرض آن برابر ۱ است.
پارامتر issuesFilter: مقدار 0 برای هیچ فیلتر، مقدار 1 برای گرفتن issue های open و مقدار 2 برای issue های closed. مقدار پیشفرض آن 0 است.
اطلاعات دریافتی شامل ارایه‌ای از issue ها به صورت json است:
[
  {
    "title": "Bind to a Map() Object not possible",
    "status": "open"
  }
]
 
انتظارات:
وقتی صفحه لود می‌شود، باید لیست issue های صفحه اول بدون فیلتر از سرور گرفته و در تگ div با  کلاس issues با استفاده از کامپوننت IssueItem نمایش داده شود.
وقتی اسکرول صفحه به اخر صفحه رسید باید درخواست برای گرفتن issue های صفحه بعد فرستاده و این issue ها باید به آخر لیست قبلی اضافه شوند.
در هنگام اسکرول آخرین درخواست زمانی اتفاق میفتد که دیتایی که از سرور گرفته میشود، لیست خالی باشد.
وقتی روی Open یا Closed بالای جدول کلیک شود issue های قبلی باید پاک شوند و issue ها با فیلتر مورد نظر گرفته و نمایش داده شوند. (باید ویژگی اسکرول با این فیلتر جدید هم کار کند)
بعداز هر درخواستی (گرفتن issue ها موقع لود شدن صفحه، تغییر فیلتر و لود کردن بیشتر موقع اسکرول) باید کامپوننت Loading نمایش داده شود.
نکته: فرض کنید تعداد کل issue هایی که در سرور وجود دارد، ۲۲ تا و اندازه هر صفحه ۱۵ است. در هنگام لود شدن صفحه یک درخواست و ۱۵ تا issue اول گرفته میشود، وقتی اسکرول میشود یک درخواست دیگر برای صفحه بعد ۷ تای باقیمانده رو میگیرد. با اسکرول بیشتر یک درخواست دیگر فرستاده میشود که لیست خالی میگیرد. وقتی به لیست خالی رسیدیم دیگر نباید درخواست دیگری با اسکرول کردن ارسال شود.
توجه: اگر ۱۵ تا issue داخل یک صفحه اسکرین شما جا میگیرد با زوم کردن کاری کنید که کمتر از ۱۵ تا issue بتواند دیده شود و اسکرول بار وجود داشته باشد.
 

نکات:
تنها مجاز به اعمال تغییر در فایل‌های زیر هستید:
src/hooks/useInfiniteScroll.js
src/components/IssueList.js
src/components/App.js
راه‌اندازی پروژه:
ابتدا پروژه‌ی اولیه را دانلود و از حالت فشرده خارج کنید.
در پوشه‌ی issues-page ، دستور npm install را برای نصب نیازمندی‌ها اجرا کنید.
در همین پوشه، دستور npm run server را برای راه‌اندازی سرور پروژه اجرا کنید.
سپس با اجرای دستور npm start در ترمینالی دیگر پروژه ری‌اکت را اجرا کنید.