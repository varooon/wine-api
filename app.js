$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/c47feb/wines",
    success: function(wine){

      for (var w = 0; w < wine.length; w++){

        wineName = wine[w].name + "\n";
        console.log(wine[w].name);

        $("#winelist").append(wineName);


      }

    },
    error: function(){
      alert("FAIL!");
    }

  });

});
