let container = document.querySelector('.container');
let startBtn = document.querySelector('.start_btn');
let restartBtn = document.querySelector('.restart_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');
let highscoreContainer = document.querySelector('.highscore');
const musicSound = new Audio('Gus.mp3');
const musucSound = new Audio('bgm.mp3');

let score = 0;
let time = 60;
let highscore = 0;
let interval;

function startGame() {
    score = 0;
    time = 60;
    scoreContainer.innerHTML = 'Score: ' + score;
    timeContainer.innerHTML = 'Temps: ' + time;
    container.innerHTML = "";

    interval = setInterval(function () {
       
        let target = document.createElement('img');
        target.id = "target";
        target.src = "./ms.png";
        container.appendChild(target);

        
        target.style.top = Math.random() * (container.offsetHeight - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (container.offsetWidth - target.offsetWidth) + 'px';

       
        setTimeout(function () {
            target.remove();
        }, 3000);

        
        target.onclick = function () {
            score += 1;
            scoreContainer.innerHTML = 'Score: ' + score;
            target.remove();
        };

       
        time -= 1;
        timeContainer.innerHTML = 'Temps: ' + time;

        


        
        if (time == 0) {
           
            musicSound.play('Gus.mp3')
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé";
      
            
            if (score > highscore) {
                highscore = score;
                highscoreContainer.innerHTML = 'High Score: ' + highscore;
            }
            else if (time == 5) { document.querySelector("audio").style.display = "none" }
        }
    }, 1000);
}

startBtn.onclick = function () {
    clearInterval(interval);
    startGame();
};

restartBtn.onclick = function () {
    clearInterval(interval);
    startGame();
    musucSound.play('bgm.mp3')
};