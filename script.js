let questions = [
    {
        "question": "Zu welchem Land gehört die Inselgruppe der Lofoten?",
        "answer_1": "Schweden",
        "answer_2": "Finnland",
        "answer_3": "Norwegen",
        "answer_4": "Japan",
        "right": 3

    },

    {
        "question": "In welchen dieser Länder heißt die Hauptstadt wie das Land selbst?",
        "answer_1": "Monaco",
        "answer_2": "Hongkong",
        "answer_3": "Bangladesh",
        "answer_4": "Singapur",
        "right": 1

    },

    {
        "question": "Wann und wo wurde die Pizza Hawaii erfunden?",
        "answer_1": "1959 in Deutschland",
        "answer_2": "1962 in Kanada",
        "answer_3": "1966 in den USA",
        "answer_4": "1970 in Italien",
        "right": 2

    },

    {
        "question": "Was misst man in der Einheit “Fahrenheit”?",
        "answer_1": "Temperatur",
        "answer_2": "Zeit",
        "answer_3": "Geschwindigkeit",
        "answer_4": "Gewicht",
        "right": 1

    },

    {
        "question": "Seit wann gibt es Tupperware?",
        "answer_1": "1866",
        "answer_2": "1902",
        "answer_3": "1830",
        "answer_4": "1946",
        "right": 4

    },


];

let currentQuestion = 0;
let rightQuestions = 0;



function init() {
    document.getElementById('nrq').innerHTML = questions.length;
    showQuestion()
    showAnswer()
}

function showQuestion() {

    if (currentQuestion >= questions.length) {  // Aufzählung der Fragen beenden
        
        showEndScreen()       

    } else {

        let percent = currentQuestion / questions.length;
        percent = percent * 100;
        document.getElementById('progressbar').innerHTML = `${percent}%`;
        document.getElementById('progressbar').style = `width: ${percent}%`;




        let question = questions[currentQuestion];
        document.getElementById('questnr').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
    }
}

function showAnswer() {
    let answer_1 = questions[currentQuestion];

    document.getElementById('answer_1').innerHTML = answer_1['answer_1'];
    document.getElementById('answer_2').innerHTML = answer_1['answer_2'];
    document.getElementById('answer_3').innerHTML = answer_1['answer_3'];
    document.getElementById('answer_4').innerHTML = answer_1['answer_4'];

}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumer is', selectedQuestionNumber);
    console.log('currentQuestion is', question['right']);

    let idOfRightAnswer = `answer_${question['right']}`;


    if (selectedQuestionNumber == question['right']) {
        console.log('Richtige Antwort!!'); // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-Button').disabled = false;

}

function nextQuestion() {
    currentQuestion++; //Variable wird immer um 1 erhöt
    showQuestion();
    resett()
    showAnswer();
    document.getElementById('next-Button').disabled = true; // Button wird wieder deaktiviert



}

function resett() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_1').parentNode.classList.remove('bg-success')

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success')

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success')

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success')

}

function showEndScreen(){
    document.getElementById('finish').style = ''; // Style Display: none wird aus dem div entfernt
        document.getElementById('questionBody').style = 'display: none'; // Style Display: none wird in dem div hinzugefügt
        document.getElementById('frontScreen').style = 'display: none'; // frontscreen wird entfernt
        document.getElementById('right').innerHTML = rightQuestions;
        document.getElementById('wrong').innerHTML = questions.length; // Anzahl der Fragen am Ende
        document.getElementById('progressbar').style = 'display: none';

}