const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    //para activar borde en el reloj cada segundo

    document.getElementById('contenedor').classList.toggle('animar');
}

const mostrarFecha = () => {
    let cal = new Date();
    let dia = cal.getDay();
    let mes = cal.getMonth();
    let año = cal.getFullYear();
    document.getElementById('fecha').innerHTML = `${dia}:${mes}:${año}`;
}

//para que la pagina se recarge en tiempo real y muestre la hora en tiempo real

setInterval(mostrarReloj, 1000);



