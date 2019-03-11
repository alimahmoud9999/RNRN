

// Start slider countir 
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val(ui.values[1]);
      $("#amount2").val(ui.values[0]);
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});


//Nice Scroll plugin 
$("body").niceScroll({
  cursorcolor: "#FED700",
  cursorborder: "1px solid #FED700",
  cursorborderradius: "0"

});
$(".my-massge").niceScroll({
  cursorcolor: "#FED700",
  cursorborder: "1px solid #FED700",
  cursorborderradius: "0"

});
$(".chat").niceScroll({
  cursorcolor: "#FED700",
  cursorborder: "1px solid #FED700",
  cursorborderradius: "0"

});


// Show Password 
function showpassword() {
  var x = document.getElementById("input-pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


//Page Remebr 
$(document).ready(function () {
  $('.box-opcity').hide();
  $('.btn-send').on('click', function () {
    $('.box-opcity').fadeIn();

   $('.box-opcity').on('click', function () {
      $(this).fadeOut();
    });

  });
});

//My edit info 
//Cerat Tps 
$(document).ready(function(){
  $('.my-tabs div').on('click', function(){
    //Git The Clickd LI ID And Cache it In myID Variable
    var my = $(this).attr("class");
    $('.my-tabs2').hide();
    var me = $("." + my + "-content");
    me.fadeIn(1000);
  });
 
});

///Massge Delet 
$(document).ready(function(){
 $('.delete').on('click',function(){
    $('.box-opcity2').fadeIn();

   $('.btn-delete').on('click', function () {
      $('.box-opcity2').fadeOut();
    });
});
});

//Rate 
$(document).ready(function(){
  $('.btn-user-rate').on('click',function(){
    $('.rate').fadeIn();
  });
  $('.btn-rate').on('click',function(){
    $('.rate').fadeOut();
  });
});

// Send Massge 
$(document).ready(function(){
  $('.btn-user-massge').on('click',function(){
    $('.box-masseg').fadeIn();
  });
  $('.send-ms').on('click',function(){
    $('.box-masseg').fadeOut();
  });
});
// thumbnils Gallary 
$(document).ready(function () {
  $('.thumbnils img').hover(function () {

    $(this).addClass('active').siblings().removeClass('active');
    $('.master-img img').attr('src', $(this).attr('src'));
    });
});

/****** to preview uploaded image ******/
function readURL(input) {
  if (input.files && input.files[0]) {
  var reader = new FileReader();
  reader.onload = function (e) {
  $('#blah')
  .attr('src', e.target.result);
  };
  reader.readAsDataURL(input.files[0]);
  }
  }
  /****************************************/
  
  $('.bid-ovarlay').hide();
$('.btn-bid').on('click',function(){
  $('.bid-ovarlay').fadeIn();
});
$('.bid-ovarlay').on('click',function(){
  $('.bid-ovarlay').hide();
});

$('.msg-ovarlay').hide();
$('.send-mss').on('click',function(){
  $('.msg-ovarlay').fadeIn();
});

$('.btn-send').on('click',function(){
  $('.msg-ovarlay').hide();
});
