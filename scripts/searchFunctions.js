export function search(events,input){
    return events.filter(event => event.name.toLowerCase().includes(input.toLowerCase())||event.description.toLowerCase().includes(input.toLowerCase()));
}