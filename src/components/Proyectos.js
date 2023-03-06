import { useState } from 'react';
// import { FaGithubSquare } from 'react-icons/fa';
// import { LOGO, todoList, blackjack } from '../img';
import { dataProjects } from './Data';
import { ProjectCard } from './ProjectCard';

function Proyectos() {

    const [projects, setProjects] = useState(dataProjects)
    
    return <main className='flex flex-col items-center w-[100%] p-10 text-[#c6d6dd]'>
        {projects && <div >
            {projects.map((props) => (<ProjectCard  {...props} setProjects={setProjects} />))}
        </div>}

    </main>

}
export default Proyectos