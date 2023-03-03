const containerDom = document.querySelector('.container');

const play = document.getElementById('play');

const title = document.getElementById('title');

for( let i = 1; i <= 100; i++){

    const currentSquare = createSquare();

    currentSquare.append(i);

    currentSquare.addEventListener('click', function() {
        this.classList.toggle('cyan');
        console.log(`Hai scelto la casella numero: ${i}`)
    }
    )

    containerDom.append(currentSquare);
}

play.addEventListener('click', function(){
    title.classList.add('d-none');

    

    
}
)




//funzioni

//funzione per creare un nuovo quadrato

function createSquare(){
     const currentElement = document.createElement('div');
    currentElement.classList.add('box');


    return currentElement;
}