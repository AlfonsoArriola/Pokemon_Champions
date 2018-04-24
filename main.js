$(document).ready(function() {
    // $("#demo").html("Hello, World!");

    $(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      4000);
});

});


// class Pokemon{
// 	constructor( hp, attack, defense, abilities ){
// 		this.hp = hp;
// 		this.attack = attack;
// 		this.defense = defense;
// 		this.abilities = abilities;
// 	}
// }

