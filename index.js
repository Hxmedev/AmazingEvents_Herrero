// Get the Events Info and store in variable
const events = data.events
// we recover the container element
let fragment = new DocumentFragment();
const containerEvents = document.getElementById("eventsContainer")

// *******************Model****************************************************************************************************************************************
// <div class="card" style="width: 18rem;  height: 24rem">
//             <img class="card-img-top h-50 cover" src="../assets/Cinema.jpg" alt="Card image cap">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <div class="container-fluid d-flex justify-content-between align-items-center">
//                         <p class="align-self-center mt-auto mb-auto">Price: $1000</p>
//                         <a href="details.html" class="btn btn-primary">Details</a>
//                     </div>
//             </div>
//           </div>
//***************************************************************************************************************************************************************** */

events.forEach(event => {
    
    // Create all Elements
    const eventCard = document.createElement('div');
    const img = document.createElement('img');
    const cardBody = document.createElement('div')
    const EventName = document.createElement('h5')
    const EventDescription = document.createElement('p')
    const priceContainer = document.createElement('div')
    const price = document.createElement('p')
    const detailsButton = document.createElement('a')
    
    // Card Properties
    eventCard.style = "width: 18rem;  height: 24rem"
    eventCard.className = "card mb-3"
    
    // Img Properties
    img.src = event.image;
    img.className="card-img-top h-50 cover"
    
    // Card Body properties
    cardBody.className ="card-body"
    
    // Title Properties
    EventName.className="card-title"
    EventName.textContent=event.name
    
    // Description properties
    EventDescription.className ="card-text"
    EventName.textContent=event.description
    
    // Price Container properties
    priceContainer.className ="container-fluid d-flex justify-content-between align-items-center"
    
    // price properties
    price.className="align-self-center mt-auto mb-auto"
    price.textContent=`$${event.price}`
    
    // Button Details properties
    detailsButton.className="btn btn-primary"
    detailsButton.textContent="Details"
    
    // Atach sons of price Container
    priceContainer.appendChild(price)
    priceContainer.appendChild(detailsButton)
    
    // Atach sons of Card Body
    cardBody.appendChild(EventName)
    cardBody.appendChild(EventDescription)
    cardBody.appendChild(priceContainer)
    
    // Attach the image to the div we initially created
    eventCard.appendChild(img);
    eventCard.appendChild(cardBody);
    
    // Append card to fragment element
    fragment.appendChild(eventCard);
});
// After iterating, we then insert fragment contents into the DOM
containerEvents.appendChild(fragment);