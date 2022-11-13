const container = document.querySelector('.container');
const seats = document.querySelectorAll('row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value; // changing string to number
// console.log(ticketPrice);
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    // console.log(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;

    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}


movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    console.log(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});


