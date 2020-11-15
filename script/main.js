// 選取分類
$('.list').on('click', function(){
    $('.list').removeClass('active');
    $(this).addClass('active');
});
// 讓全部商品為預設
$(document).ready(function(){
    $('#home').addClass('active');
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

// 原味(class=f1)為預設
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
$(".wrapper1-ingre, .wrapper2-odinfo").fadeOut(0);
$(".box1-ingre").fadeOut(0);
$(".item-ingre").click(function() {
    $(".wrapper1-ingre").fadeIn(500);
    $(".box1-ingre").fadeIn(300);
});

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