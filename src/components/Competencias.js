import { SiJavascript, SiTailwindcss, SiCss3 } from 'react-icons/si';
import { FaReact, FaNode, FaHtml5, FaGithubSquare, FaGitAlt, FaNpm } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';
import { skills } from '../img';



function Competencias() {
    return <main className='flex flex-row justify-center gap-20 items-center h-full w-full p-5 text-black font-bold italic'>
            <div className='flex mt-20'>
                <img src={skills} alt='' className='h-40' />
            </div>
            <div className='flex flex-col mt-20 gap-10 p-20'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaHtml5 size='1.3rem' />
                        <p>HTML5</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <SiCss3 size='1.3rem' />
                        <p>CSS</p>
                    </div>

                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaGitAlt size='1.3rem' />
                        <p>Git</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaHtml5 size='1.3rem' />
                        <p>SASS</p>
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <SiTailwindcss size='1.3rem' />
                        <p>Tailwind</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaReact size='1.3rem' />
                        <p>ReactJs</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <SiJavascript size='1.3rem' />
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaNode size='1.3rem' />
                        <p>Node JS</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaReact size='1.3rem' />
                        <p>MongoDB</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <p>File System</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <MdHttp size='1.3rem' />
                        <p>HTTP Module</p>
                    </div>


                </div>

                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <p>Express</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <p>API Rest</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaGithubSquare size='1.3rem' />
                        <p>GitHub</p>
                    </div>
                    <div className='flex flex-row bg-rose-200 p-2 rounded-md gap-2 shadow-xl shadow-gray-600'>
                        <FaNpm size='1.3rem' />
                        <p>NPM</p>
                    </div>
                </div>
            </div>
    </main>
}

export default Competencias