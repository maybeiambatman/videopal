var count = 0
var frames =     [['#151515', '#6D6090', '#823512', '#A391BC', '#E76626'],
                  ['#030304', '#151515', '#843111', '#B6471A', '#FFC845'],
                  ['#1D1D22', '#2E4047', '#507888', '#C19539', '#F3F6FA'],
                  ['#003246', '#004913', '#00EA4B', '#755A1B', '#FF9836'],
                  ['#030303', '#54525D', '#8F1E4D', '#C9ADAC', '#D4772A'],
                  ['#030303', '#573E37', '#59382B', '#B1796A', '#F8DDB2'],
                  ['#162529', '#5B6B66', '#96908C', '#980E0D', '#FFB940'],
                  ['#030303', '#572F0E', '#9EA9C1', '#CF6323', '#FFC385'],
                  ['#004966', '#030303', '#3D5D7E', '#4EAAD1', '#EC8E32']]
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
  $("#center").attr("src","../movies/the_lego_movie/lego"+(count+1)+".png");
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
  $("#center").attr("src","../movies/the_lego_movie/lego"+(count+1)+".png");
});

$(document).on('click', '.animate', function(){
      var it = 0, it_end = 9;
      function run(){
          $("#circle-1").css("background", frames[it][0]).delay(500);
          $("#circle-2").css("background", frames[it][1]).delay(500);
          $("#circle-3").css("background", frames[it][2]).delay(500);
          $("#circle-4").css("background", frames[it][3]).delay(500);
          $("#circle-5").css("background", frames[it][4]).delay(500);
          $("#center").attr("src","../movies/the_lego_movie/lego"+(it+1)+".png").delay(500);
          it ++;
          if (it < it_end){
            setTimeout(run, 1000);
          }
      }
      run();
      count = 8;
});
