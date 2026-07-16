import type { JSX } from 'react';
import './community.css'
import { motion } from 'framer-motion';
import { Brain, MessagesSquare, Trophy, Vote } from 'lucide-react';

export function Community(): JSX.Element {
    return (
        <section className="community" id="community" aria-label="Community section">
           <div className="community-container">
                <motion.span 
                    className="community-title"
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
                >The Community</motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}/////////////////////////////////
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
                    What is <span className="gradient">Na U Sabi?</span>
                </motion.h1>
                <motion.p 
                    className="community-paragraph"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
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
                    Na U Sabi is a community where people come together to answer interesting questions, share opinions, learn from different perspectives and enjoy meaningful conversations. Whether you're right or wrong, your opinion deserves to be heard.
                </motion.p>

                <div className='cards glow-target'>
                    <motion.div 
                        className="card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
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
                        <div className='ico'>
                            <Vote className="icon" size={24} />
                        </div>
                        <h3>Daily Polls</h3>
                        <p>
                            Join exciting daily polls that challenge how you think.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        layout
                        viewport={{ once: true, amount: 0.5 }}
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
                        <div className='ico'>
                            <MessagesSquare className="icon" size={24} />
                        </div>
                        <h3>Discussions</h3>
                        <p>
                            Respectful conversations with different opinions.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
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
                        <div className='ico'>
                            <Brain className="icon" size={24} />
                        </div>
                        <h3>Learn</h3>
                        <p>
                            See how other people think — and stretch your own thinking.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        
                        viewport={{ once: true, amount: 0.5 }}
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
                        <div className='ico'>
                            <Trophy className="icon" size={24} />
                        </div>
                        <h3>Community</h3>
                        <p>
                            Join exciting daily polls that challenge how you think.
                        </p>
                    </motion.div>
                </div>
           </div>
        </section>
    );
}