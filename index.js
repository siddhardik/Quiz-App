// Quiz's data Given To US
const quizData = [
    [
        // pipes And Cisterns
        {
            num: 1,
            ques: 'A tap can fill storage in 8 hours and another tap can discharge it in 16 hours. In the event that both the taps are open, the time taken to fill the tank will be',
            options: [
                '8 hours',
                '10 hours',
                '16 hours',
                '24 hours'
            ],
            answer: '16 hours',
        },
        {
            num: 2,
            ques: ' A channels can fill a tank in x hours and another funnel can exhaust it in y (y>x) hours. In the event that both the funnels are open, in how long will the tank be filled?',
            options: [
                '(x-y) hours',
                '(y-x) hours',
                'xy/(x-y) hours',
                'xy/(y-x) hours',
            ],
            answer: 'xy/(y-x) hours',
        },
        {
            num: 3,
            ques: 'Two channels can fill a tank in 15 hours and 12 hours separately and a third pipe can purge it in 4 hours. In the event that the channels are opened all together at 8 am, 9 am and 11am separately, the tank will be exhausted at',
            options: [
                '11.40 am',
                '12.40 pm',
                '1.40 pm',
                '2.40 pm',
            ],
            answer: '2.40 pm',
        },
        {
            num: 4,
            ques: 'Two pipes A and B can fill a reservoir in 6 minutes and 7 minutes separately. Both the funnels are opened then again for 1 minute each. In what the reality of the situation will become obvious eventually fill the storage?',
            options: [
                '5 min',
                '17/3 min',
                '45/7 min',
                '5/4 min',
            ],
            answer: '45/7 min',
        },
        {
            num: 5,
            ques: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
        {
            num: 6,
            ques: 'A storage has a hole which would exhaust it in 8 hours. A tap is transformed on which concedes 6 liters a moment into the reservoir and it is currently purged in 12 hours. What number of liters does the reservoir hold?',
            options: [
                '7580 ltr',
                '1580 ltr',
                '5080 ltr',
                '8640 ltr',
            ],
            answer: '8640 ltr',
        },
        {
            num: 7,
            ques: 'Two pipes A and B can ill a tank in 36 hours and 45 hours respectively. If both the pipes are opened simultaneously, how much time will be taken to fill the tank?',
            options: [
                '10 hours',
                '15 hours',
                '20 hours',
                '12 hours',
            ],
            answer: '20 hours',
        },
        {
            num: 8,
            ques: 'A cistern has two pipes. One can fill it with water in 8 hours and the other can empty it in 5 hours. In how many hours will the cistern be emptied if the both the pipes are opened together when 3/4 of the cistern is already full of water.t',
            options: [
                '13.5 hours',
                '11.5 hours',
                '10 hours',
                '12 hours',
            ],
            answer: '10 hours',
        },
        {
            num: 9,
            ques: 'Taps A, B and C are connected to a water tank and the rate of flow of water is 42 ltr/hr, 56 ltr/hr and 48 ltr/hr respectively. A and ill fill the tank while tap C empties the tank. If the three taps are opened simultaneously, the tank gets filled up completely in 16 hours. What is the capacity of the tank?',
            options: [
                '800 ltr',
                '650 ltr',
                '700 ltr',
                '200 ltr',
            ],
            answer: '800 ltr',
        },
        {
            num: 10,
            ques: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
    ],
    [
        // probability
        {
            num: 1,
            ques: 'How many outcomes are in the sample space for tossing one coin?',
            options: [
                '1',
                '2',
                '3',
                '4'
            ],
            answer: '2',
        },
        {
            num: 2,
            ques: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            ques: 'An unprepared student takes a 3-ques true/false quiz in which he guesses the answers to all 3 quess. What is the probability he gets all 3 correct?',
            options: [
                '1/2',
                '1/4',
                '1/6',
                '1/8',
            ],
            answer: '1/6',
        },
        {
            num: 4,
            ques: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            ques: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            ques: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
        {
            num: 7,
            ques: 'Roll a die one time. Find P(a number less than 7).',
            options: [
                '0',
                '1',
                '16',
                '12',
            ],
            answer: '0',
        },
        {
            num: 8,
            ques: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            ques: 'Rolling a pair of dice, find P(sum is 5)..',
            options: [
                '14%',
                '11%',
                '16%',
                '12%',
            ],
            answer: '11%',
        },
        {
            num: 10,
            ques: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ],
    [
        // Problems On Age
        {
            num: 1,
            ques: 'A tap can fill storage in 8 hours and another tap can discharge it in 16 hours. In the event that both the taps are open, the time taken to fill the tank will be',
            options: [
                '8 hours',
                '10 hours',
                '16 hours',
                '24 hours'
            ],
            answer: '16 hours',
        },
        {
            num: 2,
            ques: ' A channels can fill a tank in x hours and another funnel can exhaust it in y (y>x) hours. In the event that both the funnels are open, in how long will the tank be filled?',
            options: [
                '(x-y) hours',
                '(y-x) hours',
                'xy/(x-y) hours',
                'xy/(y-x) hours',
            ],
            answer: 'xy/(y-x) hours',
        },
        {
            num: 3,
            ques: 'Two channels can fill a tank in 15 hours and 12 hours separately and a third pipe can purge it in 4 hours. In the event that the channels are opened all together at 8 am, 9 am and 11am separately, the tank will be exhausted at',
            options: [
                '11.40 am',
                '12.40 pm',
                '1.40 pm',
                '2.40 pm',
            ],
            answer: '2.40 pm',
        },
        {
            num: 4,
            ques: 'Two pipes A and B can fill a reservoir in 6 minutes and 7 minutes separately. Both the funnels are opened then again for 1 minute each. In what the reality of the situation will become obvious eventually fill the storage?',
            options: [
                '5 min',
                '17/3 min',
                '45/7 min',
                '5/4 min',
            ],
            answer: '45/7 min',
        },
        {
            num: 5,
            ques: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
        {
            num: 6,
            ques: 'A storage has a hole which would exhaust it in 8 hours. A tap is transformed on which concedes 6 liters a moment into the reservoir and it is currently purged in 12 hours. What number of liters does the reservoir hold?',
            options: [
                '7580 ltr',
                '1580 ltr',
                '5080 ltr',
                '8640 ltr',
            ],
            answer: '8640 ltr',
        },
        {
            num: 7,
            ques: 'Two pipes A and B can ill a tank in 36 hours and 45 hours respectively. If both the pipes are opened simultaneously, how much time will be taken to fill the tank?',
            options: [
                '10 hours',
                '15 hours',
                '20 hours',
                '12 hours',
            ],
            answer: '20 hours',
        },
        {
            num: 8,
            ques: 'A cistern has two pipes. One can fill it with water in 8 hours and the other can empty it in 5 hours. In how many hours will the cistern be emptied if the both the pipes are opened together when 3/4 of the cistern is already full of water.t',
            options: [
                '13.5 hours',
                '11.5 hours',
                '10 hours',
                '12 hours',
            ],
            answer: '10 hours',
        },
        {
            num: 9,
            ques: 'Taps A, B and C are connected to a water tank and the rate of flow of water is 42 ltr/hr, 56 ltr/hr and 48 ltr/hr respectively. A and ill fill the tank while tap C empties the tank. If the three taps are opened simultaneously, the tank gets filled up completely in 16 hours. What is the capacity of the tank?',
            options: [
                '800 ltr',
                '650 ltr',
                '700 ltr',
                '200 ltr',
            ],
            answer: '800 ltr',
        },
        {
            num: 10,
            ques: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
    ],
    [
        // Profit And Loss
        {
            num: 1,
            ques: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
            options: [
                '16',
                '15',
                '12',
                '11'
            ],
            answer: '16',
        },
        {
            num: 2,
            ques: 'In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?',
            options: [
                '20%',
                '30%',
                '70%',
                '50%',
            ],
            answer: '70%',
        },
        {
            num: 3,
            ques: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
            options: [
                '3',
                '5',
                '2',
                '4',
            ],
            answer: '5',
        },
        {
            num: 4,
            ques: 'A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?',
            options: [
                'Rs. 82',
                'Rs. 62',
                'Rs. 72',
                'Rs. 12'
            ],
            answer: 'Rs. 72',
        },
        {
            num: 5,
            ques: 'A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?',
            options: [
                'Rs. 1190',
                'Rs. 1090',
                'Rs. 1390',
                'Rs. 1290',
            ],
            answer: 'Rs. 1190',
        },
        {
            num: 6,
            ques: 'Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?',
            options: [
                '4.5',
                '3.5',
                '2.5',
                '425',
            ],
            answer: '4.5',
        },
        {
            num: 7,
            ques: 'On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball ist',
            options: [
                'Rs. 45',
                'Rs. 10',
                'Rs. 55',
                'Rs. 40',
            ],
            answer: 'Rs. 55',
        },
        {
            num: 8,
            ques: 'When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?',
            options: [
                'Rs. 25,300',
                'Rs. 24,300',
                'Rs. 21,000',
                'Rs. 26,300',
            ],
            answer: 'Rs. 25,300',
        },
        {
            num: 9,
            ques: 'A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is',
            options: [
                'No profit, no loss',
                '5%',
                '8%',
                'None of these',
            ],
            answer: 'No profit, no loss',
        },
        {
            num: 10,
            ques: 'A man buys an article for Rs. 27.50 and sells it for Rs 28.60. Find his gain percent',
            options: [
                '1%',
                '2%',
                '3%',
                '4%',
            ],
            answer: '3%',
        },
    ]
];



// Homepage content
let userName;
const pipesAndCisterns = document.getElementById("Chapter_Name1");
const probability = document.getElementById("Chapter_Name2");
const ProblemsOnAge = document.getElementById("Chapter_Name3");
const ProfitAndLoss = document.getElementById("Chapter_Name4");
const uName_btn = document.getElementById("uName_btn");
const uName_input = document.getElementById("uName_input");
const hp = document.querySelector(".hp");

// Rules Page content
const rules_pg = document.querySelector(".rules_pg");
const rules_next = document.getElementById("rules_next");
const rules_back = document.getElementById("rules_back");

// Quiz page content
const result_pg = document.querySelector(".result_pg")
const timer = document.querySelector("#timer");
const quiz_pg = document.querySelector(".quiz_pg");
let topic = document.querySelector(".topic");
const nextquesBtn = document.getElementById("next_ques");
let ques_num = document.querySelector("#ques_num");
const quiz_ques = document.querySelector("#ques");
const optionList = document.querySelector(".quiz_options");
const total_ques = document.getElementById("total_ques");
let currentques = 0;


// Resultpg content
const goToResultBtn = document.querySelector(".goToResults");
const correctAnswer = quiz_pg.querySelector(".score");
const inCorrectAnswer = result_pg.querySelector("#inCorrect");
const correct = result_pg.querySelector('#correct');
const attempt = result_pg.querySelector("#attempt");
const tQ = result_pg.querySelector("#tQ");
const percentage = result_pg.querySelector("#percentage");
const timeTaken = result_pg.querySelector("#timeTaken");
let timeValue = 10;
let timeStartHere;
let playerName = document.querySelector("#playerName");
let score = 0;
let wrongAnswer = 0;
let count_Value;
let totalTime;
let countStart = 0;
let tot;
const startAgainBtn = result_pg.querySelector("#startAgain");
const homeBtn = result_pg.querySelector('#home');




// Catogories
pipesAndCisterns.addEventListener("click", () => {
    count_Value = 0;
    topic.innerHTML = "Pipes and Cisterns";
    homeToRules();
    QuizRules();
});

probability.addEventListener("click", () => {
    count_Value = 1;
    topic.innerHTML = "Probability";
    homeToRules();
    QuizRules();
});
ProblemsOnAge.addEventListener("click", () => {
    count_Value = 2;
    topic.innerHTML = "Problems on age";
    homeToRules();
    QuizRules();
});

ProfitAndLoss.addEventListener("click", () => {
    count_Value = 3;
    topic.innerHTML = "Profit and loss";
    homeToRules();
    QuizRules();
});


// Home to rules function
function homeToRules() {
    hp.classList.add("hidden");
    rules_pg.classList.add("active");
}

// Rules to quiz and rules to home function
function QuizRules() {
    rules_next.addEventListener("click", () => {
        rules_pg.classList.remove("active");
        quiz_pg.classList.add("active");
        quesToResul();
    });
    rules_back.addEventListener("click", () => {
        hp.classList.remove("hidden");
        rules_pg.classList.remove("active");
    });
};

// Set the Name function
setName();

function setName() {
    uName_btn.addEventListener("click", () => {
        userName = uName_input.value;
        playerName.innerHTML = userName;
    });
    if (userName == undefined) {
        userName = "stranger";
        playerName.innerHTML = userName;
    };

};



// Quiz to result function
function quesToResul() {
    buttonInterchangeAgain();
    setTimer(timeValue);
    totTime(countStart);
    getques();
    nextquesBtn.addEventListener("click", () => {
        nextQues();
    });
    goToResultBtn.addEventListener("click", () => {
        clearInterval(timeStartHere);
        clearInterval(totalTime);
        quiz_pg.classList.remove("active");
        result_pg.classList.add("active");
        result();
    });
}


// Getting ques here
function getques() {
    let data = quizData[count_Value];
    let currentQuizData = data[currentques];

    // Getting pagination here
    pagination();

    quiz_ques.innerHTML = `<h3>${currentQuizData.ques}</h3>`;

    let optionTag = '<div class="option">' + currentQuizData.options[0] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[1] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[2] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[3] + '<span></span></div>';

    optionList.innerHTML = optionTag


    // Add attributes to all option
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");

    };

    // pagination function
    function pagination() {
        total_ques.innerHTML = data.length;
        ques_num.innerHTML = currentQuizData.num;
    };

};

// Check answer and disable option
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswerForQuiz = quizData[count_Value][currentques].answer;
    let selectOneAns = optionList.children.length;
    if (userAnswer == correctAnswerForQuiz) {
        score++;
        correctAnswer.innerHTML = score;
        answer.classList.remove("option");
        answer.classList.add("correct");
    } else {
        wrongAnswer++;
        answer.classList.remove("option");
        answer.classList.add("wrong");
        for (let i = 0; i < selectOneAns; i++) {
            if (optionList.children[i].textContent == correctAnswerForQuiz) {
                optionList.children[i].setAttribute("class", "correct");
            }

        }
    };

    // Add classList disable
    for (let i = 0; i < selectOneAns; i++) {
        optionList.children[i].classList.add("disable");
    }
};

// Total timer function
function totTime(count) {
    totalTime = setInterval(totalTimeStarts, 1000);
    function totalTimeStarts() {
        count++;
        tot = count;
    };
};

// Next ques function
function nextQues() {
    if (currentques < quizData[count_Value].length - 1) {
        clearInterval(timeStartHere);
        currentques++;;
        getques();
        setTimer(timeValue);
        if (currentques === quizData[count_Value].length - 1) {
            buttonInterchange();
        };
    };
    
};

// Timer for each ques
function setTimer(time) {
    timeStartHere = setInterval(timeStart, 1000);
    function timeStart() {
        timer.innerHTML = time;
        if (time < 10) {
            timer.innerHTML = '0' + time;
        };
        if (time == 0) {
            if (currentques >= quizData[count_Value].length - 1) {
                end();
            } else {
                clearInterval(timeStartHere);
                currentques++;
                getques();
                setTimer(timeValue);
            }

        };
        time--;
    };
};


// button interchange here
function buttonInterchange() {
    nextquesBtn.classList.add("hidden");
    goToResultBtn.classList.add("active");
};

// button interchange here
function buttonInterchangeAgain() {
    nextquesBtn.classList.remove("hidden");
    goToResultBtn.classList.remove("active");
};

// End function here
function end() {
    quiz_pg.classList.remove("active");
    result_pg.classList.add("active");
    result();
};

// Result function here
function result() {
    // Incorrect answer
    inCorrectAnswer.innerHTML = wrongAnswer;
    if (wrongAnswer < 10) {
        inCorrectAnswer.innerHTML = `0${wrongAnswer}`;
    };

    // Correct answer
    correct.innerHTML = score;
    if (score < 10) {
        correct.innerHTML = `0${score}`;
    };

    // Attemt ques
    if ((score + wrongAnswer) < 10) {
        attempt.innerHTML = `0${score + wrongAnswer}`;
    } else {
        attempt.innerHTML = score + wrongAnswer;
    }

    // Total ques
    if (quizData[count_Value].length < 10) {
        tQ.innerHTML = `0${quizData[count_Value].length}`;
    } else {
        tQ.innerHTML = quizData[count_Value].length;
    };

    // Percentage 
    let per = `${(score / quizData[count_Value].length) * 100}%`;
    percentage.innerHTML = per;

    // Total time taken
    if (tot < 10) {
        timeTaken.innerHTML = `0${tot}`;
    } else {
        timeTaken.innerHTML = tot;
    };
};

// startAgain function
startAgainBtn.addEventListener("click", () => {
    location.reload();
});

// homeBtn function
homeBtn.addEventListener("click", () => {
    location.reload();
});