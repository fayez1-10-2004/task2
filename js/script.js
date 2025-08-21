// تحديد عنصر رسالة عدم توفر الإنترنت
let noInternet = document.querySelector('.noInternet');

/*
// الكود القديم لفحص الاتصال بالإنترنت
window.onload = function () {
    if (window.navigator.onLine) {
        noInternet.style.display = 'none';
    } else {
        noInternet.style.display = 'block';
    }
}

window.addEventListener("online", function () {
    noInternet.style.display = 'none';
});

window.addEventListener("offline", function () {
    noInternet.style.display = 'block';
});
*/

// دالة فحص حالة الاتصال بالإنترنت وإظهار/إخفاء رسالة عدم التوفر
function toogleCheckInternet(){
    const isOnline = window.navigator.onLine; // فحص حالة الاتصال
    if(isOnline){
        noInternet.classList.add('hidden'); // إخفاء رسالة عدم الاتصال
        console.log('online');
    }
    else {
        noInternet.classList.remove('hidden'); // إظهار رسالة عدم الاتصال
        console.log('offline');
    }
}

// إضافة مستمعي الأحداث لفحص حالة الإنترنت عند التحميل والاتصال/قطع الاتصال
['load','online','offline'].forEach (event =>{
    window.addEventListener(event,toogleCheckInternet)
})

// -------------------------------------------------------------------------------------------------------------------
// الكود المُعلق لتحميل البيانات والتركيز على مربع البحث
// window.addEventListener('DOMContentLoaded', function () {
//     drawData();
//     search.focus();
// });

// تحديد العناصر الأساسية في الصفحة
let allProducts = document.querySelector(".products") // حاوي عرض المنتجات
let AddToCartBtn = document.querySelector(".AddToCartBtn") // زر إضافة للسلة
let RemoveFromCartBtn = document.querySelector(".RemoveFromCartBtn") // زر حذف من السلة

// مصفوفة المنتجات المتاحة
let products = [
    { id: 1, title: "Dell G15-5520", category: "Labtop", color: "Black", price: "36870", salePrice: "36270", imageURL: "images/Labtop1.jpg" },
    { id: 2, title: "Lenovo V15", category: "Labtop", color: "gray", price: "13333", salePrice: "13011", imageURL: "images/Labtop2.jpg" },
    { id: 3, title: "HP Victus", category: "Labtop", color: "Black", price: "47699", salePrice: "47438", imageURL: "images/Labtop3.jpg" },
    { id: 4, title: "Dell Vostro", category: "Labtop", color: "Black", price: "29660", salePrice: "29320", imageURL: "images/Labtop4.jpg" },
    { id: 5, title: "R50i", category: "Earbuds", color: "Black", price: "1699", salePrice: "1399", imageURL: "images/Earbuds1.jpg" },
    { id: 6, title: "R100", category: "Earbuds", color: "White", price: "1600", salePrice: "1499", imageURL: "images/Earbuds.jpg" },
    { id: 7, title: "Life P2", category: "Earbuds", color: "Black", price: "2899", salePrice: "2699", imageURL: "images/Earbuds3.jpg" },
    { id: 8, title: "Life Note E", category: "Earbuds", color: "Black", price: "2485", salePrice: "1600", imageURL: "images/Earbuds4.jpg" },
    { id: 9, title: "Generic", category: "Over Ear", color: "Blue", price: "215", salePrice: "185", imageURL: "images/Over Ear1.jpg" },
    { id: 10, title: "Panduo", category: "smart watch", color: "Green", price: "450", salePrice: "375", imageURL: "images/smartwatch1.jpg" },
    { id: 11, title: "Muktrics", category: "smart watch", color: "Black", price: "400", salePrice: "350", imageURL: "images/smartwatch2.jpg" },
    { id: 12, title: "BigPlayer", category: "smart watch", color: "Brown", price: "730", salePrice: "650", imageURL: "images/smartwatch3.jpg" },
    { id: 13, title: "Samsung Galaxy A34", category: "phone", color: "Awesome Silver", price: "11286", salePrice: "10400", imageURL: "images/phone1.jpg" },
    { id: 14, title: "A24", category: "phone", color: "Black", price: "49900", salePrice: "38090", imageURL: "images/phone2.jpg" },
    { id: 15, title: "Oppo Reno 8T", category: "phone", Gold: "gray", price: "12793", salePrice: "12.445", imageURL: "images/phone3.jpg" },
    { id: 16, title: "Galaxy S22", category: "phone", color: "Green", price: "24299", salePrice: "24899", imageURL: "images/phone4.jpg" },
    { id: 17, title: "Galaxy S22 Ultra", category: "phone", color: "Phantom Black", price: "32800", salePrice: "33400", imageURL: "images/phone5.jpg" },
    { id: 18, title: "Galaxy S21", category: "phone", color: "Light Green", price: "21990", salePrice: "19299", imageURL: "images/phone6.jpg" },
    { id: 19, title: "Galaxy Z Fold5", category: "phone", color: "Light blue", price: "73930", salePrice: "66000", imageURL: "images/phone7.jpg" },
]

