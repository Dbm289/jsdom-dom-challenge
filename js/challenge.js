const counter = document.querySelector("#counter");

const plusBtn = document.querySelector("#plus");

const minusBtn = document.querySelector("#minus");

const incrementNum = () => {
    let num = parseInt(counter.innerText) + 1;
    counter.innerText = num;
};

const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1;
    counter.innerText = num;
};

const startTimer = () => {
    setInterval(incrementNum, 1000);
};

document.addEventListener("DOMContentLoaded", startTimer) ;

const incrementClick = (event) => {
    event.preventDefault();
    incrementNum();

};

const decrementClick = (e) => {
    e.preventDefault();
    decrementNum();
};

plusBtn.addEventListener("click", incrementNum)

minusBtn.addEventListener("click", decrementNum)