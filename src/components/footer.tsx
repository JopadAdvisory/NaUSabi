import type { JSX } from 'react';
import './footer.css';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Copyright } from 'lucide-react';

export function Footer(): JSX.Element {
    return(
        <footer className="footer-section">
            <div className="footer-container">
                <header className="header">
                    <div className="section1">
                        <div className='footer-left'>
                            <a href="#hero">
                                <div className='logo'>
                                    <span>N</span>
                                    <span>Na U Sabi</span>
                                </div>
                            </a>
                            <p className='footer-subtext fs'>Everybody Has An Opinion. <br /> What's Yours?</p>
                        </div>
                    </div>
                    <div className="section2">
                        <a href="#hero">Home</a>
                        <a href="#community">What is Na U Sabi</a>
                        <a href="#rules">Community Rules</a>
                        <a href="#join">Join Community</a>
                    </div>
                    <div className="section3">
                        <FaWhatsapp className='footer-icon' size={24} />
                        <FaTelegram className='footer-icon' size={24} />
                    </div>
                </header>
            </div>
            <div className="copyright">
                <p className='cr'>
                    <Copyright  size={14}/>
                    <span className='footer-subtext'>Na U Sabi</span>
                </p>
            </div>
        </footer>
    );
}