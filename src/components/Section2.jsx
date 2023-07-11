import Image from "next/image"
import LadyImg from '../assets/pexels-katerina-holmes-5905861.jpg'

function Section2() {
    return (
        <div className="flex flex-row-reverse mt-20 justify-between px-5 items-center">
            <div className="flex-col w-1/2 justify-end space-y-4 py-3">
                <h1 className="text-5xl font-bold text-blue-950">Grace, Knowledge <br />and Wisdom</h1>
                <h1 className="text-slate-400">
                    If you’re developing themes or just need to mock-up your new page with some Loren Ipsum dummy text, check out these easy to use WordPress plug-ins. Drop the files in your plug-ins directory and active them via the admin menu.
                </h1>
            </div>
            <div className="flex w-1/2 justify-start">
                <div className="bg-yellow-500 m-5 w-72 h-72"></div>
                <div className="bg-blue-950 w-72 h-72 absolute overflow-hidden">
                    <Image src={LadyImg} alt="Image guy" className="w-full h-full object-fit p-1" />
                </div>
            </div>
        </div>
    )
}

export default Section2