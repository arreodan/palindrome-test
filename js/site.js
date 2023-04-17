// Controller
function getValues() {
  // get the user's input
  // decide what to do with it
  let userInput = document.getElementById("phrase").value;
  let reversedInput = userInput.split("").reverse().join("");


  let testedInput = checkForPalindrome(userInput, reversedInput);

  displayResults(testedInput, reversedInput);
}

// Business logic
function checkForPalindrome(userInput, reversedInput) {

  let reversedMessage = "";
  // reversedMessage = message.split('').reverse().join('');
  for (let index = 0; index <= userInput.length; index = index + 1) {
    if(userInput[index] == reversedInput[index]){
      return reversedInput;
    } else {
      return /*reversedInput,*/ false;
    }
  }

  return reversedMessage;
}

// View
function displayResults(testedInput) {
  // show string on page
  if (testedInput) {
    document.getElementById("msg").textContent = testedInput;
    document.getElementById("alertPass").classList.remove("d-none");
  } else {
    document.getElementById("msg").textContent = testedInput;
    document.getElementById("alertFail").classList.remove("d-none");
  }
}

// Swal.fire(
//     {
//         backdrop: false,
//         title: 'App Name',
//         text: msg
//     }
// );


// id = "phrase";
// id = "btnSubmit";
// id = "alertPass";
// id = "alertFail";