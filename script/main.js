// 選取分類
$('.list').on('click', function(){
    $('.list').removeClass('active');
    $(this).addClass('active');
});
// 讓全部商品為預設
$(document).ready(function(){
    $('#home').addClass('active');
});

// many alerts
// $(".order").click(function(){
    // alert("X 此功能尚未解鎖");
// });

$(".n-item1").click(function(){
    alert("翻到1是偉大的夢想");
});
$(".n-item2").click(function(){
    alert("敬請期待產品上市");
});
$(".n-item3").click(function(){
    alert("小編努力上架中...");
});

// 瑪德蓮口味選擇
// $('.f2').on('click', function(){
//     $('.f1').removeClass('selectf1');
//     $(this).addClass('selectf2');
//     $(".pic1").attr("src","../img/566.png"); 
// });
// $('.f1').on('click', function(){
//     $('.f2').removeClass('selectf2');
//     $(this).addClass('selectf1');
//     $(".pic1").attr("src","../img/item1.png"); 
// });

// 商品分頁－原味(class=f1)為預設
$(document).ready(function(){
    $('.def-itemsub').addClass('selectf1-itemsub');    
});


// 商品分頁-數量增減
var counter = 1;

$(".plus").click(function() {
    if (counter < 30) {
        counter++;
        $(".count-itemsub").text(counter);
    } else {
        $('.plus').prop('disabled', true);
    }
});

$(".minus").click(function() {
    if (counter > 1) {
        counter--;
        $(".count-itemsub").text(counter);
    } else {
        $('.minus').prop('disabled', true);
    }
});

// 商品分頁-選擇口味
$('.f2-itemsub').on('click', function(){
    $('.def-itemsub').removeClass('selectf1-itemsub');
    $(this).addClass('selectf2-itemsub');
//     $(".pic1").attr("src","../img/566.png"); 
});
$('.def-itemsub').on('click', function(){
    $('.f2-itemsub').removeClass('selectf2-itemsub');
    $(this).addClass('selectf1-itemsub');
//     $(".pic1").attr("src","../img/item1.png"); 
});


// 商品分頁-加入購物車
$(".wrapper3-cart").fadeOut(0);
$(".box3-cart").fadeOut(0);
$(".addToCart").click(function() {
    $(".wrapper3-cart").fadeIn(500);
    $(".box3-cart").fadeIn(300);
});
$(".btn-cart-close").click(function() {
    $(".wrapper3-cart").fadeOut(0);
    $(".box3-cart").fadeOut(0);
});


// 商品分頁-商品成分
$(".wrapper1-ingre").fadeOut(0);
$(".box1-ingre").fadeOut(0);
$(".item-ingre").click(function() {
    $(".wrapper1-ingre").fadeIn(500);
    $(".box1-ingre").fadeIn(300);
});

// 商品分頁-訂購須知
$(".wrapper2-odinfo").fadeOut(0);
$(".box2-odinfo").fadeOut(0);
$(".odinfo").click(function() {
    $(".wrapper2-odinfo").fadeIn(500);
    $(".box2-odinfo").fadeIn(300);
});

$(".item-close").click(function() {
    $(".wrapper1-ingre, .wrapper2-odinfo").fadeOut(0);
    $(".box1-ingre, .box2-odinfo").fadeOut(0);
});

// 分頁-往下滑之後才顯示nav
// $(function () {
    // var $win = $(window);
    // var $showNav = $('#navbar');
    // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕 
    // $win.scroll(function () {
        // if ($win.scrollTop() > 200) {
        // $showNav.show();
        // } else {
        // $showNav.hide();
        // }
    // });
// });

// Loading
// $(window).on('load', function(){
    // setTimeout(removeLoader, 2500);
    //wait for page load PLUS two seconds.
// });
//   function removeLoader(){
    //   $( ".loader" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        // $( ".container" ).remove(); //makes page more lightweight 
        // document.getElementById("wrapper").style.display = "block";
    // });  
//   }

function pageDirectToMadi() {
    window.location.href = "/details/details_madeli/index.html";
}
function pageDirectToCorna() {
    window.location.href = "/details/details_corna/index.html";
}
function pageDirectToBrown() {
    window.location.href = "/details/details_brown/index.html";
}
function pageDirectToLemon() {
    window.location.href = "/details/details_lemontart/index.html";
}
function pageDirectToCheese() {
    window.location.href = "/details/details_cheese/index.html";
}
function pageDirectToChocochz() {
    window.location.href = "/details/details_chocochz/index.html";
}
function pageDirectToMisu() {
    window.location.href = "/details/details_misu/index.html";
}
function pageDirectToChoco6() {
    window.location.href = "/details/details_6choco/index.html";
}
function pageDirectToBlack6() {
    window.location.href = "/details/details_6black/index.html";
}

// 回到各分頁
function pageReDirectItems_warm() {
    window.location.href = "/itemsub/itemsub-warm/index.html#toTop";
}
function pageReDirectItems_cold() {
    window.location.href = "/itemsub/itemsub-cold/index.html#toTop";
}
function pageReDirectItems_set() {
    window.location.href = "/itemsub/itemsub-set/index.html#toTop";
}
function pageReDirectItems_six() {
    window.location.href = "/itemsub/itemsub-six/index.html#toTop";
}