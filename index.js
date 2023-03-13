import data from './data/data.js'
import {showEvents,eventsType,getCategories,showCategories} from './scripts/functions.js';
import { search,filterByCategories } from './scripts/filterFunctions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'',data.currentDate)
console.log(eventsToShow)
showEvents(eventsToShow)

// Get Categories
const categories = getCategories(eventsToShow)
// Populate Categories
showCategories(categories)

// Search 
const searchInput = document.querySelector("#search-input")
searchInput.addEventListener("input",e=> showEvents(search(eventsToShow,e.target.value)))

// Filters by Category

const form = document.querySelectorAll("#categoriesContainer input[type=checkbox]")
console.log(form)
form.forEach(i=> {
    i.addEventListener('change', e=> showEvents(filterByCategories(eventsToShow,e.target.value)) );
});
