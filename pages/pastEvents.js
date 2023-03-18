import {showEvents,eventsType,populateAll,getEvents} from '../scripts/functions.js';
// Populate Events
const {events,currentDate} = await getEvents()
const eventsToShow = eventsType(events,'past',currentDate)
showEvents(eventsToShow,'past')
populateAll(eventsToShow)