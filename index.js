console.log("start")

let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let password2 = document.getElementById("password2")
let submitbtn = document.getElementById("btn")
let errorarea = document.getElementsByClassName("error")












let correctAns=(element)=>{

    let parentelement = element.parentElement;
    
    let bordercolor = parentelement.querySelector("input");

    let errorshow = parentelement.querySelector(".error")
    errorshow.innerHTML = '';

    bordercolor.classList.remove("fail")
    bordercolor.classList.add("success")


}

let bordercheck = (element, message) => {

    let parentelement = element.parentElement;

    console.log(parentelement)


    let errorshow = parentelement.querySelector(".error")

    let bordercolor = parentelement.querySelector("input");

    console.log(bordercolor)

    errorshow.innerHTML = message

    

    bordercolor.classList.add("fail")
    bordercolor.classList.remove("success")
}


let checkinput = () => {


    let usernamee = username.value.trim();
    let emaill = email.value.trim();
    let pass1 = password.value.trim();
    let pass2 = password2.value.trim();

    if (usernamee === '') {

        bordercheck(username, "Enter Correct username")
    }
    else {
        correctAns(username)
    }
    console.log(emaill+ " email value")

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        bordercheck(email, "Enter Correct Email")
        return false;
    }
    
    else{
        correctAns(email)
    }

    if (pass1===''){
        bordercheck(password, "Enter Correct password")

    }
    else if(pass1.length<8){
        bordercheck(password, "Password must contain 8 characters")
    }
    else{
        correctAns(password)
    }

    if(pass2===''){
        bordercheck(password2, "Password enter password")

    }

    else if(pass1!==pass2){
        bordercheck(password2, "The confirm password does not match ")
    }
    else{
        correctAns(password2)
    }





}








submitbtn.addEventListener("click", (x) => {
    x.preventDefault()
    console.log("print")
    checkinput();
})

