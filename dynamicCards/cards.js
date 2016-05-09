var createButton = document.getElementById("createBtn");
var cardInput = document.getElementById("createTxt");
var cardEl = document.getElementById("cardArea");
//var deleteButton = document.getElementById("deleteBtn");


// Event listener for the create button -- calls the makeCard function

createButton.addEventListener("click", function() {
  makeCard();
  cardInput.value = "";
});

// Each card needs to include:
  // Class of "card"
  // User inputted text
  // A delete button

var makeCard = function(i) {
  cardEl.innerHTML += "<article class='card'>" + cardInput.value + "<br><button id='deleteBtn'>Delete</button></article>";

};

// This removes the article that is closest to the click-target (the delete button in this case)

var removeCard = function() {
  event.target.closest("article").remove();
}


// This is listening to the delete buttons on the created cards

cardEl.addEventListener("click", function(e){
  // This part says "if what you clicked is actually what I wanted you to click..."
  if (event.target.id === "deleteBtn") {
    removeCard();
  }

});




