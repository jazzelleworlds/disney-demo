function askUser() {
  // Ask the user their name
  let name = prompt("What is your name, Disney fan? 🐭✨");

  // Ask their favorite Disney character
  let character = prompt("Who is your favorite Disney character? (Stitch, Elsa, Ariel, etc.)");

  // Change the message on the page
  let message = document.getElementById("message");

  if (name && character) {
    message.innerText =
      "✨ Welcome " + name + "! ✨ Your Disney magic shines just like " + character + " 💫";
  } else {
    message.innerText =
      "✨ Welcome to Disney Magic! ✨ Everyone is welcome here 💙";
  }
}
