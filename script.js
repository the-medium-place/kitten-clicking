var kittenPic = $('#kitten-pic');
var kittenDesc = $('#kitten-desc');
var gameTime = $("#game-timer");
var startBtn = $('#start-btn');
var clickBtn = $("#click-btn");
var scoresList = $("#scores-list");
var timerVal = $('#timer-val');


var currentIndex = 0;
var score = 0;
var timer = 5;

var storedScores = JSON.parse(localStorage.getItem('kittenScore')) || [];
renderScores();

function renderScores(){
    scoresList.empty();
    storedScores.forEach(function(score){
        var newLi = $("<li>");
        newLi.text(`${score.inits} -- ${score.score}`)
        scoresList.append(newLi)
    })
    
}

var kittenList = [
    {
        url: "https://placekitten.com/205/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/210/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/155/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/246/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/238/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/196/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/371/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/209/200",
        desc: "this is a cute kitten!"
    },
    {
        url: "https://placekitten.com/188/200",
        desc: "this is a cute kitten!"
    },
]

kittenPic.attr('src', kittenList[currentIndex].url)
kittenDesc.text(kittenList[currentIndex].desc)

startBtn.on('click', function(){
    currentIndex=0;
    score=0;
    timer=5;

    timerVal.text(`time remaining: ${timer}`);

    console.log("i've been clicked!")
    var gameTimer = setInterval(() => {
        timer--;

        timerVal.text(`time remaining: ${timer}`);
        console.log(timer);

        if(timer === 0){
            clearInterval(gameTimer);
            alert(`game over! \n Your score was: ${score}`);
            var userInits = prompt('what are you initials?')
            var userObj = {
                inits: userInits,
                score: score
            }
            storedScores.push(userObj)
            localStorage.setItem('kittenScore', JSON.stringify(storedScores))
            renderScores();
        }
    }, 1000);
})

clickBtn.on('click', function(){
    score++
    currentIndex++;

    if (currentIndex === kittenList.length - 1){
        currentIndex = 0;
    }


    kittenPic.attr('src', kittenList[currentIndex].url)
    kittenDesc.text(kittenList[currentIndex].desc)
    console.log("score: ", score)
})
