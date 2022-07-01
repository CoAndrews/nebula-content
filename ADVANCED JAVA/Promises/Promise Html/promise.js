
const p = document.getElementById('p')

function changeP(){
    return new Promise ((res, rej) =>{
        setTimeout(() =>{
            if(p.innerHTML){
                res(p.innerHTML = "BUT OH GOD OH GOD WHY DOES HE???!!!!???");
            } else {
                rej ('You have been smited!')
            }
        }, 7000)
    })
}

let codePromise = changeP(true);
codePromise.then(sucess => console.log(sucess)).catch(error => console.log(error));

const button = document.getElementById('taketh')

 function takethAway(){
     return new Promise ((res, rej) => {
         setTimeout(() =>{
             if(button.innerHTML){
                 res(button.innerHTML = "");
             } else {
                 rej ('the answer is 42')
             }
         }, 9000)

     })
 }

 let dissapear = takethAway(true);
 dissapear.then(sucess => console.log(sucess)).catch(error => console.log(error))

