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
} from "./validaciones.js";

export function configurarEventos() {
    $('#nombre, #apellido').on('blur', function() {
        const valor = $(this).val().trim();
        const esValido = validarNombreApellido(valor);
        $(this).toggleClass('invalido', !esValido);
    });

    $('#form2').on('submit', function(e) {
        e.preventDefault();
        let todoValido = true;

        const campos = {
            nombre: '#nombre',
            apellido: '#apellido',
            email: '#email',
            telefono: '#telefono',
            pasaporte: '#pasaporte',
            pais: '#pais',
            fechaLlegada: '#fechaLlegada',
            fechaSalida: '#fechaSalida',
            horaLlegada: '#horaLlegada',
            noches: '#noches',
            personas: '#personas',
            habitacion: '#habitacion',
            tarjeta: '#tarjeta',
            cvv: '#cvv',
            promocional: '#promocional'
        };

        const validadores = {
            nombre: validarNombreApellido,
            apellido: validarNombreApellido,
            email: validarEmail,
            telefono: validarTelefono,
            pasaporte: validarPasaporte,
            pais: validarPais,
            fechaLlegada: validarLlegada,
            fechaSalida: (valor) => validarSalida(valor, $(campos.fechaLlegada).val()),
            horaLlegada: validarHoraLlegada,
            noches: validarNoches,
            personas: validarPersonas,
            habitacion: validarHabitacion,
            tarjeta: validarTarjeta,
            cvv: validarCVV,
            promocional: validarCodigoPromocional
        };

        $.each(campos, (clave, selector) => {
            const valor = $(selector).val();
            const esValido = validadores[clave](valor);
            $(selector).toggleClass('invalido', !esValido);
            if (!esValido) {
                todoValido = false;
            }
        });

        if (todoValido) {
            alert('Formulario enviado correctamente');
            this.reset();
        } else {
            alert('Formulario inválido');
        }
    });
}