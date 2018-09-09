'use strict';

// $(document).ready(function() {

// });

$(function(){
  $('[data-block]').draggable({
    revert: 'invalid'
  });


$('[data-stack]').droppable({
    drop: function(event, ui){
      let $last = ($(this).children().last()).data('block');
      let $dragging = $(ui.draggable).data('block');
      if $dragging > $last{
        $(ui.draggable).draggable('option', 'revert', true);
      } else {
      $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    }
    checkWin();
  }
});
])
function checkWin(){
  if($("[data-stack=3], [data-stack=2]").children().length === 4)

}












//
// $(function(){ if $(['data-block==25']){
//   $('.draggable').draggable({
//     revert: 'invalid'
//   } else
//
//
// )};
//
//
//   $('.drop-area').droppable({
//     drop: function(event, ui){
//       $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
//     }
//   });
// })
