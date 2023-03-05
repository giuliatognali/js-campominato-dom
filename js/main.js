'use strict';

/************ 
 * Function
 ************/

//funzione per la creazione della cella 
function mycreateElement(elementHTML, className, ValueHTML, colorClass) {
    const element = document.createElement(elementHTML);
    element.classList.add(className);
    element.innerText = ValueHTML;

    element.addEventListener('click',
        function () {
            element.classList.add(colorClass);
        }
    )
    return element;
}

function myAppendElement(containerHTML, elementHTML) {
    containerHTML.append(elementHTML);
}

function myGame() {

    let cellNumber = document.getElementById('levels'); // TODO cambiare in base al livello
    const levels = cellNumber.Value

    
    console.log(levels); 
    const containerBoard = document.querySelector('.board');
    containerBoard.innerHTML = '';

    for (let i = 1; i <= cellNumber; i++) {


        
        if (levels === 'medium') {
            cellNumber = 81;
            const myCell = mycreateElement('div', 'cell', i, 'blue');
        myAppendElement(containerBoard, myCell);

        }
        else if (levels === 'easy')
            cellNumber = 100;
            const myCell = mycreateElement('div', 'cell', i, 'blue');
        myAppendElement(containerBoard, myCell);

        

    }

    



}

/************ 
 * Main
 ************/

const playBtn = document.getElementById('play');

playBtn.addEventListener('click', myGame);