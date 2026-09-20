import { animate } from "animejs";
import { useEffect, useRef } from "react";
export default function Hero({accent}) {

    const codeRef = useRef(null);

    useEffect(() => {


        if (!codeRef.current) return;
        const code = `const developer = {
      Name: "Manish Gupta",
      Role: "Frontend Developer",
      Experience: "React • Tailwind • JavaScript",
      Passion: "Building modern web interfaces"
    }`;

        animate(".code-card", {
            translateY: [0, -8],
            direction: "alternate",
            loop: false,
            easing: "ease-in-out",
            duration: 2000
        });


        codeRef.current.textContent = ""; // reset

        let index = 0;

        const typing = setInterval(() => {

            if (index < code.length) {
                codeRef.current.textContent += code[index];
                index++;
            } else {
                clearInterval(typing);
            }

        }, 40);

        return () => clearInterval(typing);

    }, []);

    return (
        <section className="bg-[#070414] px-6 md:px-16 lg:px-24 py-24">

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>

                <span className="border font-mono font-semibold inline-block text-xs border-opacity-35 tracking-widest mb-4 bg-opacity-35 rounded-full px-4 " style={{
                    borderColor: accent,
                    color: accent,
                    backgroundColor: accent + "15"
                }}>
                    AVAILABLE FOR NEW PROJECTS
                </span>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight">
                        Crafting <br/> <span className=" py-1 rounded"  style={{
                        backgroundColor: `accent + "20", transparent`,
                        color: accent
                    }}>Digital</span><br/>Experiences
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-lg text-justify">
                        Frontend Developer specialized in building scalable, high-performance web applications with a focus on user-centric design and modern architecture.</p>

                    <div className="flex gap-4 mt-8">
                        <button className=" text-white transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 " style={{ background: accent, boxShadow: `0 5px 20px ${accent}40` }}>
                            View my Work
                        </button>

                        <button className="border transition rounded-lg shadow-lg hover:scale-105 px-6 py-3 " style={{ borderColor: accent, color: accent, boxShadow: `0 5px 20px ${accent}40` }}>
                            Contact Me
                        </button>
                    </div>
                </div>



            <div className="flex justify-center ">
                <div className="code-card border  rounded-xl  w-full max-w-xl p-5" style={{ background: accent + "10", borderColor: accent + "40" , boxShadow: `0 0 70px ${accent}10` }}>

                    <div className="flex gap-2 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>

                    <pre
                        ref={codeRef}
                        className="text-xs md:text-sm text-green-500 font-mono leading-relaxed ">
                    </pre>
                    <span className=" animate-pulse text-green-500">|</span>
                </div>
            </div>
            </div>

        </section>
    )
}