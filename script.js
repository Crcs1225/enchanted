function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

  if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
  } else {
      passwordInput.type = "password";
  }
}

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;

  // Example: Check if the password is "12:48"
  if (enteredPassword === "12:48") {
      // Correct password, hide the login card
      document.getElementById("passwordPage").style.display = "none";

      // Show the main page with the cards
      document.getElementById("mainPage").style.display = "block";
      document.getElementById("imageCard").style.display = "block";
  } else {
      // Incorrect password, display an error message or take appropriate action
      alert("Incorrect password. Our time is gold");
  }
}

function nextCard() {
  var currentCard = document.querySelector(".card[style='display: block;']");
  var nextCard = currentCard.nextElementSibling;

  if (nextCard) {
    // Hide the current card and show the next card
    currentCard.style.display = "none";
    nextCard.style.display = "block";
  } else {
      // Hide the text card and take any additional actions for the last card
      textCard.style.display = "none";
      // Additional actions for the last card if needed
  }
}