const xmlPath = 'tickets.xml';
    fetch(xmlPath)
    .then(response => response.text())
    .then(xml => {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(xml, "application/xml");

    const ticketshow = xmlDocument.getElementsByTagName("block");

    const divContainer = document.getElementById("chupapimunyanya");

    for(let i = 0; i < ticketshow.length; i++) {
      const ticket = ticketshow[i];
      const place = ticket.getElementsByTagName("place")[0].textContent;
      const dateandtime = ticket.getElementsByTagName("date-and-time")[0].textContent;
      const economclass = ticket.getElementsByTagName("econom")[0].textContent;
      const businessclass = ticket.getElementsByTagName("business")[0].textContent;
      const premclass = ticket.getElementsByTagName("prem")[0].textContent;
      const image = ticket.getElementsByTagName("image")[0].textContent;
      const economprice = ticket.getElementsByTagName("price-econom")[0].textContent;
      const businessprice = ticket.getElementsByTagName("price-business")[0].textContent;
      const premprice = ticket.getElementsByTagName("price-prem")[0].textContent;

      const flightinfo = document.createElement("div");
      flightinfo.classList.add("flight-info-container");
      flightinfo.innerHTML = `
                <img src="${image}"> 
                <div class="time-and-place">
                    <span id="depAndDesPlaces">${place}</span>
                    <br>
                    ${dateandtime}
                    <div class="class-and-price">
                        <div>${economclass}</div>
                        <div>${economprice}</div>
                    </div>  
                    <div class="class-and-price">
                        <div>${businessclass}</div>
                        <div>${businessprice}</div>
                    </div>   
                    <div class="class-and-price">
                        <div>${premclass}</div>
                        <div>${premprice}</div>
                    </div>   
                </div> 
      `;
      divContainer.appendChild(flightinfo);
    }
  });


const departure = document.getElementById('departureInput');
const destination = document.getElementById('destinationInput');

const applybutton = document.getElementById("inputButton");
applybutton.addEventListener('click',(event) =>
{
    event.preventDefault();

    const departurePoint = departure.value.toLowerCase();
    const destinationPoint = destination.value.toLowerCase();

    const ticketQuantity = document.querySelectorAll('.flight-info-container');

    ticketQuantity.forEach(showTicket => {
        const getPlaces = showTicket.querySelector('#depAndDesPlaces').textContent;
        const departurePlace = getPlaces.split("-")[0].trim().toLowerCase();
        const destinationPlace = getPlaces.split("-")[1].trim().toLowerCase();

        console.log(departurePoint);
        console.log(destinationPoint);

        if((departurePoint === '' && destinationPoint === destinationPlace) || (departurePoint === departurePlace && destinationPoint === '') || (departurePoint === '' && destinationPoint === '') || (departurePoint === departurePlace && destinationPoint === destinationPlace)) {
            showTicket.style.display = 'flex';
        }
        else {
            showTicket.style.display = 'none';
        }
    });
}
);
