import  { type JSX, useEffect, useState } from 'react';
import Mascot from '../assets/images/hero-mascots.webp'
import Mascot2 from '../assets/images/lm.webp'
import Stock1 from '../assets/images/stock1.webp';
import Stock4 from '../assets/images/ls1.webp';
import './hero.css';
import { Btn } from '../components/btns';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Hero(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);
    return (
        <section className="hero" id='hero' aria-label="Hero section">
            <article className="hero__container" aria-label="Hero content">
            <img
                src={isDarkMode ? Stock1 : Stock4}
                className={isDarkMode ? "stock1" : "stock1"}
                fetchPriority='high'
                alt="Stock"
            />
                <div className="hero__text">
                    <div className="hero__title-container">
                        <span className="hero__highlight"></span>
                        <span className="hero__title">An Executive Community</span>
                    </div>
                    <motion.h1 
                        className="hero__description"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }} 
                    >
                        Every Body Has <br />
                        An Opinion. <br /> 
                        <span className="gradient">
                            But Can You <br />
                            Defend Yours?</span>
                    </motion.h1>
                    <motion.p 
                        className="hero__paragraph"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }} 
                    >
                        Join thousands of people sharing ideas through daily polls, discussions and meaningful conversations. Every opinion matters. Every voice counts.
                    </motion.p>
                    <motion.p 
                        className="motto gradient hero-motto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }} 
                    >“No Just Talk Am. Prove Am.”</motion.p>
                    <div className="hero__buttons">
                        <Btn 
                            href='https://chat.whatsapp.com/BMQ9NlSxC1J9gqRLHkUW8K?s=cl&p=a&ilr=0'
                            className='btn btn1'
                        >
                           <FaWhatsapp className='whats' size={25} />
                           <span>Join WhatsApp</span>
                        </Btn>
                        <Btn 
                            href='https://t.me/NaU_Sabi'
                            className='btn btn2'
                        >
                           <FaTelegram className='telegram' size={25} />
                           <span>Join Telegram</span>
                        </Btn>
                    </div>
                    <div className="hero__subtext">
                        <motion.div 
                            className="hero__subtext--highlight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0}}
                            layout
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ layout: {
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            },
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            }} 
                        >
                            <span></span>
                            <span>Free to Join</span>
                        </motion.div>
                        <motion.div 
                            className="hero__subtext--highlight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0}}
                            layout
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ layout: {
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            },
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            }} 
                        >
                            <span></span>
                            <span>100% Community Driven</span>
                        </motion.div>
                        <motion.div 
                            className="hero__subtext--highlight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0}}
                            layout
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ layout: {
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            },
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 1.2
                            }} 
                        >
                            <span></span>
                            <span>Daily Polls</span>
                        </motion.div>
                    </div>
                </div>
                <div className="hero__image">
                    <img
                        src={isDarkMode ? Mascot : Mascot2}
                        className={isDarkMode ? "hero__mascot" : "hero__mascot"}
                        alt="Hero Mascot"
                        fetchPriority='high'
                    />
                </div>
            </article>
        </section>
    );
} 
