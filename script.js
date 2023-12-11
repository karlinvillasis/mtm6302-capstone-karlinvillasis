let difficulty = null
console.log(difficulty)

fetch('https://quizapi.io/api/v1/questions?apiKey=wsgXARVpJtWADhx1yiFn71C0FLQ0B0PLSZkYuUeC&limit=1&difficulty='+difficulty)
.then(response => response.json())
.then(data => {
    console.log(data[0].question); // Quiz data will be logged here
})
.catch(error => {
    console.error('Error:', error);
});



const question= document.querySelector(".question")
const answer= document.querySelector(".answer")


// retrieve
document.getElementById('container').addEventListener('click', function(e){
    console.log(e.target.dataset.difficulty)
    if()
    difficulty= e.target.dataset.difficulty
    getquiz()


})


const getquiz = async function(){
    const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=wsgXARVpJtWADhx1yiFn71C0FLQ0B0PLSZkYuUeC&limit=1&difficulty="+difficulty);
    const data = await response.json()
    console.log(data)
    const q = data[0]
    const answers = data[0].answers
    let text =  ''
    for( let index in answers){
        text += `<button>${answers[index]}</button>`
    }
    console.log(text)
    const quiz =  `
    <h2>${q.question}</h2
  `
question.innerHTML = quiz
// answer.innerHTML=text

}


getquiz()