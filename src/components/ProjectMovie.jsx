import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import {
    FaPython,
    FaDatabase,
    FaChartBar
} from "react-icons/fa";

import { GiBrain } from "react-icons/gi";

import MovieFeatureImg from "/relevant-recommendations.png";
import MovieDataImg from "/data-driven-analysis.png";
import MovieRecommendationImg from "/similarity-based-results.png";

import { useRef, useState } from "react";
import { animate } from "animejs";


export default function ProjectMovie({ accent }) {

    const [showDemo, setShowDemo] = useState(false);

    const navigate = useNavigate();

    const cardRef = useRef(null);


    // =====================================================
    // PREVIEW CARD HOVER
    // =====================================================

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


    // =====================================================
    // TECHNOLOGIES
    // =====================================================

    const tech = [

        {
            name: "Python",

            desc:
                "Used for data processing, exploratory analysis, and developing the recommendation workflow.",

            icon: <FaPython />
        },

        {
            name: "Machine Learning",

            desc:
                "Applied recommendation techniques to identify similarities between movies and generate relevant suggestions.",

            icon: <GiBrain />
        },

        {
            name: "EDA",

            desc:
                "Explored movie datasets to understand patterns, attributes, and relationships within the available data.",

            icon: <FaChartBar />
        },

        {
            name: "Data Processing",

            desc:
                "Prepared and organized movie information to create meaningful inputs for the recommendation system.",

            icon: <FaDatabase />
        }

    ];


    // =====================================================
    // FEATURES
    // =====================================================

    const features = [

        {
            title: "Relevant Recommendations",

            desc:
                "Generates movie suggestions based on similarities between the selected movie and available movie information.",

            image: MovieFeatureImg
        },

        {
            title: "Data-Driven Analysis",

            desc:
                "Uses movie attributes and dataset patterns to identify relationships that support the recommendation process.",

            image: MovieDataImg
        },

        {
            title: "Similarity-Based Results",

            desc:
                "Compares relevant movie characteristics to produce a focused list of similar movie recommendations.",

            image: MovieRecommendationImg
        }

    ];


    return (

        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto space-y-32">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10 p-10"
                id="movie"
            >

                {/* HERO IMAGE */}

                <video
                    autoPlay
                    loop = {true}
                    muted = {true}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/cosmic-cinema-loop_v2.mp4" type="video/mp4" />
                </video>


                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#070414] to-transparent" />


                {/* HERO CONTENT */}

                <div className="absolute bottom-10 left-10 max-w-2xl">

                    <span
                        className="text-xs px-3 py-1 rounded-full font-mono"
                        style={{
                            background: `${accent}20`,
                            color: accent
                        }}
                    >
                        MACHINE LEARNING PROJECT
                    </span>


                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-relaxed tracking-tight">

                        <span className="md:whitespace-nowrap">
                            Movie Recommendation
                        </span>

                        <br />

                        <span style={{ color: accent }}>
                            System
                        </span>

                    </h1>


                    <p className="text-gray-400 mt-4 leading-relaxed">

                        A data-driven recommendation system designed to analyze
                        movie information and suggest relevant titles based on
                        similarities within the dataset.

                    </p>


                    <div className="flex gap-4 mt-6">

                        <button
                            onClick={() => setShowDemo(true)}
                            className="text-black font-semibold transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
                            style={{
                                background: accent,
                                boxShadow: `0 5px 20px ${accent}40`
                            }}
                        >
                            🎥 Project Demo
                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CHALLENGE
            ===================================================== */}

            <section className="grid md:grid-cols-3 gap-10 items-start">


                {/* LEFT CONTENT */}

                <div className="md:col-span-2">

                    <p
                        className="font-mono text-xs mb-3 tracking-widest font-semibold"
                        style={{ color: accent }}
                    >
                        INTRODUCTION
                    </p>


                    <h2 className="text-3xl font-bold mb-12">
                        The Challenge
                    </h2>


                    <p className="text-gray-400 text-sm leading-relaxed">

                        With a large number of movies available across different
                        platforms, finding relevant content can become difficult.
                        The main challenge was to build a recommendation system
                        that could analyze movie information and identify titles
                        with similar characteristics.

                    </p>


                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">

                        The project involved preparing the available dataset,
                        understanding useful movie attributes, and developing
                        recommendation logic capable of producing relevant
                        suggestions for a selected movie.

                    </p>


                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">

                        The objective was to create a simple and understandable
                        recommendation workflow while gaining practical
                        experience with data analysis and machine-learning
                        concepts.

                    </p>

                </div>


                {/* QUICK STATS */}

                <div className="bg-[#0f172a] border border-white/10 p-6 rounded-xl">

                    <h3 className="mb-6 font-bold leading-relaxed tracking-wide">
                        Quick Stats
                    </h3>


                    <ul className="text-xs text-gray-400 space-y-6 font-mono">

                        <li>
                            ROLE
                        </li>

                        <span className="text-white text-sm font-semibold font-sans">
                            Developer
                        </span>


                        <li>
                            TYPE
                        </li>

                        <span className="text-white text-sm font-semibold font-sans">
                            Machine Learning Project
                        </span>


                        <li>
                            TECHNOLOGIES
                        </li>

                        <span className="text-white text-sm font-semibold font-sans">
                            Python · ML · EDA
                        </span>


                        <li className="flex-1 h-[1px] bg-white/10"></li>


                        <li>
                            FOCUS
                        </li>

                        <span
                            className="text-sm font-semibold font-sans"
                            style={{ color: accent }}
                        >
                            ● Movie Recommendations
                        </span>

                    </ul>

                </div>

            </section>


            {/* =====================================================
                TECHNOLOGICAL FOUNDATION
            ===================================================== */}

            <section>

                <p
                    className="text-xs mb-3 text-center font-mono tracking-widest font-semibold"
                    style={{ color: accent }}
                >
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

                                e.currentTarget.style.boxShadow =
                                    `0 0 25px ${accent}55`;

                            }}

                            onMouseLeave={(e) => {

                                e.currentTarget.style.borderColor =
                                    accent + "30";

                                e.currentTarget.style.boxShadow =
                                    "none";

                            }}
                        >

                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-all group-hover:scale-110"

                                style={{
                                    color: accent,
                                    background: accent + "15"
                                }}
                            >

                                {item.icon}

                            </div>


                            <h4 className="font-semibold">
                                {item.name}
                            </h4>


                            <p className="text-gray-400 text-sm mt-2 tracking-wide">
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                INNOVATION HIGHLIGHTS
            ===================================================== */}

            <section>

                <p
                    className="text-xs mb-3 font-mono tracking-widest font-semibold"
                    style={{ color: accent }}
                >
                    CORE CAPABILITIES
                </p>


                <h2 className="text-3xl font-bold mb-12">
                    Innovation Highlights
                </h2>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {features.map((f, i) => (

                        <div
                            key={i}
                            className="group"
                        >

                            {/* IMAGE */}

                            <div className="relative h-44 overflow-hidden transition-all w-full mb-4">

                                <img
                                    src={f.image}
                                    alt={f.title}
                                    className="absolute inset-0 w-full h-48 object-cover transition-transform duration-500 rounded-xl group-hover:scale-105 border"

                                    style={{
                                        borderColor: accent + "30"
                                    }}
                                />

                            </div>


                            {/* TEXT */}

                            <h4 className="font-bold text-xl text-white mb-2 p-1 leading-relaxed">
                                {f.title}
                            </h4>


                            <p className="text-gray-400 text-sm p-1 leading-relaxed">
                                {f.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                EXECUTION & ARCHITECTURE
            ===================================================== */}

            <section className="relative grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">


                {/* GLOW */}

                <div
                    className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] blur-[100px] opacity-25 pointer-events-none"

                    style={{
                        background:
                            `radial-gradient(ellipse, ${accent} 0%, transparent 65%)`
                    }}
                />


                {/* CONTENT */}

                <div>

                    <p
                        className="text-xs mb-3 font-mono tracking-widest font-semibold"
                        style={{ color: accent }}
                    >
                        IMPLEMENTATION
                    </p>


                    <h2 className="text-3xl font-semibold mb-12">
                        Execution & Architecture
                    </h2>


                    <p className="text-gray-400 text-sm leading-relaxed">

                        The system was developed using Python with a focus on
                        data preparation, exploratory analysis, and recommendation
                        logic. The movie dataset was first examined to understand
                        its structure and identify useful attributes.

                    </p>


                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">

                        After preparing the data, relevant movie characteristics
                        were processed to determine relationships between titles.
                        The recommendation workflow then used these similarities
                        to generate a focused list of related movies.

                    </p>


                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">

                        The system was organized into separate data-processing
                        and recommendation stages, making the workflow easier
                        to understand, debug, and improve.

                    </p>

                </div>


                {/* 🎬 MOVIE RECOMMENDATION UI */}
                <div className="flex justify-center items-center">
                    <div className="relative group">

                        {/* GLOW */}
                        <div
                            className="absolute -inset-[2px] rounded-3xl blur-md opacity-40"
                            style={{
                                background: `linear-gradient(135deg, ${accent}, transparent)`
                            }}
                        />

                        {/* PREVIEW CARD */}
                        <div
                            ref={cardRef}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            className="relative w-[320px] h-[320px] rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-md transition-all duration-500 group overflow-visible"
                            style={{
                                background: `linear-gradient(135deg, ${accent}40, #111827)`
                            }}
                        >

                            {/* TOP PREVIEW LABEL */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5
                            rounded-full bg-[#17132b]/90 border border-white/10
                            shadow-lg rotate-2 z-10 whitespace-nowrap">

                        <span className="px-2 py-1 rounded text-[8px] font-bold text-black"
                        style={{ background: `${accent}20`, color: accent  }}>
                            PREVIEW
                        </span>

                                <span className="text-[10px] text-gray-300">Recommendation System
                                </span>

                            </div>

                            {/* INNER MOVIE UI */}
                            <div className="w-full h-full rounded-2xl bg-[#090712]/90 border border-white/10 p-3 shadow-2xl">

                                {/* HEADER */}
                                <div className="flex items-center justify-between mb-4">

                                    <div>
                                        <p className="text-[10px] text-gray-500">
                                            RECOMMENDATIONS
                                        </p>

                                        <p className="text-sm font-semibold text-white">
                                            For You
                                        </p>
                                    </div>

                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${accent}25`,
                                            color: accent
                                        }}
                                    >
                                        ✦
                                    </div>

                                </div>


                                <div className="flex gap-2 mb-3">

                                    {[
                                        "from-purple-500 to-blue-700",
                                        "from-orange-500 to-red-700",
                                        "from-blue-500 to-indigo-800"
                                    ].map((color, i) => (

                                        <div
                                            key={i}
                                            className={`w-[60px] h-[65px] rounded-lg
                      bg-gradient-to-br ${color}
                      flex items-center justify-center
                      text-lg border border-white/10`}
                                        >
                                            {["🚀", "🎬", "🦇"][i]}
                                        </div>

                                    ))}

                                </div>


                                <div className="space-y-1.5">

                                    {[1, 2, 3].map((_, i) => (

                                        <div
                                            key={i}
                                            className="flex items-center gap-2
                     h-[28px] px-2 rounded-md
                     bg-white/[0.04]"
                                        >

                                            <div
                                                className="w-5 h-5 rounded bg-purple-600/60"
                                            />

                                            <div className="flex-1">
                                                <div className="w-12 h-1 rounded bg-white/20" />
                                                <div className="w-8 h-1 mt-1 rounded bg-white/10" />
                                            </div>

                                            <span
                                                className="text-[8px]"
                                                style={{ color: accent }}
                                            >
            ★★★★
          </span>

                                        </div>

                                    ))}

                                </div>

                            </div>
                        </div>

                        </div>
                    </div>

            </section>


            {/* =====================================================
                LEARNINGS + CHALLENGES
            ===================================================== */}

            <section className="grid md:grid-cols-2 gap-8 mt-12">


                {/* KEY LEARNINGS */}

                <div
                    className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"

                    style={{
                        borderColor: accent + "30"
                    }}

                    onMouseEnter={(e) => {

                        e.currentTarget.style.borderColor = accent;

                        e.currentTarget.style.boxShadow =
                            `0 0 25px ${accent}55`;

                    }}

                    onMouseLeave={(e) => {

                        e.currentTarget.style.borderColor =
                            accent + "30";

                        e.currentTarget.style.boxShadow =
                            "none";

                    }}
                >

                    <h2
                        className="text-xl font-semibold mb-4"
                        style={{ color: accent }}
                    >
                        Key Learnings
                    </h2>


                    <ul className="space-y-3">


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Practical experience with Python-based data analysis
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Understanding movie recommendation techniques
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Working with and preprocessing datasets
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Applying similarity-based recommendation logic
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Improving recommendation relevance through data analysis
                            </span>

                        </li>

                    </ul>

                </div>


                {/* CHALLENGES */}

                <div
                    className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"

                    style={{
                        borderColor: accent + "30"
                    }}

                    onMouseEnter={(e) => {

                        e.currentTarget.style.borderColor = accent;

                        e.currentTarget.style.boxShadow =
                            `0 0 25px ${accent}55`;

                    }}

                    onMouseLeave={(e) => {

                        e.currentTarget.style.borderColor =
                            accent + "30";

                        e.currentTarget.style.boxShadow =
                            "none";

                    }}
                >

                    <h2
                        className="text-xl font-semibold mb-4"
                        style={{ color: accent }}
                    >
                        Challenges Faced
                    </h2>


                    <ul className="space-y-3">


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Cleaning and preparing movie dataset information
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Selecting useful attributes for recommendations
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Generating relevant movie similarities
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Handling inconsistent or incomplete data
                            </span>

                        </li>


                        <li className="flex items-start gap-3">

                            <CheckCircle
                                size={16}
                                style={{ color: accent }}
                            />

                            <span className="text-gray-400 text-sm">
                                Improving the relevance of recommended results
                            </span>

                        </li>

                    </ul>

                </div>

            </section>


            {/* =====================================================
                NEXT / PREVIOUS PROJECT
            ===================================================== */}

            <section className="relative rounded-2xl p-12 text-center border border-white/10 overflow-hidden">

                <img
                    src="/nextproject.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />


                <div className="relative z-10">

                    <p
                        className="text-xs mb-2"
                        style={{ color: accent }}
                    >
                        PROJECT NAVIGATION
                    </p>


                    <h2 className="text-3xl font-bold">

                        2D Multiplayer{" "}

                        <span style={{ color: accent }}>
                            Game
                        </span>

                    </h2>


                    <div className="flex justify-center mt-4">

                        <button
                            onClick={() => navigate("/project/game")}
                            className="text-sm font-medium flex items-center gap-2 group"
                            style={{ color: accent }}
                        >

                            <span className="group-hover:-translate-x-1 transition-transform">
                                ←
                            </span>

                            Previous Project

                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROJECT DEMO MODAL
            ===================================================== */}

            {showDemo && (

                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">


                    <div className="bg-[#0f172a] p-8 rounded-xl w-[500px] border border-white/10">

                        <h2 className="text-xl font-semibold mb-4">
                            Project Demo
                        </h2>


                        <div className="bg-black h-[200px] rounded-lg flex items-center justify-center text-gray-400 text-center px-6">

                            Interactive recommendation demo
                            available locally.

                            <br />
                            <br />

                            The project demonstrates movie data
                            processing and similarity-based
                            recommendation logic.

                        </div>


                        <div className="flex justify-end mt-6">

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