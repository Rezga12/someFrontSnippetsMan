


let login = document.getElementById('login-container');
let register = document.getElementById('register-container');

document.getElementById('register').addEventListener('click',() => {fadeOut(login,register)},false);
document.getElementById('login-renderer').addEventListener('click',() => {fadeOut(register,login)},false);

let b = true;


function fadeOut(elementOut,elementIn){

    if(b){
        b = false;
        elementOut.animate(
            [{ opacity:1 },
                { opacity: 0 }],
            {
                // timing options
                duration: 1000,
                fill: "forwards",



            }).onfinish = function() {
                elementOut.style.display = 'none';
                b = true;
                fadeIn(elementIn);
            };
    }
}


function fadeIn(element){


        element.style.display = 'flex';

        element.animate(
            [{ opacity:0 },
                { opacity: 1 }],
            {
                // timing options
                duration: 1000,
                fill: "forwards",
            });
}


