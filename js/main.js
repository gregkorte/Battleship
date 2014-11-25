$(function() {

  var $gridTarget = $('.gridTable');

  for(var i = 0; i < 10; i++) {
    console.log("hi");
    var $row = $('<div></div>').addClass('row');
    for(var j = 0; j < 10; j++) {
      console.log("bye");
      var $cell = $('<span></span>').addClass('cell');
      $row.append($cell); 
    }
    $gridTarget.append($row);
  }

	$( 'img.ship' ).draggable({
		snap: 'div.shown',
    // grid: [10, 10],
		containment: '.shown'});

	$( 'div.shown' ).droppable({
		accept: '.ship',
	});

});

$('button').click(function(){
	console.log('Ready for war');
});

$('button').click(function(){
	console.log('Board is cleared...')
})



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
