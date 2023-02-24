import { FaGithubSquare } from "react-icons/fa";
import { LOGO, todoList, blackjack } from '../img';



export const dataProjects = [

    {
        title: 'COMO LO RECICLO',
        description: 'Una aplicación para que los usuarios donen artículos que ya no utilizan y les den una segunda vida. Al registrarse pueden realizar publicaciones, recibir mensajes de interesados y decidir a quién donarlos.También contiene información sobre reciclaje y un podcasts de Spotify. Tecnologías: HTML5 - CSS3 - JavaScript - React - Node - Express Mongo - Mongoose - Tailwind',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: LOGO,
        repositorio: 'https://github.com/fede-alejandro/como-lo-reciclo',

    },
    {
        title: 'BLACKJACK',
        description: 'Juego de naipes en el que gana quien hace veintiún puntos o se queda más cerca de ellos sin sobrepasarlos. Tecnologías: HTML5 - CSS3 - JavaScript',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: blackjack,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
    },
    {
        title: 'AGENDA DE TAREAS',
        description: 'Desarrollo de un organizador de tareas. Contiene un página de registro, login y settings de perfil.Las tareas se pueden crear, editar, eliminar y categorizar por estados o progreso. Tecnologías: HTML5 - CSS3 - JavaScript - React - Tailwind',
        icons: [<FaGithubSquare size='1.5rem' />],
        image: todoList,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
    }
]

