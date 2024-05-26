let ejecucion1 = false;
let ejecucion2 = false;

function CalcularIMC() {
    // Obtener los valores de altura y peso
    var Estatura = parseFloat(document.getElementById("Estatura").value);
    var Peso = parseFloat(document.getElementById("Peso").value);
    // Validar que se hayan ingresado valores numéricos positivos
    if (Estatura < 0.4 || Estatura > 3.0 || Peso < 20 || Peso > 500 || isNaN(Estatura) || isNaN(Peso)) {
        alert("Por favor, ingresa valores válidos");
    } else {
        // Calcular el IMC (Índice de Masa Corporal)
        var IMC = Peso / (Estatura * Estatura);
        ejecucion1 = true;
    }

    // Mostrar el resultado en la etiqueta de texto
    var resultadoTexto = "Tu IMC es: " + IMC.toFixed(2); // Redondeamos a dos decimales

    //clasificacion segun IMC
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

//calcular el porcentaje de grasa
function CalcularPorGrasa() {
    var Edad = parseInt(document.getElementById('Edad').value);
    var sexoOpcion = document.querySelectorAll('input[type="radio"]');
    var OpcionSeleccionada;
    let IMC = CalcularIMC();

    if (IMC == 0) {
        alert('Calcule su IMC primero');
    } else {
        for (let i = 0; i < sexoOpcion.length; i++) {
            if (sexoOpcion[i].checked) {
                OpcionSeleccionada = sexoOpcion[i].value;
                break;
            }
        }
        if (Edad >= 5 && Edad <= 100) {
            if (OpcionSeleccionada == 1) {
                var Porcentaje = (1.20 * IMC) + (0.23 * Edad) - (10.8) - (5.4);
            } else if (OpcionSeleccionada == 2) {
                var Porcentaje = (1.20 * IMC) + (0.23 * Edad) - 5.4;
            }
            ejecucion2 = true;
        } else {
            alert('Ingrese una edad valida')
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
    if (IMC < 18.5) {
        ectomorfo.classList.remove('hidden'); //clase a mostrar
        mesomorfo.classList.add('hidden');
        endomorfo.classList.add('hidden');

        dietaEctomorfo.classList.remove('hidden');
        dietaMesomorfo.classList.add('hidden');
        dietaEndomorfo.classList.add('hidden');

        return 'Ectomorfo';
    }
    if (IMC >= 18.5 && IMC < 24.9 && Porcentaje < 20) {
        mesomorfo.classList.remove('hidden');
        ectomorfo.classList.add('hidden');
        endomorfo.classList.add('hidden');

        dietaMesomorfo.classList.remove('hidden');
        dietaEctomorfo.classList.add('hidden');
        dietaEndomorfo.classList.add('hidden');

        return 'Mesomorfo';
    }
    if (IMC >= 24.9 || Porcentaje >= 20) {
        endomorfo.classList.remove('hidden');
        ectomorfo.classList.add('hidden');
        mesomorfo.classList.add('hidden');

        dietaEndomorfo.classList.remove('hidden');
        dietaEctomorfo.classList.add('hidden');
        dietaMesomorfo.classList.add('hidden');

        return 'Endomorfo';
    }
    return 'Indeterminado';
}

//abrir la ventana del informe
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    if (openModalBtn) {
        openModalBtn.addEventListener('click', function () {
            if (ejecucion1 && ejecucion2) {
                modal.classList.remove('hidden');
                listaInformes.classList.remove('hidden');
                modal.scrollIntoView(true);
            } else {
                alert('Para ver el informe, complete los dos calculos')
            }

        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.classList.add('hidden');
            listaInformes.classList.add('hidden');
            //Limpiar datos
            limpiarDatos();
        });
    }

    // Cerrar la ventana flotante si se hace clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    //enviar datos
    const guardarBoton = document.getElementById('Guardar');
    const historial = document.getElementById('historial');
    let contador = 0;

    if (guardarBoton) {
        guardarBoton.addEventListener('click', function () {           
            const imc = CalcularIMC();
            const porcentaje = CalcularPorGrasa();
            const somatotipo = determinarSomatotipo(imc, porcentaje);
            const fecha = new Date().toLocaleDateString();
            alert('Datos guardados');

            contador++;

            const divInforme = document.createElement('div');
            divInforme.classList.add('mb-4', 'p-4', 'bg-gray-200', 'rounded');

            divInforme.innerHTML = `
    <p class="font-bold">Informe ${contador} - ${fecha}</p>
    <p>IMC: ${imc}</p>
    <p>Porcentaje: ${porcentaje}</p>
    <p>Somatotipo: ${somatotipo}</p>
`;
            historial.appendChild(divInforme);
            limpiarDatos();
        });
    }

});

function limpiarDatos(){
    document.getElementById('Estatura').value = '';
    document.getElementById('Peso').value = '';
    document.getElementById('Edad').value = '';
}

//secciones de dieta
function toggleDiet(type) {
    const dietSection = document.getElementById(type);
    dietSection.classList.toggle('hidden');
}


