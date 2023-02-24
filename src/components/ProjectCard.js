import { dataProjects } from './Data'

export const ProjectCard = ({
    title,
    description,
    repositorio,
    icons,
    image
} = dataProjects) => {

    // const { image: { value: image },
    //     title: { value: title },
    //     description: { value: description },
    //     repositorio: { value: repositorio },
    //     icons: { value: icons }
    // } = dataProjects

    return <>
        <div className='flex items-center'>
            <img src={image} alt='ImageProject' className='h-34' />
        </div>
        <div className='flex flex-col content-center'>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p>{description}</p>
            <a href={repositorio} target='_blank' rel='noreferrer' className='pt-2'>{icons}</a>
        </div>
    </>

}