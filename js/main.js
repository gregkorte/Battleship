$(function() {

  var $gridTarget = $('.gridTable');

  for(var i = 0; i < 10; i++) {
    var $row = $('<div></div>').addClass('row');
    for(var j = 0; j < 10; j++) {
      var $cell = $('<span></span>').addClass('cell');
      $row.append($cell); 
    }
    $gridTarget.append($row);
  }

  // $( ".cell" ).droppable({ accept: ".ship" });
  // var accept = $( ".cell" ).droppable( "option", "accept" );
  // $( ".cell" ).droppable( "option", "accept", ".ship" );
  
  // $( ".ship" ).droppable({ accept: "" });
  // var accept = $( ".ship" ).droppable( "option", "accept" );
  // $( ".ship" ).droppable( "option", "accept", "" );


	$( '.ship' ).draggable({
		 snap: '.shown span.cell',
    //obstacle: '.ship',
    //preventCollision: true,
		containment: '.shown'});

  $('.ship').sortable();
 

  $('span.cell').droppable({
    accept: '.ship',
  });
});

$('button').click(function(){
	console.log('Ready for war');
});

$('button').click(function(){
	console.log('Board is cleared...')
})


function rotate(){
  var clickedShip = $('.ui-draggable-dragging');
  if (clickedShip.hasClass("horizontal")) {
    clickedShip.removeClass("horizontal");
    clickedShip.addClass("vertical");
  } else if (clickedShip.hasClass("vertical")) {
    clickedShip.removeClass("vertical");
    clickedShip.addClass("horizontal");
  }  
}

$('.ship').mousedown(function() {
  console.log("mousedown");
   $('body').keydown(function(event){
     console.log(event.keyCode);
     if (event.keyCode == 32) {
       event.preventDefault();
       rotate();
     }
   });  
});

//Set ready state
//Place ships
//Do not let ships go off board
//Reset board button
//Fire shot
//Check if occupied or unoccupied
//On fire ask for hit or miss
//On hit return alert
//On hit return sprite animation
//On miss return alert
//On sink return wiki info about vessel sunk
//Switch turns
//On last ship sunk return game over
