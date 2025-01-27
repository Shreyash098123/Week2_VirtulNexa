const events = [
    { title: "Web Development Workshop", date: "2025-01-28", time: "10:00 AM" },
    { title: "AI Conference", date: "2025-01-27", time: "2:00 PM" },
    { title: "Design Sprint", date: "2025-01-29", time: "1:00 PM" }
];

const eventList = document.getElementById("event-list");
const eventForm = document.getElementById("event-form");


function displayEvents(eventArray) {
    eventList.innerHTML = ""; // Clear previous events
    eventArray.forEach((event, index) => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
        `;
        eventCard.addEventListener("click", () => deleteEvent(index));
        eventList.appendChild(eventCard);
    });
}

// Add event
eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;

    if (title && date && time) {
        events.push({ title, date, time });
        sortEvents();
        eventForm.reset();
    }
});

// Sort events
function sortEvents() {
    const sortedEvents = events.sort((a, b) => {
        return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
    });
    displayEvents(sortedEvents);
}

// Delete event
function deleteEvent(index) {
    if (confirm("Are you sure you want to delete this event?")) {
        events.splice(index, 1);
        displayEvents(events);
    }
}

// Initial display
displayEvents(events);
