var playing = false;
var score = 0;
var action;
var timelefti = 60;
var correctAnswer;
document.getElementById("startreset").onclick = function(){
    if(playing == true){
        hide("gameover");
        hide("correct");
        hide("tryagain");
        location.reload();
    }
    else{
        hide("gameover");
        hide("correct");
        hide("tryagain");
        playing = true;
        score = 0; document.getElementById("score").innerHTML = score; 
        show("timeleft"); 
       timelefti = 60; document.getElementById("timeleftvalue").innerHTML = timelefti; document.getElementById("startreset").innerHTML = "Reset Game";  
        startCountdown();
        generateQA();
    }
}

for(i=1;i<=4;i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score += 1; document.getElementById("score").innerHTML = score;
            show("correct");
            hide("tryagain");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }else{
            show("tryagain");
            hide("correct");
            setTimeout(function(){
                hide("tryagain");
            }, 1000);
        } 
     }
   }
}

function startCountdown(){
    action = setInterval(function (){
        timelefti -= 1; document.getElementById("timeleftvalue").innerHTML = timelefti;
        if(timelefti == 0){
            stopCountDown(); document.getElementById("gameover").innerHTML = "<p>Game Over!!</p><p>Your Score is "+ score + ".</p>";
            show("gameover");
            hide("timeleft");
            hide("correct");
            hide("tryagain");
            playing = false; document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000)
}

function stopCountDown(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display ="none";
}

function show(id){
    document.getElementById(id).style.display ="block";
}

function generateQA(){
    var x = 1 + Math.round((Math.random()*9));
    var y = 1 + Math.round((Math.random()*9));
    correctAnswer = x*y; document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round((Math.random()*3));        
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    var wrongAnswer, wrongAnswert = correctAnswer;
    for(i=1;i<=4;i++){
        if(i != correctPosition){
            wrongAnswer = wrongAnswert + 1 +  Math.round(Math.random()*9);
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            wrongAnswert = wrongAnswer;
        }
    }
}