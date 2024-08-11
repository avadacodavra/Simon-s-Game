let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`)
    
    //random btn will flash
    // console.log(randIndex);
    // console.log(randbtn);
    // console.log(randColor);
    gameFlash(randbtn);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};
