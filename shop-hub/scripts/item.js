const productId = localStorage.getItem('selectedCardId');

// Fetch the JSON data
fetch('MOCK_DATA (3).json')
  .then(response => response.json())
  .then(data => {
    // Find the product with the matching ID
    const product = data.find(item => item.product_id === parseInt(productId));

    if (product) {
      // Populate the HTML elements with the product information
      const container = document.getElementById('container');

      const leftDiv = document.createElement('div');
      leftDiv.classList.add('left');

      const productImgWrapper = document.createElement('figure');
      productImgWrapper.classList.add('product-image-wrapper');

      const productImg = document.createElement('img');
      productImg.classList.add('product-img');
      productImg.src = product.image_url;
      productImg.alt = '';

      const rightDiv = document.createElement('div');
      rightDiv.classList.add('right');

      const productName = document.createElement('h3');
      productName.classList.add('product-name');
      productName.textContent = product.product_name;

      const productDescription = document.createElement('p');
      productDescription.classList.add('product-description');
      productDescription.textContent = product.description;

      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = product.price;

      const addToCartBtn = document.createElement('button');
      addToCartBtn.classList.add('btn', 'btn-primary');
      addToCartBtn.textContent = 'Add to Cart';

      const buyNowBtn = document.createElement('button');
      buyNowBtn.classList.add('btn', 'btn-primary');
      buyNowBtn.textContent = 'Buy Now';

      container.appendChild(leftDiv);
      leftDiv.appendChild(productImgWrapper);
      productImgWrapper.appendChild(productImg);

      container.appendChild(rightDiv);
      rightDiv.appendChild(productName);
      rightDiv.appendChild(productDescription);
      rightDiv.appendChild(price);
      rightDiv.appendChild(addToCartBtn);
      rightDiv.appendChild(buyNowBtn);
    } else {
      console.log('Product not found');
    }
  })
  .catch(error => console.error(error));
