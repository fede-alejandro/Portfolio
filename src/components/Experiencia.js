import { experiecialaboral } from "../img"

function Experiencia() {

    return <main className="flex flex-row justify-center p-10 gap-52 text-[#c6d6dd]">
        <div className="flex flex-col gap-10">
            <div className='flex flex-col items-center border-2 p-4 w-[40rem]  border-[#c6d6dd] rounded-md '>
                <h2 className='font-bold text-lg'>Merefsa, Barcelona</h2>
                <small>Abr 2021 - Ago 2022</small>
                <p>Mozo de almacén</p>
            </div>
            <div className='flex flex-col items-center border-2 p-4 w-[40rem]  border-[#c6d6dd] rounded-md '>
                <h2 className='font-bold text-lg'>Condis Supermercats, Barcelona</h2>
                <small>Feb 2018 - Mar 2021</small>
                <p>Cajero repositor polivalente </p>
            </div>
            <div className='flex flex-col items-center border-2 p-4 w-[40rem]  border-[#c6d6dd] rounded-md '>
                <h2 className='font-bold text-lg'>Servicios y Mantenimientos, Rosario, Santa Fe, Argentina</h2>
                <small>Mar 2009 - Dic 2017</small>
                <p>Técnico electricista</p>
            </div>
            <div className='flex flex-col items-center border-2 p-4 w-[40rem]  border-[#c6d6dd] rounded-md '>
                <h2 className='font-bold text-lg'>Modelo Electro S.A., Rosario, Santa Fe, Argentina</h2>
                <small>Abr 2006 - Feb 2009</small>
                <p>Administrativo</p>
            </div>
        </div>
        <div className="flex items-end">
            <img src={experiecialaboral} alt='avatar' className="h-72" />
        </div>
    </main>
}
export default Experiencia