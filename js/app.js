var mainSection = document.getElementById("main-section");
var movieTitle = "cars";
var apikey = "3cd1df64";

const generateCards = () => {
  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card",
    "text-center",
    "p-3",
    "h3",
    "bg-success",
    "text-white"
  );
  let grid = document.createElement("div");
  let gridInnerLeft = document.createElement("div");
  let gridInnerRight = document.createElement("div");
  mainSection.append(cardBody, grid);
  grid.classList.add("row");
  grid.append(gridInnerLeft);
  grid.append(gridInnerRight);
  gridInnerLeft.classList.add("col-6", "text-center");
  gridInnerLeft.textContent = "Poster";
  gridInnerRight.classList.add("col-6", "text-center");
  gridInnerRight.textContent = "Description goes here";

  cardBody.textContent = movieTitle;
};

//generate movie data
const getMovieData = () => {
  fetch("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + apikey)
    .then(data => console.log(data.json()))
    .then(jdata => console.log(JSON.stringify(jdata)))
    .catch(error => console.error(error));
  generateCards();
};
getMovieData();
