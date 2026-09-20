import { useEffect } from "react"
import { animate } from "animejs"
import { IoLogoJavascript, IoMdColorPalette } from "react-icons/io";
import { MdCss, MdTerminal, MdAnimation } from "react-icons/md";
import { SiFramework } from "react-icons/si";
import {FiStar} from "react-icons/fi";


export default function Skills({ accent }) {

    useEffect(() => {
        animate(".skill-card",{
            opacity: [0, 1],
            duration: 800,
            delay: (el,i)=>i*120,
            easing: 'easeOutExpo'
        })
    }, []);

    const skills = [
        { name: "React", icon: <MdTerminal size={28}/> },
        { name: "JavaScript", icon: <IoLogoJavascript size={28}/> },
        { name: "Tailwind", icon: <MdCss size={28}/> },
        { name: "Django REST", icon: <SiFramework size={28}/> },
        { name: "Figma", icon: <IoMdColorPalette size={28}/> },
        { name: "Anime.js", icon: <MdAnimation size={28}/> },
    ]

    return (
        <section className="bg-gradient-to-b from-[#0f172a] to-[#070414] px-6 md:px-16 lg:px-24 py-24 ">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center ">
                <div>

                    <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>

                    <p className="text-gray-400 leading-relaxed mb-8 text-justify">
                        Over the years, I've cultivated a diverse set of technical skills aimed at creating robust, scalable, and visually stunning web applications. I believe in choosing the right tool for the job.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">

                        <div
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] group "
                            style={{
                                borderColor: accent + "40"
                            }}
                            onMouseEnter={(e)=>{
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                            }}
                            onMouseLeave={(e)=>{
                                e.currentTarget.style.borderColor = accent + "40"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >

                            <FiStar style={{color:accent}}
                                    className="transition-transform duration-300 group-hover:scale-125"
                            />
                            <span>Problem Solving</span>

                        </div>

                        <div
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] "
                            style={{
                                borderColor: accent + "40"
                            }}
                            onMouseEnter={(e)=>{
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                            }}
                            onMouseLeave={(e)=>{
                                e.currentTarget.style.borderColor = accent + "40"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >

                            <span>⚡</span>
                            <span>Performance Optimization</span>

                        </div>

                        <div
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                            style={{
                                borderColor: accent + "40"
                            }}
                            onMouseEnter={(e)=>{
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                            }}
                            onMouseLeave={(e)=>{
                                e.currentTarget.style.borderColor = accent + "40"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >

                            <span>📱</span>
                            <span>Responsive Design</span>

                        </div>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="skill-card  border rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-[1.03]"
                            style={{
                                borderColor: accent + "30", backgroundColor: "#0f172a"
                            }}
                            onMouseOver={(e)=>{
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.backgroundColor = accent + "10"
                                e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                            }}
                            onMouseOut={(e)=>{
                                e.currentTarget.style.borderColor = accent + "50"
                                e.currentTarget.style.backgroundColor = "#0f172a"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            <div className="transition-transform duration-300 group-hover:scale-125 "
                                 style={{color: accent}}>{skill.icon}</div>
                            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-white">{skill.name}</h3>
                        </div>
                    ))}
            </div>
            </div>
        </section>
    )
}