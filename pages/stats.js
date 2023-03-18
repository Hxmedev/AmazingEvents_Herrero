import { getEvents } from "../scripts/functions.js";
import {allEvents} from "../scripts/statsFunctions.js";
const {events} = await getEvents()
allEvents(events)
// // we recover the container element
// let pastFragment = new DocumentFragment();
// let upcomingFragment = new DocumentFragment();

// const pastContainer = document.getElementById("pastContainer");
// const upcomingContainer = document.getElementById("upcomingEventsContainer");

// // Filter All Events after 2021
// const pastEvents = data.events.filter((e) => e.date <= data.currentDate);
// const upcomingEvents = data.events.filter((e) => e.date > data.currentDate);

// const showStats = (eventsAny) => {
//   eventsAny.forEach((event) => {
//     const tr = document.createElement("tr");
//     tr.innerHTML=`
//        <th scope="row">${event.category}</th>
//        <th scope="row">${event.name}</th>
//        <th scope="row">${event.description}</th>
//        <th scope="row">${event.place}</th>
//        <th scope="row">${event.capacity}</th>
//        <th scope="row">${event.assitance}</th>
//        <th scope="row">$ ${event.price}</th>`
//        event.date < data.currentDate
//        ? pastFragment.appendChild(tr)
//        : upcomingFragment.appendChild(tr);
// })
// }
// showStats(pastEvents);
// showStats(upcomingEvents);
// // After iterating, we then insert fragment contents into the DOM
// pastContainer.appendChild(pastFragment);
// upcomingContainer.appendChild(upcomingFragment);