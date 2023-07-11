import Image from "next/image"

function ImageSectCont({ reverse, image }) {
    return (
        <div className={`flex ${reverse ? 'justify-start' : 'justify-end'} w-1/2`}>
            <div className="m-5 bg-yellow-500 w-72 h-72"></div>
            <div className="absolute overflow-hidden bg-blue-950 w-72 h-72">
                <Image src={image} alt="Image guy" className="w-full h-full p-1 object-fit" />
            </div>
        </div>
    )
}

export default ImageSectCont
