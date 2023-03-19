export function search(events){
    const searchInput = document.querySelector("#search-input").value.toLowerCase()
    return searchInput == '' ? events : events.filter(event => event.name.toLowerCase().includes(searchInput)||event.description.toLowerCase().includes(searchInput));
}

export function filterByCategories(events){
    let cats = [...document.querySelectorAll('input[type="checkbox"]:checked')]
    return cats.length == 0 ? events : events.filter(event => cats.map(i=> i.value).includes(event.category.split(' ')[0]))
}
export function combinedFilter(events){
    return filterByCategories(search(events))
}

