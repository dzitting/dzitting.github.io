document.addEventListener("DOMContentLoaded", () => {
    // Event listener for the form submission
    const submitButton = document.getElementById("submit-button");
  
    submitButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      alert("Message Sent"); // Display the alert message
    });
  });