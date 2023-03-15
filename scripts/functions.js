import { combinedFilter } from "./filterFunctions.js";
// ************************************************************************************Events************************************************************************************
export function eventsType(events,type,date){
    const types ={
        'past':events.filter(e=>e.date<date),
        'upcoming':events.filter(e=>e.date>date)
    }
    return types[type] || events
}

export function showEvents(events,type){
    const containerEvents = document.getElementById("eventsContainer");
    containerEvents.innerHTML= ""
    let fragment = new DocumentFragment();
    if(events.length == 0){
        containerEvents.innerHTML= `<h2>Not Found</h2>`
        return
    }
    for(let event of events){
        let cardContainer = document.createElement('div');
        cardContainer.classList="card mb-3"
        cardContainer.style = "position:relative; width: 23rem;  height: 30rem";
        cardContainer.innerHTML=`
        <img class="card-img-top" style="height:50%;object-fit:cover" src="${event.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <p class="align-self-center mt-auto mb-auto">Price: $${event.price}</p>
                <a href="${!type ? "./pages/details.html":"./details.html"}?id=${event._id}" class="btn btn-primary">Details</a>
            </div>
            <h5 class="text-center position-absolute fixed-bottom p-2">Date: ${event.date}</h5>
        </div>`
        fragment.appendChild(cardContainer)
    }
    containerEvents.appendChild(fragment)
}
// ************************************************************************************Events************************************************************************************
// **********************************************************************************Categories**********************************************************************************

// We Make a function to delete Repeat
const deleteRepeatElements = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
// Get Categories
export function getCategories(events){
    let categories = [events.map((e) => e.category)][0];
    return deleteRepeatElements(categories)
}
// Populate Categories
export function showCategories(cats){
    // Create a Categories fragment
    let catFragment = new DocumentFragment();
    const containerCategories = document.getElementById("categoriesContainer");
    let counter = 1;
    for(let cat of cats){
        let formCheck = document.createElement("div");
        formCheck.classList = "form-check";
        formCheck.innerHTML=`
        <label class="form-check-label" for="flexCheckDefault${counter}">
        <input class="form-check-input" type="checkbox" value=${cat} id="flexCheckDefault${counter}">
            ${cat}
        </label>`
        catFragment.appendChild(formCheck)
        counter++
    }
    containerCategories.appendChild(catFragment)
}
// **********************************************************************************Categories**********************************************************************************
export function populateAll(eventsToShow){
    // Populate Categories
    const categories = getCategories(eventsToShow)
    showCategories(categories)

    // Search 
    const searchInput = document.querySelector("#search-input")
    const searchButton = document.querySelector('#search-button')

    searchButton.addEventListener("click",e => showEvents(combinedFilter(eventsToShow)))
    searchInput.addEventListener('input',e=> showEvents(combinedFilter(eventsToShow)))

    // Filters by Category
    const form = document.querySelectorAll("#categoriesContainer")[0]

    form.addEventListener('change',e=>showEvents(combinedFilter(eventsToShow)));
}