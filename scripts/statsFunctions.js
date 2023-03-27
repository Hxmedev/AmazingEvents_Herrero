import { getCategories,eventsType } from "./functions.js";
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
            <th scope="row" colspan="2">
                <div class="container-fluid">
                    <div class="row h-100 w-100 d-flex flex-column align-items-center">
                        <div class="col">
                            <div class="row">
                                <h4 class="card-title text-info text-center">${highest[i].name}</h4>
                            </div>
                            <div class="row">
                                <h5 class="text-info text-center">Audience: <span class="text-success">${!highest[i].assistance ?highest[i].estimate:highest[i].assistance}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th scope="row" >
                <div class="container-fluid">
                    <div class="row h-100 w-100 d-flex flex-column align-items-center">
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
                <div class="row d-flex flex-column align-items-center"
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
function dictionary(events){
    const dic = {}
    const cats = getCategories(events)
    for (let i = 0; i < cats.length; i++) {
        dic[cats[i]] = 0;
    }
    return dic
}
export function revenueEvents(events){
    console.log(events)
    const dic = dictionary(events)
    for(let i of events){
        dic[i.category] += (i.estimate * i.price) || (i.assistance * i.price)
    }
    console.log(dic)
    return dic
}
export function attendanceEvents(events){
    const dic = dictionary(events)
    for(let i of events){
        if(!dic[i.category]){
            dic[i.category]+= (i.estimate*100)/i.capacity || (i.assistance*100)/i.capacity
        }else{
            dic[i.category]= (dic[i.category] + ((i.estimate*100)/i.capacity || (i.assistance*100)/i.capacity))/2
        }
    }
    console.log(dic)
    return dic
}
export function statsEventsType(events,type){
    const statsFragment = new DocumentFragment();    
    const statsContainer = type == 'upcoming' ? document.getElementById("upcomingEventsContainer"): document.getElementById("pastContainer")
    const cats = getCategories(events)
    const revenue = revenueEvents(events)
    const attendance = attendanceEvents(events)
    for(let i of cats){
        const tr = document.createElement("tr");
        tr.innerHTML=`
            <th scope="row" colspan="2">
                <h4 class="text-center">${i}</h4>
            </th>
            <th scope="row">
                <h4 class="text-center">$ ${revenue[i]}</h4>
            </th>
            <th scope="row">
                <h4 class="text-center">% ${attendance[i].toFixed(2)}</h4>
            </th>
            `
            statsFragment.appendChild(tr)
    }
            
    statsContainer.appendChild(statsFragment)
}