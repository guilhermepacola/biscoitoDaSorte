
const screenOne = document.querySelector('.screenOne');
const screenTwo = document.querySelector('.screenTwo');
const btnRefresh = document.querySelector('#btnRefresh');
const btnOpen = document.querySelector('#btnOpen');
const openedText = document.querySelector('#luckText');


const messages = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda",
    "A maior de todas as torres começa no solo.",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
]


//EVENTS
let randomNumber = Math.round(Math.random() * Number(messages.length -1));

btnOpen.addEventListener('click', handleOpenClick)
btnRefresh.addEventListener('click', handleRefreshClick)

//functions

function handleOpenClick(event) {
    event.preventDefault()
    toggleScreens()
    randomMessages()
}

function randomMessages() {

    openedText.innerText = messages[randomNumber]
    console.log(openedText)
}

function handleRefreshClick() {
    toggleScreens()
    randomNumber = Math.round(Math.random() * Number(messages.length - 1));
}

function toggleScreens() {
    screenOne.classList.toggle('hidden')
    screenTwo.classList.toggle('hidden')
}