const searchInput = document.getElementById("search-input");

document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the search input form submission

  searchInput.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting and redirecting
    const searchKeyword = searchInput.querySelector("input[type='search']").value; // Get the value of the search input, trim leading/trailing spaces, and convert to lowercase
    // Redirect to the products.html page with the search keyword in the URL
    window.location.href = `products.html?search=${encodeURIComponent(searchKeyword)}`;
  });
});
