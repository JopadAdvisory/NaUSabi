import type { JSX } from 'react';
import './rules.css'
import { Ban, HeartHandshake, Lightbulb, ShieldCheck, Users } from 'lucide-react';

export function Rules(): JSX.Element {
    return (
        <section className="rules" id="rules" aria-label="House Code">
           <div className="rules-container">
                <span className="rules-title">House Code</span>
                <h1 >
                    Community <span className="gradient">Rules</span>
                </h1>
                <p className="rules-paragraph">
                    A few small agreements that keep the conversation sharp.
                </p>

                <div className='cards'>
                    <div className="card">
                        <div className='ico'>
                            <Ban className="icon" size={24} />
                        </div>
                        <h3>No insults</h3>
                        <p>
                            Keep it clean. Disagreement is fine — disrespect is not.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <HeartHandshake className="icon" size={24} />
                        </div>
                        <h3>Respect everyone</h3>
                        <p>
                            Every voice is welcome. Treat others how you want to be treated.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <Lightbulb className="icon" size={24} />
                        </div>
                        <h3>Attack ideas, not people</h3>
                        <p>
                            Challenge the argument, never the person behind it.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <ShieldCheck className="icon" size={24} />
                        </div>
                        <h3>No spam</h3>
                        <p>
                            Keep the space signal-rich. No self-promo, no noise.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <Users className="icon" size={24} />
                        </div>
                        <h3>Everyone can participate</h3>
                        <p>
                            Quiet or loud, expert or curious — the floor is yours.
                        </p>
                    </div>
                </div>
           </div>
        </section>
    );
}