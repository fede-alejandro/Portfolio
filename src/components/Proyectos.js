import { FaGithubSquare } from 'react-icons/fa';
import { LOGO, todoList, blackjack } from '../img';

function Proyectos() {



    return <main className='flex flex-col items-center h-full w-full p-10 text-[#c6d6dd]'>
        <div className='flex border-2 border-[#c6d6dd] rounded-md p-4 m-4 w-[60rem] gap-4'>
            <div className='flex items-center'>
                <img src={LOGO} alt='logo' className='h-34' />
            </div>
            <div className='flex flex-col content-center'>
                <h2 className='font-bold text-2xl'>COMO LO RECICLO </h2>
                <p>Una aplicación para que los usuarios donen artículos que ya no utilizan y les den una
                    segunda vida.
                Al registrarse pueden realizar publicaciones, recibir mensajes de
                    interesados y decidir a quién donarlos.</p>
                <p> También contiene información sobre reciclaje y
                    un podcasts de Spotify</p>
                <p> Tecnologías: HTML5 - CSS3 - JavaScript - React - Node - Express
                    Mongo - Mongoose - Tailwind</p>
                <a href='https://github.com/fede-alejandro/como-lo-reciclo' target='_blank' rel='noreferrer' className='pt-2'><FaGithubSquare size='1.5rem' /></a>
            </div>
        </div>
        <div className='flex  border-2 border-[#c6d6dd] rounded-md p-4 m-4 w-[60rem] gap-4'>
            <div className='flex items-center'>
                <img src={blackjack} alt='' className='h-36 rounded-md' />
            </div>
            <div className='flex flex-col content-center justify-center'>
                <h2 className='font-bold text-2xl'>BLACKJACK</h2>
                <p>Juego de naipes en el que gana quien hace veintiún puntos o se queda más cerca de ellos sin sobrepasarlos.</p>
                <p>Tecnologías: HTML5 - CSS3 - JavaScript</p>
                <a href='https://github.com/fede-alejandro/Blackjack' target='_blank' rel='noreferrer' className='pt-2'><FaGithubSquare size='1.5rem' /></a>
            </div>
        </div>
        <div className='flex  border-2 border-[#c6d6dd] rounded-md p-4 m-4 w-[60rem] gap-4 '>
            <div className='flex items-center'>
                <img src={todoList} alt='' className='h-36 rounded-md' />
            </div>
            <div className='flex flex-col content-center justify-center mb-2'>
                <h2 className='font-bold text-2xl'>AGENDA DE TAREAS</h2>
                <p>Desarrollo de un organizador de tareas. Contiene un página de registro, login y settings
                    de perfil.</p>
                <p>Las tareas se pueden crear, editar, eliminar y categorizar por estados o
                    progreso</p>
                <p>Tecnologías: HTML5 - CSS3 - JavaScript - React - Tailwind</p>
                <a href='https://github.com/fede-alejandro/Agenda-tareas' target='_blank' rel='noreferrer' className='pt-2'><FaGithubSquare size='1.5rem' /></a>
            </div>
        </div>
        {/* <div className='flex gap-4'>
            <button className=' border-2 border-blue-400 rounded-md p-2' ><AiOutlineArrowLeft size='1.5rem' /></button>
            <button className=' border-2 border-blue-400 rounded-md p-2' ><AiOutlineArrowRight size='1.5rem' /></button>
        </div> */}
    </main>

}
export default Proyectos