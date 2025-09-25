import {
    validarNombreApellido,
    validarEmail,
    validarTelefono,
    validarPasaporte,
    validarPais,
    validarLlegada,
    validarSalida,
    validarHoraLlegada,
    validarNoches,
    validarPersonas,
    validarHabitacion,
    validarTarjeta,
    validarCVV,
    validarCodigoPromocional
} from './validaciones.js'

export function configurarEventos() {
    const campos = {
        nombre: document.getElementById('nombre'),
        apellido: document.getElementById('apellido'),
        email: document.getElementById('email'),
        telefono: document.getElementById('telefono'),
        pasaporte: document.getElementById('pasaporte'),
        pais: document.getElementById('pais'),
        fechaLlegada: document.getElementById('fechaLlegada'),
        fechaSalida: document.getElementById('fechaSalida'),
        horaLlegada: document.getElementById('horaLlegada'),
        noches: document.getElementById('noches'),
        personas: document.getElementById('personas'),
        habitacion: document.getElementById('habitacion'),
        tarjeta: document.getElementById('tarjeta'),
        cvv: document.getElementById('cvv'),
        promocional: document.getElementById('promocional')
    };

    const validadores = {
        nombre: validarNombreApellido,
        apellido: validarNombreApellido,
        email: validarEmail,
        telefono: validarTelefono,
        pasaporte: validarPasaporte,
        pais: validarPais,
        fechaLlegada: validarLlegada,
        fechaSalida: (valor) => validarSalida(valor, campos.fechaLlegada.value),
        horaLlegada: validarHoraLlegada,
        noches: validarNoches,
        personas: validarPersonas,
        habitacion: validarHabitacion,
        tarjeta: validarTarjeta,
        cvv: validarCVV,
        promocional: validarCodigoPromocional
    };

    Object.entries(campos).forEach(([clave, campo]) => {
        campo.addEventListener('blur', () => {
            const esValido = validadores[clave](campo.value);
            campo.classList.toggle('invalido', !esValido);
        });
    })

    const formulario = document.getElementById('form2');
    formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let todoValido = true;

    Object.entries(campos).forEach(([clave, campo]) => {
        const esValido = validadores[clave](campo.value);
        campo.classList.toggle('invalido', !esValido);
        if (!esValido) {
            todoValido = false;
        }
        });

        if (todoValido) {
            alert('¡Reserva completada con éxito!');
        formulario.reset();
        } else {
            alert('Por favor, corrige los campos marcados en rojo.');
        }
    });
}