var createButton = document.getElementById("createBtn");
var cardInput = document.getElementById("createTxt");
var cardEl = document.getElementById("cardArea");
var deleteButton = document.getElementById("deleteBtn");

// Event listener for the create button
createButton.addEventListener("click", function() {
  console.log("You clicked me!");
  makeCard();

});

// Each card needs to include:
  // Class of "card"
  // User inputted text
  // A delete button

var makeCard = function() {
  cardEl.innerHTML += "<article class='card'>" + cardInput.value + "<br><button id='deleteBtn'>Delete</button></article>";
};

var eraseCard = function() {
  cardEl.innerHTML = "";
}

cardEl.addEventListener("click", function(){
  eraseCard();
});

