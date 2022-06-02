const container = document.querySelector(".container");
const form = document.querySelector("#form");
//we need a variable for these inputs so we can access them using the .property 
let fname = document.querySelector("#fname");
let dob = document.querySelector("#dob");
let ssn = document.querySelector("#ssn");
let placeOfBirth = document.querySelector("#placeOfBirth");

form.addEventListener("submit", function(event){
    event.preventDefault() //this prevents the page from refreshing and auto-submitting
    const idCard = document.createElement
    ("div");
    container.appendChild(idCard) //appending a div 
    //for the ID card body 

    //creating elements for the ID info and appending to the ID card
    const image = document.createElement
    ("div")
    idCard.appendChild(image)

    const nameEL = document.createElement
    ("h5")
    idCard.appendChild(nameEL)
    const dobEL = document.createElement
    ("p")
    idCard.appendChild(dobEL)
    const ssnEL = document.createElement
    ("p")
    idCard.appendChild(ssnEL)
    const placeOfBirthEL = document.createElement
    ("p")
    idCard.appendChild(placeOfBirthEL)

    //Adding the user info to the innerText of the ID card elements
    nameEL.innerText = `Name: ${fname.value}`
    dobEL.innerText = `DOB: ${dob.value}`
    ssnEL.innerText =`SSN: ${ssn.value}`
    placeOfBirthEL.innerText = `Country of Origin: ${placeOfBirth.value}`

});

