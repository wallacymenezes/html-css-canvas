let nome = window.document.getElementById('nome');
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function validaNome(){
    let nome = document.querySelector('#nome');
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
    }
}