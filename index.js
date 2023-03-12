import data from './data/data.js'
import {showEvents,eventsType,getCategories,showCategories} from './scripts/functions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'',data.currentDate)
showEvents(eventsToShow)

// Get Categories
const categories = getCategories(eventsToShow)
// Populate Categories
showCategories(categories)
