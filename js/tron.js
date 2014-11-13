var count = 0
var frames = [['#040507', '#6B4529', '#A0A9AB', '#CC5C34', '#FCFCFC'],
              ['#07080A', '#59859F', '#A5CFD8', '#C7A59E', '#E5F5FB'],
              ['#041728', '#133340', '#5B8AA4', '#6FA9C1', '#D6EAF3'],
              ['#241200', '#52F4E5', '#754821', '#BC8238', '#D97537'],
              ['#270611', '#590F1C', '#C13528', '#D7590C', '#F3A58F'],
              ['#4491D7', '#4CA6DA', '#78DBF0', '#F3A344', '#F4855A'],
              ['#3E2000', '#99F5F4', '#A47142', '#D7AA59', '#F5DE80'],
              ['#244459', '#26EFF7', '#4199BD', '#6AE4F3', '#D54B24'],
              ['#040C0E', '#213540', '#5F8DA4', '#A2F1F5', '#ECF6F8']]
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
  $("#center").attr("src","movies/Tron/tron"+(count+1)+".jpg");
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
  $("#center").attr("src","movies/Tron/tron"+(count+1)+".jpg");
});