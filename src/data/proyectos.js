import { FaGithubSquare } from "react-icons/fa";
import { logo, todoList, blackjack, galeriaImagenes, carrito } from '../img';



export const dataProyectos = [

    {
        id: 1,
        title: 'SHOPPING CART',
        description: 'Tienda con carrito de compra donde se puede filtrar por precio y categorias, agregar al carrito, cambiar la cantidad del producto y/o eliminarlo. Tecnologías: HTML5 - CSS3 - JavaScript - React - Vite',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: carrito,
        repositorio: 'https://github.com/fede-alejandro/shopping-cart',

    },
    {
        id: 2,
        title: 'COMO LO RECICLO',
        description: 'Una aplicación para que los usuarios donen artículos que ya no utilizan y les den una segunda vida. Al registrarse pueden realizar publicaciones, recibir mensajes de interesados y decidir a quién donarlos.También contiene información sobre reciclaje y un podcasts de Spotify. Tecnologías: HTML5 - CSS3 - JavaScript - React - Node - Express Mongo - Mongoose - Tailwind',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: logo,
        repositorio: 'https://github.com/fede-alejandro/como-lo-reciclo',

    },
    {
        id: 3,
        title: 'AGENDA DE TAREAS',
        description: 'Desarrollo de un organizador de tareas. Contiene un página de registro, login y settings de perfil.Las tareas se pueden crear, editar, eliminar y categorizar por estados o progreso. Tecnologías: HTML5 - CSS3 - JavaScript - React - Tailwind',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: todoList,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
    },
    {
        id: 4,
        title: 'BLACKJACK',
        description: 'Juego de naipes en el que gana quien hace veintiún puntos o se queda más cerca de ellos sin sobrepasarlos. Tecnologías: HTML5 - CSS3 - JavaScript',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: blackjack,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
    },
    {
        id: 5,
        title: 'GALERIA DE IMAGENES',
        description: 'Mini ptoyecto, galeria de imagenes. Tecnologías: HTML5 - CSS - JavaScript',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: galeriaImagenes,
        repositorio: 'https://github.com/fede-alejandro/Galeria-de-imagenes',
    },
]

