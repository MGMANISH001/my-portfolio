import { useState } from "react";

export default function ThemeSwitcher({ updateTheme, accent }) {

    const [open, setOpen] = useState(false);

    const themes = [
        "#9c6dff",
        "#67a1ff",
        "#2bb8a8",
        "#a0b31e"
    ];

    return (
        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="w-7 h-7 rounded-full border transition-all duration-300 hover:scale-110 cursor-pointer border-white"
                style={{
                    backgroundColor: accent,
                    boxShadow: `0 0 10px ${accent}40`
                }}
            ></button>

            {open && (
                <div className="absolute right-0 mt-3 bg-[#111827] p-4 rounded-lg border border-white/10">

                    <p className="text-xs text-gray-400 mb-3">
                        Accent Color
                    </p>

                    <div className="flex gap-3">

                        {themes.map((theme, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    updateTheme(theme)
                                }
                                className="w-6 h-6 rounded-full border border-white"
                                style={{ background: theme}}
                            />
                        ))}

                    </div>

                </div>
            )}
        </div>
    );

}