// Controller
function getValues() {
  let alertbox = document.getElementById("alert");
  alertbox.classList.remove("alert-success");
  alertbox.classList.remove("alert-danger");
  alertbox.classList.add("d-none");
  // get the user's input
  // decide what to do with it
  let userInput = document.getElementById("phrase").value;

  userInput = userInput.toLowerCase();
  let reversedInput = userInput.split("").reverse().join("");
  userInput = userInput.replace(" ", "");
  const regex = /[^a-z0-9]/gi;
  userInput = userInput.replace(regex, "");

  if (userInput.length > 0) {
    let isPalindrome = checkForPalindrome(userInput);
    displayResults(reversedInput, isPalindrome);
  } else {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Oops...",
      text: "Enter a valid phrase",
    });
  }
}

// Business logic
function checkForPalindrome(userInput) {
  let reversedInput = userInput.split("").reverse().join("");

  let isPalindrome = reversedInput == userInput;

  return isPalindrome;
}

// View
function displayResults(reversedInput, isPalindrome) {
  // show string on page

  let resultMessage = "";

  let alertBox = document.getElementById("alert");
  let alertClass = isPalindrome == true ? "alert-success" : "alert-danger";
  alertBox.classList.add(alertClass);

  if (isPalindrome == true) {
    resultMessage = "Your phrase reversed is " + reversedInput;
    resultHeader = "Your phrase is a palindrome!";
  } else {
    resultMessage = "Your phrase reversed is " + reversedInput;
    resultHeader = "Your phrase is not a palindrome!";
  }

  document.getElementById("header").textContent = resultHeader;
  document.getElementById("msg").textContent = resultMessage;
  alertBox.classList.remove("d-none");
}

// id = "phrase";
// id = "btnSubmit";
// id = "alertPass";
// id = "alertFail";
