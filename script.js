const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load tasks from local storage when the page loads
window.addEventListener('load', showTask);

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim();
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display data from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}