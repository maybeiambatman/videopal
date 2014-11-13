var count = 0
var frames =     [['#000000', '#6998DC', '#988D90', '#99ADCD', '#D5D7EE'],
['#0D0C0E', '#4163BD', '#4362DA', '#485675', '#4D6AA5'],
['#02020A', '#0C0C0C', '#585859', '#C07E63', '#F2CEAF'],
['#0B0C0C', '#24251C', '#575845', '#81A37B', '#8CBDB1'],
['#0A51DD', '#10133F', '#6CD8FC', '#BB63E8', '#FCCCF6'],
['#0C0D10', '#363C59', '#4258A7', '#6A7CC1', '#8899BF'],
['#270401', '#514AA8', '#743625', '#A75665', '#C05753'],
['#0E0E0E', '#52668D', '#688DC0', '#73413E', '#DB8BD1'],
['#0C0D0F', '#1F435B', '#3987A9', '#56ACC1', '#5BCCDC']]
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
  $("#center").attr("src","movies/Empire Strikes Back/EmpireStrikesBack"+(count+1)+".PNG");
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
  $("#center").attr("src","movies/Empire Strikes Back/EmpireStrikesBack"+(count+1)+".PNG");
});