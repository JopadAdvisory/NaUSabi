import type { JSX } from 'react/jsx-runtime';
import { Btn } from '../components/btns';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './join.css'

export function Join(): JSX.Element {
    return(
        <section className='join-section' aria-label='join group section'>
            <div className='join-container'>
                <span className="join-title">Doors are open</span>
                <h1 >
                    Ready to Prove <br /> Your <span className="gradient">Opinion?</span>
                </h1>
                <p className="join-paragraph">
                    Join a community where ideas are challenged, opinions are respected, and every conversation is an opportunity to learn.
                </p>
                <p className="motto gradient join-motto">“No Just Talk Am. Prove Am.”</p>
                <div className='join-btns'>
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
            </div>
        </section>
    );
}