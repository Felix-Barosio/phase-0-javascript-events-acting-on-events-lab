// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 360}px`;
    }
}

document.addEventListener('keydown', function (e){
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
        }
})

// const dodger = document.querySelector('#dodger');

// const moveDodgerLeft = () =>{
//     (dodger.style.left = '0%')
// }

// const moveDodgerRight = () =>{
//     (dodger.style.left = '100%')
// }

