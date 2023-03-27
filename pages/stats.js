import { getEvents,eventsType } from "../scripts/functions.js";
import {allEvents,statsEventsType} from "../scripts/statsFunctions.js";
const {events,currentDate} = await getEvents()
allEvents(events)
statsEventsType(eventsType(events,'upcoming',currentDate),'upcoming')
statsEventsType(eventsType(events,'past',currentDate),'past')
