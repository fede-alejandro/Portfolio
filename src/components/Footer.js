import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';


function Footer() {
    return <footer className='fixed w-full  h-[4rem] bottom-0 flex justify-center gap-44 items-center border-t-2 text-xl bg-blue-400 text-[#c6d6dd]'>
       
            <span>
                <a className='flex items-center justify-center gap-4 hover:text-white'
                    href='https://www.linkedin.com/in/federico-alejandro/'
                    target='_blank' rel="noreferrer"
                >
                    <FaLinkedin size='1.5rem'/>
                    Contact me
                </a>
            </span>
            <span>
                <a className='flex items-center justify-center gap-4 hover:text-white'
                    href='https://github.com/fede-alejandro'
                    target='_blank' rel="noreferrer"
                >
                    <FaGithubSquare size='1.5rem'/>
                    Follow me
                </a>
            </span>
    </footer>
}
export default Footer