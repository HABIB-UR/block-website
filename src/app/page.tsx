import Image from "next/image"

       
    
export default function Home (){
  return(
    <div className="h-screen bg-blue-400 md:flex justify-between">
      <div className="">
      <div className="flex md:block">
      <h1 className="font-bold text-xl ml-8  md:text-5xl pt-10 md:pt-24 md:ml-14 text-blue-900">
        Welcome to official
      </h1>
      
      <h1 className="font-bold md:text-5xl  ml-2 text-xl md:ml-16 mt-10 md:mt-2 text-blue-900">
        MedicoAI Website
      </h1>
        </div>
        <div className="md:ml-12 md:mt-5  w-full md:block  ml-3  md:text-xl text-gray-800 mt-5 ">
          <p >Welcome to the worlds first AI-powered medical hospital</p>
          <p>Place where Technology meets humanity to transform lives</p>
        </div>
        <div>
          <button className="ml-12 mt-10 text-xl border 2 solid border-white py-2 px-4 text-white bg-slate-400 hover:bg-blue-900">Explore More  </button>
        </div>
        </div>
        <div className="mt-24 md:mr-10  ">
          <Image width={600} height={600} src="/doc.jpg"alt="doctor-image"/>
        </div>
    </div>
  )
}
