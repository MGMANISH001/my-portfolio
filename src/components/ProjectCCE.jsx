import {useState, useEffect, useRef} from "react";
import {animate} from "animejs";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import { BsWifi } from "react-icons/bs";
import RealTimeImg from "/Realtime.png"
import CollabDebugImg from "/Collabdebug.png"
import VersionImg from "/Version.png"
import { CheckCircle } from "lucide-react";



export default function ProjectCCE({ accent }) {

    const [showDemo, setShowDemo] = useState(false);
    const [showReport, setShowReport] = useState(false);
    const navigate = useNavigate();
    const cardRef = useRef(null);

    useEffect(() => {
        animate(cardRef.current, {
            translateY: [0, -12, 0],
            rotate: [6, 6],
            duration: 4000,
            easing: "easeInOutSine",
            loop: true,
        });
    }, []);

    const handleHover = () => {
        animate(cardRef.current, {
            rotate: 0,
            scale: 1.05,
            duration: 400,
            easing: "easeOutQuad",
        });
    };
    const handleLeave = () => {
        animate(cardRef.current, {
            rotate: 6,
            scale: 1,
            duration: 400,
            easing: "easeOutQuad",
        });
    };

    const tech = [
        {
            name: "React",
            desc: "Built scalable UI using reusable components and hooks. Focused on performance optimization and clean architecture for dynamic applications.",
            icon: <FaReact />
        },
        {
            name: "Tailwind CSS",
            desc: "Designed responsive interfaces with utility-first styling. Ensured consistency and faster development across modern web applications.",
            icon: <SiTailwindcss />
        },
        {
            name: "WebSockets",
            desc: "Enabled real-time communication for instant data sync. Used for live updates and seamless multi-user interactions.",
            icon: <BsWifi />
        },
        {
            name: "Django REST",
            desc: "Developed secure and scalable APIs for backend systems. Handled authentication, data flow, and core business logic.",
            icon: <SiDjango />
        }
    ];

    const features = [
        {
            title: "Real-Time Editing",
            desc: "Multiple users can edit code simultaneously with instant synchronization and minimal latency.",
            image: RealTimeImg
        },
        {
            title: "Collaborative Debugging",
            desc: "Users can identify and fix issues together with shared visibility across the coding session.",
            image: CollabDebugImg
        },
        {
            title: "Version Tracking",
            desc: "Tracks code changes to maintain history and improve debugging efficiency.",
            image: VersionImg
        }
    ]

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto space-y-32">

            {/* ================= HERO ================= */}
            <section className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10 p-10 " id="cce">

                <video
                    autoPlay
                    loop = {true}
                    muted = {true}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/3130284-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#070414] to-transparent"/>

                <div className="absolute bottom-10 left-10 max-w-xl ">
                      <span
                          className="text-xs px-3 py-1 rounded-full font-mono"
                          style={{ background: `${accent}20`, color: accent }}
                      >
                        REAL-TIME PLATFORM
                      </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight tracking-tight">
                        <span className="md:whitespace-nowrap">Collaborative Coding </span>
                        <br/>
                        <span style={{ color: accent }}>Environment</span>
                    </h1>


                    <p className="text-gray-400 mt-4 ">
                        A real-time collaborative platform designed for students and educators to write, edit, and debug code together seamlessly with live synchronization.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => setShowDemo(true)}
                            className=" text-black font-semibold transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
                            style={{ background: accent, boxShadow: `0 5px 20px ${accent}40`  }}
                        >
                            🎥 Project Demo
                        </button>

                        <button
                            onClick={() => setShowReport(true)}
                            className="border transition rounded-lg shadow-lg hover:scale-105 px-6 py-3 hover:bg-gray-800 "
                            style={{borderColor: accent, color: accent, boxShadow: `0 5px 20px ${accent}40`}}
                        >
                            📄 Docs
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        Includes architecture, design flow & implementation
                    </p>

                </div>
            </section>

            {/* ================= CHALLENGE + STATS ================= */}
            <section className="grid md:grid-cols-3 gap-10 items-start">

                {/* LEFT */}
                <div className="md:col-span-2">
                    <p className=" font-mono text-xs mb-3 tracking-widest font-semibold" style={{ color: accent }}>
                        INTRODUCTION
                    </p>

                    <h2 className="text-3xl font-bold mb-12">
                        The Challenge
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed  ">
                        Traditional coding platforms lack real-time collaboration capabilities, making it
                        difficult for students and educators to interact effectively during coding sessions.
                        Most solutions require individual environments, leading to inconsistencies and setup issues.
                    </p>

                    <p className="text-gray-400 mt-5 text-sm leading-relaxed ">
                        The challenge was to build a system that supports multiple users editing code simultaneously
                        with live synchronization, minimal latency, and no conflicts while maintaining a clean
                        and intuitive user experience.
                    </p>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-[#0f172a] border border-white/10 p-6 rounded-xl">
                    <h3 className="mb-6 font-bold leading-relaxed tracking-wide">Quick Stats</h3>

                    <ul className="text-xs text-gray-400 space-y-6 font-mono">
                        <li className="">ROLE </li> <span className="text-white text-sm font-semibold font-sans">Frontend Developer</span>
                        <li className="">TYPE </li><span className="text-white text-sm font-semibold font-sans">Real time collaborative</span>
                        <li className="">TECHNOLOGIES </li><span className="text-white text-sm font-semibold font-sans">React · Django REST</span>
                        <li className="flex-1 h-[1px] bg-white/10"></li>
                        <li className="">STATUS </li><span className="text-white text-sm font-semibold font-sans" style={{color: accent}}>● Prototype Completed</span>
                    </ul>
                </div>

            </section>


            {/* ================= TECH STACK ================= */}
            <section>
                <p className="text-xs mb-3 text-center font-mono tracking-widest font-semibold" style={{ color: accent }}>
                    THE ENGINE
                </p>

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Technological Foundation
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 leading-relaxed">
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
                                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-white/10">

                                        {/* IMAGE */}
                                        <img
                                            src={f.image}
                                            alt="innovation highlights"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                    </div>

                                    {/* TEXT BELOW */}
                                    <h4 className="font-bold text-xl text-white mb-2 p-1 leading-relaxed">{f.title}</h4>
                                    <p className="text-gray-400 text-sm p-1 leading-relaxed">{f.desc}</p>

                                </div>
                            ))}
                        </div>
            </section>

            {/* ================= EXECUTION + FAKE EDITOR ================= */}
            <section className=" relative grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                        The system was built with a performance-first approach, combining React for the frontend
                        and Django REST for backend services. Real-time communication was achieved using WebSockets,
                        enabling seamless synchronization between multiple users.
                    </p>

                    <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                        The architecture was designed to be modular and scalable, ensuring that new features
                        and improvements can be integrated efficiently. Special attention was given to UI responsiveness,
                        state management, and minimizing latency during collaborative interactions.
                    </p>
                </div>

                {/* 🔥 FAKE EDITOR UI */}
                <div className="flex justify-center items-center">
                    <div className="relative group">

                        {/* GLOW */}
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
                            className="relative w-[320px] h-[320px] rounded-3xl flex items-center justify-center
                     border border-white/10 backdrop-blur-md transition-all"
                            style={{
                                background: `linear-gradient(135deg, ${accent}40, #111827)`
                            }}
                        >

                            <div className="bg-black/80 p-4 rounded-lg text-green-400 text-xs">
                                <p>$ starting collaboration...</p>
                                <p>$ syncing users...</p>
                                <p className="text-white">✔ Connected</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="grid md:grid-cols-2 gap-8 mt-12">

                {/* 🔷 KEY LEARNINGS */}
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
                              Gained hands-on experience with real-time application architecture
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Learned to manage complex UI states in collaborative environments
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Improved understanding of scalable frontend design patterns
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Developed teamwork and coordination skills in a project-based environment
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Understood challenges of synchronization and conflict resolution
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 🔷 CHALLENGES FACED */}
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
                              Handling real-time synchronization across multiple users
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Avoiding UI conflicts during simultaneous code edits
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Maintaining performance with increasing user interactions
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} style={{ color: accent }} />
                            <span className="text-gray-400 text-sm">
                              Designing an intuitive interface for collaborative workflows
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ================= NEXT PROJECT ================= */}
            <section className="relative rounded-2xl p-12 text-center border border-white/10 overflow-hidden">

                <img
                    src="/nextproject.png"
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
                        2D Multiplayer <span style={{ color: accent }}>Game</span>
                    </h2>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => navigate("/project/game")}
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

            {/* ================= DEMO MODAL ================= */}
            {showDemo && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#0f172a] p-6 rounded-xl w-[90%] max-w-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                         style={{boxShadow: `0 5px 20px ${accent}40`}}
                    >
                        <h2 className="text-lg font-semibold mb-4">Project Demo</h2>

                        <div className="bg-black h-48 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">
                Demo available upon request
              </span>
                        </div>

                        <button
                            onClick={() => setShowDemo(false)}
                            className="mt-4 px-4 py-2 border border-white/20 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showReport && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] p-6 rounded-xl w-[95%] max-w-5xl h-[85vh] border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                         style={{boxShadow: `0 5px 20px ${accent}40`}}
                    >

                        {/* HEADER */}
                        <h2 className="text-lg font-semibold mb-4">
                            Project Report
                        </h2>

                        {/* PDF VIEWER */}
                        <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-white/10">
                            <iframe
                                src="/cce-report.pdf"
                                title="Project Report"
                                className="w-full h-full"
                            />
                        </div>

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setShowReport(false)}
                            className="mt-4 px-4 py-2 border border-white/20 rounded-lg"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}