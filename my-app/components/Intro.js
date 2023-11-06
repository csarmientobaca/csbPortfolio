import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap";


const Intro = () => {
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-slider", {
                xPercent: "0",
                duration: 0.5,
                delay: 0.2,
            })
                .from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5", "#title-6"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.4,
                })
                .to(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5", "#title-6"], {
                    opacity: 0,
                    y: "-=30",
                    stagger: 0.1,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 0.6,
                })
        }, comp)

        return () => ctx.revert()
    }, [])
    return (
        <div className="relative z-50" ref={comp}>
            <div
                id="intro-slider"
                className="textMarmol h-screen p-10 absolute top-0 left- z-40 w-full flex flex-col gap-10 tracking-tight"
            >
                <h1 className="text-9xl" id="title-1">
                    Full-Stack Web Developer
                </h1>
                <h1 className="text-9xl" id="title-2">
                    Perito Informatico
                </h1>
                <div className="flex-1 flex items-end " id="title-3">
                    <h1 className="-top-16 -right-72 divide-y divide-transparent text-9xl self-end transform rotate-90 absolute" >
                        React/Nextjs
                    </h1>
                </div>
                <h1 className="text-9xl absolute bottom-10" id="title-4">
                    Java
                </h1>
                <h1 className="text-9xl relative bottom-40" id="title-5">
                    Javascript
                </h1>
                <h1 className="text-9xl absolute bottom-96  " id="title-6">
                    Tailwind/Bootstrap
                </h1>
            </div>

        </div>
    )
}
export default Intro