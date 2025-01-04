import Image from "next/image"

       
    
export default function Home (){
  return(
    <div className="h-screen bg-blue-400 flex justify-between">
      <div className="">
      <div className="">
      <h1 className="font-bold text-5xl pt-24 ml-14 text-blue-900">
        Welcome to official
      </h1>
      
      <h1 className="font-bold text-5xl ml-16 mt-4 text-blue-900">
        MedicoAI Website
      </h1>
        </div>
        <div className="ml-12 mt-5 text-xl text-gray-800">
          <p>Welcome to the worlds first AI-powered medical hospital</p>
          <p>Place where Technology meets humanity to transform lives</p>
        </div>
        <div>
          <button className="ml-12 mt-10 text-xl border 2 solid border-white py-2 px-4 text-white bg-slate-400 hover:bg-blue-900">Explore More  </button>
        </div>
        </div>
        <div className="mt-24 mr-10">
          <Image width={600} height={600} src="/doc.jpg"alt="doctor-image"/>
        </div>
    </div>
  )
}
