import data from '../data/data.js'
const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventId = params.get('id');
const eventToShow = data.events.find(event=> event._id==eventId)
console.log(eventToShow)

const eventDetails = document.querySelector('#eventDetails')
const {image,category,name,description,price,capacity,assistance,place,date,estimate} = eventToShow
eventDetails.innerHTML=`<div class="card mb-3 m-auto mt-5" style="min-width: 80vh;">
<div class="row g-2">
    <div class="col-md-4">
        <img src="${image}" class="img-fluid rounded-start w-100 h-100"
            style="object-fit: cover;" alt="...">
    </div>
    <div class="col-md-4">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
        </div>
    </div>
    <div class="col-md-4">
        <ul class="p-3" style="list-style:none;">
            <li class="d-flex align-items-center"><h4>Category</h4>: ${category}</li>
            <li class="d-flex align-items-center"><h4>Capacity</h4>: ${capacity}</li>
            <li class="d-flex align-items-center"><h4>Price</h4>: $${price}</li>
            ${
                !assistance ? `<li class="d-flex align-items-center"><h4>Estimate</h4>: ${estimate}</li>` :`<li class="d-flex align-items-center"><h4>Assistance</h4>: ${assistance}</li>`
            }
            <li class="d-flex align-items-center"><h4>Place</h4>: ${place}</li>
            <li class="d-flex align-items-center"><h4>Date</h4>: ${date}</li>
        </ul>
    </div>
</div>
</div>`