import type { JSX } from 'react/jsx-runtime';
import { Btn } from '../components/btns';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './join.css'

export function Join(): JSX.Element {
    return(
        <section id='join' className='join-section' aria-label='join group section'>
            <div className='join-container'>
                <motion.span 
                    className="join-title"
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
                >Doors are open</motion.span>
                <motion.h1
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
                    Ready to Prove <br /> Your <span className="gradient">Opinion?</span>
                </motion.h1>
                <motion.p 
                    className="join-paragraph"
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
                    Join a community where ideas are challenged, opinions are respected, and every conversation is an opportunity to learn.
                </motion.p>
                <motion.p 
                    className="motto gradient join-motto"
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
                <div className='join-btns'>
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
            </div>
        </section>
    );
}