let tyrunt = [];
let getTyruntName = [];
let getTyruntHP = [];
let getTyruntAttack = [];
let getTyruntDefense = [];
let getTyruntAbilities = [];


// let pokemonTitle = document.querySelector('#pokemonTitleName');



// **************************  JS ends/ jQ begins  ***************************************


$(document).ready(function() {


// ^^^^^^^^^^^^^^^^^^^^^^  I CHOOSE YOU AJAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       $.ajax({
 	    type: 'GET',
        url:'https://pokeapi.co/api/v2/pokemon/696/',
        success: function(data){ 
 		
 		 getTyruntName = data.name;
 		 getTyruntHP = data.stats[5].base_stat;
 		 getTyruntAttack = data.stats[4].base_stat;
 		 getTyruntDefense = data.stats[3].base_stat;
         

           for (let i =0; i < data.abilities.length; i++){
           	    getTyruntAbilities = data.abilities[i].ability.name;        
           };


              class Pokemon{
				constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
					this.name = p_name;
					this.hp = p_hp;
					this.attack = p_attack;
					this.defense = p_defense;
					this.abilities = p_abilities;
			    }	
              };


				let iChooseYouTyrunt = new Pokemon(getTyruntName, getTyruntHP, getTyruntAttack, getTyruntDefense, getTyruntAbilities);
				console.log( iChooseYouTyrunt);
				 tyrunt = iChooseYouTyrunt;

				
				 $('#pokemonTitleName').text(tyrunt.name).toUpperCase();

				 // $('#pokemonTitleName').myclass{text-transform: lowercase};


	    }
        });


//   -________________________S__L__I__D__E__R____________________________________________________

    $(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      4000);
});

// _>>>>>>>>>>>>>>>>>>> Menu <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


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



// class Cash_Money{
// 	constructor(){

// 	}

// 	all(){

// 	}

// 	get(name){

// 	}
// }