// دالة رسم وعرض المنتجات في الصفحة
function drawData() {
    let pro = products.map((item) => {
        // فحص ما إذا كان المنتج مضاف للمفضلة
        let isFavorite = checkFavorite(item.id);

        // تحديد شكل أيقونة القلب حسب حالة المفضلة
        let heartIconClass = isFavorite ? "fas" : "far";
        let heightImage;

        /* الكود القديم لتحديد ارتفاع الصورة باستخدام switch
        switch (item.category) {
            case 'phone':
                heightImage = '330px';
                break;

            case 'smart watch':
                heightImage = '240px';
                break;
            default:
                heightImage = '200px';
                break;
        }
        */

        // تحديد ارتفاع الصورة حسب فئة المنتج باستخدام ternary operator
        item.category==='phone'?heightImage='330px':item.category==='smart watch'?heightImage='240px':heightImage='200px';

        // إنشاء HTML للمنتج الواحد
        return `
            <div class="product-item col-4 mb-4 p-4">
                <div class="card border border-info pt-3">
                    <img class="product-item-img card-img-top m-auto" src="${item.imageURL}" alt="Card image" style="width:80%; height:${heightImage};">
                    <div class="product-itm-desc card-body pb-0 pl-4">
                        <p class="card-title">Product: ${item.title}.</p>
                        <p class="card-text">Category :${item.category}.</p>
                        <p class="color">Color: ${item.color}.</p>
                        <p class="card-price">Price: <span> <del>${item.price} EGP</del> ${item.salePrice} EGP</span></p>
                    </div>
                    <div class="product-item-action d-flex justify-content-between pr-4 pl-4">
                    <button id="add-btn-${item.id}" class="AddToCartBtn btn btn-primary mb-2" onClick="addTOCartEvent(${item.id})">Add To Cart</button>
                    <button id="remove-btn-${item.id}" class="RemoveFromCartBtn btn btn-primary mb-2" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                        <i id="fav-${item.id}" class="${heartIconClass} fa-heart" onClick="addFav(${item.id})"></i>
                    </div>
                </div>
            </div>
        `;
    });

    // إدراج HTML للمنتجات في الصفحة
    allProducts.innerHTML = pro.join('');
}
// استدعاء دالة رسم المنتجات عند تحميل الصفحة
drawData();

// -------------------------------------------------------------------------------------------------------------

// تحديد عناصر سلة التسوق والأسعار
let badge = document.querySelector(".badge"); // شارة عدد المنتجات في السلة
let buyProudect = document.querySelector(".buyProudect"); // حاوي منتجات السلة
let totalPrice = document.querySelector(".total .totalPrice"); // عنصر عرض السعر الإجمالي

// أيقونة سلة التسوق وحاوي المنتجات
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartsProudect = document.querySelector(".cartsProudect");

// متغيرات الكمية والسعر الإجمالي
let quantity = 1;
let total = localStorage.getItem("totalPrice") ? +(localStorage.getItem("totalPrice")) : 0;

// استرجاع المنتجات المحفوظة في السلة من localStorage
let addItemStorage = localStorage.getItem("proudectInCart") ? JSON.parse(localStorage.getItem("proudectInCart")) : [];

// إذا كانت هناك منتجات محفوظة في السلة
if (addItemStorage) {
    addItemStorage.map((item) => {
        // رسم المنتج في السلة
        drawBuyProudect(item);
        // إخفاء زر الإضافة وإظهار زر الحذف
        document.getElementById(`add-btn-${item.id}`).style.display = "none";
        document.getElementById(`remove-btn-${item.id}`).style.display = "inline-block";
        // حساب السعر الإجمالي
        total += +item.salePrice * +(localStorage.getItem(`quantity-${item.id}`));
    })
    
    // عرض السعر الإجمالي
    totalPrice.innerHTML = total / 2 +" EGP";

    // إظهار/إخفاء شارة عدد المنتجات
    if (addItemStorage.length != 0) {
        badge.style.display = "block";
        badge.innerHTML = addItemStorage.length;
    }
    else {
        badge.style.display = "none";
    }
}

// دالة حفظ البيانات في localStorage
function savestroge(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

// دالة زيادة كمية المنتج في السلة
function pls(id, salePrice) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);

    quantity++; // زيادة الكمية
    quantityElement.innerHTML = quantity;
    savestroge(`quantity-${id}`,quantity) // حفظ الكمية الجديدة
    
    total += (+salePrice); // إضافة السعر للإجمالي
    totalPrice.innerHTML = total +" EGP";
    savestroge("totalPrice",total) // حفظ السعر الإجمالي
    openCart(); // فتح السلة
}

