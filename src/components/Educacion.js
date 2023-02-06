
import { educacion } from "../img"

function Educacion() {

    return <main className='flex flex-row justify-center  gap-36 w-full p-20 text-[#c6d6dd]'>
        <div className="flex items-end">
            <img src={educacion} alt='avatar' className="h-72" />
        </div>
        <div className="flex flex-col gap-10">
            <div className='flex flex-col  items-center border-2 border-blue-400 rounded-md p-4 w-[40rem] gap-2'>
                <h2 className='font-bold text-xl'>Bootcamp Full Stack Web Developer, NEOLAND</h2>
                <small>Sep - Dic 3022</small>
                <a href='https://www.credential.net/a1131583-c424-4ce7-bfe8-d6573a4487f3#gs.o4jhkd' target='_blank' rel="noreferrer" className='border-2 border-blue-400  text-white rounded-md p-2 transition ease-in duration-200 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>Certificado</a>
            </div>
            <div className='flex flex-col  items-center border-2 border-blue-400 rounded-md  p-4 w-[40rem] gap-2'>
                <h2 className='font-bold text-xl'>JavaScript Moderno: Guía para dominar el lenguaje, Udemy</h2>
                <small>17 de Enero de 2023</small>
                <a href='https://www.udemy.com/certificate/UC-6683499a-1014-46b7-83da-a2e8cd55ff3d/' target='_blank' rel="noreferrer" className='border-2 border-blue-400  text-white rounded-md p-2 transition ease-in duration-200 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600'>Certificado</a>
                
            </div>
            <div className='flex flex-col items-center border-2 border-blue-400 rounded-md  p-4 w-[40rem]'>
                <h2 className='font-bold text-xl'>Analista en Administración Bancaria y Comercio Exterior</h2>
                <small>2010-2013</small>
                <p>nstituto Superior particular Nro. 4039</p>
                <p>Rosario, Santa Fe, Argentina</p>
            </div>
        </div>
    </main>

}

export default Educacion