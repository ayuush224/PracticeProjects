const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);

        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        else if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "yellow";
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "blue";
        }
    })
})