const userNum = document.getElementById('userGuess');



//function enterNum thats returning a promise based 
//on the user entering a number based on a prompt the window will give
function enterNum(){
    return new Promise((res, rej) => {
        random = Math.floor(Math.random() * 70 +1)
        //userInput = prompt("Enter a Number Between 1-70... ");
        let userInput = userNum.value;
        console.log(userInput)
        if(typeof(userInput) === NaN){
            rej("Not Valid DipSh*t!")
        } 
        if(userInput === random){
            res({
                point: 50,
                random
            })
        } else if((random === userInput -1) || (random === userInput +1)){
            res({
                point: 1,
                random
            })
        } else {
            res ({
                point: 0,
                random
            })
        }
    })
}

//enterNum();

function continueGame (){
    return new Promise ((res,rej) => {
        if (window.confirm("Do you want to continue Playing?")){
            res(true)
        }else {
            res(false)
        }

    });
}

function runGame(){
    enterNum().then((result) => {
        pointsBin.innerText = `you have ${result.point} points, and the random number is ${random}`;
        continueGame()
        .then((result) =>{
            if(result){
                runGame();
            }else {
                alert("Game OVER")
            }
        })
    })
}

//runGame();