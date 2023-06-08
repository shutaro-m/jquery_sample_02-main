// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.3); // 初期状態 30%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.3); // マウスが離れたら30%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=200px' } , { 'duration': 1000 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=200px' } , { 'duration': 1000 } );
  });
  $("#center").click( function(){
    var optionObj = new Object();
    optionObj.left = $('body').outerWidth() / 2 - 100;
    $('#move').animate( optionObj , { 'duration': 1000 } );
  });
});
