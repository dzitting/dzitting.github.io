window.addEventListener('load', function() {
    loadBreakfastMenu();
    loadLunchMenu();
    loadDinnerMenu();
  });

  function loadBreakfastMenu() {
    console.log("called");
  // fetch menu data from the menu.json file
  const menuItems = document.getElementById("breakfast-items-list");

fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const breakfastItems = data.filter(item => item.Type === "Breakfast");
    breakfastItems.forEach(item => {
      const li = document.createElement("li");
      li.className = "breakfast-item";

      const figure = document.createElement("figure");
      figure.className = "breakfast-img-wrapper";

      const img = document.createElement("img");
      img.className = "breakfast-img";
      img.src = item.Image;
      img.alt = `Picture of ${item["Food Title"]}`;

      const h2 = document.createElement("h2");
      h2.textContent = item["Food Title"];

      figure.appendChild(img);
      li.appendChild(figure);
      li.appendChild(h2);
      menuItems.appendChild(li);
    });
  })
  .catch(error => console.error(error));
}

  function loadLunchMenu() {
    console.log("called");
  // fetch menu data from the menu.json file
  const menuItems = document.getElementById("lunch-items-list");

fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const lunchItems = data.filter(item => item.Type === "Lunch");
    lunchItems.forEach(item => {
      const li = document.createElement("li");
      li.className = "lunch-item";

      const figure = document.createElement("figure");
      figure.className = "lunch-img-wrapper";

      const img = document.createElement("img");
      img.className = "lunch-img";
      img.src = item.Image;
      img.alt = `Picture of ${item["Food Title"]}`;

      const h2 = document.createElement("h2");
      h2.textContent = item["Food Title"];

      figure.appendChild(img);
      li.appendChild(figure);
      li.appendChild(h2);
      menuItems.appendChild(li);
    });
  })
  .catch(error => console.error(error));
}
  function loadDinnerMenu() {
    console.log("called");
  // fetch menu data from the menu.json file
  const menuItems = document.getElementById("dinner-items-list");

fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const dinnerItems = data.filter(item => item.Type === "Dinner");
    dinnerItems.forEach(item => {
      const li = document.createElement("li");
      li.className = "dinner-item";

      const figure = document.createElement("figure");
      figure.className = "dinner-img-wrapper";

      const img = document.createElement("img");
      img.className = "dinner-img";
      img.src = item.Image;
      img.alt = `Picture of ${item["Food Title"]}`;

      const h2 = document.createElement("h2");
      h2.textContent = item["Food Title"];

      figure.appendChild(img);
      li.appendChild(figure);
      li.appendChild(h2);
      menuItems.appendChild(li);
    });
  })
  .catch(error => console.error(error));
}
