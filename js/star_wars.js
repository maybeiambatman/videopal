var count = 0
var frames =     [["#363340", "#767BA3", "#A8ACC2", "#7C87A7", "#0D0C10"],
            ["#635063", "#000000", "#3A3C40", "#D49356", "#E7E6EC"],
            ["#8BB1D8", "#BFDBF2", "#032605", "#F22004", "#0D0B0B"],
            ["#F04ABF", "#F7C5F6", "#D4347C", "#000000", "#6B6A72"],
            ["#606367", "#84A0AB", "#C06D41", "#000000", "#93CCE1"],
            ["#000000", "#B6A4AA", "#FEE0FD", "#DA9C9F", "#A43D2E"],
            ["#222F42", "#9FB3C1", "#A79F77", "#573B37", "#8C5349"],
            ["#50B5F2", "#0133CA", "#000228", "#C8E3F1", "#0553F5"],
            ["#838282", "#162342", "#F2A0C4", "#FFFFFF", "#000000"]]
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
  $("#center").attr("src","movies/Star Wars/StarWars"+(count+1)+".png");
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
  $("#center").attr("src","movies/Star Wars/StarWars"+(count+1)+".png");
});