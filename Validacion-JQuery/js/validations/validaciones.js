// Nombre: Solo letras | Apellido: Solo letras
export function validarNombreApellido(valor) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(valor);
}

// Email: Formato válido
export function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

// Teléfono: Solo números, 11 dígitos
export function validarTelefono(valor) {
    const regex = /^\d{11}$/;
    return regex.test(valor);
}

// Número de Pasaporte: Formato alfanumérico
export function validarPasaporte(valor) {
    const regex = /^[A-Z0-9]{8,9}$/i;
    return regex.test(valor);
}

// País de origen: Obligatorio
export function validarPais(valor) {
    return valor.trim() !== "";
}

// Fecha de llegada: No puede ser menor que hoy (usando fecha local)
export function validarLlegada(valor) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hoyLocal = `${yyyy}-${mm}-${dd}`;
    return valor >= hoyLocal;
}

// Fecha de salida: Debe ser posterior a la de llegada
export function validarSalida(salida, llegada) {
    return salida > llegada;
}

// Hora estimada de llegada: Rango 12:00 a 23:59
export function validarHoraLlegada(valor) {
    const regex = /^(1[2-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(valor);
}

// Número de noches: Solo números, mínimo 1
export function validarNoches(valor) {
    const numero = parseInt(valor, 10);
    return !isNaN(numero) && numero >= 1;
}

// Número de personas: Solo números, entre 1 y 6
export function validarPersonas(valor) {
    const numero = parseInt(valor, 10);
    return !isNaN(numero) && numero >= 1 && numero <= 6;
}

// Tipo de habitación: Obligatorio
export function validarHabitacion(valor) {
    return valor.trim() !== "";
}

// Número de tarjeta de crédito: 16 dígitos
export function validarTarjeta(valor) {
    const regex = /^\d{16}$/;
    return regex.test(valor);
}

// CVV: 3 dígitos
export function validarCVV(valor) {
    const regex = /^\d{3}$/;
    return regex.test(valor);
}

// Código promocional: Opcional, máximo 11 caracteres
export function validarCodigoPromocional(valor) {
    return valor.length <= 11;
}