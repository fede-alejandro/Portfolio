import { dataProyectos } from '../data/proyectos'

export const ProyectoCarta = ({
    title,
    description,
    repositorio,
    icons,
    image
} = dataProyectos) => {


    return <div className='flex flex-col items-center w-[100%]  text-[#c6d6dd]'>
        <div className='flex flex-col border-none shadow-2xl items-center md:flex-row border-2 border-[#c6d6dd] rounded-md p-4 m-4 gap-4 w-[75%]'>
            <div className='flex items-center'>
                <img src={image} alt='ImageProject' className='h-auto rounded-md lg:ml-2 max-w-lg' />
            </div>
            <div className='flex flex-col content-center'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>{description}</p>
                <a href={repositorio} target='_blank' rel='noreferrer' className='pt-2 mr-auto'>{icons}</a>
            </div>
        </div>
    </div>

}