export function search(events,input){
    return events.filter(event => event.name.toLowerCase().includes(input.toLowerCase())||event.description.toLowerCase().includes(input.toLowerCase()));
}

export function filterByCategories(events,cat){
    return events.filter(event => event.category.split(" ")[0] == cat);
}