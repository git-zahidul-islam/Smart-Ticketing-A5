const seats = document.querySelectorAll('.seat');
// const seatsLeft = document.getElementById('seats-left');
// const getSeats = document.getElementById('get-seats');

let clicked = 0;
for (let index = 0; index < seats.length; index++) {
    const element = seats[index];
    element.addEventListener('click', function () {
        clicked++;
        if (clicked <= 4) {
            element.classList.add('bg-green-500')
            // left seats 
            const seatsLeft = document.getElementById('seats-left');
            const seatsLeftText = parseInt(seatsLeft.innerText)
            const seatsLeftValue = seatsLeftText - 1;
            seatsLeft.innerText = seatsLeftValue
            // total seats
            const getSeats = document.getElementById('get-seats');
            const getSeatsText = parseInt(getSeats.innerText);
            const getSeatsValue = getSeatsText + 1;
            getSeats.innerText = getSeatsValue;
            // append 
            
        }
        



    })
}