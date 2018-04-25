$(document).ready(function() {


    $(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      4000);
});

    $('.icon-menu').click(function() {
    $('.menu').animate({	
      left: "0px"
    }, 400);

    $('body').animate({
      left: "285px"
    }, 400);

    $("body").css({
    	"overflow":"hidden"});

    $(".subBody").css({
    	"filter": "blur(2px) grayscale(1)"});
  });



  $('.icon-close').click(function() {
    $("body").css({
    	"overflow":"initial"});

    $(".subBody").css({
    	"filter": "blur(0px)"});


    $('.menu').animate({
      left: "-285px"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
  });

  

});
// ================================     Jquery Ends/ JS Begins   +++++++++++++++++++++++++

// class Pokemon{
// 	constructor(){
		
// 	}

// 	namedAll(){
//        return 
// 	}

// 	get(name){

// 	}
// };








// let cash_money = {
// 	let tryunt = { 'hp': 100, 'attack':100, 'defense': 100, 'abilities': []},
//     let throh =  { 'hp': 100, 'attack':100, 'defense': 100, 'abilities': []},
//     let tryunt2 =  { 'hp': 100, 'attack':100, 'defense': 100, 'abilities': []},

// };
