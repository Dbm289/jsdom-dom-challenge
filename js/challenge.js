const counter = document.querySelector("#counter");

const plusBtn = document.querySelector("#plus");

const minusBtn = document.querySelector("#minus");

const heartBtn = document.querySelector("#heart");

const pauseBtn = document.querySelector("#pause");

const likesUl = document.querySelector(".likes");

const buttons = [plusBtn, minusBtn, heartBtn]

const submitBtn = document.querySelector("#submit")

let isPaused = false

const incrementNum = () => {
    if (!isPaused) {
        let num = parseInt(counter.innerText) + 1;
        counter.innerText = num;
    }
};

const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1;
    counter.innerText = num;
};

const startTimer = () => {
    if (pauseBtn.innerText == "pause")
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

const addLike = (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    let content = `${counter.innerText} likes` ;
    li.innerText = content;
    likesUl.append(li);
}

heartBtn.addEventListener("click", addLike)

const pauseCounter = () => {
    if(isPaused) {
        isPaused = false;
        pauseBtn.innerText = "pause"
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
    } else {
        isPaused = true;
        pauseBtn.innerText = "resume";
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
        setTimeout(startTimer, 1000);
    }
};

pauseBtn.addEventListener("click", pauseCounter)

const createComment = (event) => {
    let content = submitBtn.parentNode.COMMENT_NODE.valueOf;
     e.preventDefault();
     const listDiv = document.querySelector("#list")
     const paraEle = document.createElement("p");
     paraEle.innerText = content;
     listDiv.appendChild(paraEle)
     //console.log(listDiv);
 }
submitBtn.addEventListener("click", createComment)