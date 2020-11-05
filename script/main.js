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
    $('.f1').addClass('selectf1');
});