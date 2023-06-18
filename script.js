
document.getElementById('btn1').addEventListener('click', function () {
    window.location.href = 'comprartickets.html';
});

// document.getElementById('ticketForm').addEventListener ('submit', function(event) {
//     event.preventDefault();

//     const categoria = document.getElementById('categoria').value;
//     const cantidad = document.getElementById('cantidad').value;
//     const precioticket = 200;
//     let porcentajededescuento = 0;

//         // Aplica descuento según la categoría seleccionada

//     if (categoria === 'Estudiante') {
//         porcentajededescuento = 80;
//     } else if (categoria === 'Trainee') {
//         porcentajededescuento = 50;
//     } else if (categoria === 'Junior') {
//         porcentajededescuento = 15;
//     }

//     const total = precioticket * cantidad * (100 - porcentajededescuento) / 100;

//     document.getElementById('total').innerHTML = `Total a Pagar: $ ${total}`;
//     });


// const button = document.getElementById('resumen');
// const respuesta = document.getElementById('respuesta');
// const categoria = document.getElementById('categoria').value;
// const cantidad = document.getElementById('cantidad').value;
// const precioticket = 200;
// const porcentajededescuento = 0;

// button.addEventListener('click', operacion);

// function operacion() {


//     // Aplica descuento según la categoría seleccionada
//     if (categoria === 'Estudiante') {
//         porcentajededescuento = 80;
//     } else if (categoria === 'Trainee') {
//         porcentajededescuento = 50;
//     } else if (categoria === 'Junior') {
//         porcentajededescuento = 15;
//     }

//     const total = precioticket * cantidad * (100 - porcentajededescuento) / 100;
//     respuesta.innerHTML = `Total a Pagar: $ ${total}`;
// }



