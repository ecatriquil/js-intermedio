/// <reference types="jquery" />

//En ES6+ -> const $header = document.querySelector('h1');
const $header = $("h1");

//En ES6+ -> $header.textContent = 'Clase 12';
$header.text("Clase 12!");

//En ES6+ -> const $elementos = document.querySelectorAll('#lista li');
const $elementos = $("#lista li"); 

// $elementos.click(() => {
//     console.log(this);
// });

// $elementos.click(function(){
//     console.log(this);
//     console.log($(this));
//     console.log($(this)[0]);
// })

$elementos.click(function(){
    console.log($(this).text());
});

// Chaining
const miObjeto = {
    decirHola(){
        console.log('Hola');
        return this;
    },
    decirChau(){
        console.log('Chau');
        return this;
    }
}

miObjeto
    .decirHola()
    .decirChau()
    .decirHola();

// WEB APIS

//AJAX
// $.ajax({
//     method: 'GET',
//     url: 'https://api.exchangeratesapi.io/latest',
//     success: respuesta => {
//         console.log('respuesta de exchangeratesapi.io', respuesta);
//         $('#resultado').text(JSON.stringify(respuesta));
//     }
// });

// console.log('Esto pasa antes que la respuesta de ajax!');


// fetch API
fetch('https://api.exchangeratesapi.io/latest')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
       $('h1').text(`Cambios del dia ${respuesta.date} en abse ${respuesta.base}`);

       Object.keys(respuesta.rates).forEach(moneda => {
            $('ul').append($(`<li>${moneda}: ${respuesta.rates[moneda]}</li>`))
       });
    })
    .catch(error => console.error('FALLO', error));
    
console.log('Esto pasa antes que la respuesta fetch');
