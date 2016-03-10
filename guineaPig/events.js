var outputTarget = document.getElementById("output-target");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var articleEl = document.getElementsByClassName("article-section");

function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outputTarget.innerHTML = "You clicked on the " + elementText + " section";
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  outputTarget.innerHTML = "You moved your mouse over me";
}

header.addEventListener("mouseover", handleHeaderMouseOver);

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

function handleHeaderMouseOut(event) {
  outputTarget.innerHTML = "You left me!!"
}

header.addEventListener("mouseout", handleHeaderMouseOut);

// When you type characters into the input field, the output element should mirror the text in the input field.

var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function (event) {
  outputTarget.innerHTML = event.target.value;
});

// getElementsByTagName
// getElementsByClassName


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var guineaPig = document.getElementById("guinea-pig");

var colorBtn = document.getElementById("add-color");

colorBtn.addEventListener("click", function () {
  guineaPig.setAttribute("class", "blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

var hulkBtn = document.getElementById("make-large");

hulkBtn.addEventListener("click", function () {
  guineaPig.setAttribute("class", "hulk");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

var borderBtn = document.getElementById("add-border");

borderBtn.addEventListener("click", function () {
  guineaPig.setAttribute("class", "captured");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var roundBtn = document.getElementById("add-rounding");

roundBtn.addEventListener("click", function () {
  guineaPig.setAttribute("class", "rounded");
});
