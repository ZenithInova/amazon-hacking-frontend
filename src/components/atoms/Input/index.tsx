import { IoIosSearch } from 'react-icons/io'

const Input = () => {
    return (
        <div className='flex justify-center items-center max-w-[295px] gap-6 p-[10px] border-b border-b-white'>
            <input
                type='text'
                placeholder='Pesquisar por nome da solução'
                className='placeholder:text-white text-white bg-transparent w-full outline-none text-base tracking-[0.192px]'
            />
            <IoIosSearch size={22} className='text-white' />
        </div>
    )
}

export default Input
