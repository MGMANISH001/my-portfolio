import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane
} from "react-icons/fa";

export default function Contact({ accent }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `Portfolio Contact from ${formData.name}`
        );

        const body = encodeURIComponent(
            `Name: ${formData.name}\n\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href =
            `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="relative px-6 md:px-12 lg:px-20 pt-20 pb-24 overflow-hidden"
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <div
                className="absolute top-20 left-1/2 -translate-x-1/2
                w-[400px] h-[400px] rounded-full blur-[140px]
                opacity-20 pointer-events-none"
                style={{
                    background: accent
                }}
            />

            <div
                className="absolute bottom-0 left-0
                w-[250px] h-[250px] rounded-full blur-[120px]
                opacity-10 pointer-events-none"
                style={{
                    background: accent
                }}
            />


            {/* ================= HEADER ================= */}

            <div className="relative z-10 text-center mb-16">

                <p
                    className="text-xs font-mono tracking-[0.25em] mb-3"
                    style={{ color: accent }}
                >
                    GET IN TOUCH
                </p>

                <h2 className="text-4xl md:text-5xl font-bold">
                    Let's work{" "}
                    <span style={{ color: accent }}>
                        together.
                    </span>
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
                    Have a project idea, collaboration opportunity, or
                    just want to say hello? Feel free to reach out.
                    I'm always open to discussing new ideas and opportunities.
                </p>

            </div>


            {/* ================= MAIN CONTENT ================= */}

            <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">


                {/* =====================================================
                    LEFT - CONTACT INFORMATION
                ===================================================== */}

                <div>

                    <h3 className="text-2xl font-semibold mb-4">
                        Let's start a conversation
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                        Whether you're looking to build a modern web
                        application, improve an existing interface, or
                        collaborate on a creative project, I'd be happy
                        to hear from you.
                    </p>


                    {/* EMAIL */}

                    <div
                        className="group flex items-center gap-4
                        p-4 rounded-xl border
                        bg-white/[0.02] transition-all duration-300
                        hover:-translate-y-1"
                        style={{
                            borderColor: `${accent}30`
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = accent;
                            e.currentTarget.style.boxShadow =
                                `0 0 25px ${accent}20`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                                `${accent}30`;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >

                        <div
                            className="w-11 h-11 rounded-lg
                            flex items-center justify-center"
                            style={{
                                background: `${accent}15`,
                                color: accent
                            }}
                        >
                            <FaEnvelope />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 mb-1">
                                EMAIL
                            </p>

                            <a
                                href="mailto:your-email@gmail.com"
                                className="text-sm text-gray-200
                                hover:text-white transition"
                            >
                                your-email@gmail.com
                            </a>
                        </div>

                    </div>


                    {/* LOCATION */}

                    <div
                        className="group flex items-center gap-4
                        p-4 rounded-xl border
                        bg-white/[0.02] mt-4
                        transition-all duration-300
                        hover:-translate-y-1"
                        style={{
                            borderColor: `${accent}30`
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = accent;
                            e.currentTarget.style.boxShadow =
                                `0 0 25px ${accent}20`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                                `${accent}30`;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >

                        <div
                            className="w-11 h-11 rounded-lg
                            flex items-center justify-center"
                            style={{
                                background: `${accent}15`,
                                color: accent
                            }}
                        >
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 mb-1">
                                LOCATION
                            </p>

                            <p className="text-sm text-gray-200">
                                India
                            </p>
                        </div>

                    </div>


                    {/* SOCIAL LINKS */}

                    <div className="mt-8">

                        <p className="text-sm font-semibold mb-4">
                            Connect with me
                        </p>

                        <div className="flex gap-3">

                            {/* GITHUB */}

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-lg
                                border flex items-center justify-center
                                transition-all duration-300
                                hover:-translate-y-1"
                                style={{
                                    borderColor: `${accent}30`,
                                    color: accent
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        `${accent}15`;
                                    e.currentTarget.style.boxShadow =
                                        `0 0 20px ${accent}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        "transparent";
                                    e.currentTarget.style.boxShadow =
                                        "none";
                                }}
                            >
                                <FaGithub />
                            </a>


                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-lg
                                border flex items-center justify-center
                                transition-all duration-300
                                hover:-translate-y-1"
                                style={{
                                    borderColor: `${accent}30`,
                                    color: accent
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        `${accent}15`;
                                    e.currentTarget.style.boxShadow =
                                        `0 0 20px ${accent}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        "transparent";
                                    e.currentTarget.style.boxShadow =
                                        "none";
                                }}
                            >
                                <FaLinkedin />
                            </a>


                            {/* EMAIL */}

                            <a
                                href="mailto:your-email@gmail.com"
                                className="w-11 h-11 rounded-lg
                                border flex items-center justify-center
                                transition-all duration-300
                                hover:-translate-y-1"
                                style={{
                                    borderColor: `${accent}30`,
                                    color: accent
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        `${accent}15`;
                                    e.currentTarget.style.boxShadow =
                                        `0 0 20px ${accent}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        "transparent";
                                    e.currentTarget.style.boxShadow =
                                        "none";
                                }}
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    RIGHT - CONTACT FORM
                ===================================================== */}

                <div
                    className="relative p-6 md:p-8 rounded-2xl
                    border bg-[#0b1020]/80 backdrop-blur-xl"
                    style={{
                        borderColor: `${accent}35`
                    }}
                >

                    {/* CARD GLOW */}

                    <div
                        className="absolute inset-0 rounded-2xl
                        opacity-0 hover:opacity-100
                        transition-opacity duration-500
                        pointer-events-none"
                        style={{
                            boxShadow: `inset 0 0 40px ${accent}08`
                        }}
                    />


                    <div className="relative">

                        <h3 className="text-xl font-semibold mb-2">
                            Send me a message
                        </h3>

                        <p className="text-gray-500 text-sm mb-7">
                            I'll get back to you as soon as possible.
                        </p>


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* NAME */}

                            <div>

                                <label className="block text-sm text-gray-400 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg
                                    bg-white/[0.03]
                                    border border-white/10
                                    text-white text-sm
                                    outline-none transition-all"
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor =
                                            accent;
                                        e.currentTarget.style.boxShadow =
                                            `0 0 15px ${accent}15`;
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor =
                                            "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.boxShadow =
                                            "none";
                                    }}
                                />

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label className="block text-sm text-gray-400 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg
                                    bg-white/[0.03]
                                    border border-white/10
                                    text-white text-sm
                                    outline-none transition-all"
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor =
                                            accent;
                                        e.currentTarget.style.boxShadow =
                                            `0 0 15px ${accent}15`;
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor =
                                            "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.boxShadow =
                                            "none";
                                    }}
                                />

                            </div>


                            {/* MESSAGE */}

                            <div>

                                <label className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg
                                    bg-white/[0.03]
                                    border border-white/10
                                    text-white text-sm
                                    outline-none resize-none
                                    transition-all"
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor =
                                            accent;
                                        e.currentTarget.style.boxShadow =
                                            `0 0 15px ${accent}15`;
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor =
                                            "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.boxShadow =
                                            "none";
                                    }}
                                />

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg
                                font-semibold text-sm
                                flex items-center justify-center
                                gap-2 transition-all duration-300
                                hover:-translate-y-1"
                                style={{
                                    background: accent,
                                    color: "#050505",
                                    boxShadow: `0 8px 25px ${accent}30`
                                }}
                            >

                                <FaPaperPlane />

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* ================= BOTTOM LINE ================= */}

            <div
                className="max-w-6xl mx-auto mt-20 pt-8
                border-t text-center"
                style={{
                    borderColor: `${accent}20`
                }}
            >

                <p className="text-xs text-gray-500">
                    Have an idea? Let's turn it into something meaningful.
                </p>

            </div>

        </section>
    );
}