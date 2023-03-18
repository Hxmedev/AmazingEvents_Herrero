import {showEvents,eventsType,populateAll,getEvents} from './scripts/functions.js';
// Fetch data
const {events} = await getEvents()
// Populate Events
const eventsToShow = eventsType(events,'',1)
showEvents(eventsToShow)

// Populate All
populateAll(eventsToShow)
