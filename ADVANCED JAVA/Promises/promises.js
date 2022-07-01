const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
]

function getPosts(){
    setTimeout( ()=> {
        let output = ' ';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 1000 )
}
//getPosts();

function createPosts(post, ){
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            posts.push(post)
            const error = false;

            if (!error){
                resolve();
            }else {
                reject('Error: Its fucked up!')
            }
        }, 2000)
    })
        
}

createPosts({title: 'post three', body: 'this is post one'})
.then(getPosts)
.catch(err => console.log(err))



const h2 = document.getElementById('hi')
function changeText(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (h2.innerHTML){
                resolve (h2.innerHTML = " I've changed you...");

            } else {
                reject ('Error')
            }
        }, 5000)
    })
}

let textPromise = changeText(true);

textPromise.then(sucess => console.log(sucess)).catch(error => console.log(error))