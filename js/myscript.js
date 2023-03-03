const containerDom = document.querySelector('.container');

const play = document.getElementById('play');

const title = document.getElementById('title');

const selected = document.getElementById('difficult');




const boxArray =[];


play.addEventListener('click', function(){
    title.classList.add('d-none');

    if(boxArray.length == 0){

        if(selected.value == "easy"){

            for( let i = 1; i <= 100; i++){

                const currentSquare = createSquare();

                currentSquare.classList.add('box-1');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('cyan');
                    console.log(`Hai scelto la casella numero: ${i}`);
                }
                )
            
                containerDom.append(currentSquare);
                boxArray.push(currentSquare);
    
            }
    
            console.log(boxArray);
        }else if(selected.value == "medium"){

            for( let i = 1; i <= 81; i++){

                const currentSquare = createSquare();

                currentSquare.classList.add('box-2');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('cyan');
                    console.log(`Hai scelto la casella numero: ${i}`)
                }
                )
            
                containerDom.append(currentSquare);
                boxArray.push(currentSquare);
    
            }
    
            console.log(boxArray);
        }else if(selected.value == "hard"){

            for( let i = 1; i <= 49; i++){

                const currentSquare = createSquare();

                currentSquare.classList.add('box-3');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('cyan');
                    console.log(`Hai scelto la casella numero: ${i}`)
                }
                )
            
                containerDom.append(currentSquare);
                boxArray.push(currentSquare);
    
            }
    
            console.log(boxArray);
        }



    }

    }
)





//funzioni

//funzione per creare un nuovo quadrato

function createSquare(){
     const currentElement = document.createElement('div');
    currentElement.classList.add('box');


    return currentElement;
}