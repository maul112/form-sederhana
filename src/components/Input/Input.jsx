export default function Input({type, name, placeholder}) {
    return (
        <input className='border-2 block border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' type={type} id={name} name={name} placeholder={placeholder} />
    )
}