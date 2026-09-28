import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ setAccent, accent }) {

    const navigate = useNavigate();
    const location = useLocation();

    // HOME
    const handleHome = () => {
        if (location.pathname === "/Home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            navigate("/Home");
        }
    };

    // SKILLS
    const handleSkills = () => {
        if (location.pathname === "/Home") {
            document.getElementById("skills")?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            navigate("/Home#skills");
        }
    };

    // CONTACT
    const handleContact = () => {
        if (location.pathname === "/Home") {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            navigate("/Home#contact");
        }
    };

    return (
        <nav
            className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#06060D]/90 border-b"
            style={{ borderColor: `${accent}30` }}
        >
            <div className="container flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">

                {/* Logo */}
                <h1
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: accent }}
                >
                    Manish's Portfolio
                </h1>

                {/* Navigation */}
                <div className="flex items-center text-sm gap-6 md:gap-10 md:text-base text-gray-300">

                    {/* HOME */}
                    <button
                        onClick={handleHome}
                        className="transition-colors duration-300"
                        style={{ color: "#d1d5db" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = accent;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        Home
                    </button>

                    {/* SKILLS */}
                    <button
                        onClick={handleSkills}
                        className="transition-colors duration-300"
                        style={{ color: "#d1d5db" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = accent;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        Skills
                    </button>

                    {/* ABOUT */}
                    <NavLink
                        to="/About"
                        className="transition-colors duration-300"
                        style={({ isActive }) => ({
                            color: isActive ? accent : "#d1d5db"
                        })}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = accent;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        About
                    </NavLink>

                    {/* CONTACT */}
                    <button
                        onClick={handleContact}
                        className="transition-colors duration-300"
                        style={{ color: "#d1d5db" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = accent;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        Contact
                    </button>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <ThemeSwitcher
                        accent={accent}
                        updateTheme={setAccent}
                    />

                    <button
                        className="text-white text-sm md:text-base rounded-lg py-2 px-4 shadow-lg transition"
                        style={{
                            background: accent,
                            boxShadow: `0 10px 25px ${accent}50`
                        }}
                    >
                        Resume
                    </button>

                </div>

            </div>
        </nav>
    );
}