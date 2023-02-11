import { Link, NavLink } from 'react-router-dom';


export default function NavBar() {


    return <header className='w-full h-[2.5rem] flex justify-around items-center gap-2 text-[#c6d6dd]'>

        <NavLink to='/' className={({ isActive }) =>
            `hover: text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 p-1' : ''}`}>Sobre mi</NavLink>
        
        <NavLink to='/educacion' className={({ isActive }) =>
            `hover: text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 p-1' : ''}`}>Educación</NavLink>
        
        <NavLink to='/proyectos' className={({ isActive }) =>
            `hover: text-xl ${isActive ? 'text-white text-2xl  border-white border-b-2 p-1' : ''}`}>Proyectos</NavLink>
        
        <NavLink to='/competencias' className={({ isActive }) =>
            `hover: text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 p-1' : ''}`}>Competencias</NavLink>
        
        <NavLink to='/experiencia' className={({ isActive }) =>
            `hover: text-xl ${isActive ? 'text-white text-2xl border-white border-b-  p-1' : ''}`}>Experiencia</NavLink>

        {/* <Link to='/educacion' className='hover:text-white text-xl'>Educación</Link> */}
        {/* <Link to='/proyectos' className='hover:text-white text-xl'>Proyectos</Link> */}
        {/* <Link to='/competencias' className='hover:text-white text-xl'>Competencias</Link> */}
        {/* <Link to='/experiencia' className='hover:text-white text-xl'>Experiencia</Link> */}


    </header>
}