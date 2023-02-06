import { avatar } from "../img"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function AboutMe() {


    return <main className='flex flex-row justify-start  h-full w-full p-10 text-[#c6d6dd]'>
        <div className='flex flex-col content-center w-full'>
            <h1 className='font-bold text-5xl text-white mt-4'>Federico Alejandro</h1>
            <h3 className='mt-2'>Full Stack Web Developer Jr</h3>
            <div className="flex justify-between">
                <div className="flex flex-col justify-start content-center mt-20 text-lg">
                    <p>¡Bienvenidos a mi portfolio!. Soy un Desarrollador Full Stack Junior,</p>
                    <p>en constante aprendizaje, descubriendo e incorporando nuevas</p>
                    <p>tecnologías y trabajando día a día para mejorar mis</p>
                    <p>habilidades dentro de este apasionate mundo.</p>
                    <p>Si bien mi experiencia ha trancurrido dentro de diferentes sectores,</p>
                    <p>siempre he luchado para superarme y alcanzar mis metas, es por eso que decidí</p>
                    <p>focalizarme en formarme como Developer, realizando un Bootcamp con dedicación</p>
                    <p>plena y a fin de empezar a desarrollarme profesionalmente en este ámbito.</p>
                    <p>Busco una oportunidad para comenzar a volcar mis conocimientos técnicos
                        y seguir evolucionando.</p>
                    <p><strong>Te invito a que navegues por esta web para conocerme un poco mas.</strong></p>
                    <div className="flex flex-row gap-10 mt-20 ">
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white'
                                href='https://www.linkedin.com/in/federico-alejandro/'
                                target='_blank' rel="noreferrer"
                            >
                                <FaLinkedin size='1.5rem' />
                                Contact me
                            </a>
                        </span>
                        <span>
                            <a className='flex items-center justify-center gap-4 hover:text-white'
                                href='https://github.com/fede-alejandro'
                                target='_blank' rel="noreferrer"
                            >
                                <FaGithubSquare size='1.5rem' />
                                Follow me
                            </a>
                        </span>
                    </div>
                </div>
                <div className='flex justify-end mr-36 '>
                    <img src={avatar} alt='avatar' className="h-96" />
                </div>
            </div>
        </div>
    </main>

}
export default AboutMe