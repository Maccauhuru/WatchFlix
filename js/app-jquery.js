$(document).ready(function() {
  var mainSection = document.getElementById("main-section");

  function displayMovieData() {
    var movieTitle =
      $("#searchInput")
        .val()
        .trim() || "The Matrix";
    var queryURL =
      "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=trilogy";

    //Create AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(res => {
      //Div to contain the movie
      console.log(res);
      const { Plot, Poster, Released, Ratings } = res;
      var cardDiv = $("<div class='card'>");
      var plotDiv = $("<span class='plot'>").text("Plot : " + Plot);
      var ratingDiv = $("<span class='plot'>").text(
        "IMDB Rating : " + Ratings[0].Value
      );
      var releasedDiv = $("<div class='released'>").text(
        "Released : " + Released
      );
      var imgDiv = $("<img class='imageStyle'>");
      imgDiv.attr({
        alt: "Movie Image",
        src: Poster
      });

      $(cardDiv).prepend(movieTitle, imgDiv, plotDiv, releasedDiv, ratingDiv);
      $(cardDiv).appendTo("#main-section");
      //   console.log(rt);
    });
  }
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("sub");
    movieTitle = $("#searchInput")
      .val()
      .trim();
    displayMovieData();
    $("#searchInput").val("");
  });
});
