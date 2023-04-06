// retrieve the values from local storage
const setupCompleted = localStorage.getItem("setupCompleted");
const userName = localStorage.getItem("name");
const storedImage = localStorage.getItem("backgroundImage");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${storedImage})`;

//Checks that setup flag was triggered before allowing user onto main, otherwise redirecting to setup
if (!setupCompleted) {
  window.location.href = "setup.html";
}

// Dynamic user greeting based on time and refresh time every second
function updateGreetingAndTime() {
  const date = new Date();
  const hour = date.getHours();
  let greeting;
  
  if (hour >= 3 && hour < 12) {
    greeting = `Good morning, ${userName}`;
  } else if (hour >= 12 && hour < 16) {
    greeting = `Good afternoon, ${userName}`;
  } else {
    greeting = `Good evening, ${userName}`;
  }
  
  document.getElementById("greeting").innerHTML = greeting;
  
  const day = new Date(); //LOGIC
  let hours = day.getHours();
  let minutes = day.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM"; //Formats clock to 12 hour AM/PM
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = hours + ":" + minutes + " " + amPm;
  document.getElementById("currentTime").innerHTML = time;
  showCalendar(currentMonth, currentYear); //Calls function to generator calendar
}

setInterval(updateGreetingAndTime, 1000);

//Retrieves the list of to-do items from local storage
const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
const todoContainer = document.getElementById("todo-item-container");

//Updates the UI with the to-do items
storedTodos.forEach((todo) => {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = todo;
  todoContainer.appendChild(li);
});

// Save the to-do items to local storage
localStorage.setItem("todos", JSON.stringify(storedTodos));


//Creating and displaying the date for top modal
const todayContainer = document.getElementById("today-container");
const weekdayEl = todayContainer.querySelector(".weekday");
const dayEl = todayContainer.querySelector(".day");
const monthEl = todayContainer.querySelector(".month");
const calendarSect = document.getElementById("calendar-section");
const calendarCont = document.getElementById("calendar-container");

const date = new Date();
const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
const day = date.getDate();
const month = date.toLocaleDateString("en-US", { month: "long" });

weekdayEl.textContent = weekday;
dayEl.textContent = day;
monthEl.textContent = month;

//Toggles open on click
todayContainer.addEventListener("click", function() {
  var todayParent = todayContainer.closest("#calendar-section");
  if (todayParent !== null) {
    todayParent.classList.toggle("open");
    calendarCont.classList.toggle("hidden");
  } else {
    return;
  }
});

//Logic for calendar generation
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.classList.add("rm-hov"); //Adds class to remove hover affects from blanks cells
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break; //Breaks to end cell generation at the final day of the month
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("currentDay");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}