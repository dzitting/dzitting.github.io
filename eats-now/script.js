let currBtn = document.getElementById("fast-btn"); //Collects and initializes the current button selected
let isFastSelected = true; //Sets selection to true
let isDeliverySelected = false;
let isOnTimeSelected = false;

function makeSelected(event) {
  currBtn = event.currentTarget; //the current button is changed depending on what was clicked
  const btns = document.querySelectorAll(".selected");

  // Set the flags based on the selected button
  isFastSelected =
    currBtn.id === "fast-btn" && !currBtn.classList.contains("selected");
  isDeliverySelected =
    currBtn.id === "delivery-btn" && !currBtn.classList.contains("selected");
  isOnTimeSelected =
    currBtn.id === "on-time-btn" && !currBtn.classList.contains("selected");

  // Toggle the class of the current button
  currBtn.classList.toggle("selected");

  // Toggle the class of the other buttons
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    if (btn !== currBtn) {
      btn.classList.remove("selected");
    }
  }
}

function openTab() {
  // Code to be executed every half second
  if (isFastSelected) {
    const fastPage = document.getElementById("fast-btn-page");
    fastPage.classList.remove("hidden");
    fastPage.classList.add("visible");
  } else {
    const fastPage = document.getElementById("fast-btn-page");
    fastPage.classList.remove("visible");
    fastPage.classList.add("hidden");
  }

  if (isDeliverySelected) {
    const deliveryPage = document.getElementById("delivery-btn-page");
    deliveryPage.classList.remove("hidden");
    deliveryPage.classList.add("visible");
  } else {
    const deliveryPage = document.getElementById("delivery-btn-page");
    deliveryPage.classList.remove("visible");
    deliveryPage.classList.add("hidden");
  }

  if (isOnTimeSelected) {
    const onTimePage = document.getElementById("on-time-btn-page");
    onTimePage.classList.remove("hidden");
    onTimePage.classList.add("visible");
  } else {
    const onTimePage = document.getElementById("on-time-btn-page");
    onTimePage.classList.remove("visible");
    onTimePage.classList.add("hidden");
  }
}

setInterval(openTab, 100);

var map;

window.onload = function () {
  populateDeliveryTimes();
  map = L.map("map").setView([0, 0], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  loadMenu();
};
  

function searchAddress(e) {
  e.preventDefault();

  var address = document.getElementById("address").value;
  var geocoder = L.Control.Geocoder.nominatim({
    geocodingQueryParams: {
      countrycodes: "us",
    },
  });

  geocoder.geocode(address, function (results) {
    if (results.length > 0) {
      var latlng = results[0].center;
      map.setView(latlng, 16);
      L.marker(latlng).addTo(map);
    } else {
      alert("No results found.");
    }
  });
}

document
  .getElementById("delivery-address--form")
  .addEventListener("submit", searchAddress);

function populateDeliveryTimes() {
  const deliveryOptions = document.getElementById("delivery-options");
  const now = new Date();
  const times = [
    { label: "Now", value: now },
    { label: "30 Minutes", value: new Date(now.getTime() + 30 * 60000) },
    { label: "1 Hour", value: new Date(now.getTime() + 60 * 60000) },
  ];

  times.forEach((time) => {
    const option = document.createElement("option");
    option.value = time.value.toISOString();
    option.text = `${time.label} (${formatTime(time.value)})`;
    deliveryOptions.appendChild(option);
  });
}

function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}