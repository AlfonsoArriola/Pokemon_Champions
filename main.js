let tyruntDNA = [];
let getTyruntName = [];
let getTyruntHP = [];
let getTyruntAttack = [];
let getTyruntDefense = [];
let getTyruntAbilities = [];
let tyrunt = [];

let littenDNA = [];
let getLittenName = [];
let getLittenHP = [];
let getLittenAttack = [];
let getLittenDefense = [];
let getLittenAbilities = [];
let litten = [];

let throhDNA = [];
let getThrohName = [];
let getThrohHP = [];
let getThrohAttack = [];
let getThrohDefense = [];
let getThrohAbilities = [];
let throh=[];


let theSquad = [];
let IwannnaBeTheVeryBest =[];


$(document).ready(function(){



	  // -________________________S__L__I__D__E__S____________________________________________________

		    $(function(){
		       $('.fadein img:gt(0)').hide();
		          setInterval(function(){
		            $('.fadein :first-child').fadeOut()
		                 .next('img').fadeIn()
		                   .end().appendTo('.fadein');}, 
		                 4000);
		    });






		    

// ____________________________MENU___________________________________________________________

					$('.icon-menu').click(function(){
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


		// **************           Tyrunt!        *****************************************************************

    

    let apiTyruntCall =     $.ajax({
							 	    type: 'GET',
							        url:'https://pokeapi.co/api/v2/pokemon/696/',
							        success: function(data1){ 
							 
							 		 tyruntDNA = data1;
							 		 getTyruntName = data1.name;
							 		 getTyruntHP = data1.stats[5].base_stat;
							 		 getTyruntAttack = data1.stats[4].base_stat;
							 		 getTyruntDefense = data1.stats[3].base_stat;

									         
									           for (let i =0; i < data1.abilities.length; i++){
									           	    getTyruntAbilities.push(" " + data1.abilities[i].ability.name);        
									           };

							                class Pokemon{
											  constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
												this.name = p_name;
												this.hp = p_hp;
												this.attack = p_attack;
												this.defense = p_defense;
												this.abilities = p_abilities.toString();
										      }	
							                };

											tyrunt = new Pokemon(getTyruntName, getTyruntHP, getTyruntAttack, getTyruntDefense, getTyruntAbilities);
											console.log( tyrunt);
											// theSquad.push(tyrunt);
										

										   

															 $('#tyruntTitleName').text(tyrunt.name.toUpperCase());
															 $('#tyruntHpBarNumber').text(tyrunt.hp);
															 $('#tyruntAttackBarNumber').text(tyrunt.attack);
															 $('#tyruntDefenseBarNumber').text(tyrunt.defense);
															 $('#tyruntAbilities').text(tyrunt.abilities);


													$('.tyruntHPgrahped').css('width', (tyrunt.hp *4));
													$('.tyruntATKgraphed').css('width', (tyrunt.attack *4));
													$('.tyruntDEFgraphed').css('width', (tyrunt.defense *4));

							        }
							});



// &&&&&&&&&&&&&&&&&&&&&&&&&&&                   Litten!               &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&S

	 let apiLittenCall	=	$.ajax({
							 	    type: 'GET',
							        url:'https://pokeapi.co/api/v2/pokemon/725/',
							        success: function(data2){ 
							 
								 		 littenDNA = data2;
								 		 getLittenName = data2.name;
								 		 getLittenHP = data2.stats[5].base_stat;
								 		 getLittenAttack = data2.stats[4].base_stat;
								 		 getLittenDefense = data2.stats[3].base_stat;
								         
									           for (let i =0; i < data2.abilities.length; i++){
									           	    getLittenAbilities.push(" " + data2.abilities[i].ability.name);
	

									           };

									              class Pokemon{
													constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
														this.name = p_name;
														this.hp = p_hp;
														this.attack = p_attack;
														this.defense = p_defense;
														this.abilities = p_abilities.toString();
												    }	
									              };

													litten = new Pokemon(getLittenName, getLittenHP, getLittenAttack, getLittenDefense, getLittenAbilities);
													console.log(litten);
													// theSquad.push(litten);

													         $('#littenTitleName').text(litten.name.toUpperCase());
															 $('#littenHpBarNumber').text(litten.hp);
															 $('#littenAttackBarNumber').text(litten.attack);
															 $('#littenDefenseBarNumber').text(litten.defense);
															 $('#littenAbilities').text(litten.abilities);

													$('.littenHPgrahped').css('width', (litten.hp *4));
													$('.littenATKgraphed').css('width', (litten.attack *4));
													$('.littenDEFgraphed').css('width', (litten.defense *4));
													


							        }
							});



// *******************************            Throh!             ************************************************



		let apiThrohCall =	$.ajax({
							 	    type: 'GET',
							        url:'https://pokeapi.co/api/v2/pokemon/538/',
							        success: function(data3){ 
							 
								 		 throhDNA = data3;
								 		 getThrohName = data3.name;
								 		 getThrohHP = data3.stats[5].base_stat;
								 		 getThrohAttack = data3.stats[4].base_stat;
								 		 getThrohDefense = data3.stats[3].base_stat;
								         
									           for (let i =0; i < data3.abilities.length; i++){
									           	    getThrohAbilities.push(" " + data3.abilities[i].ability.name);        
									           };

										              class Pokemon{
														constructor(p_name, p_hp, p_attack, p_defense, p_abilities){
															this.name = p_name;
															this.hp = p_hp;
															this.attack = p_attack;
															this.defense = p_defense;
															this.abilities = p_abilities.toString();
													    }	
										              };

															throh = new Pokemon(getThrohName, getThrohHP, getThrohAttack, getThrohDefense, getThrohAbilities);
															console.log(throh);
															// theSquad.push(throh);

															 $('#throhTitleName').text(throh.name.toUpperCase());
															 $('#throhHpBarNumber').text(throh.hp);
															 $('#throhAttackBarNumber').text(throh.attack);
															 $('#throhDefenseBarNumber').text(throh.defense);
															 $('#throhAbilities').text(throh.abilities);

													$('.throhHPgrahped').css('width', (throh.hp *4));
													$('.throhATKgraphed').css('width', (throh.attack *4));
													$('.throhDEFgraphed').css('width', (throh.defense *4));
															
							        }
							}); 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  CASH MONEY   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                   $.when(apiTyruntCall,apiLittenCall, apiThrohCall).done(function(apiTyruntCall,apiLittenCall, apiThrohCall){
                                    console.log('go!!, go!!!!');

       //                      class Cash_Money{
	      //                     constructor(throh, litten, tyrunt){
							// 	this.throh = throh;
							// 	this.litten = litten;
							// 	this.tyrunt = tyrunt;
							// }
							// 		all(){
							// 	     	theSquad.push(tyrunt, throh, litten);
							// 	     	// console.log (theSquad);	
							// 		}

							// 		// get(name){
							// 		// 	for (let i =0; i < theSquad.length; i++){
							// 		// 		if(name.toLowerCase == theSquad[i].length){
							// 		// 			console.log(theSquad[i].length);
							// 		// 		} else{
							// 		// 			console.log('This is Pokemon, not Digimon.  Try again');
							// 		// 		}
							// 		// 	}
							// 		// }

       //                      }


       //                      IwannnaBeTheVeryBest = new Cash_Money('throh','litten','tyrunt');

       //                              console.log(IwannnaBeTheVeryBest.all());


                   });
 








});



// ================================     Jquery Ends/ JS Begins   +++++++++++++++++++++++++



// class Cash_Money{
// 	constructor(throh, litten, tyrunt){
// 		this.throh = cashThroh;
// 		this.litten = cashLitten;
// 		this.tyrunt = cashTyrunt;

// 	}

// 	all(){
//      	theSquad.push(cashTyrunt, cashThroh, cashLitten);
//      	return theSquad;
// 	}

// 	// get(name){
// 	//       for(let i = 0; )

// 	// }
// }

// let IwannnaBeTheVeryBest = new Cash_Money(throh,litten, tyrunt);

// console.log(IwannnaBeTheVeryBest.all());


//   ++++++++++++++++   practice bar graph ++++++++++++++++







