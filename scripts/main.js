// Variables
var elUserForm = document.querySelector(".user-form-js");
var elUserInput = document.querySelector(".input-js");
var elUserBtn = document.querySelector(".user-btn-js");
var elResult = document.querySelectorAll(".output-js");

//Velocity of transports
var speedOfPassenger = 3.6;
var speedOfByBike = 20.1;
var speedOfCar = 70;
var speedOfPlane = 800;

// Event Listener 
elUserForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var distance = Number(elUserInput.value);

    // Calculate time for each means of transport
    var timePassenger = distance / speedOfPassenger;
    var timeByBike = distance / speedOfByBike;
    var timeByCar = distance / speedOfCar;
    var timeByPlane = distance / speedOfPlane;


    // Convert the times
    timePassenger = timePassenger.toFixed();
    timeByBike = Math.trunc(timeByBike);
    timeByCar = Math.trunc(timeByCar); 
    timeByPlane = Math.trunc(timeByPlane); 

    // Condition that display which times should be selected
    if (timePassenger || timeByBike || timeByBike || timeByPlane >= 1) {
        timePassenger = Math.trunc(timePassenger) + " hours";
        timeByBike = Math.trunc(timeByBike) + " hours";
        timeByCar = Math.trunc(timeByCar) + " hours";
        timeByPlane = Math.trunc(timeByPlane) + " hours";
     } else {
         timePassenger = Math.trunc(timePassenger) + " minutes";
         timeByBike = Math.trunc(timeByBike) + " minutes";
         timeByCar = Math.trunc(timeByCar) + " minutes";
         timeByPlane = Math.trunc(timeByPlane) + " minutes";
     }

    // Display the results in each output element
    elResult[0].textContent =  timePassenger;
    elResult[1].textContent =  timeByBike;
    elResult[2].textContent =  timeByCar;
    elResult[3].textContent =  timeByPlane;
});
