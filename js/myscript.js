const containerDom = document.querySelector('.container');

for( let i = 1; i <= 100; i++){

    const currentSquare = createSquare();

    currentSquare.append(i)

    containerDom.append(currentSquare);
}






//funzioni

//funzione per creare un nuovo quadrato

function createSquare(){
     const currentElement = document.createElement('div');
    currentElement.classList.add('box');


    return currentElement
}