const form = document.querySelector('.form');
const submit = document.querySelector('#submit');
const alerts = document.querySelector('.alerts');

const content = document.querySelector('.content');
const nameDetail = document.querySelector("#nm");
const cppDetail = document.querySelector("#m1");
const javaDetail = document.querySelector("#m3");
const jsDetail = document.querySelector("#m2");

const reset = document.querySelector('.reset');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    alerts.textContent = "";

    if(validateForm()){
        form.style.display = "none";
    }
}, false);

function validateForm(){
    const name = document.querySelector('#name').value;
    const cppM = parseInt(document.querySelector("#cpp").value);
    const jsM = parseInt(document.querySelector('#Java').value);
    const javaM = parseInt(document.querySelector('#JavaScript').value);
    let isValid = false;

    if(name === ""){
        displayMessage("Please enter a Valid name");
    }
    else if(notValid(cppM) || notValid(jsM) || notValid(javaM)){
        displayMessage("Please enter valid marks");
    }
    else{
        showStudentDetails(name, cppM, jsM, javaM);
        isValid = true;
    }
    return isValid;
}

function notValid(marks){
    if(isNaN(marks) || marks < 0 || marks > 100){
        return true;
    }

    return false;
}

function displayMessage(message){
    alerts.textContent = message;
}

function showStudentDetails(name, cppM, jsM, javaM){
    nameDetail.textContent = name;
    cppDetail.textContent = cppM;
    javaDetail.textContent = javaM;
    jsDetail.textContent = jsM;

    content.style.display = "block";
    reset.textContent = "Re enter Details"
    reset.button.display = "block";
}