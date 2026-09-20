import { FaReact, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiDjango, SiFigma, SiWebpack, SiWebstorm } from "react-icons/si"
import { MdAnimation, MdCss, MdHtml, MdJavascript, MdGroups, MdOutlineLightbulb, MdSettings, MdChat } from "react-icons/md"
import { IoCubeOutline } from "react-icons/io5";
import {useEffect} from "react";
import {animate, stagger} from "animejs";


export default function Skills({ accent }) {
    useEffect(() => {
        animate('.progress-bar', {
            width: (el) => el.dataset.width,
            duration: 1200,
            easing: 'easeOutExpo',
            delay: stagger(150)
        });

        animate(".section", {
            opacity: [0, 1],
            translateY: [40, 0],
            delay: stagger(100),
            easing: "easeOutExpo"
        })

    }, []);

    const frontendCore = [
        {
            title: "HTML5",
            desc: "Semantic markup, accessibility, and SEO-friendly structure.",
            tag: "Expert",
            icon: <MdHtml/>
        },
        {
            title: "CSS3 / Tailwind",
            desc: "Responsive layouts, modern UI design, and utility-first styling.",
            tag: "Expert",
            icon: <MdCss/>
        },
        {
            title: "JavaScript (ES6+)",
            desc: "Async logic, DOM manipulation, and performance optimization.",
            tag: "Advanced",
            icon: <MdJavascript/>
        },
        {
            title: "React",
            desc: "Component-based architecture, hooks, and state management.",
            tag: "Advanced",
            icon: <IoCubeOutline />
        }
    ]

    const frameworks = [
        {
            name: "React",
            desc: "Hooks, Context, Performance",
            progress: "80%",
            icon: <FaReact />
        },
        {
            name: "Tailwind CSS",
            desc: "Utility-first, Custom Themes",
            progress: "90%",
            icon: <SiTailwindcss />
        },
        {
            name: "Anime.js",
            desc: "Animations, Micro-interactions",
            progress: "80%",
            icon: <MdAnimation />
        },
        {
            name: "Django REST",
            desc: "API integration, Backend",
            progress: "65%",
            icon: <SiDjango />
        },
        {
            name: "Figma",
            desc: "UI Design, Prototyping",
            progress: "75%",
            icon: <SiFigma />
        }
    ]

    const tools = [
        {
            name: "Git & GitHub",
            desc: "Version control, collaboration, and project management.",
            icon: <FaGitAlt />
        },
        {
            name: "Figma",
            desc: "UI/UX design, prototyping, and design systems.",
            icon: <SiFigma />
        },
        {
            name: "WebStorm",
            desc: "Powerful IDE for modern JavaScript and React development.",
            icon: <SiWebstorm />
        },
        {
            name: "Vite & Webpack",
            desc: "Build optimizations, Module bundling",
            icon: <SiWebpack />
        }
    ]

    const softSkills = [
        {
            name: "Problem Solving",
            desc: "Breaking down complex UI and logic challenges.",
            icon: <MdGroups />
        },
        {
            name: "Communication",
            desc: "Clear collaboration with designers and developers.",
            icon: <MdOutlineLightbulb />
        },
        {
            name: "Adaptability",
            desc: "Quickly learning new tools and technologies.",
            icon: <MdSettings />
        },
        {
            name: "Attention to Detail",
            desc: "Pixel-perfect UI and smooth user experience.",
            icon: <MdChat />
        }
    ]

    const learning = [
        "Advanced React Patterns",
        "UI Animations & Micro-interactions",
        "Frontend Performance Optimization"
    ]

    /* ================= UI ================= */

    return (
        <section className="section bg-gradient-to-b from-[#070414] to-[#0f172a] text-white px-6 md:px-16 lg:px-24 py-24">

            <div className="container">

                <div className="mb-24">
                    <span
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{ borderColor: accent, color: accent }}
                    >
                        TECH STACK 2024
                    </span>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight ">
                        Technical <span style={{
                            color: accent,
                            textShadow: `0 0 25px ${accent}40`,
                        }}>Arsenal</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-3xl">
                        A comprehensive breakdown of the languages, frameworks, and tools I use to engineer high-performance web applications and seamless user experiences.
                    </p>
                </div>




                <h3 className=" flex items-center gap-4 text-2xl font-bold text-gray-300 mb-10">
                    <span className="tracking-wide">Frontend Core</span>
                    <span className="flex-1 h-[1px]"
                    style={{ background: `${accent}30` }}>
                    </span>
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {frontendCore.map((item, i) => (
                        <div key={i} className=" border p-6 rounded-xl hover:-translate-y-1 hover:scale-[1.03] group duration-300 transition-all mb-4 "
                        style={{background: accent + "10", borderColor: accent + "40"}}>

                            <span style={{ color: accent }} className="text-4xl">
                                {item.icon}
                            </span>

                            <h4 className="font-semibold mt-4">{item.title}</h4>

                            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

                            <span
                                className="text-xs mt-3 inline-block px-2 py-1 rounded"
                                style={{ background: `${accent}20`, color: accent }}
                            >
                                {item.tag}
                            </span>

                        </div>
                    ))}
                </div>




                <h3 className=" flex items-center gap-4 text-2xl font-bold text-gray-300 mb-10">
                    <span className="tracking-wide">Framework & Libraries</span>
                    <span className="flex-1 h-[1px]"
                          style={{ background: `${accent}30` }}>
                    </span>
                </h3>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
                    {frameworks.map((item, i) => (
                        <div
                            key={i}
                            className=" border border-white/10 p-6 rounded-xl hover:-translate-y-1 hover:scale-[1.03] backdrop-blur-md transition-all"
                            style={{ background: "#0f172a"}}
                            onMouseEnter={(e)=>{
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.background = accent + "10"
                                e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                            }}
                            onMouseLeave={(e)=>{
                                e.currentTarget.style.borderColor = accent + "40"
                                e.currentTarget.style.background = "#0f172a"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            <div style={{ color: accent }} className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                                {item.icon}
                            </div>

                            <h4 className="text-lg font-semibold">{item.name}</h4>

                            <p className="text-sm text-gray-400 mt-1">{item.desc}</p>

                            <div className="w-full bg-white/10 h-1 rounded mt-4">
                                <div className="progress-bar h-1 rounded"
                                     data-width={item.progress}
                                     style={{ width: "0%", background: accent }}>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* TOOLS + SOFT */}
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-stretch">

                    {/* TOOLS */}
                    <div className="h-full flex flex-col">
                        <h3 className="flex items-center gap-4 text-2xl font-bold text-gray-300 mb-10">
                            <span className="tracking-wide">Tools & Workflow</span>
                            <span className="flex-1 h-[1px]"
                                  style={{ background: `${accent}30` }}>
                            </span>
                        </h3>

                        <div className="space-y-4 flex-1 mb-24">
                            {tools.map((item, i) => (
                                <div key={i} className="bg-[#0f172a] border border-white/10 p-4 rounded-lg flex items-center gap-4 hover:-translate-y-1 hover:scale-[1.03] transition-all"
                                     style={{ background: "#0f172a"}}
                                     onMouseEnter={(e)=>{
                                         e.currentTarget.style.borderColor = accent
                                         e.currentTarget.style.background = accent + "10"
                                         e.currentTarget.style.boxShadow = `0 0 12px ${accent}55`
                                     }}
                                     onMouseLeave={(e)=>{
                                         e.currentTarget.style.borderColor = accent + "40"
                                         e.currentTarget.style.background = "#0f172a"
                                         e.currentTarget.style.boxShadow = "none"
                                     }}>

                                    <span className="text-xl"
                                    style={{color: accent}}>
                                        {item.icon}
                                    </span>
                                    <span>
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SOFT SKILLS */}
                    <div className="h-full flex flex-col ">
                        <h3 className="flex items-center gap-4 text-2xl font-bold text-gray-300 mb-10">
                            <span className="tracking-wide">Soft Skills</span>
                            <span className="flex-1 h-[1px]"
                                  style={{ background: `${accent}30` }}>
                            </span>
                        </h3>

                        <div className=" grid grid-cols-2 gap-4 flex-1 auto-rows-fr mb-24">
                            {softSkills.map((item, i) => (
                                <div key={i} className="h-full relative bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group"
                                style={{background: accent + "10", borderColor: accent + "40" }}>

                                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: accent, background: `${accent}20` }}>
                                        {item.icon}
                                    </div>
                                    <h4 className=" font-semibold mb-2 text-white group-hover:text-white">{item.name}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* LEARNING */}
                <div className=" border rounded-xl p-6 mb-24"
                style={{ background: accent + "10", borderColor: accent + "40",boxShadow: `0 0 60px ${accent}10` }}>

                    <h3 className="text-2xl font-bold text-gray-300 mb-6 tracking-wide">Continuous Learning</h3>

                    <p className="text-gray-400 mb-4">
                        The web ecosystem moves fast. Here are the technologies I'm currently diving into to expand my frontend horizons and stay ahead of the curve.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {learning.map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 font-semibold rounded-lg text-sm group border hover:translate-y-1 hover:scale-[1.03] transition-all duration-300"
                                style={{ borderColor: accent + "40" }}
                            >
                {item}
              </span>
                        ))}
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Interested in a <span style={{ color: accent }}>collaboration?</span>
                    </h2>

                    <p className="text-gray-400 mt-4 mb-16">
                        I'm always open to discussing new projects, creative ideas or
                        opportunities to be part of your visions.
                    </p>

                    <div className="flex justify-center gap-4 mt-12">
                        <button className=" text-white transition px-6 py-3 rounded-lg  shadow-lg transform hover:scale-105 font-semibold " style={{ boxShadow: `0 10px 30px ${accent}50`, background: accent, color: "#000", border: "1px solid rgba(255,255,255,0.2)" }}>
                            View my Work
                        </button>

                        <button className="border transition rounded-lg shadow-lg hover:scale-105 px-6 py-3 " style={{  boxShadow: `0 5px 20px ${accent}40` }}>
                            Get in Touch
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}