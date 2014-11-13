var count = 0
var frames =     [["#DFEFD4", "#2F5B38", "#000000", "#B1C6BA", "#823512"],
            ["#6BD091", "#2D7448", "#41D765", "#9CD8C8", "#0D2310"],
            ["#ECF7F8", "#58746F", "#729E94", "#F3F6FA", "#2E4047"],
            ["#4A698A", "#BF4638", "#FFFFFF", "#86ADD3", "#000000"],
            ["#03020B", "#18271C", "#233D2B", "#8B8871", "#5A261A"],
            ["#000000", "#3D75D3", "#C3C3C1", "#FDFEF9", "#121B3E"],
            ["#2A4030", "#3B593D", "#51704A", "#DAD0B3", "#0C0C0A"],
            ["#20428E", "#A4CAF2", "#2F7147", "#2EA74F", "#0F0F0D"],
            ["#C8B68D", "#979262", "#173725", "#163525", "#000000"]]
$(document).on('click', '.next-button', function(){
    if (count < 8){
        count += 1
    }
    console.log(count)
  $("#circle-1").css("background", frames[count][0]);
  $("#circle-2").css("background", frames[count][1]);
  $("#circle-3").css("background", frames[count][2]);
  $("#circle-4").css("background", frames[count][3]);
  $("#circle-5").css("background", frames[count][4]);
  $("#center").attr("src","movies/Matrix/matrix"+(count+1)+".png");
});

$(document).on('click', '.prev-button', function(){
    if (count > 0){
        count -= 1
    }
    console.log(count)
  $("#circle-1").css("background", frames[count][0]);
  $("#circle-2").css("background", frames[count][1]);
  $("#circle-3").css("background", frames[count][2]);
  $("#circle-4").css("background", frames[count][3]);
  $("#circle-5").css("background", frames[count][4]);
  $("#center").attr("src","movies/Matrix/matrix"+(count+1)+".png");
});