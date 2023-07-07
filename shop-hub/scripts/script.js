let productId = localStorage.getItem("selectedCardId") || "";
localStorage.setItem("selectedCardId", productId);

fetch("./MOCK_DATA (3).json")
  .then((response) => response.json())
  .then((data) => {
    const featuredProductsSection =
      document.getElementById("featured-products");
    const featuredItems = data.filter((item) => item.featured).slice(0, 6);

    featuredItems.forEach((item) => {
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

      const price = document.createElement("p");
      price.className = "card-price";
      price.textContent = item.sale ? item.sale_price : item.price;

      const description = document.createElement("p");
      description.className = "card-description";
      description.textContent = item.description;

      const addToCartButton = document.createElement("button");
      addToCartButton.className = "add-to-cart-button btn btn-primary";
      addToCartButton.textContent = "Add to Cart";

      card.append(
        productImgContainer,
        title,
        price,
        description,
        addToCartButton
      );
      productImgContainer.appendChild(img);
      featuredProductsSection.appendChild(card);
    });
  })
  .catch((error) => console.error(error));

function redirectToItemPage(cardId) {
  localStorage.setItem("selectedCardId", cardId);
  window.location.href = "item.html";
}