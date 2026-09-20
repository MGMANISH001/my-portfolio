import { useEffect } from "react"
import { animate } from "animejs"
import collabImg from "../assets/projects/CCP.png";
import gameImg from "../assets/projects/GD.png";
import moviesImg from "../assets/projects/MRS.png";
import { useNavigate } from "react-router-dom";

export default function Projects({accent}) {

    useEffect(() => {
        animate(".project-card", {
            translateY: [50, 0],
            opacity: [0, 1],
            delay: (el, i) => i * 150,
            duration: 400,
            easing: "ease-in-out",
        })
    }, []);

    const navigate = useNavigate();

    const projects = [
        {
            title: "Collaborative Coding Environment",
            id: "cce",
            desc: "A real-time collaborative platform that enables students to write, edit, and debug code together.",
            tech: ["React", "Tailwind", "Django-REST"],
            image: collabImg
        },

        {
            title: "2D Multiplayer Game",
            id: "game",
            desc: "A 2D offline multiplayer game focused on delivering smooth gameplay and engaging user interaction.",
            tech: ["Unity", "C#"],
            image: gameImg
        },
        {
            title: "Movie Recommendation System",
            id: "movie",
            desc: "Developed and optimized recommendation algorithms.",
            tech: ["Python", "Machine Learning", "EDA"],
            image: moviesImg
        }
    ]

    return (
        <section className="bg-gradient-to-b from-[#070414] to-[#0f172a] w-full gap-16 px-6 md:px-16 lg:px-24 py-24">
            <div className="container">
            <div className="relative mb-16 text-center">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2 blur-[120px] opacity-20"
                     style={{
                         background: accent,
                         width: "350px",
                         height: "350px",
                         borderRadius: "50%"
                     }}></div>
                <h2 className="text-4xl font-bold">Featured Projects</h2>
                <div className="w-44 h-1 mx-auto mt-4 rounded-full"
                 style={{ background: accent }}
                ></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

                {projects.map((project, i) => (
                    <div
                        key={i}
                    className="project-card relative bg-[#0f172a] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
                    style={{ borderColor: accent + "30"}}>
                        
                        <div className="overflow-hidden">
                            <img src={project.image} alt={project.title}
                            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className="p-6 pb-12">
                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                            <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span key={i}
                                    className="px-3 py-1 text-xs rounded-md"
                                    style={{ background: accent + "20", color: accent}}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => navigate(`/project/${project.id}`)}
                                    className="absolute bottom-5 left-6 text-sm font-medium flex items-center gap-2 group"
                                    style={{ color: accent }}
                                >
                                    View Project
                                    <span className="group-hover:translate-x-1 transition-transform">
                                    →
                                  </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}