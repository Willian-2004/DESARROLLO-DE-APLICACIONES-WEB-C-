// 1. Seleccionamos los elementos del DOM que vamos a usar
const inputUrl = document.getElementById('imageUrl');
const btnAgregar = document.getElementById('addBtn');
const btnEliminar = document.getElementById('deleteBtn');
const contenedorGaleria = document.getElementById('gallery');

// 2. Función para agregar una nueva imagen
btnAgregar.addEventListener('click', () => {
    const url = inputUrl.value.trim();

    // Validamos que el campo no esté vacío
    if (url === "") {
        alert("Por favor, ingresa la URL de una imagen.");
        return;
    }

    // Creamos el elemento de imagen dinámicamente
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = url;
    nuevaImagen.alt = "Imagen de la galería";

    // 3. Lógica para seleccionar imágenes
    nuevaImagen.addEventListener('click', function() {
        // Buscamos si ya hay una imagen seleccionada y le quitamos el borde
        const seleccionadaPrevia = document.querySelector('.selected');
        if (seleccionadaPrevia) {
            seleccionadaPrevia.classList.remove('selected');
        }

        // Marcamos la imagen actual como seleccionada
        this.classList.add('selected');
    });

    // Añadimos la imagen al contenedor y limpiamos el input
    contenedorGaleria.appendChild(nuevaImagen);
    inputUrl.value = "";
});

// 4. Función para eliminar la imagen seleccionada
btnEliminar.addEventListener('click', () => {
    const imagenParaBorrar = document.querySelector('.selected');

    if (imagenParaBorrar) {
        contenedorGaleria.removeChild(imagenParaBorrar);
    } else {
        alert("Primero haz clic en una imagen para seleccionarla.");
    }
});

// 5. Atajo de teclado: Agregar imagen al presionar 'Enter'
inputUrl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});
