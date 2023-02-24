import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    const [toggleButton, setToggleButton] = useState('menu')

    const handleToggleMenu = () => setToggleButton(toggleButton === 'menu' ? 'close' : 'menu')
    
    const menuOpen = () => {
        !toggleButton ? setToggleButton(true) : setToggleButton()

        setToggleButton('menu')
    }



    return <header className=' p-2 text-[#c6d6dd]'>
        <button data-collapse-toggle='navbar-hamburger' onClick={handleToggleMenu} type='button' className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg hover:border-2 focus:outline-none md:hidden' aria-controls='navbar-hamburger' aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
        </button>
        <nav className='w-full' id='navbar-hamburger'>
            {toggleButton === 'close' &&
                <ul className='flex flex-col mt-4 '>
                    <NavLink to='/' className={({ isActive }) =>
                        `text-xl ${isActive ? ' text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`} onClick={menuOpen}>Sobre mi</NavLink>

                    <NavLink to='/educacion' className={({ isActive }) =>
                        `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`} onClick={menuOpen}>Educación</NavLink>

                    <NavLink to='/proyectos' className={({ isActive }) =>
                        `text-xl ${isActive ? 'text-white text-2xl  p-1 transition duration-300 ease-out hover:ease-in' : ''}`} onClick={menuOpen}>Proyectos</NavLink>

                    <NavLink to='/competencias' className={({ isActive }) =>
                        `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`} onClick={menuOpen}>Competencias</NavLink>

                    <NavLink to='/experiencia' className={({ isActive }) =>
                        `text-xl ${isActive ? 'text-white text-2xl p-1 transition duration-300 ease-out hover:ease-in' : ''}`} onClick={menuOpen}>Experiencia</NavLink>
                </ul>}
        </nav>
        <div className='md:flex md:flex-wrap md:items-center md:justify-around md:mx-auto'>
            <nav className='hidden md:flex md:flex-col md:mt-4 md:w-full mb-10'>
                <ul className='flex justify-around '>
                    <NavLink to='/' className={({ isActive }) =>
                        `hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Sobre mi</NavLink>

                    <NavLink to='/educacion' className={({ isActive }) =>
                        `hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Educación</NavLink>

                    <NavLink to='/proyectos' className={({ isActive }) =>
                        `hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl  border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Proyectos</NavLink>

                    <NavLink to='/competencias' className={({ isActive }) =>
                        `hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2 transition duration-300 ease-in-out' : ''}`}>Competencias</NavLink>

                    <NavLink to='/experiencia' className={({ isActive }) =>
                        `hover:-translate-y-1 hover:scale-110 text-xl ${isActive ? 'text-white text-2xl border-white border-b-2  transition duration-300 ease-in-out' : ''}`}>Experiencia</NavLink>
                </ul>
            </nav>
        </div>
    </header>
}