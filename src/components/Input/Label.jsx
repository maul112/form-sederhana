export default function Label({children, htmlfor}) {
    return (
        <label htmlFor={htmlfor} className='block text-gray-700 text-sm font-bold mb-2'>{children}</label>
    )
}