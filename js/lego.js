var count = 0
var frames = [["#E76626", "#6D6090", "#A391BC", "#151515", "#823512"],
            ["#843111", "#030304", "#B6471A", "#FFC845", "#151515"],
            ["#507888", "#1D1D22", "#C19539", "#F3F6FA", "#2E4047"],
            ["#003246", "#00EA4B", "#FF9836", "#004913", "#755A1B"],
            ["#D4772A", "#54525D", "#C9ADAC", "#030303", "#8F1E4D"],
            ["#F8DDB2", "#573E37", "#030303", "#B1796A", "#59382B"],
            ["#5B6B66", "#96908C", "#980E0D", "#162529", "#FFB940"],
            ["#9EA9C1", "#FFC385", "#030303", "#572F0E", "#CF6323"],
            ["#030303", "#3D5D7E", "#4EAAD1", "#EC8E32", "#004966"]]
$(document).on('click', '.next-button', function(){
    if (count < 8){
        count += 1
    }
    console.log(count)
  $("body").css("background", "repeating-linear-gradient(90deg,"+frames[count][0]+","+frames[count][0]+" 20%,"+frames[count][1]+" 20%,"+frames[count][1]+" 40%,"+frames[count][2]+" 40%,"+frames[count][2]+" 60%,"+frames[count][3]+" 60%,"+frames[count][3]+" 80%,"+frames[count][4]+" 80%,"+frames[count][4]+" 100%)");
  $("#center").attr("src", "movies/the_lego_movie/lego"+(count+1)+".png");
});

$(document).on('click', '.prev-button', function(){
    if (count > 0){
        count -= 1
    }
    console.log(count)
  $("body").css("background", "repeating-linear-gradient(90deg,"+frames[count][0]+","+frames[count][0]+" 20%,"+frames[count][1]+" 20%,"+frames[count][1]+" 40%,"+frames[count][2]+" 40%,"+frames[count][2]+" 60%,"+frames[count][3]+" 60%,"+frames[count][3]+" 80%,"+frames[count][4]+" 80%,"+frames[count][4]+" 100%)");
  $("#center").attr("src","movies/the_lego_movie/lego"+(count+1)+".png");
});