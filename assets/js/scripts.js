let nome = window.document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');

let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

let mapa = document.querySelector('#mapa');



function validaNome(){
    let msg = document.querySelector('#msg');

    if(nome.value.length < 3){
        nome.style.border = '2px solid red';
        msg.innerHTML = 'O nome possui menos de 3 caracteres';
        msg.style.marginTop = '30px';
        msg.style.backgroundColor = '#dd5035';
        msg.style.padding = '15px';
        msg.style.borderRadius = '5px';
        msg.style.opacity = '90%';
        msg.style.color = 'white';
    }else{
        nome.style.border = '2px solid green';
        msg.innerHTML = '';
        msg.style.margin = '0px';
        msg.style.padding = '0px';
        nomeOK = true;
    }
}

function validaEmail(){
    let msg = document.querySelector('#msg');

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.style.border = '2px solid red';
        msg.innerHTML = 'O e-mail não possui @';
        msg.style.marginTop = '30px';
        msg.style.backgroundColor = '#dd5035';
        msg.style.padding = '15px';
        msg.style.borderRadius = '5px';
        msg.style.opacity = '90%';
        msg.style.color = 'white';
    }else{
        email.style.border = '2px solid green';
        msg.innerHTML = '';
        msg.style.margin = '0px';
        msg.style.padding = '0px';
        emailOK = true;
    }
}

function validaAssunto(){
    let msg = document.querySelector('#msg');

    if(assunto.value.length <= 1){
        assunto.style.border = '2px solid red';
        msg.innerHTML = 'Digite uma mensagem';
        msg.style.marginTop = '30px';
        msg.style.backgroundColor = '#dd5035';
        msg.style.padding = '15px';
        msg.style.borderRadius = '5px';
        msg.style.opacity = '90%';
        msg.style.color = 'white';
    }else if(assunto.value.length >= 150){
        assunto.style.border = '2px solid red';
        msg.innerHTML = 'O texto deve ter até 150 caracteres';
        msg.style.marginTop = '30px';
        msg.style.backgroundColor = '#dd5035';
        msg.style.padding = '15px';
        msg.style.borderRadius = '5px';
        msg.style.opacity = '90%';
        msg.style.color = 'white';
    }else{
        assunto.style.border = '2px solid green';
        msg.innerHTML = '';
        msg.style.margin = '0px';
        msg.style.padding = '0px';
        assuntoOK = true;
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Preencha o formulário corretamente antes de enviar...');
    }
}

function mapaZoom() {
    mapa.style.width = '700px';
    mapa.style.height = '550px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '300px';
}