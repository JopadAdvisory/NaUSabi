import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import type { JSX } from 'react/jsx-runtime';
import './nav.css'
import { AnimatePresence, motion } from 'framer-motion';

export function Nav(): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <div className='nav__container'>
                <div className='sub-con'>
                    <div className='left'>
                        <a className='logo' href="#hero"  aria-label='NA U SABI Logo'></a>
                    </div>
                 
                    <div className='first'>
                        <a href="#community">
                            What is it
                        </a>
                        <a href="#rules">
                            Rules
                        </a>
                    </div>
                  
                    <div className='right right1'>
                        <a href="#join">
                            Join
                        </a>
                    </div>
                </div>

                <div className='menu'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open Menu"}
                    >
                        {menuOpen ? <X size={24} className='nav-icon' /> : <Menu className='nav-icon' size={24} />}
                    </button>
                </div>
                
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        key = "mobile-menu"
                        className="mobile-menu"
                        initial={{ scale: 0, opacity: 0, left: "50%", translate: "-50%" }}
                        layout
                        animate={{ scale: 1, opacity: 1, }}
                        exit={{ scale: 0, opacity: 0,  transition: { duration: 0.55 } }}
                        transition={{ layout: {
                        type: "spring",
                        bounce: 0.6,
                        duration: 0.55
                        },
                        type: "spring",
                        stiffness: 120,
                        damping: 14
                        }}
                    >
                        <a href="#community">What is it</a>
                        <a href="#rules">Rules</a>
                        <div className='right right2'>
                            <a href="#join">
                                Join
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}