import data from '../data/data.js'
import {showEvents,eventsType,getCategories,showCategories} from '../scripts/functions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'past',data.currentDate)
showEvents(eventsToShow,"past")

// Get Categories
const categories = getCategories(eventsToShow)
// Populate Categories
showCategories(categories)