import { Menu } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    
    
    
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export default function Header(){
    return(
        <header className="flex justify-between bg-blue-700 h-16 ">
            <div className="flex ml-4 md:ml-14 mt-5 font-bold text-2xl text-white hover:underline">
                <h1 className="text-green-950">Medico</h1><h1 className="text-white">AI</h1>
            </div>
            <nav className="">
                <ul className="   md:flex space-x-10 mt-5 text-white text-xl  ">
                <li  className="hover:underline hidden md:block">
                        <Link href="/">Home</Link>
                    </li>

                 <li  className="hover:underline hidden md:block">
                        <Link href="/about">About</Link>
                    </li>
                    <li  className="hover:underline hidden md:block">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li  className="hover:underline hidden md:block">
                        <Link className="mr-10" href="/contact">Contact</Link>
                    </li>
                </ul>
                <Sheet>
  <SheetTrigger className="md:hidden"> <Menu className="mr-4"/></SheetTrigger>
  <SheetContent>
  <ul className="">
  <li  className="mt-4 bg-blue-400">
                        <Link href="/">Home</Link>
                    </li>
                 <li  className="mt-4 bg-blue-400">
                        <Link href="/about">About</Link>
                    </li>
                    <li  className="mt-5 bg-blue-400">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li  className="mt-4 bg-blue-400">
                        <Link className="mr-10" href="/contact">Contact</Link>
                    </li>
                </ul>
     
    
  </SheetContent>
</Sheet>
            </nav>
        </header>
    )
}