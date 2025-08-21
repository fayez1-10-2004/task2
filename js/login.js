// تحديد عناصر صفحة تسجيل الدخول من الـ DOM
let userName = document.querySelector("#userName"); // حقل اسم المستخدم
let password = document.querySelector("#password"); // حقل كلمة المرور
let signInBtn = document.querySelector("#signIn"); // زر تسجيل الدخول

// استرجاع بيانات المستخدم من localStorage
let getUserName = localStorage.getItem("userName"); // اسم المستخدم المخزن
let getPassword = localStorage.getItem("password"); // كلمة المرور المخزنة

// عند تحميل الصفحة، وضع التركيز على حقل اسم المستخدم
window.onload = function() {
    userName.focus();
};

// عند الضغط على زر تسجيل الدخول
signInBtn.addEventListener("click", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة بشكل افتراضي

    // التحقق من تعبئة الحقول
    if (userName.value === "" || password.value === "") {
        alert("Fill Your Data"); // رسالة تحذيرية إذا كانت أي خانة فارغة
    } else {
        // التحقق من صحة البيانات المدخلة مقابل البيانات المخزنة
        if (getUserName && getUserName.trim() === userName.value.trim() &&
            getPassword && getPassword.trim() === password.value.trim()) {

            // إذا كانت البيانات صحيحة، يتم الانتقال للصفحة الرئيسية بعد نصف ثانية
            setTimeout(() => {
                window.location = "index.html";
            }, 500);
        } else {
            // إذا كانت البيانات غير صحيحة
            alert("not valid"); // رسالة تحذيرية
        }
    }
});
