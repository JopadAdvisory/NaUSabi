import  { type JSX, useEffect, useState } from 'react';
import Mascot from '../assets/images/hero-mascots.png'
import Mascot2 from '../assets/images/lm.png'
import Stock1 from '../assets/images/stock1.png';
import Stock2 from '../assets/images/stock2.png';
import Stock3 from '../assets/images/ls1.png';
import Stock4 from '../assets/images/ls2.png';
import './hero.css';
import { Btn } from '../components/btns';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

export function Hero(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
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
            {/* <img src={Stock2} className='stock2' alt="Stock 2" /> */}
            <img
                src={isDarkMode ? Stock2 : Stock3}
                className={isDarkMode ? "stock2" : "stock1"}
                alt="Stock"
            />
            <img
                src={isDarkMode ? Stock1 : Stock4}
                className={isDarkMode ? "stock1" : "stock2"}
                alt="Stock"
            />
            {/* <img src={Stock1} className='stock1' alt="Stock 1" /> */}
                <div className="hero__text">
                    <div className="hero__title-container">
                        <span className="hero__highlight"></span>
                        <span className="hero__title">An Executive Community</span>
                    </div>
                    <h1 className="hero__description">
                        Every Body Has <br />
                        An Opinion. <br /> 
                        <span className="gradient">
                            But Can You <br />
                            Defend Yours?</span>
                    </h1>
                    <p className="hero__paragraph">
                        Join thousands of people sharing ideas through daily polls, discussions and meaningful conversations. Every opinion matters. Every voice counts.
                    </p>
                    <p className="motto gradient hero-motto">“No Just Talk Am. Prove Am.”</p>
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
                        <div className="hero__subtext--highlight">
                            <span></span>
                            <span>Free to Join</span>
                        </div>
                        <div className="hero__subtext--highlight">
                            <span></span>
                            <span>100% Community Driven</span>
                        </div>
                        <div className="hero__subtext--highlight">
                            <span></span>
                            <span>Daily Polls</span>
                        </div>
                    </div>
                </div>
                <div className="hero__image">
                    {/* <img className="hero__mascot" src={Mascot} alt="Hero Mascot" /> */}
                    <img
                        src={isDarkMode ? Mascot : Mascot2}
                        className={isDarkMode ? "hero__mascot" : "hero__mascot"}
                        alt="Hero Mascot"
                    />
                </div>
            </article>
        </section>
    );
} 
