

 let myAudio = document.querySelector('#audio')
myAudio.play()

window.onload = myAudio.play()

 const questions = [
    {
        question: "Which comics character is known for being captain america's friend ?",
        optionA: "hawkeye",
        optionB: "hyperion",
        optionC: "winter soldier",
        optionD: "spider-man",
        correctOption: "optionC"
    },
  
    {
        question: "How many players are allowed on a foot-ball team ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },
  
    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },
  
    {
        question: "which scientist tried electrocuting a horse to prove alternative current's danger ?",
        optionA: "Thomas Edison",
        optionB: "Nikola Tesla",
        optionC: "Alexander Grahambell",
        optionD: "Guglielmo Marconi",
        correctOption: "optionA"
    },
  
    {
        question: "which U.S president won a nobel prize ?",
        optionA: "George Bush",
        optionB: "Ronald Reagan",
        optionC: "Donald Trump",
        optionD: "Barack Obama",
        correctOption: "optionD"
    },
  
    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Mekong river",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },
  
    {
        question: "What is the biggest country in Europe ",
        optionA: "Spain",
        optionB: "Romania",
        optionC: "Russia",
        optionD: "Moldova",
        correctOption: "optionC"
    },
  
    {
        question: "Which country is the smallest in Africa ?",
        optionA: "Nigeria",
        optionB: "Malawi",
        optionC: "Seychelles",
        optionD: "Algeria",
        correctOption: "optionC"
    },
  
    {
        question: "Who won an Oscar for the best actor in 2024 ?",
        optionA: "Robert Downey Jr",
        optionB: "Cilian Murphy ",
        optionC: "Ryan Reynolds",
        optionD: "Channum Tatum",
        correctOption: "optionB"
    },
  
    {
        question: `"You Can't see me" is a popular saying by :`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },
  
    {
        question: "Where is the world's tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },
  
    {
        question: "Who won the 97/98's Champions League ?",
        optionA: "Real Madrid",
        optionB: "Juventus",
        optionC: "Manchester United",
        optionD: "Parma",
        correctOption: "optionA"
    },
  
  
    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },
  
    {
        question: "Which national team won the football World cup in 1982 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "Italy",
        correctOption: "optionD"
    },
  
    {
        question: "which one is the fastest car in the world ?",
        optionA: "Bugatti Bolide",
        optionB: "Hennessey Venom F5",
        optionC: "Koenigsegg Jesko Absolut",
        optionD: "SSC Tuatara",
        correctOption: "optionA"
    },
  
    {
        question: "Which one is the only fighter that has won against Islem Makhachev ?",
        optionA: "Charles Oliveira",
        optionB: "Conor McGregor",
        optionC: "Rampage Jackson",
        optionD: "Adriano Martins",
        correctOption: "optionD"
    },
  
    {
        question: "____ is the capital of Palestine ?",
        optionA: "Jérusalem",
        optionB: "Ramallah",
        optionC: "Gaza",
        optionD: "Rafah",
        correctOption: "optionA"
    },
  
    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels city",
        correctOption: "optionC"
    },
  
    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },
  
    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Seven",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },
  
    {
        question: "Which one is a character whose friend is named Tom ?",
        optionA: "Olive",
        optionB: "Inspecteur Gadjet",
        optionC: "Phineas",
        optionD: "Mordecai",
        correctOption: "optionA"
    },
  
    {
        question: "Which Planet is the hottest in the solar system ?",
        optionA: "Jupiter",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },
  
    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },
  
    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },
  
    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }
  
  ]
  
  
  let shuffledQuestions = [] 
  
  function handleQuestions() { 
    
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
  }
  
  
  let questionNumber = 1 
  let playerScore = 0  
  let wrongAttempt = 0 
  let indexNumber = 0 
  

  function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  
  }
  
  
  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null
  
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })
  
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
  
    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
     
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
  
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
           
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
  }
  
  
  
 
  function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {
  
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
  }
  
 
  function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
  }
  
 
  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
  }
  
  
  function handleEndGame() {
    let remark = null
    let remarkColor = null
  
    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100
  
   
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
  
  }
  

  function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
  }
  
  function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
  }
