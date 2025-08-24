// تحديد عناصر صفحة المستخدم من الـ DOM
let userInfo = document.querySelector("#userInfo"); // قسم عرض معلومات المستخدم
let user = document.querySelector("#user"); // العنصر الذي يعرض اسم المستخدم
let links = document.querySelector("#links"); // الروابط (تسجيل دخول / تسجيل حساب جديد)

// التحقق إذا كان هناك مستخدم مسجل دخول
if (localStorage.getItem("userName")&&JSON.parse(localStorage.getItem("isloggedin"))===true) {
    links.remove(); // إزالة روابط تسجيل الدخول/التسجيل لأنها غير لازمة الآن
    user.style.display = 'block'; // عرض عنصر اسم المستخدم
    userInfo.style.display = "flex"; // عرض قسم معلومات المستخدم
    user.innerHTML = "Welcome " + localStorage.getItem("userName"); // عرض رسالة ترحيب باسم المستخدم
}

// تحديد زر تسجيل الخروج
let logOutBtn = document.querySelector("#logOut");

// عند الضغط على زر تسجيل الخروج
logOutBtn.addEventListener("click", logOut);

function logOut() {
    localStorage.setItem('isloggedin',JSON.stringify(false))
    
  
    window.location="login.html"
    // مسح جميع البيانات المخزنة في localStorage (تسجيل خروج كامل)
    
    // إعادة التوجيه إلى الصفحة الرئيسية بعد نصف ثانية
   
}
