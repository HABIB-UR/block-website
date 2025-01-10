
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from "next/link";

export default  async function Blog(){

    interface Data{
        title:string;
        description:string;
        image: SanityImageSource;
        currentSlug:string;
    }
  
 const data:Data[]=await client.fetch(`*[_type=="blog"]{
  title,
  description,
image,
  "currentSlug":slug.current
}`)
    return(
        <div className="">
            <div>
                <h1 className="font-semibold text-3xl text-center pt-11">Featured Blogs</h1>
                <p className="text-center mt-2 text-xl">Explore our latest stories and blogs</p>
            </div>
            <div className="grid grid-cols-2 md:ml-32 w-[400px] md:w-4/5 border 2 solid  h-full mr-4 mb-20  mt-10">
            {data.map((habib)=>{
                return(
                    
                    <div className="" key={habib.title}>
                            <Image className="ml-2  md:ml-6 mt-3" width={400} height={400} src={urlFor(habib.image).url()} alt="{habib.title}"/>
                            <h1 className="md:ml-8 ml-3 text-blue-400 mt-4">{habib.title}</h1>
                           <p className=" ml-5">{habib.description}</p>
                         
                           
                           <Link href={`/dynamic/${habib.currentSlug}`}>
                           <button className="ml-9 px-3 py-2 mt-3 bg-blue-400">READ MORE</button>
                           </Link>
                           
                    
                   </div> 
            
                )
            })}
            </div>
        </div>
    )
}