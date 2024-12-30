export default function AuthLayouts({children, title}) {
    return(
        <div className="min-w-full min-h-screen flex">
            <div className="p-6 rounded bg-slate-200 m-auto">
                <h1 className="text-3xl text-center font-semibold mb-6">{title}</h1>
                {children}
            </div>
        </div>
    )
}