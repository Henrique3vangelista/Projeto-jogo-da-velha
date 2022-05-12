document.addEventListener('DOMContentLoaded',()=>{  

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);

    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

  if (handleMove(position)){
      setTimeout(() => {

          alert("o jogo acabou"+" o "+"vencedor "+ "é "+ "o "+"jogador "+ playerTime)
      },10);

    };
    updateSquares();
    
    
}


function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=> {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class ='${symbol}'></div>`
        }

    
    })

}

let btn = document.querySelector('#refresh')

btn.addEventListener('click', () =>{
    location.reload()
})


console.log("what are you doing here?")
console.log(" You are so beautiful ;) ")