import data from '../data/data.js'
import {showEvents,eventsType,getCategories,showCategories} from '../scripts/functions.js';
import { search } from '../scripts/filterFunctions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'past',data.currentDate)
showEvents(eventsToShow,"past")

// Get Categories
const categories = getCategories(eventsToShow)
// Populate Categories
showCategories(categories)

// Search 
const searchInput = document.querySelector("#search-input")
searchInput.addEventListener("input",e=> showEvents(search(eventsToShow,e.target.value)))