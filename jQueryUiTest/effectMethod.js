// syntax: effct(effectname, {options},duration,complete])
$("#firstp").effect("blind", { direction:"horizontal"}, 6000, function(){ 
    $("#firstp").effect("blind", { direction:"vertical", mode: "show"}, 2000,);
});

$("#firstp1").effect("bounce", { direction:"up", distance:50, times:5}, 2000, function(){ 
    $("#firstp1").effect("bounce", { direction:"right", distance:50, times:3}, 2000,);
});

$("#firstp2").effect("clip", { direction:"vertical"}, 2000, function(){ 
    $("#firstp2").effect("clip", { direction:"horizontal", mode: "show"}, 2000,);
});

$("#firstp3").effect("explode", {pieces:4}, 2000, function(){ 
    $("#firstp3").effect("explode", { pieces:4, mode: "show"}, 2000,);
});

$("#firstp4").effect("fade", {mode: "hide"}, 2000, function(){ 
    $("#firstp4").effect("fade", {mode: "show"}, 2000,);
});

$("#firstp5").effect("fold", {size:15, horizFirst:true}, 2000, function(){ 
    $("#firstp5").effect("fade", {size:15, horizFirst:false, mode: "show"}, 2000,);
});

$("#firstp6").effect("highlight", {color:"pink", mode:"hide"}, 2000, function(){ 
    $("#firstp6").effect("highlight", {color:"pink", mode:"show"}, 2000,);
});

$("#firstp7").effect("pulsate", {time:2, mode:"hide"}, 2000, function(){
    $("#firstp7").delay(2000); 
    $("#firstp7").effect("pulsate", {times:2, mode:"show"}, 2000,);
});

$("#firstp8").effect("shake", {time:3, distance:10, direction:"left", mode:"hide"}, 4000, function(){
    $("#firstp8").delay(2000); 
    $("#firstp8").effect("shake", {times:3, distance:10, direction:"up", mode:"show"}, 2000,);
});

$("#firstp9").effect("puff", {percent:50}, 1000, function(){ 
    $("#firstp9").effect("puff", {percent:50, mode:"show"}, 2000,);
});

$("#firstp10").effect("drop", {directon:"down"}, 1000, function(){ 
    $("#firstp10").effect("drop", {directon:"down", mode:"show"}, 2000,);
});