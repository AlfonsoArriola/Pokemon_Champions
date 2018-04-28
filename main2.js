// let tyruntDNA = [];
// let getTyruntName = [];
// let getTyruntHP = [];
// let getTyruntAttack = [];
// let getTyruntDefense = [];
// let getTyruntAbilities = [];
// let tyrunt = [];

// let littenDNA = [];
// let getLittenName = [];
// let getLittenHP = [];
// let getLittenAttack = [];
// let getLittenDefense = [];
// let getLittenAbilities = [];
// let litten = [];

// let throhDNA = [];
// let getThrohName = [];
// let getThrohHP = [];
// let getThrohAttack = [];
// let getThrohDefense = [];
// let getThrohAbilities = [];
// let throh=[];


// let theSquad = [];


// $(document).ready(function(){



// 	  // -________________________S__L__I__D__E__S____________________________________________________

// 		    $(function(){
// 		       $('.fadein img:gt(0)').hide();
// 		          setInterval(function(){
// 		            $('.fadein :first-child').fadeOut()
// 		                 .next('img').fadeIn()
// 		                   .end().appendTo('.fadein');}, 
// 		                 4000);
// 		    });

// // ____________________________MENU___________________________________________________________

// 					$('.icon-menu').click(function(){
// 					    $('.menu').animate({	
// 					      left: "0px"
// 					    }, 400);

// 						    $('body').animate({
// 						      left: "285px"
// 						    }, 400);

// 							    $("body").css({
// 							    	"overflow":"hidden"});

// 								    $(".subBody").css({
// 								    	"filter": "blur(2px) grayscale(1)"});
// 					});


// 					    $('.icon-close').click(function() {
// 					        $("body").css({
// 					    	"overflow":"initial"});

// 					           $(".subBody").css({
// 					    	      "filter": "blur(0px)"});

// 					              $('.menu').animate({
// 					                  left: "-285px"
// 					              }, 400);

// 					                  $('body').animate({
// 					                    left: "0px"
// 					                  }, 400);
					  
// 					    });


// 		// **************           Tyrunt!        *****************************************************************


//                         $.ajax({
// 							 	    type: 'GET',
// 							        url:'https://pokeapi.co/api/v2/pokemon/696/',
// 							        success: function(data1){ 
							 
// 							 		 tyruntDNA = data1;
// 							 		 getTyruntName = data1.name;
// 							 		 getTyruntHP = data1.stats[5].base_stat;
// 							 		 getTyruntAttack = data1.stats[4].base_stat;
// 							 		 getTyruntDefense = data1.stats[3].base_stat;
									         
// 									           for (let i =0; i < data1.abilities.length; i++){
// 									           	    getTyruntAbilities = data1.abilities[i].ability.name;        
// 									           };

// 							    //             class Pokemon{
// 											//   constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
// 											// 	this.name = p_name;
// 											// 	this.hp = p_hp;
// 											// 	this.attack = p_attack;
// 											// 	this.defense = p_defense;
// 											// 	this.abilities = p_abilities;
// 										 //      }	
// 							    //             };

// 											// tyrunt = new Pokemon(getTyruntName, getTyruntHP, getTyruntAttack, getTyruntDefense, getTyruntAbilities);
// 											// console.log( tyrunt);
// 											// theSquad.push(tyrunt);
										

// 											// 				 $('#pokemonTitleName').text(tyrunt.name);
// 											// 				 $('#hpBarNumber').text(tyrunt.hp);
// 											// 				 $('#attackBarNumber').text(tyrunt.attack);
// 											// 				 $('#defenseBarNumber').text(tyrunt.defense);
// 											// 				 $('#p_abilities').text(tyrunt.abilities);

// 							        }
// 							});



// // &&&&&&&&&&&&&&&&&&&&&&&&&&&                   Litten!               &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&S

// 							$.ajax({
// 							 	    type: 'GET',
// 							        url:'https://pokeapi.co/api/v2/pokemon/725/',
// 							        success: function(data2){ 
							 
// 								 		 littenDNA = data2;
// 								 		 getLittenName = data2.name;
// 								 		 getLittenHP = data2.stats[5].base_stat;
// 								 		 getLittenAttack = data2.stats[4].base_stat;
// 								 		 getLittenDefense = data2.stats[3].base_stat;
								         
// 									           for (let i =0; i < data2.abilities.length; i++){
// 									           	    getLittenAbilities = data2.abilities[i].ability.name;        
// 									           };

// 									    //           class Pokemon{
// 													// constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
// 													// 	this.name = p_name;
// 													// 	this.hp = p_hp;
// 													// 	this.attack = p_attack;
// 													// 	this.defense = p_defense;
// 													// 	this.abilities = p_abilities;
// 												 //    }	
// 									    //           };

// 													// litten = new Pokemon(getLittenName, getLittenHP, getLittenAttack, getLittenDefense, getLittenAbilities);
// 													// console.log(litten);
// 													// theSquad.push(litten);
													


// 							        }
// 							});



// // *******************************            Throh!             ************************************************



// 							$.ajax({
// 							 	    type: 'GET',
// 							        url:'https://pokeapi.co/api/v2/pokemon/538/',
// 							        success: function(data3){ 
							 
// 								 		 throhDNA = data3;
// 								 		 getThrohName = data3.name;
// 								 		 getThrohHP = data3.stats[5].base_stat;
// 								 		 getThrohAttack = data3.stats[4].base_stat;
// 								 		 getThrohDefense = data3.stats[3].base_stat;
								         
// 									           for (let i =0; i < data3.abilities.length; i++){
// 									           	    getThrohAbilities = data3.abilities[i].ability.name;        
// 									           };

// 										    //           class Pokemon{
// 														// constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
// 														// 	this.name = p_name;
// 														// 	this.hp = p_hp;
// 														// 	this.attack = p_attack;
// 														// 	this.defense = p_defense;
// 														// 	this.abilities = p_abilities;
// 													 //    }	
// 										    //           };

// 														// 	throh = new Pokemon(getThrohName, getThrohHP, getThrohAttack, getThrohDefense, getThrohAbilities);
// 														// 	console.log(throh);
// 														// 	theSquad.push(throh);
															
// 							        }
// 							}); 

// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  CASH MONEY   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>











// });



// // ================================     Jquery Ends/ JS Begins   +++++++++++++++++++++++++



// class Cash_Money{
// 	constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
// 		   	    this.name = p_name;
// 				this.hp = p_hp;
// 				this.attack = p_attack;
// 				this.defense = p_defense;
// 				this.abilities = p_abilities;
// 	}

// 	all(){
     	
// 	}

// 	get(name){
// 		if(name.tolowerCase == tyrunt){
// 			return
// 		} else if(name.tolowerCase == litten){
// 			return 
// 		} else if(name.tolowerCase == throh){
// 			return 
// 		}

// 	}
// }









//     class Pokemon{
// 		constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
// 				this.name = p_name;
// 				this.hp = p_hp;
// 				this.attack = p_attack;
// 				this.defense = p_defense;
// 				this.abilities = p_abilities;
// 													    }	
// 										              };

// // let IwannnaBeTheVeryBest = new Cash_Money('tyrunt', 'litten');

// // console.log(IwannnaBeTheVeryBest.all());


// //   ++++++++++++++++   practice bar graph ++++++++++++++++







