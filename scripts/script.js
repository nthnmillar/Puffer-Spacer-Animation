$('#puff').animateSprite({
    fps:10,
    animations:{
      puff:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    },
    loop:false,
    autoplay:false,
    complete:function(){
    //  alert("animation end");
    }
});

$('#button-puff').click(function(){
    $("#puff").animateSprite('restart');
});

$('#spacer').animateSprite({
    fps:10,
    animations:{
      puff:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    },
    loop:false,
    autoplay:false,
    complete:function(){
    //  alert("animation end");
    }
});

$('#button-space').click(function(){
    $("#spacer").animateSprite('restart');
});
