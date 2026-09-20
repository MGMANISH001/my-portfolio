import developerImg from "../assets/about.jpg"
import CoffeeImg from "/Coffee.jpg"
import MountainsImg from "/Mountains.jpg"
import GamingImg from "/Retro gaming.jpg"
import StarImg from "/star gazing.jpg"
import {useEffect} from "react";
import {animate} from "animejs";


export default function About({accent}) {

    useEffect(() => {
        animate(".about-illustration", {
            translateY: [0, -12],
            loop: true
        })

        animate(".philosophy-card",{
            opacity:[0,1],
            translateY:[40,0],
            delay:(el,i)=>i*200,
            duration:800,
            easing:"easeInOutSine"
        })

    }, []);

    return(
        <section className="bg-gradient-to-b from-[#0f172a] to-[#070414] relative py-24 px-6 md:px-16 lg:px-24"
        id="about">

            {/*<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[120px] opacity-20"*/}
            {/*style={{ background: accent }}>*/}
            {/*</div>*/}

            <div className="container">
                <JourneySection accent={accent}/>
                <PhilosophySection accent={accent}/>
                <BehindCodeSection accent={accent}/>
                <CTASection accent={accent}/>
            </div>

        </section>
        )
    }

    function JourneySection({ accent }) {

    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center relative group ">

                <div
                    className="absolute inset-0 rounded-2xl blur-3xl opacity-20 "
                    style={{ background: `radial-gradient(circle at top left, ${accent}, transparent)` }}
                ></div>

                <div className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                >

                    <img
                        src={developerImg}
                        className="w-80 md:w-[380px] lg:w-[420px] rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                </div>

            </div>

            <div>
                <span
                    className="px-4 py-1 rounded-full text-xs border"
                    style={{ borderColor: accent , color: accent , background: accent + "20"}}
                >
                    MY JOURNEY SO FAR</span>

                <h1 className="text-4xl font-bold md:text-5xl mt-6 leading-tight">From Curiosity To{" "}
                <span style={{color: accent}}>Craftmanship</span>
                </h1>

                <p className="text-gray-400 mt-6 leading-relaxed">
                    My journey into frontend development started with curiosity about how
                    websites work behind the scenes. What began as experimenting with
                    HTML and CSS evolved into building modern interactive interfaces using
                    React, Tailwind CSS and scalable frontend architecture.

                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    Today I focus on crafting fast, accessible and visually engaging
                    user experiences while continuously learning new technologies
                    and improving my development workflow.
                </p>

            </div>
        </div>
    )
    }

    function PhilosophySection({ accent }) {

    const cards=[

        {
            title:"Performance First",
            desc:"Speed is a feature. I optimize assets and code to ensure lightning-fast web experiences."
        },

        {
            title:"Inclusive by Design",
            desc:"Accessibility matters. I follow WCAG standards to build experiences that work for everyone."
        },

        {
            title:"Clean Architecture",
            desc:"I build scalable component-driven systems that are easy to maintain and evolve."
        }
    ]

    return (
        <div className="mt-32">

            <h2 className="text-3xl font-bold text-center">Approach & Philosophy</h2>

            <p className="text-gray-400 mt-2 text-center">Building the web isn't just about writing code; it's solving human problems.</p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {cards.map((card, i) => (
                    <div key={i}
                         className="philosophy-card bg-[#111827] border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition"
                    >
                        <h3 className="text-lg font-semibold mb-3" style={{color: accent}}>{card.title}</h3>

                        <p className=" text-gray-400 text-sm leading-relaxed">{card.desc}</p>

                    </div>
                ))}
            </div>

        </div>
    )
    }

    function BehindCodeSection({ accent }) {

    const hobbies = [

        {
            title:"Coffee Aficionado",
            image: CoffeeImg
        },

        {
            title:"Stargazing",
            image: StarImg
        },

        {
            title:"Retro Gaming",
            image: GamingImg
        },

        {
            title:"Mountain Hiking",
            image: MountainsImg
        }
    ]

        return(
            <div className="mt-32">
                <h2 className="text-3xl font-bold italic">Behind the Code</h2>

                <div className="w-32 h-1 ml-10 mb-4 mt-2 rounded-full"
                     style={{ background: accent }}
                ></div>

                <p className="text-gray-400 mb-8">When I step away from the keyboard, you'll likely find me exploring these passions.</p>

                <div className="grid md:grid-cols-4 gap-6">
                    {hobbies.map((hobby,i) => (
                            <div key={i}
                                 className="relative rounded-xl overflow-hidden group"
                            >
                                <img src={hobby.image}
                                     className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute bottom-4 left-4 text-white font-medium">{hobby.title}</div>
                            </div>
                        ))}
                </div>
            </div>
        )

    }

    function CTASection({ accent }) {

    return(
        <div className="mt-32 flex mx-auto w-full max-w-3xl px-6">

            <div className="rounded-2xl p-10 md:p-14 text-center shadow-2xl"
             style={{ background: `linear-gradient(135deg, ${accent}, #0f172a)`}}
        >
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">Let's build something remarkable together.</h2>

            <p className="text-gray-200 mb-8">Currently available for freelance opportunities and frontend roles.</p>

            <div className="flex justify-center gap-4 mt-12">
                <button className=" text-white bg-black transition px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 " style={{ color: accent,  boxShadow: `0 5px 20px ${accent}40` }}>
                    View my Work
                </button>

                <button className="border transition rounded-lg shadow-lg hover:scale-105 px-6 py-3 " style={{  boxShadow: `0 5px 20px ${accent}40` }}>
                    Get in Touch
                </button>
            </div>
            </div>
        </div>
    )
    }