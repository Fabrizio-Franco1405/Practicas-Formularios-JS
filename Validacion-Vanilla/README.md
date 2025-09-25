# 📝 Práctica Evaluada: Validaciones en JavaScript Vanilla

Este proyecto consiste en la implementación de un formulario de **Reserva de Hotel** con validaciones personalizadas en **JavaScript Vanilla**, sin frameworks externos.  
El objetivo es demostrar dominio en:

- Uso de **expresiones regulares** para validar entradas.
- Manejo de **eventos del DOM** (`blur`, `submit`, `input`).
- Arquitectura modular con separación en archivos (`validaciones.js`, `eventos.js`, `index.js`).
- Retroalimentación visual al usuario mediante clases CSS dinámicas.
- Control de flujo para evitar envíos inválidos y mostrar mensajes de éxito.

---

## 📂 Estructura del proyecto

```
📦 proyecto-validaciones 
┣ 📜 formulario 2.html 
┣ 📜 index.js 
┣ 📜 eventos.js 
┣ 📜 validaciones.js 
┗ 📜 README.md
```


- **index.html** → Contiene el formulario con todos los campos requeridos.
- **validaciones.js** → Funciones puras de validación (regex, lógica condicional).
- **eventos.js** → Conecta los validadores con los campos del DOM y gestiona eventos.
- **index.js** → Punto de entrada, inicializa la aplicación llamando a `configurarEventos()`.

---

## 🖥️ Funcionalidades implementadas

### ✅ Validaciones por campo

| Campo                  | Regla de validación |
|------------------------|----------------------|
| Nombre / Apellido      | Solo letras y espacios |
| Email                  | Formato válido (`usuario@dominio.com`) |
| Teléfono               | Solo números, exactamente 10 dígitos |
| Pasaporte              | Alfanumérico, 8–9 caracteres |
| País de origen         | Obligatorio (no vacío) |
| Fecha de llegada       | No puede ser menor que hoy |
| Fecha de salida        | Debe ser posterior a la llegada |
| Hora de llegada        | Entre 12:00 y 23:59 |
| Número de noches       | Entero ≥ 1 |
| Número de personas     | Entero entre 1 y 6 |
| Tipo de habitación     | Obligatorio |
| Tarjeta de crédito     | 16 dígitos |
| CVV                    | 3 dígitos |
| Código promocional     | Opcional, máximo 11 caracteres |

---

### 🎨 Retroalimentación visual

- Si un campo es inválido → se aplica la clase `.invalido` con borde rojo y sombra.
- Si es válido → se elimina la clase `.invalido`.

Ejemplo de CSS:

```css
.invalido {
  border-color: #ff4d4d !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 77, 77, 0.25);
}
```