// دالة تقليل كمية المنتج في السلة
function mins(id, salePrice) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);

    if (quantity > 1) {
        quantity--; // تقليل الكمية
        quantityElement.innerHTML = quantity;
        savestroge(`quantity-${id}`,quantity.toString())
        
        total -= (+salePrice); // طرح السعر من الإجمالي
        totalPrice.innerHTML = total +" EGP";
        savestroge("totalPrice",total)
    }
    else {
        // إذا كانت الكمية 1، احذف المنتج من السلة
        removeFromCart(id);
    }
    openCart(); // فتح السلة
}

// دالة حذف المنتج من السلة
function removeFromCart(id) {
    // العثور على مؤشر المنتج في مصفوفة السلة
    let itemIndex = addItemStorage.findIndex((item) => item.id === id);
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.innerHTML); // تحويل الكمية لرقم

    if (itemIndex !== -1) {
        // حذف المنتج من مصفوفة السلة
        addItemStorage.splice(itemIndex, 1);
        savestroge("proudectInCart", addItemStorage);
        total = 0;

        // إظهار زر الإضافة وإخفاء زر الحذف
        [{
            id:`add-btn-${id}`, display:'inline-block'
        },{
            id:`remove-btn-${id}`, display:'none'
        }].forEach(item  =>{
            document.getElementById(item.id).style.display=item.display
        })

        // حذف عنصر المنتج من واجهة السلة
        let buyProudectItem = document.getElementById(`buyProudectItem-${id}`);
        if (buyProudectItem) {
            buyProudectItem.remove();
        }

        // إعادة حساب السعر الإجمالي للمنتجات المتبقية
        addItemStorage.forEach((item) => {
            drawBuyProudect(item); 
            total += +item.salePrice * quantity
        });

        // تحديث عرض السعر الإجمالي
        totalPrice.innerHTML = total +" EGP";
        savestroge("totalPrice",total)

        // تحديث شارة عدد المنتجات
        if (addItemStorage.length !== 0) {
            badge.style.display = "block";
            badge.innerHTML = addItemStorage.length;
        } else {
            badge.style.display = "none";
        }
    }
}

// دالة إضافة المنتج للسلة
function addTOCartEvent(id) {
    // فحص ما إذا كان المستخدم مسجل دخول
    if(!localStorage.getItem("userName")) {
        window.location = "login.html"; // توجيه لصفحة تسجيل الدخول
        return;
    }

    // العثور على المنتج المحدد
    let choosenItem = products.find((item) => item.id === id);
    let itemIndex = addItemStorage.findIndex((item) => item.id === id);

    // فحص ما إذا كان المنتج غير موجود في السلة
    if (itemIndex === -1) {
        drawBuyProudect(choosenItem); // رسم المنتج في السلة
        
        // إضافة المنتج لمصفوفة السلة
        addItemStorage = [...addItemStorage, choosenItem];
        savestroge("proudectInCart", addItemStorage);
        
        // حساب السعر مع الكمية
        let quantity = +(localStorage.getItem(`quantity-${choosenItem.id}`)) || 1;
        total += (+choosenItem.salePrice) * quantity;
        totalPrice.innerHTML = total +" EGP";
        savestroge("totalPrice" , total);
        
        // تبديل أزرار الإضافة والحذف
        [
            { id: `add-btn-${id}`, display: 'none' },
            { id: `remove-btn-${id}`, display: 'inline-block' }
        ].forEach(item  =>{
            document.getElementById(item.id).style.display=item.display
        })
        
        // تحديث شارة عدد المنتجات
        badge.style.display = addItemStorage.length ? "block" : "none";
        badge.innerHTML = addItemStorage.length || "";
    }
}

// دالة رسم المنتج داخل السلة
function drawBuyProudect(item) {
    // فحص عدم وجود المنتج مسبقاً في السلة
    if (!document.getElementById(`buyProudectItem-${item.id}`)) {
        let quantity = +(localStorage.getItem(`quantity-${item.id}`)) || 1;

        // إنشاء HTML للمنتج في السلة
        buyProudect.innerHTML += `<div id="buyProudectItem-${item.id}" class="row my-2 pr-2">
        <span class="col-6">${item.title}</span>
        <span class="col-2" id="quantity-${item.id}">${quantity}</span>
        <span class="text-danger mins col-2" onClick="mins(${item.id},${item.salePrice})">-</span>
        <span class="text-success pls col-2" onClick="pls(${item.id},${item.salePrice})">+</span>
      </div>`;
    }
}

// --------------------------------------------------------------------------

