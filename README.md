# Proyecto-Maquetacion-Web-Twitch.tv-

# Descripción del Proyecto
El objetivo de este proyecto fue replicar la página de inicio de Twitch (específicamente la sección de exploración de categorías y canales en vivo) utilizando tecnologías web como HTML5, CSS3 y JavaScript. La página replica la estructura visual y la disposición de los elementos de Twitch lo más fielmente posible, aplicando conceptos avanzados de maquetación como Flexbox y CSS Grid.

# Página Replicada
Se replicó la página principal de Twitch (https://www.twitch.tv), específicamente la sección de Explorar, que incluye:

# Barra de Navegación Superior:
  Logo de Twitch.
  Enlace de "Explorar".
  Barra de búsqueda funcional.
  Botones de "Iniciar Sesión", "Registrarse" y un ícono de usuario.

# Lista de Canales en Vivo:
  Una barra lateral que muestra una lista de canales en vivo con información como el nombre del streamer, el juego que está   
  transmitiendo y la cantidad de espectadores.

# Sección de Categorías:
  Una cuadrícula de categorías populares con imágenes, títulos, número de espectadores y etiquetas relacionadas.

# Footer:
Un pie de página con un mensaje de bienvenida y un botón de "Registrarse".

# Implementación
# 1. Estructura HTML
  La estructura HTML se dividió en las siguientes secciones principales:
  Barra de Navegación: Contiene el logo, enlaces, barra de búsqueda y botones de usuario.
  Sidebar (Lista de Canales en Vivo): Muestra una lista de canales en vivo con imágenes de perfil y detalles.
  Contenido Principal: Muestra una cuadrícula de categorías populares.
  Footer: Contiene un mensaje y un botón de registro.

# 2. Estilos CSS
  Se utilizó CSS3 para dar estilo a la página, aplicando:
  Flexbox: Para alinear y distribuir los elementos en la barra de navegación y el footer.
  CSS Grid: Para organizar las categorías en una cuadrícula responsive.
  Media Queries: Para asegurar que la página sea responsive y se adapte a diferentes tamaños de pantalla.

# 3. Interactividad con JavaScript
  Se implementó interactividad para:
  Colapsar/expandir la lista de canales en vivo.
  Activar el enlace "Explorar" en la barra de navegación.
  Habilitar/deshabilitar el botón de búsqueda según si hay texto en el input.
  Cambiar entre filtros de categorías y canales en vivo.

# Cambio en la Lista de Canales en Vivo (Sidebar a la Derecha)
# Problema Inicial
  Originalmente, la lista de canales en vivo se mostraba en el lado izquierdo de la página, pero se solicitó moverla al lado derecho. Esto no se pudo implementar inicialmente debido al nerviosismo y al desconocimiento sobre cómo reorganizar los elementos en el diseño (de esta forma en especifico).

# Solución
  Para mover la lista de canales en vivo al lado derecho, se utilizó la propiedad order de Flexbox. Esta propiedad permite cambiar el orden de los elementos dentro de un contenedor flexible sin modificar el código HTML.
