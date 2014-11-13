var count = 0
var frames =     [['#000000', '#2F5B38', '#823512', '#B1C6BA', '#DFEFD4'],
                  ['#0D2310', '#2D7448', '#41D765', '#6BD091', '#9CD8C8'],
                  ['#2E4047', '#58746F', '#729E94', '#ECF7F8', '#F3F6FA'],
                  ['#000000', '#4A698A', '#86ADD3', '#BF4638', '#FFFFFF'],
                  ['#03020B', '#18271C', '#233D2B', '#5A261A', '#8B8871'],
                  ['#000000', '#121B3E', '#3D75D3', '#C3C3C1', '#FDFEF9'],
                  ['#0C0C0A', '#2A4030', '#3B593D', '#51704A', '#DAD0B3'],
                  ['#0F0F0D', '#20428E', '#2EA74F', '#2F7147', '#A4CAF2'],
                  ['#000000', '#163525', '#173725', '#979262', '#C8B68D']]
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

$(document).on('click', '.animate', function(){
      var it = 0, it_end = 9;
      function run(){
          $("#circle-1").css("background", frames[it][0]).delay(500);
          $("#circle-2").css("background", frames[it][1]).delay(500);
          $("#circle-3").css("background", frames[it][2]).delay(500);
          $("#circle-4").css("background", frames[it][3]).delay(500);
          $("#circle-5").css("background", frames[it][4]).delay(500);
          $("#center").attr("src","movies/Matrix/matrix"+(it+1)+".png").delay(500);
          it ++;
          if (it < it_end){
            setTimeout(run, 1000);
          }
      }
      run();
      count = 8;
});

