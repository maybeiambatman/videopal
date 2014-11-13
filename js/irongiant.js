var count = 0
var frames =     [['#130D0F', '#594D3F', '#B1B29A', '#B47437', '#FDFFFB'],
                  ['#020B0D', '#132239', '#3B5687', '#6485C2', '#ACE3FD'],
                  ['#22231E', '#313E46', '#65B78F', '#A2A3C1', '#F9FDFC'],
                  ['#3F3035', '#87624F', '#89A78B', '#A53C36', '#ECBC67'],
                  ['#04070E', '#141824', '#354859', '#61728C', '#D3E3F2'],
                  ['#100F0B', '#554649', '#7A6A6D', '#EBBDB0', '#FFFFFF'],
                  ['#241D17', '#4B392F', '#886056', '#D3E3E3', '#FFFFFB'],
                  ['#732C16', '#9FBF36', '#A48242', '#A63026', '#DAD03D'],
                  ['#153158', '#484E5A', '#A2AED8', '#A53027', '#C6CAD6']]
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
  $("#center").attr("src","movies/Iron Giant/irongiant"+(count+1)+".png");
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
  $("#center").attr("src","movies/Iron Giant/irongiant"+(count+1)+".png");
});

$(document).on('click', '.animate', function(){
      var it = 0, it_end = 9;
      function run(){
          $("#circle-1").css("background", frames[it][0]).delay(500);
          $("#circle-2").css("background", frames[it][1]).delay(500);
          $("#circle-3").css("background", frames[it][2]).delay(500);
          $("#circle-4").css("background", frames[it][3]).delay(500);
          $("#circle-5").css("background", frames[it][4]).delay(500);
          $("#center").attr("src","movies/Iron Giant/irongiant"+(it+1)+".png").delay(500);
          it ++;
          if (it < it_end){
            setTimeout(run, 1000);
          }
      }
      run();
      count = 8;
});
