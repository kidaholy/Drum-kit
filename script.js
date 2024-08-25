function drumElement(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("./sounds/kick.mp3");
      audio.play();
      break;
  }
}

var numberOfElements = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfElements; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    drumElement(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  drumElement(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation (currentKey) {
  var theKey = document.querySelector("." + currentKey);
  theKey.classList.add("pressed");
  setTimeout(function () {
    theKey.classList.remove("pressed");
  }, 100);
}