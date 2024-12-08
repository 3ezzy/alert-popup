const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".notifications");
const closeBtn = document.querySelectorAll(".close-btn");

// Create notification elements
const message = document.createElement("div");
const success = document.createElement("div");
const danger = document.createElement("div");

const notifications = [message, success, danger];

// Add classes to notifications
notifications.forEach(element => {
    element.classList.add("notification");
});

// Assign specific classes
message.classList.add("info");
success.classList.add("success");
danger.classList.add("danger");

// Notification content
message.innerHTML = `
<div>
    <span class="material-symbols-outlined icon">chat_bubble</span>
    <div>
        <h3>Mehdi Kml</h3>
        <p>Great, thanks a lot for the quick reply!</p>
    </div>
    <span class="material-symbols-outlined close-btn">close</span>
</div>
`;

success.innerHTML = `
<div>
    <span class="material-symbols-outlined icon">done</span>
    <div>
        <h3>Changes saved</h3>
        <p>Contract date changed successfully</p>
    </div>
    <span class="material-symbols-outlined close-btn">close</span>
</div>
`;

danger.innerHTML = `
<div>
    <span class="material-symbols-outlined icon">delete</span>
    <div>
        <h3>Document deleted</h3>
        <p>Document deleted successfully</p>
    </div>
    <span class="material-symbols-outlined close-btn">close</span>
</div>
`;

// Add event listeners to buttons
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.alert;
        const n = notifications[id].cloneNode(true);
        output.appendChild(n);
    });
});

// Remove notification after animation ends
window.addEventListener("animationend", e => {
    if (e.target.classList.contains("notification")) {
        e.target.remove();
    }
});

// Close notification on close button click
window.addEventListener("click", e => {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.parentElement.remove();
    }
});
