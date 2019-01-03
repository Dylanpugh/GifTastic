var avengers = ["CaptainAmerica", "IronMan", "Thor", "Hulk"];

function renderButtons() {

    $("#avengers-view").empty();

        
        for (var i = 0; i < avengers.length; i++) {

          var a = $("<button>");
          
          a.addClass("avenger");
          
          a.attr("data-person", avengers[i]);
          
          a.text(avengers[i]);
          
          $("#avengers-view").append(a);
        }

}

$("#add-avenger").on("click", function(event) {
    
    event.preventDefault();

    var addAvenger = $("#avenger-input").val().trim();
  
    avengers.push(addAvenger);

    renderButtons();
});

  renderButtons();



$("button").on("click", function() {
    
    var avenger = $(this).attr("data-person");

    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      avenger + "&api_key=ZKKHlrx6bjLG7RO9lF9KTNyeOuDahXIo&limit=10";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        
        var results = response.data;

        
        for (var i = 0; i < results.length; i++) {

          
          var avengerDiv = $("<div>");

          
          var p = $("<p>").text("Rating: " + results[i].rating);

          
          var avengerImage = $("<img>");
          
          avengerImage.attr("src", results[i].images.fixed_height.url);

          
          avengerDiv.append(p);
          avengerDiv.append(avengerImage);

          
          $("#gifs-appear-here").prepend(avengerDiv);
        }
      });
  });