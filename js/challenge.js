


const form = document.getElementById("comment-form");
commentForm.addEventListener("submit", clickSubmit);
const input = document.querySelector("#comment-input");

const div =document.querySelector("#list");

function clickedSubmit(e){
    e.preventDefault();
    const pElement = document.createElement("p");
    console.log(pElement);

    pElement.appendChild(document.createTextNode(input.value));

    div.appendChild(pElement);
    commentForm.reset();
}


let startTime = setInterval(counter, 1000);
let h1 = document.querySelector("#counter");
function counter(){
    h1.innerHTML++;
}





let incre = document.getElementById("plus")
incre.addEventListener("click", (e)=> h1.innerHTML++);



let decre = document.getElementById("minus");
decre.addEventListener("click", (e)=> h1.innerHTML--);



let likeBtn = document.querySelector("heart");
likeBtn.addEventListener("click", function(e){
    const newLi =document.createElement("li");
    newLi.appendChild(document.createTextNode(h1.innerHTML+" has been liked 1 time"));
    document.querySelector(".likes").appendChild(newLi);
} )





let pause =document.getElementById("pause");
let timerRunning = true;
console.log("timerRunning outside: " +timerRunning)
pause.addEventListener("click", function(e){
    let aCounter = 1;
    if(timerRunning === true){
        clearInterval(startTime);
        clearInterval(aCounter);
        pause.innerHTML = "resume"

        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        timerRunning = false;
    }
    else{
        aCounter = setInterval(counter, 1000);
        pause.innerHTML ="pause"
        timerRunning = true
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    }

})


