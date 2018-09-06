'use strict';



$(document).ready(function() {
  var turn = 'X';
  $('[data-cell]').on('click', function(){
      if($(this).text() === ''){
        $(this).text(turn);
        checkWin();
        if(turn === 'X'){
          turn = 'O';
        }else{
            turn = 'X';
        }
      }
  })

  function checkWin(){
      if($('[data-cell="0"]').text() === turn &&
      $('[data-cell="1"]').text() === turn &&
      $('[data-cell="2"]').text() === turn)
      {
        console.log('win!');
      }
      else if($('[data-cell="3"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="5"]').text() === turn)
        {
          console.log('win!');
        }
      else if($('[data-cell="6"]').text() === turn &&
        $('[data-cell="7"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
        {
          console.log('win!');
        }
      else if ($('[data-cell="0"]').text() === turn &&
        $('[data-cell="3"]').text() === turn &&
        $('[data-cell="6"]').text() === turn)
        {
          console.log('win!');
        }
      else if ($('[data-cell="1"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="7"]').text() === turn)
        {
          console.log('win!');
        }
      else if ($('[data-cell="2"]').text() === turn &&
        $('[data-cell="5"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
        {
          console.log('win!');
        }
      else if ($('[data-cell="0"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
        {
          console.log('win!');
        }
      else if ($('[data-cell="2"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="6"]').text() === turn)
        {
          console.log('win!');
        }
      else {
        console.log('nothing')
    }
  }
})


  $('#clear').click(function(){
    $('[data-cell]').empty();
    turn = 'X';
    $('#announce-winner').empty();
  })
