// Get the Events Info and store in variable
const events = data.events;
console.log(events);
// we recover the container element
let statsFragment = new DocumentFragment();
let pastFragment = new DocumentFragment();
let upcomingFragment = new DocumentFragment();
const statsContainer = document.getElementById("statsContainer");
const pastContainer = document.getElementById("pastContainer");
const upcomingContainer = document.getElementById("upcomingEventsContainer");

// Filter All Events after 2021
const pastEvents = events.filter((e) => e.date.split("-")[0] <= 2021);
const upcomingEvents = events.filter((e) => e.date.split("-")[0] > 2021);

// *******************Model****************************************************************************************************************************************
// <div class="card" style="width: 18rem;  height: 24rem">
//             <img class="card-img-top h-50 cover" src="../assets/Cinema.jpg" alt="Card image cap">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <div class="container-fluid d-flex justify-content-between align-items-center">
//                         <p class="align-self-center mt-auto mb-auto">Price: $1000</p>
//                         <a href="details.html" class="btn btn-primary">Details</a>
//                     </div>
//             </div>
//           </div>
//***************************************************************************************************************************************************************** */
const showStats = (eventsAny) => {
  eventsAny.forEach((event) => {
    // ****************************************Model**********************************************************
    // <th scope="row">Category</th>
    // <th scope="row">Name</th>
    // <th scope="row">Description</th>
    // <th scope="row">Place</th>
    // <th scope="row">Capacity</th>
    // <th scope="row">Assistence</th>
    // <th scope="row">Price</th>
    // *******************************************Model *******************************************************

    // Create all Elements
    const tr = document.createElement("tr");
    const category = document.createElement("td");
    const name = document.createElement("td");
    const description = document.createElement("td");
    const place = document.createElement("td");
    const capacity = document.createElement("td");
    const assistance = document.createElement("td");
    const price = document.createElement("td");
    // Populate data
    category.textContent = event.category;
    name.textContent = event.name;
    description.textContent = event.description;
    place.textContent = event.place;
    capacity.textContent = event.capacity;
    assistance.textContent = event.assistance;
    price.textContent = `$${event.price}`;

    // Populate tr
    tr.appendChild(category);
    tr.appendChild(name);
    tr.appendChild(description);
    tr.appendChild(place);
    tr.appendChild(capacity);
    tr.appendChild(assistance);
    tr.appendChild(price);
    // Append card to fragment element
    event.date.split("-")[0] <= 2021
      ? pastFragment.appendChild(tr)
      : upcomingFragment.appendChild(tr);
  });
};
showStats(pastEvents);
showStats(upcomingEvents);
// After iterating, we then insert fragment contents into the DOM
pastContainer.appendChild(pastFragment);
upcomingContainer.appendChild(upcomingFragment);

// Principal Stats

// ***************************Model***************************
// <tr>
//             <td colspan="2">------</td>
//             <td>------</td>
//             <td>------</td>
//           </tr>
//           <tr>
//             <td colspan="2">------</td>
//             <td>------</td>
//             <td>------</td>
//           </tr>
// ***************************Model***************************
// events.forEach((event, index) => {
//   const tr = document.createElement("tr");
//   const highestAudience = document.createElement("td");
//   const lowestAudience = document.createElement("td");
//   const largestCapatity = document.createElement("td");

//   highestAudience.colspan = "2";
//   highestAudience.textContent = events.sort(function (a, b) {
//     if (a.assistance > b.assistance) {
//       return 1;
//     }
//     if (a.assistance < b.assistance) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   })[-index].assistance;
//   lowestAudience.textContent = events.sort(function (a, b) {
//     if (a.assistance > b.assistance) {
//       return 1;
//     }
//     if (a.assistance < b.assistance) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   })[index].assistance;
//   largestCapatity.textContent = events.sort(function (a, b) {
//     if (a.capacity > b.capacity) {
//       return 1;
//     }
//     if (a.capacity < b.capacity) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   })[-index].capacity;
//   tr.appendChild(highestAudience);
//   tr.appendChild(lowestAudience);
//   tr.appendChild(largestCapatity);
//   statsFragment.appendChild(tr);
// });
// statsContainer.appendChild(statsFragment);
