// Colapsar/Expandir la lista de canales en vivo en la barra lateral
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-lista");
    const listaCanales = document.querySelector(".canales-lista");
    const sidebar = document.querySelector(".sidebar");
    const sidebarHeader = document.querySelector(".sidebar-header");

    if (toggleButton && listaCanales && sidebar && sidebarHeader) {
        toggleButton.addEventListener("click", function () {
            // Alternar la clase "colapsada" en la lista, el sidebar y el header
            listaCanales.classList.toggle("colapsada");
            sidebar.classList.toggle("colapsada");
            sidebarHeader.classList.toggle("colapsada");
            toggleButton.classList.toggle("rotada");
        });
    } else {
        console.error("Error: No se encontraron los elementos.");
    }
});

//Activar el enlace "Explorar" enla barra de navegación
document.addEventListener("DOMContentLoaded", function () {
    const enlaceExplorar = document.getElementById("enlace-explorar");

    if (enlaceExplorar) {
        // Agregar la clase "activo" al hacer clic en "Explorar"
        enlaceExplorar.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que el enlace navegue de inmediato

            // Remover la clase "activo" de cualquier otro enlace (si es necesario)
            document.querySelectorAll(".explorar.activo").forEach(function (enlace) {
                enlace.classList.remove("activo");
            });

            // Agregar la clase "activo" al enlace "Explorar"
            enlaceExplorar.classList.add("activo");

            // Navegar a la página "explorar.html" después de agregar la clase
            setTimeout(function () {
                window.location.href = "explorar.html";
            }, 100); // Pequeño retraso para que se vea el cambio de estilo
        });

        // Verificar si estamos en la página "explorar.html" y aplicar la clase "activo"
        if (window.location.href.includes("explorar.html")) {
            enlaceExplorar.classList.add("activo");
        }
    }
});


// Habilitar/Deshabilitar el botón de búsqueda principal
document.addEventListener("DOMContentLoaded", function () {
    const inputBusqueda = document.getElementById("input-busqueda");
    const botonBusqueda = document.getElementById("boton-busqueda");

    if (inputBusqueda && botonBusqueda) {
        // Escuchar cambios en la barra de búsqueda
        inputBusqueda.addEventListener("input", function () {
            if (inputBusqueda.value.trim() !== "") {
                // Habilitar el botón si hay texto
                botonBusqueda.disabled = false;
            } else {
                // Deshabilitar el botón si no hay texto
                botonBusqueda.disabled = true;
            }
        });
    }
});

//Activar filtros de categorías (Categorías y Canales en vivo)
document.addEventListener("DOMContentLoaded", function () {
    const filtros = document.querySelectorAll(".filtro");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que el enlace recargue la página

            // Remueve la clase "activo" de todos los filtros
            filtros.forEach(f => f.classList.remove("activo"));

            // Agrega la clase "activo" al filtro clickeado
            this.classList.add("activo");
        });
    });
});

