import Link from "next/link"

export default function Header(){
    return(
        <header className="flex justify-between bg-blue-700 h-16 ">
            <div className="flex ml-14 mt-5 font-bold text-2xl text-white hover:underline">
                <h1 className="text-green-950">Medico</h1><h1 className="text-white">AI</h1>
            </div>
            <nav className="">
                <ul className="flex space-x-10 mt-5 text-white text-xl ">
                    <li className="hover:underline">
                        <Link href="/">HOME</Link>
                    </li>
                    <li  className="hover:underline">
                        <Link href="/about">About</Link>
                    </li>
                    <li  className="hover:underline">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li  className="hover:underline">
                        <Link className="mr-10" href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}