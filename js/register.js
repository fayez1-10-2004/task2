// ----------------- تحديد عناصر الفورم -----------------
let userName = document.querySelector("#userName"); // حقل اسم المستخدم
let password = document.querySelector("#password"); // حقل كلمة المرور
let email = document.querySelector("#email");       // حقل البريد الإلكتروني
let signUPBtn = document.querySelector("#signUP");  // زر التسجيل

// ----------------- عند تحميل الصفحة -----------------
window.onload = function() {
    userName.focus(); // جعل المؤشر في حقل اسم المستخدم تلقائيًا
};

// ----------------- دالة حفظ البيانات في التخزين المحلي -----------------
function savestroge(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // تحويل القيمة إلى JSON ثم حفظها
}

// ----------------- عند الضغط على زر التسجيل -----------------
signUPBtn.addEventListener("click", function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة بعد الضغط على الزر

    // التحقق من أن جميع الحقول ممتلئة
    if (userName.value === "" || password.value === "" || email.value === "") {
        alert("يرجى ملء جميع الحقول"); // رسالة تحذيرية للمستخدم
    } 
    
    else {
        // حفظ البيانات في التخزين المحلي
        savestroge("userName", userName.value);
        savestroge("password", password.value);
        savestroge("email", email.value);
        savestroge('isloggedin',true)
        alert("تم التسجيل بنجاح");
    }
});