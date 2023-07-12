import Image from "next/image"

function ImageSectCont({ reverse, image }) {
    return (
        <div className={`flex ${reverse ? 'justify-start' : 'justify-end'} w-1/2`}>
            <div className="m-5 bg-yellow w-96 h-96"></div>
            <div className="absolute overflow-hidden bg-darkBlue w-96 h-96">
                <Image src={image} alt="Image guy" className="w-full h-full p-1 object-fit" />
            </div>
        </div>
    )
}

export default ImageSectCont
