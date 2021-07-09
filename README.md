# Ejercicio Node.js Vacunas

Crearás una base de datos en Mongo y una aplicación en Node que servirá tanto para rellenar la base de datos con datos de vacunación como para consultarlos mediante una API.

## Parte 1 - Rellenar datos

1. Crea la base de datos en Atlas y vuelca en ella el contenido de los dos archivos JSON que tienes en este ejercicio.

2. Define los esquemas en Mongoose para Ciudad, Vacuna y Persona. Una persona tiene que tener DNI, centro en el que se ha vacunado, vacuna que se ha administrado, y un array de dosis, que almacenará una o dos fechas.

3. Tu aplicación debe mostrar por consola las siguientes opciones:

- Introducir vacunas

- Introducir personas vacunadas

4. Si el usuario elige "Introducir vacunas", debemos hacerle tres preguntas por cada nueva vacuna:

- Centro de vacunación (listado)

- Vacuna (listado)

- ¿Añadir otra vacuna?

5. Si el usuario elige "Introducir personas vacunadas", debemos hacerle preguntas por cada nueva persona:

- DNI

- Centro de vacunación (listado)

- Vacuna (listado con las vacunas **del centro seleccionado**)

- Fecha de la primera dosis

- Fecha de la segunda dosis (sólo si se ha seleccionado una vacuna con dos dosis)

6. Haz que se puedan ir insertando los datos en la base de datos conforme el usuario los va introduciendo.

## Parte 2 - API REST

1. En la misma aplicación, crea una API con los siguientes endpoints:

   (GET) /vacunacion/centros/ciudad/:idCiudad -> devuelve un array con los centros de vacunación de la ciudad

   (GET) /vacunacion/centros/centro/:idCentro -> devuelve la información sobre un centro

   (GET) /vacunacion/vacunados/ciudad/:idCiudad -> devuelve un array con las personas que se han vacunado en una ciudad

   (GET) /vacunacion/vacunados/centro/:idCentro -> devuelve un array con las personas que se han vacunado en un centro

   (GET) /vacunacion/vacunados/persona/:dni -> devuelve la información de una persona vacunada a partir de su DNI

   (POST) /vacunacion/vacunados/persona -> para crear una persona vacunada

   (PUT) /vacunacion/vacunados/persona/:idPersona -> para modificar una persona vacunada

   (DELETE) /vacunacion/vacunados/persona/:idPersona -> para borrar una persona vacunada

   (GET) /vacunacion/vacunas/ciudad/:idCiudad -> devuelve cuántas dosis de cada vacuna se han administrado en una ciudad
