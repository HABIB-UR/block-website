import Image from "next/image"



export default function About(){
    return(
        <div>
            <div className="flex">
                <Image className="mt-5" width={600} height={600} src="/doc-1.jpg"alt="doctor-image"/>
                <div className="">
                <p className="mt-14 mr-10 ml-3">
                    Welcome to <b>Medico AI</b>,One of the first fully AI automated Hospital which provide 
                    computerized scaning of your body that leads to acurate results of body .AI scaning can tell 
                    even minor disease causing virus that is not detected by normal machines,which is also not visible
                    by ordinary microscope or  advance microscope.With the advance of Ai in medical field
                    it  just take seconds to find disease and  can cure patient in just few minutes .  
                </p>
                <div>
        <h1 className="mt-4 font-semibold text-2xl ml-3">
            Some ground-Breaking technologies offered in our Hospital .
        </h1>
        <ul className="ml-3 mt-3">
            <li className="mt-3">
               * AI technology can detect heart-attack even when the syntoms is not appeard
            </li>
            <li className="mt-2">
                * AI radiation can change cancer cells to normal cells
            </li>
            <li className="mt-2">
               * Robotic surgery can lead to multiple operations ensuring safe and risk proof surgery.
            </li>
            <li className="mt-2">
                * Artifical eye implantation can turn a blind person to a person with fill vision
            </li>
        </ul>
        </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl font-bold mt-7">Our mission</h1>
                <p className="text-center">Our mission is to provide patients with best medical treatment in little or no fees 
                    so that every one can take benefit from it.
                     </p>
                     <p className="text-center">
                        we have world class robotic treatment and best doctors from all around the world .Our main focus is to help patient

                     </p>
                     <p className="text-center">
                        to recover from any medical problem with the help of AI and latest technologies.
                     </p>

            </div>
            <div>
                <h1 className="text-center font-bold text-3xl mt-3">Our Main Branches</h1>
                <p className="text-center mt-3 font-semibold"> medicoAI has three main branches all around the world</p>
                <ul className="text-center mt-3">
                    <li>
                        West hollywood,LA california ,USA
                    </li>
                    <li className="mt-2">
                        245 street ,Toronto ,canada
                    </li>
                    <li className="mt-2">
                        Al-shekh calony,dubai,UAE
                    </li>
                </ul>
            </div>
        </div>
    )
}