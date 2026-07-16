import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import type { JSX } from 'react/jsx-runtime';
import './nav.css'
import { AnimatePresence, motion } from 'framer-motion';

export function Nav(): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <ul className='nav__container'>
                <div className='sub-con'>
                    <div className='left'>
                        <a href="#hero">
                            <li>
                                <span>N</span>
                                <span>Na U Sabi</span>
                            </li>
                        </a>
                    </div>
                 
                    <div className='first'>
                        <a href="#community">
                            <li>What is it</li>
                        </a>
                        <a href="#rules">
                            <li>Rules</li>
                        </a>
                    </div>
                  
                    <div className='right right1'>
                        <a href="#join">
                            <li>Join</li>
                        </a>
                    </div>
                </div>

                <div className='menu'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} className='nav-icon' /> : <Menu className='nav-icon' size={24} />}
                    </button>
                </div>
                
            </ul>

            {menuOpen && (
                <AnimatePresence>
                    <motion.div 
                        className="mobile-menu"
                        initial={{ scale: 0, opacity: 0, translateX: "-50%" }}
                        layout
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0, transition: { duration: 0.55 } }}
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
                </AnimatePresence>
            )}
        </nav>
    );
}