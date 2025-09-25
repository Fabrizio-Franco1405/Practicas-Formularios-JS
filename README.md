# 🧪 Práctica Evaluada: Validaciones en JavaScript (Vanilla vs jQuery)

Este repositorio contiene dos versiones del mismo ejercicio de validación de formularios web, implementadas con:

- **JavaScript Vanilla** → Carpeta `Validacion-Vanilla`
- **jQuery** → Carpeta `Validacion-JQuery`

Ambas versiones comparten el mismo formulario (`2.html`) y estructura base, pero difieren en la forma en que gestionan los eventos y manipulan el DOM.

---

## 📁 Estructura del repositorio

```
📦 validaciones-comparativas 
┣ 📂 Validacion-Vanilla 
┃ ┣ 📜 formulario 2.html 
┃ ┗ 📂 js 
┃   ┣ 📜 index.js 
┃   ┗ 📂 validations 
┃     ┣ 📜 validaciones.js 
┃     ┗ 📜 eventos.js 
┣ 📂 Validacion-JQuery 
┃ ┣ 📜 formulario 2.html 
┃ ┗ 📂 js 
┃   ┣ 📜 index.js 
┃   ┣ 📂 lib 
┃   ┃ ┃ 
┃   ┃ ┗ 📜 jquery-3.7.1.min.js 
┃   ┗ 📂 validations 
┃     ┣ 📜 validaciones.js 
┃     ┗ 📜 eventos.js 
┗ 📜 README.md
```


---

## 🧩 Objetivo del ejercicio

Implementar un sistema de validación de formularios para una **reserva de hotel**, aplicando:

- Validaciones personalizadas con expresiones regulares y lógica condicional.
- Retroalimentación visual inmediata al usuario.
- Control de envío del formulario.
- Arquitectura modular y escalable.

---

## 🧠 Validaciones aplicadas

| Campo                  | Regla de validación |
|------------------------|----------------------|
| Nombre / Apellido      | Solo letras y espacios |
| Email                  | Formato válido (`usuario@dominio.com`) |
| Teléfono               | Solo números, exactamente 10 dígitos |
| Pasaporte              | Alfanumérico, 8–9 caracteres |
| País de origen         | Obligatorio |
| Fecha de llegada       | No puede ser menor que hoy |
| Fecha de salida        | Debe ser posterior a la llegada |
| Hora de llegada        | Entre 12:00 y 23:59 |
| Número de noches       | Entero ≥ 1 |
| Número de personas     | Entero entre 1 y 6 |
| Tipo de habitación     | Obligatorio |
| Tarjeta de crédito     | 16 dígitos |
| CVV                    | 3 dígitos |
| Código promocional     | Opcional, máximo 10 caracteres |

---

## 🧪 Comparativa entre versiones

| Aspecto                        | Vanilla JS                          | jQuery                              |
|-------------------------------|-------------------------------------|-------------------------------------|
| Acceso al DOM                 | `document.getElementById()`         | `$('#id')`                          |
| Eventos (`blur`, `submit`)    | `addEventListener()`                | `.on('blur', ...)`, `.submit(...)` |
| Manipulación de clases        | `classList.toggle()`                | `.toggleClass()`                    |
| Validaciones                  | Funciones puras en `validaciones.js` | Reutilizadas sin cambios            |
| Modularidad                   | Separación clara                    | Conservada                          |
| Librerías externas            | Ninguna                             | jQuery (`lib/jquery.min.js`)        |

---

## 🚀 Cómo ejecutar

1. Clona el repositorio.
2. Abre `2.html` desde cualquiera de las carpetas (`Validacion-Vanilla` o `Validacion-JQuery`) en tu navegador.
3. Completa el formulario y prueba los casos:
   - Campos vacíos o inválidos → borde rojo y alerta.
   - Datos válidos → alerta de éxito y formulario reseteado.

---

## 📌 Recomendaciones

- Mantener consistencia entre los `id` del HTML, las claves de los objetos `campos` y `validadores`.
- Usar funciones puras para validaciones para facilitar migraciones futuras.
- Separar lógica de validación y lógica de eventos para mantener claridad y escalabilidad.

---

## 👨‍💻 Autor

Práctica desarrollada por **Fabrizio** como parte de la evaluación de **Programación II**, con enfoque en modularidad, claridad, escalabilidad y control quirúrgico sobre la interacción UI.

---

## 🧠 Posibles mejoras futuras

- Mensajes de error personalizados por campo.
- Validación reactiva en tiempo real (`input`).
- Reemplazo de `alert()` por modales o notificaciones visuales.
- Integración con APIs externas para validación de países o tarjetas.

---