// دالة فحص ما إذا كان المنتج في قائمة المفضلة
function checkFavorite(itemId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let isFavorite = favorites.includes(itemId);
    return isFavorite;
}

// دالة إضافة/حذف المنتج من المفضلة
function addFav(id) {
    if (localStorage.getItem("userName")) {
        var heartIcon = document.getElementById(`fav-${id}`);
        if (heartIcon.classList.contains("far")) {
            // تحويل لمفضل
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
            addToFavorites(id);
        } else {
            // إزالة من المفضلة
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
            removeFromFavorites(id);
        }
    } else {
        window.location = "login.html"; // توجيه لتسجيل الدخول
    }
}

// دالة إضافة المنتج لقائمة المفضلة
function addToFavorites(itemId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(itemId)) {
        favorites.push(itemId); // إضافة ID المنتج للمفضلة
    }
    savestroge("favorites", favorites); // حفظ قائمة المفضلة
}

// دالة حذف المنتج من قائمة المفضلة
function removeFromFavorites(itemId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let index = favorites.indexOf(itemId);
    if (index !== -1) {
        favorites.splice(index, 1); // حذف المنتج من المفضلة
    }
    savestroge("favorites", favorites); // حفظ قائمة المفضلة المُحدثة
}

// -------------------------------------------------------------------

// إضافة مستمع حدث النقر على أيقونة السلة
shoppingCartIcon.addEventListener("click", openCart)

// دالة فتح/إغلاق السلة
function openCart() {
    // فتح/إغلاق السلة حسب الحالة الحالية ووجود منتجات
    buyProudect.innerHTML !=""&&
    cartsProudect.style.display=='block'?
    cartsProudect.style.display='none':
    cartsProudect.style.display='block';
}

// --------------------------------------------------------------------------------------

// عناصر البحث
const search = document.getElementById('search'); // مربع البحث
const searchOption = document.getElementById('searchOption'); // خيارات البحث
let modeSearch = 'title'; // وضع البحث الافتراضي

// مستمع تغيير خيار البحث
searchOption.addEventListener('change', function () {
    let selectedValue = this.value; // القيمة المحددة

    // خيارات البحث المتاحة
    const searchModes=[
        {key:'searchTittle',value:'title'},
        {key:'searchCategory',value:'category'}
    ]
    
    // تحديد وضع البحث حسب الاختيار
    const selected=searchModes.find(item =>item.key===selectedValue)
    modeSearch=selected? selected.value:'title';

    // تحديث placeholder وإعادة تعيين القيم
    search.placeholder = `search by ${modeSearch}`;
    search.focus();
    search.value = '';
    drawData(); // إعادة عرض جميع المنتجات
});

// دالة البحث في المنتجات
function searchData(value) {
    // تصفية المنتجات حسب قيمة البحث ووضع البحث
    let filteredProducts = products.filter((item) => {
        if (modeSearch === 'title') {
            return item.title.toLowerCase().includes(value.toLowerCase());
        } else if (modeSearch === 'category') {
            return item.category.toLowerCase().includes(value.toLowerCase());
        }
    });

    // رسم نتائج البحث
    let prosesrch = filteredProducts.map((item) => {
        // فحص حالة المفضلة
        let isFavorite = checkFavorite(item.id);
        let heartIconClass = isFavorite ? "fas" : "far";
        let heightImage;

        // تحديد ارتفاع الصورة حسب الفئة
        item.category==='phone'?heightImage='330px':
        item.category==='smart watch'?heightImage='240px':
        heightImage='200px';

        // إنشاء HTML لمنتج البحث
        return `
            <div class="product-item col-4 mb-4 p-4">
                <div class="card border border-info pt-3">
                    <img class="product-item-img card-img-top m-auto" src="${item.imageURL}" alt="Card image" style="width:80%; height:${heightImage};">
                    <div class="product-itm-desc card-body pb-0 pl-4">
                        <p class="card-title">Product: ${item.title}.</p>
                        <p class="card-text">Category :${item.category}.</p>
                        <p class="color">Color: ${item.color}.</p>
                        <p class="card-price">Price: <span> <del>${item.price} EGP</del> ${item.salePrice} EGP</span></p>
                    </div>
                    <div class="product-item-action d-flex justify-content-between pr-4 pl-4">
                    <button id="add-btn-${item.id}" class="AddToCartBtn btn btn-primary mb-2" onClick="addTOCartEvent(${item.id})">Add To Cart</button>
                    <button id="remove-btn-${item.id}" class="RemoveFromCartBtn btn btn-primary mb-2" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                        <i id="fav-${item.id}" class="${heartIconClass} fa-heart" onClick="addFav(${item.id})"></i>
                    </div>
                </div>
            </div>
        `;
    });

    // عرض نتائج البحث في الصفحة
    allProducts.innerHTML = prosesrch.join('');
}