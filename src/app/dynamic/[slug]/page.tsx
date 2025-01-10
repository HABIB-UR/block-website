
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from '@portabletext/react';

import Image from "next/image";


 

export default  async function Slug({params}:{params:Promise<{slug:string}> 
}){
   const {slug}= await params;
    const   data= await client.fetch(`*[_type=="blog" && slug.current=='${slug}']{
  image,
  title,
    content,
}[0]
  `)


console.log(data)

    return(
        <main className="h-screen ">
          <section>
            <div>
              <h1 className="text-center pt-6 text-xl md:text-3xl font-semibold">Get more information about our hospital.</h1>
            </div>
            <div className="">
              <Image className=" md:ml-6 mt-10 md:mt-20" width={800} height={500} src={urlFor(data.image).url()} alt="{habib.title}"/>
              
            </div>
            <div className=" mt-5 text-2xl ml-10 mb-5 text-blue-700 font-semibold underline"><h1>{data.title}</h1></div>
            <div className="ml-5 mb-10">
            <PortableText  value={data.content} />
            </div>
            <div>.</div>
          </section>
        </main>
        
        
    )

}