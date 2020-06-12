var quizArea = document.getElementById("quizArea");
var button = document.getElementById("button");
var typeBtns = document.getElementsByName('type');
var problemBtns = document.getElementsByName('problem');
var message = {
  product: "",
  porosity: ""
};

// EFFECTS: display result message
button.addEventListener("click", function() {
  findProduct();
  // quizArea.innerText = "Product Recommendation: ${this.product}\n${this.porosity}";
  quizArea.innerText =
    "Product Recommendation: " + message.product + "\n\n" + message.porosity;
});

// EFFECTS: determine product result and porosity-based suggestion
function findProduct() {
  var tally = value(typeBtns) + value(problemBtns);
  compare(tally);
  checkPorosity();
}

// EFFECTS: check which radio button is selected and return its value
function value(list) {
  var tally = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i].checked) {
      tally = parseInt(list[i].value);
      break;
    }
  }
  return tally;
}

// EFFECTS: set product message for corresponding tally
function compare(tally) {
  switch (tally) {
    case 11:
      message.product = "Curl Keeper Original";
      break;
    case 21:
      message.product = "dpHUE Apple Cider Vinegar Hair Masque";
      break;
    case 31:
      message.product = "Bounce Curl Alcohol-Free HairSpray";
      break;
    case 12:
      message.product = "Briogeo Don’t Despair, Repair! Deep Conditioning Mask";
      break;
    case 22:
      message.product =
        "Shea Moisture Manuka Honey & Yogurt Hydrate + Repair Protein Power Treatment";
      break;
    case 32:
      message.product =
        "Shea Moisture Coconut & Hibiscus Curl Enhancing Smoothie";
      break;
    case 13:
      message.product =
        "Shea Moisture Jamaican Black Castor Oil Strengthen & Restore Leave-In Conditioner";
      break;
    case 23:
      message.product =
        "Shea Moisture Jamaican Black Castor Oil Strengthen & Restore Treatment Masque";
      break;
    case 33:
      message.product = "Bounce Curl Light Creme Gel";
      break;
    default:
      message.product = "Sorry, a match could not be found.";
  }
}

// EFFECTS: if low or high porosity is selected, set corresponding porosity message
function checkPorosity() {
  if (document.getElementById(3.1).checked) {
    message.porosity =
      "Low porosity hair is characterized by hair cuticles that are closed tightly, so moisture is not readily absorbed, nor does it easily escape. Since there is little space for moisture to get in, heavy oils will essentially push out the moisture to make room, leaving your hair more dry. Instead, stick to light oils such as jojoba oil or argan oil. I also recommend using heat when deep conditioning to encourage the hair cuticles to open and absorb more moisture.";
  }
  if (document.getElementById(3.3).checked) {
    message.porosity =
      "High porosity hair is characterized by hair cuticles that remain open, so moisture is easily absorbed, but it is not retained. Apple cider vinegar (ACV) washes are very beneficial for your hair. Not only is it a good cleanser, but the acidity of the ACV will encourage the hair cuticles to close, trapping in moisture. After washing your hair (post-conditioner), rinse your hair with diluted ACV and allow it to sit for approximately five minutes before rinsing it out. Just be careful not to do an ACV wash any more than once per week.";
  }
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip()
})
