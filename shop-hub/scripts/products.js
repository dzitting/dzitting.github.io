fetch("MOCK_DATA (3).json")
  .then((response) => response.json())
  .then((data) => {
    const productsSection = document.getElementById("products");
    const saleCheckbox = document.getElementById("sale");
    const reviewsSelect = document.getElementById("reviews");
    const priceRangeSelect = document.getElementById("price-range");
    const searchInput = document.getElementById("search-input");

    // Function to generate the cards based on the provided criteria
    function generateCards(
      saleFilter,
      reviewsFilter,
      priceRangeFilter,
      searchQuery
    ) {
      // Clear the existing cards
      productsSection.innerHTML = "";

      // Filter the data based on the filters
      const filteredItems = data.filter((item) => {
        const meetsSaleFilter = saleFilter ? item.sale : true;

        if (reviewsFilter !== "") {
          const rating = parseFloat(item.review);
          const meetsReviewsFilter = rating >= parseFloat(reviewsFilter);
          return meetsSaleFilter && meetsReviewsFilter;
        }

        if (priceRangeFilter !== "") {
          const price = item.sale
            ? parsePrice(item.sale_price)
            : parsePrice(item.price);
          const [minValue, maxValue] = priceRangeFilter.split("-");
          const meetsPriceRangeFilter = price >= minValue && price <= maxValue;
          return meetsSaleFilter && meetsPriceRangeFilter;
        }

        if (searchQuery !== "") {
          // Match the search query against the product name or description
          const searchTerm = searchQuery.toLowerCase();
          const productName = item.product_name.toLowerCase();
          const description = item.description.toLowerCase();
          return (
            productName.includes(searchTerm) || description.includes(searchTerm)
          );
        }

        return meetsSaleFilter;
      });

      // Generate the cards for the filtered items
      filteredItems.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.id = item.product_id;
        card.addEventListener("click", () => redirectToItemPage(card.id));

        const productImgContainer = document.createElement("figure");
        productImgContainer.className = "product-img-container";

        const img = document.createElement("img");
        img.src = item.image_url;
        img.alt = "";
        img.className = "card-img";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.product_name;

        const priceContainer = document.createElement("div");
        priceContainer.className = "card-price-container";

        const normalPrice = document.createElement("p");
        normalPrice.className = "card-normal-price";
        normalPrice.textContent = item.price;
        if (item.sale) {
          normalPrice.classList.add("strikethrough");

          const salePrice = document.createElement("p");
          salePrice.className = "card-sale-price";
          salePrice.textContent = item.sale_price;

          priceContainer.appendChild(normalPrice);
          priceContainer.appendChild(salePrice);
        } else {
          priceContainer.appendChild(normalPrice);
        }

        const review = document.createElement("p");
        review.className = "card-review";

        // Assuming the "review" property contains a number
        const reviewCount = item.review;

        for (let i = 0; i < reviewCount; i++) {
          const icon = document.createElement("img");
          icon.src = "https://img.icons8.com/?size=512&id=19418&format=png"; // Replace with the URL of your icon image
          icon.alt = "Review Icon"; // Add alt text for accessibility
          icon.className = "review-icon"; // Add any additional class name for styling
          review.appendChild(icon);
        }

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = item.description;

        const addToCartButton = document.createElement("button");
        addToCartButton.className = "add-to-cart-button btn btn-primary";
        addToCartButton.textContent = "Add to Cart";

        card.appendChild(productImgContainer);
        productImgContainer.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceContainer);
        card.appendChild(review);
        card.appendChild(description);
        card.appendChild(addToCartButton);

        productsSection.appendChild(card);
      });
    }

    searchInput.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting and redirecting
      const saleFilter = saleCheckbox.checked; // Get the value of the sale checkbox
      const reviewsFilter = reviewsSelect.value; // Get the selected value of the reviews select element
      const priceRangeFilter = priceRangeSelect.value; // Get the selected value of the price range select element
      const searchKeyword = searchInput.querySelector(
        "input[type='search']"
      ).value;
      // Get the value of the search input
      generateCards(saleFilter, reviewsFilter, priceRangeFilter, searchKeyword);
    });

    // Event listener for the sale checkbox
    saleCheckbox.addEventListener("change", () => {
      const saleFilter = saleCheckbox.checked; // Get the value of the sale checkbox
      const reviewsFilter = reviewsSelect.value; // Get the selected value of the reviews select element
      const priceRangeFilter = priceRangeSelect.value; // Get the selected value of the price range select element
      const searchKeyword = searchInput.querySelector(
        "input[type='search']"
      ).value;
      generateCards(saleFilter, reviewsFilter, priceRangeFilter, searchKeyword); // Call the generateCards function with the filters
    });

    // Event listener for the reviews select element
    reviewsSelect.addEventListener("change", () => {
      const saleFilter = saleCheckbox.checked; // Get the value of the sale checkbox
      const reviewsFilter = reviewsSelect.value; // Get the selected value of the reviews select element
      const priceRangeFilter = priceRangeSelect.value; // Get the selected value of the price range select element
      const searchKeyword = searchInput.querySelector(
        "input[type='search']"
      ).value;
      generateCards(saleFilter, reviewsFilter, priceRangeFilter, searchKeyword); // Call the generateCards function with the filters
    });

    // Event listener for the price range select element
    priceRangeSelect.addEventListener("change", () => {
      const saleFilter = saleCheckbox.checked; // Get the value of the sale checkbox
      const reviewsFilter = reviewsSelect.value; // Get the selected value of the reviews select element
      const priceRangeFilter = priceRangeSelect.value; // Get the selected value of the price range select element
      const searchKeyword = searchInput.querySelector(
        "input[type='search']"
      ).value;
      generateCards(saleFilter, reviewsFilter, priceRangeFilter, searchKeyword); // Call the generateCards function with the filters
    });

    // Function to parse price values from "$X.XX" format
    function parsePrice(price) {
      const numericPrice = parseFloat(price.substring(1));
      return numericPrice;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const searchKeyword = urlParams.get("search");
    if (searchKeyword) {
      const decodedSearchKeyword = decodeURIComponent(searchKeyword);
      
      // Call the generateCards function with the search keyword
      generateCards(false, "", "", decodedSearchKeyword);
    } else {
      generateCards(false, "", "", ""); // Change the argument value to false if you want to show non-sale items initially
    }

    // Initial generation of cards (without any filter applied)

    function redirectToItemPage(itemId) {
      localStorage.setItem("selectedCardId", itemId);
      window.location.href = "item.html";
    }
  })
  .catch((error) => console.error(error));
