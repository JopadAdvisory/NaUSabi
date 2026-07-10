import type { JSX } from 'react';
import './community.css'
import { Brain, MessagesSquare, Trophy, Vote } from 'lucide-react';

export function Community(): JSX.Element {
    return (
        <section className="community" aria-label="Community section">
           <div className="community-container">
                <span className="community-title">The Community</span>
                <h1 >
                    What is <span className="gradient">Na U Sabi?</span>
                </h1>
                <p className="community-paragraph">
                    Na U Sabi is a community where people come together to answer interesting questions, share opinions, learn from different perspectives and enjoy meaningful conversations. Whether you're right or wrong, your opinion deserves to be heard.
                </p>

                <div className='cards'>
                    <div className="card">
                        <div className='ico'>
                            <Vote className="icon" size={24} />
                        </div>
                        <h3>Daily Polls</h3>
                        <p>
                            Join exciting daily polls that challenge how you think.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <MessagesSquare className="icon" size={24} />
                        </div>
                        <h3>Discussions</h3>
                        <p>
                            Respectful conversations with different opinions.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <Brain className="icon" size={24} />
                        </div>
                        <h3>Learn</h3>
                        <p>
                            See how other people think — and stretch your own thinking.
                        </p>
                    </div>

                    <div className="card">
                        <div className='ico'>
                            <Trophy className="icon" size={24} />
                        </div>
                        <h3>Community</h3>
                        <p>
                            Join exciting daily polls that challenge how you think.
                        </p>
                    </div>
                </div>
           </div>
        </section>
    );
}