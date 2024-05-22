function CalcularIMC() {
    // Obtener los valores de altura y peso
    var Estatura = parseFloat(document.getElementById("Estatura").value);
    var Peso = parseFloat(document.getElementById("Peso").value);

    // Validar que se hayan ingresado valores numéricos positivos
    if (Estatura <= 0.50 || Peso <= 0 || isNaN(Estatura) || isNaN(Peso)) {
        alert("Por favor, ingresa valores válidos para altura y peso.");
        return;
    }

    // Calcular el IMC (Índice de Masa Corporal)
    var IMC = Peso / (Estatura * Estatura);

    // Mostrar el resultado en la etiqueta de texto
    var resultadoTexto = "Tu IMC es: " + IMC.toFixed(2); // Redondeamos a dos decimales


    var clasificacion = " ";
    if (IMC < 16.00) {
        clasificacion = "Delgadez severa"
    } else if (16.00 < IMC && IMC < 16.99) {
        clasificacion = "Delgadez moderada"
    } else if (17.00 < IMC && IMC < 18.49) {
        clasificacion = "Delgadez aceptable"
    } else if (18.50 < IMC && IMC < 24.99) {
        clasificacion = "Peso normal"
    } else if (25.00 < IMC && IMC < 29.99) {
        clasificacion = "Sobre peso"
    } else if (30.00 < IMC && IMC < 34.99) {
        clasificacion = "Obesidad tipo I"
    } else if (35.00 < IMC && IMC < 40.00) {
        clasificacion = "Obesidad tipo II"
    } else if (IMC > 40.00) {
        clasificacion = "Obesidad tipo III"
    }

    var resultadoTexto = clasificacion; // Redondeamos a dos decimales
    document.getElementById("clasificacion").innerText = resultadoTexto;
    return IMC;
}

function CalcularPorGrasa() {
    let IMC = CalcularIMC()
    var Estatura = parseFloat(document.getElementById("Estatura").value);
    var Peso = parseFloat(document.getElementById("Peso").value);
    var Edad = parseInt(document.getElementById('Edad').value);
    var sexoOpcion = document.querySelectorAll('input[type="radio"]');

    var OpcionSeleccionada;

    if (IMC == 0) {
        alert('Calcule su IMC primero');
    } else {
        for (let i = 0; i < sexoOpcion.length; i++) {
            if (sexoOpcion[i].checked) {
                OpcionSeleccionada = sexoOpcion[i].value;
                break;
            }
        }
        if (Edad >= 5) {
            if (OpcionSeleccionada == 1) {
                var Porcentaje = (1.20 * IMC) + (0.23 * Edad) - (10.8) - (5.4);
            } else if (OpcionSeleccionada == 2) {
                var Porcentaje = (1.20 * IMC) + (0.23 * Edad) - 5.4;
            }
        } else {
            alert('Edad debe ser mayor o igual a 5')
        }
    }
    return Porcentaje;
}

function mostrarResultados() {
    let MostrarIMC = CalcularIMC();
    document.getElementById("resultado").innerText = "Su indice de masa corporal es: " + MostrarIMC.toFixed(2);
    let PorcentajeGrasa = CalcularPorGrasa();
    document.getElementById('resultadoPor').innerText = 'Su porcentaje de grasa corporal es de: ' + PorcentajeGrasa.toFixed(2) + '%';
    let somatotipo = determinarSomatotipo(MostrarIMC, PorcentajeGrasa);
    document.getElementById('resultadoSomatotipo').innerText = somatotipo;

}

function determinarSomatotipo(IMC, Porcentaje) {
    if (IMC < 18.5){
        ectomorfo.classList.remove('hidden');
        mesomorfo.classList.add('hidden');
        endomorfo.classList.add('hidden');
        return 'Ectomorfo';
    } 
    if (IMC >= 18.5 && IMC < 24.9 && Porcentaje < 20){
        ectomorfo.classList.add('hidden');
        mesomorfo.classList.remove('hidden');
        endomorfo.classList.add('hidden');
        return 'Mesomorfo';
    } 
    if (IMC >= 24.9 || grasa >= 20){
        ectomorfo.classList.add('hidden');
        mesomorfo.classList.add('hidden');
        endomorfo.classList.remove('hidden');
        return 'Endomorfo';
    } 
    return 'Indeterminado';
}

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    openModalBtn.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    // Cerrar la ventana flotante si se hace clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
