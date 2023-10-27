var timer = 30;
var score = 0;
var HitRN = 0;

function MakeBubble(){

var clutter ="";

for(var i = 1; i<=168;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#bottompanel").innerHTML = clutter;
}

function RunTimer(){
    var timerinterval = setInterval(function(){
        if(timer>0){
          timer--;
          document.querySelector("#TimerValue").textContent = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#bottompanel").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function GetNewHit(){
    HitRN = Math.floor(Math.random()*10);
    document.querySelector("#HitValue").textContent = HitRN;
}

function IncreaseScore(){
    score += 10;
    document.querySelector("#ScoreValue").textContent = score;
}

document.querySelector("#bottompanel")
.addEventListener("click",
function(dets){
    var Clickednum = Number(dets.target.textContent);
    if(Clickednum === HitRN){
        IncreaseScore();
        MakeBubble();
        GetNewHit();
    }
});

RunTimer();
IncreaseScore();
MakeBubble();
GetNewHit();