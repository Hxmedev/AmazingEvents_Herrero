import data from '../data/data.js'

// Create a Events fragment
const containerEvents = document.getElementById("eventsContainer");
let fragment = new DocumentFragment();
// Populate Events
let eventsToShow = data.events.filter(e=>e.date<data.currentDate)
function showEvents(events,date){
    for(let event of events){
        let cardContainer = document.createElement('div');
        cardContainer.classList="card mb-3"
        cardContainer.style = "width: 22rem;  height: 30rem";
        cardContainer.innerHTML=`
        <img class="card-img-top h-50 cover" src="${event.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <p class="align-self-center mt-auto mb-auto">Price: $${event.price}</p>
                <a href="details.html" class="btn btn-primary">Details</a>
            </div>
            <h5 class="text-center p-4">Date: ${event.date}</h5>
        </div>`
        fragment.appendChild(cardContainer)
    }
    containerEvents.appendChild(fragment)
}
showEvents(eventsToShow)

// Get Categories
let categories = [data.events.map((e) => e.category)][0];

// We Make a function to delete Repeat
const deleteRepeatElements = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Create a Categories fragment
let catFragment = new DocumentFragment();
const containerCategories = document.getElementById("categoriesContainer");
categories= deleteRepeatElements(categories)

// Populate Categories
function showCategories(cats){
    for(let cat of cats){
        let formCheck = document.createElement("div");
        formCheck.classList = "form-check";
        formCheck.innerHTML=`
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
        <label class="form-check-label" for="flexCheckDefault">
            ${cat}
        </label>`
        catFragment.appendChild(formCheck)
    }
    containerCategories.appendChild(catFragment)
}
showCategories(categories)

