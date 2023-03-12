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
    let fragment = new DocumentFragment();
    for(let event of events){
        let cardContainer = document.createElement('div');
        cardContainer.classList="card mb-3"
        cardContainer.style = "position:relative; width: 23rem;  height: 30rem";
        cardContainer.innerHTML=`
        <img class="card-img-top" style="min-height:50%;object-fit:cover" src="${event.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <p class="align-self-center mt-auto mb-auto">Price: $${event.price}</p>
                <a href="${!type ? "./pages/details.html":"./details.html"}" class="btn btn-primary">Details</a>
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
// **********************************************************************************Categories**********************************************************************************