$(function() {

  var $gridTarget = $('.gridTable');

  for(var i = 0; i < 10; i++) {
    var $row = $('<div></div>').addClass('row');
    $row.addClass(function(index){
      index = i;
      return index;
    });
    for(var j = 0; j < 10; j++) {
      var $cell = $('<span></span>').addClass('cell open');
      $cell.addClass(function(jIndex){
        jIndex = j;
        return "" + i + jIndex;
      });
      $row.append($cell); 
    }
    $gridTarget.append($row);
  }

  $( '.ship' ).draggable({
    snap: '.open',
    containment: '.shown'
  });
  
  var shipName;

  $('.ship').mousedown(function(){
    shipName = $(this).context.classList[1];
     });

    $('.open').droppable({
      tolerance: "touch",
      accept: '.ship',
      over: function(event, ui) {
        if ($(this).hasClass('occupied')) {
          //$('.ship').draggable({ revert: true });
          //$(this).removeClass('occupied');
        }
      },
      drop: function(event, ui) {
        if ($(this).hasClass('occupied')) {
          $(this).droppable({ revert: true});
        } else {
        $(this).addClass('occupied ' + shipName).removeClass('open');
        }
      },
      out: function(event, ui) {
        $(this).removeClass('occupied ' + shipName).addClass('open');
      }
    });
  });

$('button').click(function(){
  console.log('Ready for war');
});

$('button').click(function(){
  console.log('Board is cleared...')
});


function rotate(){
  var clickedShip = $('.ui-draggable-dragging');
  if (clickedShip.hasClass("horizontal")) {
    clickedShip.removeClass("horizontal");
    clickedShip.addClass("vertical");
  } else if (clickedShip.hasClass("vertical")) {
    clickedShip.removeClass("vertical");
    clickedShip.addClass("horizontal");
  }  
  clickedShip = "";
}

$('.ship').mousedown(function() {
  $('body').keydown(function(event){
    if (event.keyCode == 32) {
      event.preventDefault();
      rotate();
    }
  });  
});

function setShips(){

  $('.ship').draggable( "disable" );
}













function checkZ() {
  for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 10; j++) {
      console.log($('0').zIndex());
    }
  }
}

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
