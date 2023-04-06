//Ensures modal-gallery is visibile when page loads
window.addEventListener("load", function () {
  document.getElementById("modal-gallery").classList.remove("hidden");
});

//Logic
// const themeSelect = new CustomEvent('imgSelected');
const submitBtn = document.getElementById("submit-that");
const form = document.getElementById("login-form");
const nameInput = form.querySelector(".nameinput");
const zipInput = form.querySelector(".zipinput");
const buttons = document.getElementsByClassName("flex-center");
const cardImgs = document.getElementsByClassName("card-img");

// Clear local storage for fresh setup
localStorage.clear();

//Iterates through buttons to find which theme img was selected
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function () {
    if (!document.getElementById("modal-gallery").classList.contains("hidden")) {
      const selectedImage = cardImgs[i].getAttribute("src");
      document.body.style.backgroundImage = `url(${selectedImage})`;
      localStorage.setItem("backgroundImage", selectedImage);
      console.log(selectedImage);
      document.getElementById("modal-gallery").classList.add("hidden");
      document.getElementById("arrow-l").classList.add("hidden");
      document.getElementById("arrow-r").classList.add("hidden");

      setTimeout(function () {
        document.getElementById("hello").classList.toggle("hidden");
        document.getElementById("thx-msg").classList.toggle("hidden");
        document.getElementById("theme").classList.toggle("hidden");

        document.getElementById("login-container").classList.toggle("hidden");
        document.getElementById("enter-name-txt").classList.toggle("hidden");
      }, 600);
    }
    else {
      return;
    }
  });
}

//Function listens for the submission of the form inputs before toggling hidden class
submitBtn.addEventListener("click", function (event) {
  console.log("submit was called");
    event.preventDefault();
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("zip", zipInput.value);
    document.getElementById("submit-that-cont").classList.toggle("hidden");
    console.log(localStorage.name, localStorage.zip);
  
    document.getElementById("login-form").classList.toggle("hidden");
    setTimeout(function () {
    document.getElementById("enter-name-txt").innerHTML = "Excellent! Your main setup is now complete.";
    document.getElementById("final-txt-container").classList.toggle("hidden");
  }, 750);   
});

//Function continues to main.html after setup completes.
setTimeout(function () {
  buttons[buttons.length - 1].addEventListener("click", function () {
    localStorage.setItem("setupCompleted", true);
    window.location.href = "main.html";
  });
}, 600);
