$("#post-red").mousemove(function(event) {
      var corX = event.pageX / 10;
      var corY = event.pageY / 6;
      var corB = parseInt(corX) + parseInt(corY);
      console.log(corX, corY, corB);
      // var codeColor = "rgb(" + corX + ", " + corY + ", 40)";
      var codeColor = "rgb("+ corB +", 0, 0)";
      $("#post-red").css("background-color", codeColor);
});

$("#post-green").mousemove(function(event) {
      var corX = event.pageX / 10;
      var corY = event.pageY / 6;
      var corB = parseInt(corX) + parseInt(corY);
      console.log(corX, corY, corB);
      // var codeColor = "rgb(" + corX + ", " + corY + ", 40)";
      var codeColor = "rgb(0, "+ corB +", 0)";
      $("#post-green").css("background-color", codeColor);
});

$("#post-blue").mousemove(function(event) {
      var corX = event.pageX / 10;
      var corY = event.pageY / 6;
      var corB = parseInt(corX) + parseInt(corY);
      console.log(corX, corY, corB);
      // var codeColor = "rgb(" + corX + ", " + corY + ", 40)";
      var codeColor = "rgb(0, 0, "+ corB +")";
      $("#post-blue").css("background-color", codeColor);
});

$("#homepage-red").mousemove(function(event) {
    var posX = event.pageX;
    var posY = event.pageY;
    var sum = parseInt(posX)/2 + parseInt(posY)/4;
    console.log(posX, posY, sum);
      for(posX = 0; posX<400; posX++){
        var codeColor = "rgb("+ sum +", 0, 0)";
          $("#homepage-red").css("background-color", codeColor);
}
});
