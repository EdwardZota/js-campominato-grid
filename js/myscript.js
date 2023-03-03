const containerDom = document.querySelector('.container');

const play = document.getElementById('play');

const title = document.getElementById('title');

const selected = document.getElementById('difficult');


let numberInteraction;

let classBox;

let gridGeneral;

let fullGrid;

play.addEventListener('click', function(){
    title.classList.add('d-none');

        containerDom.innerHTML="";

        fullGrid = createFullGrid();

}
)


//funzioni

//funzione per creare un nuovo quadrato

function createSquare(){
     const currentElement = document.createElement('div');
    currentElement.classList.add('box');


    return currentElement;
}

//funzione di creazione completa della griglia per evitare ripetizione

function createFullGrid(){
    if(selected.value == "easy"){
        numberInteraction=100;
        classBox="box-1";
        gridGeneral = general(numberInteraction,classBox);
        
    
    }else if(selected.value == "medium"){
        numberInteraction=81;
        classBox="box-2";
        gridGeneral = general(numberInteraction,classBox);
    
        
    }else if(selected.value == "hard"){
        numberInteraction=49;
        classBox="box-3";
        gridGeneral = general(numberInteraction,classBox);
    
        
    }

    
}
// funzione generale completata

function general(numberInteraction,classBox){
    for( let i = 1; i <= numberInteraction; i++){

        const currentSquare = createSquare();
    
        currentSquare.classList.add(classBox);
    
        currentSquare.append(i);
    
        currentSquare.addEventListener('click', function() {
            this.classList.toggle('cyan');
            console.log(`Hai scelto la casella numero: ${i}`)
        }
        )
    
        containerDom.append(currentSquare);
    
    }
}
