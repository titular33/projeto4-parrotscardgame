let cardsnumber = parseInt(prompt("Qual o número de cartas? Número par de 4 a 14"));
let win = 0;
let total = 0;
let front;
let card;
let imgs = [
    "<img class ='gif disappears' src='img/bobrossparrot.gif' alt='papagaio com gorro preto dançante'>",
    "<img class ='gif disappears' src='img/explodyparrot.gif' alt='papagaio explodindo'>",
    "<img class ='gif disappears' src='img/fiestaparrot.gif' alt='papagaio mexicano'>",
    "<img class ='gif disappears' src='img/metalparrot.gif' alt='papagaio roqueiro'>",
    "<img class ='gif disappears' src='img/revertitparrot.gif' alt='papagaio no barco'>",
    "<img class ='gif disappears' src='img/tripletsparrot.gif' alt='três papagaios dançantes'>",
    "<img class ='gif disappears' src='img/unicornparrot.gif' alt='papagaio unicórnio'>"
]

//embaralha array das imagens
imgs.sort(randomSort);
let arraycards = [];

while (cardsnumber % 2 != 0 || cardsnumber > 14 || cardsnumber < 4) {
    cardsnumber = parseInt(prompt("Qual o número de cartas? Somente número par entre 4 a 14"));
}

for (let i = 0; i < cardsnumber / 2; i++) {
    arraycards.push(`<li onclick="turn(this)"> <img src="img/front.png" alt="papagaio da frente da carta">  
    ${imgs[i]} </li>`);

    arraycards.push(`<li onclick="turn(this)"> <img src="img/front.png" alt="papagaio da frente da carta">  
    ${imgs[i]} </li>`);
    arraycards.sort(randomSort);
}

//embaralha 
arraycards.sort(randomSort);

for (let i = 0; i < arraycards.length; i++) {
    let cards = document.querySelector("ul");
    console.log(cards);
    console.log(arraycards[i]);
    cards.innerHTML += `${arraycards[i]}`;
}

function randomSort() {
    return Math.random() - 0.5;
}

let list = [];

function turn(card) {
    const front = card.children[0];
    front.classList.add('disappears');

    const gif = card.children[1];
    console.log(gif);

    gif.classList.remove('disappears');
    gif.classList.add('appears');

    list.push(gif);
    total += 1

    if (list.length == 2) {

        test(list[0], list[1]);
        list = []
    }
}

function test(card1, card2) {
    if (card1.src === card2.src) {
        card1.removeAttribute('onclick');
        win = win + 2;
        console.log(win);
        setTimeout(game, 1000);
        // aguarda 1 segundo e então vira as duas cartas para baixo novamente
    } else if (card1.src !== card2.src) {
        setTimeout(untap, 1000, card1, card2);
    } else {
        setTimeout(untap, 1000, card1, card2);
    }
}

function game() {
    if (win === cardsnumber) {
        alert("você venceu em " + total + " jogadas");
    }
}

function untap(card1, card2) {
    console.log(card1.parentNode)
    card1.parentNode.children[0].classList.remove('disappears');
    card1.parentNode.children[1].classList.remove('appears');
    card1.parentNode.children[1].classList.add('disappears');
    card2.parentNode.children[0].classList.remove('disappears');
    card2.parentNode.children[1].classList.remove('appears');
    card2.parentNode.children[1].classList.add('disappears');
