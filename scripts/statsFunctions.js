function eventsFilterType(events,type){
    const types ={
        'highest':events.slice().sort((a,b) => (b.assistance ||  b.estimate) - (a.assistance || a.estimate)),
        'lowest':events.slice().sort((a,b) => (a.assistance || a.estimate) - (b.assistance ||  b.estimate)),
        'capacity':events.slice().sort((a,b) => b.capacity-a.capacity),
    }
    return types[type] || events
}
export function allEvents(events){
    const statsFragment = new DocumentFragment();    
    const statsContainer = document.getElementById("statsContainer");
    const highest = eventsFilterType(events,'highest')
    const lowest = eventsFilterType(events,'lowest')
    const capacity = eventsFilterType(events,'capacity')
    for(let i=0;i<3;i++){
        const tr = document.createElement("tr");
        tr.innerHTML=`
            <th scope="row" colspan="2" style="height:30vh">
                <div class="container-fluid bg-info h-100">
                    <div class="row h-100 w-100">
                        <div class="col h-100 w-50">
                            <img class="card-img-top cover h-100 w-100" src="${highest[i].image}" alt="Card image cap">
                        </div>
                        <div class="col">
                            <div class="row">
                                <h4 class="card-title text-info text-center">${highest[i].name}</h4>
                            </div>
                            <div class="row">
                                <h5 class="text-info text-center">Audience: <span class="text-danger">${!highest[i].assistance ?highest[i].estimate:highest[i].assistance}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th scope="row">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img class="card-img-top cover" style="min-height:100%" src="${lowest[i].image}" alt="Card image cap">
                        </div>
                        <div class="col">
                            <div class="col">
                                <h4 class="card-title text-info text-center">${lowest[i].name}</h4>
                            </div>
                            <div class="col">
                                <h5 class="text-info text-center">Audience: <span class="text-danger">${!lowest[i].assistance ?lowest[i].estimate:lowest[i].assistance}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th scope="row">
                <div class="container h-100">
                <div class="row">
                    <div class="col">
                        <img class="card-img-top cover" style="min-height:100%" src="${capacity[i].image}" alt="Card image cap">
                    </div>
                    <div class="col">
                        <div class="col">
                            <h4 class="card-title text-info text-center">${capacity[i].name}</h4>
                        </div>
                        <div class="col">
                            <h5 class="text-info text-center">Capacity: <span class="text-success">${capacity[i].capacity}</span></h5>
                        </div>
                    </div>
                </div>
                </div>
            </th>
            `
            statsFragment.appendChild(tr)
    }
            
    statsContainer.appendChild(statsFragment)
}
