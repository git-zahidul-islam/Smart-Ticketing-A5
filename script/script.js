const seats = document.querySelectorAll(".seat");
const selectedSeats = [];
const seatLimit = 4;
const perSeatPrice = 550;
let totalPrice = 0;
let grandTotal = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function () {
        if (seat.classList.contains('bg-green-500')) {
            seat.classList.remove('bg-green-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            availableSeat++;
            availableSeatElement.innerText = availableSeat;

            const seatName = seat.innerText;
            const selectedIndex = selectedSeats.indexOf(seatName);
            if (selectedIndex !== -1) {
                selectedSeats.splice(selectedIndex, 1);
            }
            totalPrice -= perSeatPrice;
        } else {
            if (selectedSeats.length >= seatLimit) {
                alert(`You can only select up to ${seatLimit} seats.`);
                return;
            }
            seat.classList.add('bg-green-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            if (availableSeat > 0) {
                availableSeat--;
                availableSeatElement.innerText = availableSeat;

                const seatName = seat.innerText;
                selectedSeats.push(seatName);
                totalPrice += perSeatPrice;

                let grandTotalElement = document.getElementById('grand-total');
                let grandTotalText = grandTotalElement.innerText.trim();
                let newGrandTotal = totalPrice;
                grandTotalElement.innerText = `BDT ${newGrandTotal}`;


                const selectCount = document.getElementById('select-count')
                selectCount.innerText = selectedSeats.length;
                // append 
                const seatTypes = seat.innerText
                const seatContainer = document.getElementById('seatNumber')
                const p = document.createElement("p")
                p.innerText = seatTypes;
                seatContainer.appendChild(p)

                const economy = "Economy"
                const economyContainer = document.getElementById('economy')
                const p2 = document.createElement("p")
                p2.innerText = economy;
                economyContainer.appendChild(p2)

                const priceContainer = document.getElementById('price');
                const p3 = document.createElement("p");
                p3.innerText = perSeatPrice;
                priceContainer.appendChild(p3)

                const totalContainer = document.getElementById('total');
                totalContainer.innerText = `BDT ${totalPrice}`;
            }
        }
    });
}
const btn = document.getElementById("coupon");
const btnField = document.getElementById("inp-field");
btn.addEventListener('click', function () {
    const btnFieldText = btnField.value;
    if (btnFieldText === 'NEW15') {
        const discountElement = document.getElementById("grand-total");
        const discountAmount = totalPrice * 0.15;
        const discountPrice = totalPrice - discountAmount;
        discountElement.innerText = discountPrice;
        const couponItem = document.getElementById('cupon-container');
        couponItem.classList.add('hidden');
    }
    else if (btnFieldText === 'Couple 20') {
        const discountElement = document.getElementById("grand-total");
        const discountAmount = totalPrice * 0.2;
        const discountPrice = totalPrice - discountAmount;
        discountElement.innerText = discountPrice;
        const couponItem = document.getElementById('cupon-container');
        couponItem.classList.add('hidden');
    }
    else {
        alert('Invalid Coupne')
    }
});
