import  { type JSX } from 'react';
import Mascot from '../assets/images/hero-mascots.png'
import Stock1 from '../assets/images/stock1.png';
import Stock2 from '../assets/images/stock2.png';
import './hero.css';
import { Btn } from '../components/btns';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

export function Hero(): JSX.Element {
    return (
        <section className="hero" aria-label="Hero section">
            <article className="hero__container" aria-label="Hero content">
            <img src={Stock2} className='stock2' alt="Stock 2" />
            <img src={Stock1} className='stock1' alt="Stock 1" />
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
                        Join thousands of people sharing ideas through daily polls, discussions and meaningful conversations.Every opinion matters. Every voice counts.
                    </p>
                    <div className="hero__buttons">
                        <Btn 
                            href='#'
                            className='btn btn1'
                        >
                           <FaWhatsapp className='whats' size={25} />
                           <span>Join WhatsApp</span>
                        </Btn>
                        <Btn 
                            href='#'
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
                    <img className="hero__mascot" src={Mascot} alt="Hero Mascot" />
                </div>
            </article>
        </section>
    );
} 
