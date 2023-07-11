import ImageSectCont from "./ImageSectCont"

function Section({ reverse, image }) {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} mt-20 justify-between px-5 items-center`}>
            <div className="flex-col justify-end w-1/2 py-3 space-y-4">
                <h1 className="text-5xl font-bold text-blue-950">Grace, Knowledge <br />and Wisdom</h1>
                <h1 className="text-slate-400">
                    If you’re developing themes or just need to mock-up your new page with some Loren Ipsum dummy text, check out these easy to use WordPress plug-ins. Drop the files in your plug-ins directory and active them via the admin menu.
                </h1>
            </div>
            <ImageSectCont reverse={reverse} image={image} />
        </div>
    )
}

export default Section