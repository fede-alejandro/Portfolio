import { Link } from 'react-router-dom';


export default function NavBar() {


    return <header className='w-full h-[2.5rem] flex justify-around items-center gap-2 text-[#c6d6dd]'>

        <Link to='/' className='hover:text-white text-xl'>Sobre mi</Link>

        <Link to='/educacion'  className='hover:text-white text-xl'>Educación</Link>

        <Link to='/proyectos'  className='hover:text-white text-xl'>Proyectos</Link>

        <Link to='/competencias'  className='hover:text-white text-xl'>Competencias</Link>
        
        <Link to='/experiencia'  className='hover:text-white text-xl'>Experiencia</Link>

    </header>
}