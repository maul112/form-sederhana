export default function Button({children, color}) {
    return (
        <button className={`${color} text-white font-semibold py-2 px-4 m-auto rounded block w-full`}>
            {children}
        </button>
    )
}