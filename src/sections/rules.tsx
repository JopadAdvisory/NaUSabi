import type { JSX } from 'react';
import './rules.css'
import { motion } from 'framer-motion';
import { Ban, HeartHandshake, Lightbulb, ShieldCheck, Users } from 'lucide-react';

export function Rules(): JSX.Element {
    return (
        <section className="rules" id="rules" aria-label="House Code">
           <div className="rules-container">
                <motion.span 
                    className="rules-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    layout
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        layout: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        },
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >House Code</motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    layout
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        layout: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        },
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}  
                >
                    Community <span className="gradient">Rules</span>
                </motion.h1>
                <motion.p 
                    className="rules-paragraph"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    layout
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        layout: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        },
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}  
                >
                    A few small agreements that keep the conversation sharp.
                </motion.p>

                <div className='cards'>
                    <motion.div 
                        className="card glow-target"   
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            layout: {
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            },
                            delay: 0.3,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className='ico'>
                            <Ban className="icon" size={24} />
                        </div>
                        <p className='h3'>No insults</p>
                        <p>
                            Keep it clean. Disagreement is fine — disrespect is not.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            layout: {
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            },
                            delay: 0.4,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className='ico'>
                            <HeartHandshake className="icon" size={24} />
                        </div>
                        <p className='h3'>Respect everyone</p>
                        <p>
                            Every voice is welcome. Treat others how you want to be treated.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            layout: {
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            },
                            delay: 0.5,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className='ico'>
                            <Lightbulb className="icon" size={24} />
                        </div>
                        <p className='h3'>Attack ideas, not people</p>
                        <p>
                            Challenge the argument, never the person behind it.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            layout: {
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            },
                            delay: 0.6,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className='ico'>
                            <ShieldCheck className="icon" size={24} />
                        </div>
                        <p className='h3'>No spam</p>
                        <p>
                            Keep the space signal-rich. No self-promo, no noise.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="card glow-target"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            layout: {
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            },
                            delay: 0.7,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className='ico'>
                            <Users className="icon" size={24} />
                        </div>
                        <p className='h3'>Everyone can participate</p>
                        <p>
                            Quiet or loud, expert or curious — the floor is yours.
                        </p>
                    </motion.div>
                </div>
           </div>
        </section>
    );
}