export function search(events,input){
    return events.filter(event => event.name.toLowerCase().includes(input.toLowerCase())||event.description.toLowerCase().includes(input.toLowerCase()));
}

export function filterByCategories(events,cats,cat){
    let auxCat = cat.split(" ")[0];
    if(cats.indexOf(auxCat) == -1){
        cats.push(auxCat)
    }else{
        cats.splice(cats.indexOf(auxCat),1)
    }
    return cats.length == 0 ? [...events] : [...events.filter(event => cats.indexOf(event.category.split(" ")[0]) !== -1)]
}