import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { NavLink } from "react-router-dom"


export default function Navbar({ setAccent, accent}) {

    const links = [
        { name: "Home", path: "/Home" },
        { name: "Skills", path: "/skills" },
        { name: "About", path: "/About" },
        { name: "Contact", path: "/Contact" }
    ]

    return (

        <nav className= "sticky top-0 z-50 w-full backdrop-blur-md bg-[#070414]/80 border-b "
        style={{ borderColor: `${accent}30`}}>
            <div className=" container flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">
                <h1 className="text-purple-500 text-lg md:text-xl font-semibold" style={{ color: accent }}> Manish's Portfolio</h1>

                <div className="flex items-center text-sm gap-6 md:gap-10 md:text-base text-gray-300" >

                    {links.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.path}
                            className="transition-colors duration-300"
                            style={({ isActive }) => ({
                                color: isActive ? accent : "#d1d5db"
                            })}
                            onMouseEnter={(e) => (e.target.style.color = accent)}
                            onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </div>

                <div className="flex items-center gap-5">
                    <ThemeSwitcher accent={accent} updateTheme={setAccent}/>

                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white text-sm md:text-base rounded-lg py-2 px-4 shadow-lg shadow-purple-900/40"
                            style={{background: accent, boxShadow: `0 10px 25px ${accent}50` }}>
                        Resume
                    </button>
                </div>
            </div>

        </nav>
    )
}