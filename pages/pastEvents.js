import data from '../data/data.js'
import {showEvents,eventsType,populateAll} from '../scripts/functions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'past',data.currentDate)
showEvents(eventsToShow,'past')
populateAll(eventsToShow)