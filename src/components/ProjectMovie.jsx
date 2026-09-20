import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaPython, FaDatabase, FaChartBar, FaBrain, FaCheckCircle, FaFilePdf, FaArrowLeft,} from "react-icons/fa";

export default function ProjectMovie({ accent }) {

    const navigate = useNavigate();
    const [showReport, setShowReport] = useState(false);

    // =========================
    // TECHNOLOGY DATA
    // =========================

    const techStack = [
        {
            title: "Python",
            icon: <FaPython />,
            desc: "Used for data processing, exploratory analysis, and developing the recommendation workflow."
        },
        {
            title: "Machine Learning",
            icon: <FaBrain />,
            desc: "Applied recommendation techniques to identify similarities between movies and generate relevant suggestions."
        },
        {
            title: "EDA",
            icon: <FaChartBar />,
            desc: "Explored movie datasets to understand patterns, attributes, and relationships within the available data."
        },
        {
            title: "Data Processing",
            icon: <FaDatabase />,
            desc: "Prepared and organized movie information to create meaningful inputs for the recommendation system."
        }
    ];

    // =========================
    // INNOVATION HIGHLIGHTS
    // =========================

    const features = [
        {
            title: "Relevant Recommendations",
            image: "/assets/projects/movie-feature-1.png",
            desc: "Generates movie suggestions based on similarities between the selected movie and available movie information."
        },
        {
            title: "Data-Driven Analysis",
            image: "/assets/projects/movie-feature-2.png",
            desc: "Uses movie attributes and dataset patterns to identify relationships that support the recommendation process."
        },
        {
            title: "Similarity-Based Results",
            image: "/assets/projects/movie-feature-3.png",
            desc: "Compares relevant movie characteristics to produce a focused list of similar movie recommendations."
        }
    ];

    // =========================
    // KEY LEARNINGS
    // =========================

    const learnings = [
        "Practical experience with Python-based data analysis",
        "Understanding movie recommendation techniques",
        "Working with and preprocessing datasets",
        "Applying similarity-based recommendation logic",
        "Improving recommendation relevance through data analysis"
    ];

    // =========================
    // CHALLENGES
    // =========================

    const challenges = [
        "Cleaning and preparing movie dataset information",
        "Selecting useful attributes for recommendations",
        "Generating relevant movie similarities",
        "Handling inconsistent or incomplete data",
        "Improving the relevance of recommended results"
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto space-y-32">
            {/* ========================HERO==================== */}
            <section
                className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10 p-10"
                style={{
                    background: "#070414"
                }}
            >
                {/* Background Image */}
                <img
                    src="/assets/projects/movie-hero.png"
                    alt="Movie Recommendation System"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070414] to-transparent"/>
                {/* Hero Content */}

                <div className="absolute bottom-10 left-10 max-w-xl">
                    <span
                        className="text-xs px-3 py-1 rounded-full font-mono"
                        style={{
                            background: `${accent}20`, color: accent
                        }}
                    >
                        MACHINE LEARNING PROJECT
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-relaxed tracking-tight">
                        <span className="md:whitespace-nowrap">Music Recommendation</span>
                        <br/>
                        <span style={{color: accent}}>System</span>
                    </h1>

                    <p className="text-gray-400 mt-4">
                        A data-driven movie recommendation system designed to
                        analyze movie information and suggest relevant titles
                        based on similarities within the dataset.
                    </p>

                    <div className="flex gap-4 mt-6">
                        {/* Project Demo */}
                        <button
                            onClick={() => {
                                // Add your demo action here if you have one
                            }}
                            className="text-black font-semibold transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
                            style={{ background: accent, boxShadow: `0 5px 20px ${accent}40` }}
                        >
                            🎬 Project Demo
                        </button>

                        {/* Case Study */}

                        <button
                            onClick={() => setShowReport(true)}
                            className="px-5 py-2.5 rounded-lg border flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                borderColor: `${accent}80`,
                                color: accent
                            }}
                        >
                            <FaFilePdf/>
                            Case Study
                        </button>

                    </div>

                    <p className="text-gray-500 text-xs mt-3">
                        Includes data analysis, recommendation logic & implementation
                    </p>

                </div>

            </section>


            {/* =====================================================
                CHALLENGE + QUICK STATS
            ===================================================== */}

            <section className="grid md:grid-cols-3 gap-10 items-start">
                {/* Challenge */}
                <div className="md:col-span-2">
                    <p className=" font-mono text-xs mb-3 tracking-widest font-semibold" style={{ color: accent }}>
                        INTRODUCTION
                    </p>

                    <h2 className="text-3xl font-bold mb-12">
                        The Challenge
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        With a large number of movies available across different
                        platforms, finding relevant content can become difficult.
                        The challenge was to build a recommendation system that
                        could analyze movie information and identify titles with
                        similar characteristics.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        The project focused on preparing the available dataset,
                        understanding useful movie attributes, and developing
                        recommendation logic capable of producing relevant
                        suggestions for a selected movie.
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                        The goal was to create a simple and understandable
                        recommendation workflow while gaining practical
                        experience with data analysis and machine-learning
                        concepts.
                    </p>

                </div>


                {/* Quick Stats */}

                <div
                    className="p-6 rounded-xl border"
                    style={{
                        background: `${accent}08`,
                        borderColor: `${accent}30`
                    }}
                >

                    <h3 className="mb-5 font-semibold text-lg">
                        Quick Stats
                    </h3>

                    <div className="space-y-5 text-sm">

                        <div>
                            <p className="text-xs text-gray-500 uppercase">
                                Role
                            </p>
                            <p className="text-gray-300 mt-1">
                                Developer
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase">
                                Project Type
                            </p>
                            <p className="text-gray-300 mt-1">
                                Machine Learning
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase">
                                Technologies
                            </p>
                            <p className="text-gray-300 mt-1">
                                Python · ML · EDA
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase">
                                Focus
                            </p>
                            <p
                                className="mt-1"
                                style={{color: accent}}
                            >
                                Movie Recommendations
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TECHNOLOGICAL FOUNDATION
            ===================================================== */}

            <section>

                <div className="text-center mb-10">

                    <p
                        className="text-xs tracking-wider mb-2"
                        style={{color: accent}}
                    >
                        THE ENGINE
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Technological Foundation
                    </h2>

                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {techStack.map((tech, i) => (

                        <div
                            key={i}
                            className="group bg-[#0f172a] border border-white/10 p-5 rounded-xl transition-all duration-300 hover:-translate-y-2"
                            style={{
                                borderColor: `${accent}25`
                            }}
                        >

                            <div
                                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-xl transition-all duration-300 group-hover:scale-110"
                                style={{
                                    color: accent,
                                    background: `${accent}15`
                                }}
                            >
                                {tech.icon}
                            </div>

                            <h4 className="font-semibold">
                                {tech.title}
                            </h4>

                            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                {tech.desc}
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
                    className="text-xs tracking-wider mb-2"
                    style={{color: accent}}
                >
                    CORE CAPABILITIES
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Innovation Highlights
                </h2>


                <div className="grid md:grid-cols-3 gap-6">

                    {features.map((feature, i) => (

                        <div
                            key={i}
                            className="group"
                        >

                            {/* Image */}

                            <div className="overflow-hidden rounded-xl border border-white/10">

                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}

                            <div className="mt-5">

                                <h3 className="text-lg font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                    {feature.desc}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                EXECUTION & ARCHITECTURE
            ===================================================== */}

            <section className="grid md:grid-cols-2 gap-10 items-center">

                <div>

                    <p
                        className="text-xs tracking-wider mb-2"
                        style={{color: accent}}
                    >
                        IMPLEMENTATION
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
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
                        The project provided practical experience in transforming
                        raw data into useful recommendations while keeping the
                        overall workflow organized and easy to improve.
                    </p>

                </div>


                {/* Preview */}

                <div
                    className="relative h-[300px] rounded-xl overflow-hidden border"
                    style={{
                        borderColor: `${accent}30`,
                        background: "#0f172a"
                    }}
                >

                    <img
                        src="/assets/projects/movie-preview.png"
                        alt="Movie recommendation system preview"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-semibold"
                        style={{
                            background: accent,
                            color: "#000"
                        }}
                    >
                        PREVIEW
                    </div>

                </div>

            </section>


            {/* =====================================================
                KEY LEARNINGS + CHALLENGES
            ===================================================== */}

            <section className="grid md:grid-cols-2 gap-8">

                {/* Learnings */}

                <div
                    className="p-6 rounded-xl border"
                    style={{
                        background: `${accent}08`,
                        borderColor: `${accent}50`
                    }}
                >

                    <h3
                        className="text-xl font-semibold mb-6"
                        style={{color: accent}}
                    >
                        Key Learnings
                    </h3>

                    <div className="space-y-4">

                        {learnings.map((item, i) => (

                            <div
                                key={i}
                                className="flex items-start gap-3 text-gray-400 text-sm"
                            >
                                <FaCheckCircle
                                    className="mt-0.5 shrink-0"
                                    style={{color: accent}}
                                />

                                <span>
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Challenges */}

                <div
                    className="p-6 rounded-xl border"
                    style={{
                        background: `${accent}08`,
                        borderColor: `${accent}30`
                    }}
                >

                    <h3
                        className="text-xl font-semibold mb-6"
                        style={{color: accent}}
                    >
                        Challenges Faced
                    </h3>

                    <div className="space-y-4">

                        {challenges.map((item, i) => (

                            <div
                                key={i}
                                className="flex items-start gap-3 text-gray-400 text-sm"
                            >
                                <FaCheckCircle
                                    className="mt-0.5 shrink-0"
                                    style={{color: accent}}
                                />

                                <span>
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                NEXT PROJECT
            ===================================================== */}

            <section
                className="rounded-2xl p-12 text-center border transition-all duration-300 hover:-translate-y-1"
                style={{
                    borderColor: `${accent}30`,
                    background: `${accent}05`
                }}
            >

                <p
                    className="text-xs tracking-wider mb-3"
                    style={{color: accent}}
                >
                    NEXT PROJECT
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                    Collaborative Coding{" "}
                    <span style={{color: accent}}>
                        Environment
                    </span>
                </h2>

                <button
                    onClick={() => navigate("/project/cce")}
                    className="mt-5 inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-x-1"
                    style={{color: accent}}
                >
                    <FaArrowLeft/>
                    Previous Project
                </button>

            </section>


            {/* =====================================================
                CASE STUDY PDF MODAL
            ===================================================== */}

            {showReport && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={() => setShowReport(false)}
                >

                    <div
                        className="w-full max-w-3xl bg-[#0f172a] border border-white/10 rounded-2xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex items-center justify-between mb-5">

                            <h2 className="text-xl font-semibold">
                                Project Report
                            </h2>

                            <button
                                onClick={() => setShowReport(false)}
                                className="text-gray-400 hover:text-white transition"
                            >
                                ✕
                            </button>

                        </div>


                        <div className="w-full h-[500px] rounded-xl overflow-hidden bg-black">

                            <iframe
                                src="/reports/movie-recommendation-report.pdf"
                                title="Movie Recommendation System Project Report"
                                className="w-full h-full"
                            />

                        </div>


                        <div className="flex justify-end mt-5">

                            <button
                                onClick={() => setShowReport(false)}
                                className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition"
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