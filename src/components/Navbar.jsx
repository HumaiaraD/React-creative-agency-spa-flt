import React, { useState, useRef, useEffect} from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";


function Navbar({search, setSearch}) {

    const [openMenu, setOpenMenu] = useState(false);
        const menuRef = useRef(null)

        const toggleMenu = () => setOpenMenu(prev => !prev);

        useEffect(() => {
            if (openMenu) {
                gsap.fromTo(
                    menuRef.current,
                    { y: "100%" },
                    { y: "0%", duration: 0.7, ease: "power3.out" }
                );
            } else {
                gsap.to(menuRef.current, {
                    y: "100%",
                    duration: 0.6,
                    ease: "power2.in"
                });
            }
        }, [openMenu]);

    return (
        <>
           <header >
                <nav className="w-full flex justify-end m-3 text-black text-center z-200" style={{ fontFamily: "var(--font-aboreto)" }}>
                
                    <span onClick={toggleMenu} className="text-center text-gray-500 border-none active:border-none z-300 focus:outline-none cursor-pointer">
                        {openMenu ? "-Close" : "-Menu"}
                    </span>

                    <div
                        ref={menuRef}
                        style={{ transform: "translateY(100%)" }}
                        className=" hover:text-4xl animated-gradient
                            fixed bottom-0 left-0 w-full h-full 
                            bg-[#151516] text-white
                            flex flex-col items-center justify-center gap-6
                            z-250
                        "
                    >

                        <Link to="/" onClick={toggleMenu} className="text-2xl transition-transform duration-200 hover:scale-180">Home</Link>
                        <Link to="/projects" onClick={toggleMenu} className="text-2xl transition-transform duration-200 hover:scale-180">Projects</Link>
                        <Link to="/contact" onClick={toggleMenu} className="text-2xl transition-transform duration-200 hover:scale-180">Contact</Link>
                    </div>
                </nav>
           </header>
        </>
    )
}

export default Navbar; 