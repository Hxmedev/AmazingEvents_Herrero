import {showEvents,eventsType,populateAll,getEvents} from '../scripts/functions.js';
// Populate Events
const {events,currentDate} = await getEvents()
const eventsToShow = eventsType(events,'upcoming',currentDate)
showEvents(eventsToShow,'upcoming')
populateAll(eventsToShow)