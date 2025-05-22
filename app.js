
const active = document.querySelectorAll('.card.card-active')
const counter = document.querySelector('.counter')
document.querySelector('.right-header').addEventListener('click', () =>{
    counter.innerHTML="0"
    active.forEach((e) => {
        e.style.background='white'
    });
})
