import { useNavigate } from "react-router-dom";
import {CheckCircle} from "lucide-react";
import { FaUnity, FaCode } from "react-icons/fa";
import { GiAtom } from "react-icons/gi";
import { MdDashboardCustomize } from "react-icons/md";
import SmoothImg from "/Smoothgameplay.png"
import MultiplayerImg from "/localmultiplayer.png"
import CollisionImg from "/accuratecollision.png"
import {useRef, useState} from "react";
import {animate} from "animejs";

export default function ProjectGame({ accent }) {
    const [showDemo, setShowDemo] = useState(false);
    const navigate = useNavigate();
    const cardRef = useRef(null);

    const handleHover = () => {
        animate(cardRef.current, {
            rotate: 0,
            scale: 1.15,
            duration: 500,

            easing: "easeOutQuad",
        });
    };
    const handleLeave = () => {
        animate(cardRef.current, {
            rotate: 6,
            scale: 1,
            duration: 500,
            easing: "easeOutQuad",
        });
    };

    const tech = [
        {
            name: "Unity",
            desc: "Built the core game environment using Unity, handling rendering, scene management, and the complete gameplay loop.",
            icon: <FaUnity />
        },
        {
            name: "C#",
            desc: "Developed game logic including player controls, scoring system, and real-time interactions using C# scripting.",
            icon: <FaCode />
        },
        {
            name: "Game Physics",
            desc: "Implemented precise ball movement, collision detection, and realistic rebound angles for smooth and consistent gameplay.",
            icon: <GiAtom />
        },
        {
            name: "UI System",
            desc: "Designed a clean and intuitive interface with real-time score updates and smooth user feedback for better experience.",
            icon: <MdDashboardCustomize />
        }
    ];

    const features = [
        {
            title: "Smooth Gameplay",
            desc: "Responsive paddle controls with consistent ball speed and movement.",
            image: SmoothImg
        },
        {
            title: "Local Multiplayer",
            desc: "Two-player gameplay on a single system for competitive matches.",
            image: MultiplayerImg
        },
        {
            title: "Accurate Collision",
            desc: "Precise collision detection ensuring realistic rebounds and angles.",
            image: CollisionImg
        }
    ];


    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto space-y-32">

            {/* ================= HERO ================= */}
            <section className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10 p-10" id="game">

                <video
                    autoPlay
                    loop = {true}
                    muted = {true}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/src/assets/7914778-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#070414] to-transparent"/>

                <div className="absolute bottom-10 left-10 max-w-xl ">
                    <span
                        className="text-xs px-3 py-1 rounded-full font-mono"
                        style={{ background: `${accent}20`, color: accent }}
                    >
                        GAME DEVELOPMENT PROJECT
                      </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-relaxed tracking-tight">
                        <span className="md:whitespace-nowrap">2D Multiplayer </span>
                        <br/>
                        <span style={{ color: accent }}>Game</span>
                    </h1>

                    <p className="text-gray-400 mt-4">
                        A personal project focused on building a classic Pong game with smooth gameplay, responsive controls, and real-time interaction in an offline multiplayer setup.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => setShowDemo(true)}
                            className=" text-black font-semibold transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
                            style={{ background: accent, boxShadow: `0 5px 20px ${accent}40`  }}
                        >
                            🎥 Project Demo
                        </button>

                    </div>
                </div>
            </section>

            {/* ================= CHALLENGE ================= */}
            <section className="grid md:grid-cols-3 gap-10 items-start">

                <div className="md:col-span-2">
                    <p className=" font-mono text-xs mb-3 tracking-widest font-semibold" style={{ color: accent }}>
                        INTRODUCTION
                    </p>

                    <h2 className="text-3xl font-bold mb-12">
                        The Challenge
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed ">
                        Building a seemingly simple game like Pong involves far more complexity than it appears at first glance.
                        The main challenge was ensuring smooth paddle movement and accurate collision detection without breaking the natural flow of the game.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        Even small inaccuracies in collision logic or input handling could lead to unpredictable results,
                        affecting the overall experience. Achieving balanced gameplay for both players was also essential
                        to maintain fairness and engagement.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        The objective was to build a 2D multiplayer Pong game that delivers smooth interactions,
                        precise physics, and an enjoyable competitive experience.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-white/10 p-6 rounded-xl">
                    <h3 className="mb-6 font-bold leading-relaxed tracking-wide">Quick Stats</h3>

                    <ul className="text-xs text-gray-400 space-y-6 font-mono">
                        <li className="">ROLE </li> <span className="text-white text-sm font-semibold font-sans">Developer</span>
                        <li className="">TYPE </li><span className="text-white text-sm font-semibold font-sans">Game Development Project</span>
                        <li className="">TECHNOLOGIES </li><span className="text-white text-sm font-semibold font-sans">Unity · C#</span>
                        <li className="flex-1 h-[1px] bg-white/10"></li>
                        <li className="">PLATFORM </li><span className="text-white text-sm font-semibold font-sans" style={{color: accent}}>● Offline Multiplayer</span>
                    </ul>
                </div>

            </section>

            {/* ================= TECH ================= */}
            <section>
                <p className="text-xs mb-3 text-center font-mono tracking-widest font-semibold" style={{ color: accent }}>
                    THE ENGINE
                </p>

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Technological Foundation
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {tech.map((item, i) => (
                        <div
                            key={i}
                            className="h-full relative bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group"
                            style={{
                                borderColor: accent + "30"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = accent;
                                e.currentTarget.style.boxShadow = `0 0 25px ${accent}55`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = accent + "30";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-all group-hover:scale-110"
                                 style={{
                                     color: accent,
                                     background: accent + "15"
                                 }}
                            >
                                {item.icon}
                            </div>
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-gray-400 text-sm mt-2 tracking-wide">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section>
                <p className="text-xs mb-3 font-mono tracking-widest font-semibold text-shadow" style={{ color: accent }}>
                    CORE CAPABILITIES
                </p>

                <h2 className="text-3xl font-bold mb-12">
                    Innovation Highlights
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="group">

                            {/* IMAGE CARD */}
                            <div className="relative h-44 overflow-hidden transition-all w-full mb-4">

                                {/* IMAGE */}
                                <img
                                    src={f.image}
                                    alt="innovation highlights"
                                    className="absolute inset-0 w-full h-48 object-cover transition-transform duration-500 rounded-xl group-hover:scale-105 border"
                                    style={{ borderColor: accent + "30"}}
                                />

                            </div>

                            {/* TEXT BELOW */}
                            <h4 className="font-bold text-xl text-white mb-2 p-1 leading-relaxed">{f.title}</h4>
                            <p className="text-gray-400 text-sm p-1 leading-relaxed">{f.desc}</p>

                        </div>
                    ))}
                </div>
            </section>

            {/* ================= EXECUTION ================= */}
            <section className="relative grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div
                    className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] blur-[100px] opacity-25 pointer-events-none"
                    style={{background: `radial-gradient(ellipse, ${accent} 0%, transparent 65%)`}}
                />

                <div>
                    <p className="text-xs mb-3 font-mono tracking-widest font-semibold" style={{ color: accent }}>
                        IMPLEMENTATION
                    </p>

                    <h2 className="text-3xl font-semibold mb-12">
                        Execution & Architecture
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        The game was developed using Unity with a strong focus on performance and smooth gameplay.
                        Core mechanics such as paddle movement, ball physics, and scoring logic were implemented using C#
                        to ensure responsive and consistent interactions.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        The architecture was designed to be modular, separating input handling, physics calculations,
                        and rendering logic. This made the system easier to manage, debug, and extend for future improvements.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        Special attention was given to collision detection and frame consistency to maintain accurate ball
                        behavior and prevent glitches during fast-paced gameplay. Fine-tuning these systems ensured smooth
                        and reliable performance across sessions.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="relative group">
                    <div
                        className="absolute -inset-[2px] rounded-3xl blur-md opacity-40"
                        style={{
                            background: `linear-gradient(135deg, ${accent}, transparent)`
                        }}
                    />

                    {/* CARD */}
                    <div
                        ref={cardRef}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        className="relative w-full h-full rounded-3xl flex items-center justify-center
                     border border-white/10 backdrop-blur-xl transition-all"
                        style={{
                            background: `linear-gradient(135deg, ${accent}40, #111827)`
                        }}
                    >
                    <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded "
                          style={{ background: accent, color: "#000" }}>
                          PREVIEW
                    </span>
                    <video
                        src="/workingproject.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full p-3 h-full object-cover rounded-3xl"
                    />
                    </div>
                    </div>
                </div>

            </section>

            {/* ================= LEARNINGS ================= */}
            <section className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                     style={{
                         borderColor: accent + "30"
                     }}
                     onMouseEnter={(e) => {
                         e.currentTarget.style.borderColor = accent;
                         e.currentTarget.style.boxShadow = `0 0 25px ${accent}55`;
                     }}
                     onMouseLeave={(e) => {
                         e.currentTarget.style.borderColor = accent + "30";
                         e.currentTarget.style.boxShadow = "none";
                     }}
                >
                    <h2
                        className="text-xl font-semibold mb-4"
                        style={{ color: accent }}>Key Learnings
                    </h2>

                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Strong understanding of game physics and collision systems
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                                Handling real-time user input with smooth responsiveness
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Designing efficient and optimized game loop structures
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                                Practical experience with Unity and C# scripting
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                                Debugging and refining gameplay mechanics
                            </span>
                        </li>

                    </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                     style={{
                         borderColor: accent + "30"
                     }}
                     onMouseEnter={(e) => {
                         e.currentTarget.style.borderColor = accent;
                         e.currentTarget.style.boxShadow = `0 0 25px ${accent}55`;
                     }}
                     onMouseLeave={(e) => {
                         e.currentTarget.style.borderColor = accent + "30";
                         e.currentTarget.style.boxShadow = "none";
                     }}
                >
                    <h2 className="text-xl font-semibold mb-4"
                        style={{ color: accent }}>
                        Challenges Faced
                    </h2>

                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Maintaining consistent and realistic ball physics

                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                               Ensuring responsive and lag-free player input

                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                               Achieving precise collision detection and rebounds

                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Gameplay balancing
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Gameplay balancing
                            </span>
                        </li>
                    </ul>
                </div>

            </section>

            {/* ================= NEXT PROJECT ================= */}
            <section className="relative rounded-2xl p-12 text-center border border-white/10 overflow-hidden">

                <img
                    src="/src/assets/nextproject.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="relative z-10">
                    <p className="text-xs mb-2 " style={{ color: accent }}>
                        UP NEXT
                    </p>
                    <h2 className="text-3xl font-bold">
                        Movie <span style={{ color: accent }}>Recommendation </span> System
                    </h2>
                    <div className="flex justify-center mt-4 gap-x-96">
                        <button
                            onClick={() => navigate("/project/cce")}
                            className="text-sm font-medium flex items-center gap-2 group"
                            style={{ color: accent }}
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">
                                    ←
                            </span>
                            Previous Project
                        </button>
                        <button
                            onClick={() => navigate("/project/movie")}
                            className="text-sm font-medium flex items-center gap-2 group"
                            style={{ color: accent }}
                        >
                            Next Project
                            <span className="group-hover:translate-x-1 transition-transform">
                                    →
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {showDemo && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] p-8 rounded-xl w-[500px] border border-white/10">

                        <h2 className="text-xl font-semibold mb-4">Project Demo</h2>

                        <div className="bg-black h-[200px] rounded-lg flex items-center justify-center text-gray-400 text-center px-4">
                            This project features real-time multiplayer gameplay with a custom-built
                            collision system and smooth physics handling.<br /><br />
                            The interactive demo runs locally and demonstrates core gameplay mechanics.
                        </div>

                        <div className="flex justify-between mt-6">

                            <a
                                href="https://github.com/MGMANISH001/Game-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                                style={{
                                    background: accent,
                                    color: "#000",
                                    boxShadow: `0 0 20px ${accent}80`
                                }}
                            >
                                💻 Github!
                            </a>

                            <button
                                onClick={() => setShowDemo(false)}
                                className="px-4 py-2 border border-white/20 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}