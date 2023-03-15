import data from '../data/data.js'
import {showEvents,eventsType,populateAll} from '../scripts/functions.js';
// Populate Events
const eventsToShow = eventsType(data.events,'upcoming',data.currentDate)
showEvents(eventsToShow,'upcoming')
populateAll(eventsToShow)