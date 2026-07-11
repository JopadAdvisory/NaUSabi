import type { JSX } from 'react/jsx-runtime';
import './nav.css'

export function Nav(): JSX.Element {
    return(
        <nav>
            <ul className='nav__container'>
                <div className='left'>
                    <a href="#hero">
                        <li>
                            <span>N</span>
                            <span>Na U Sabi</span>
                        </li>
                    </a>
                </div>
                <div className='mid'>
                    <a href="#community">
                        <li>What is it</li>
                    </a>
                    <a href="#rules">
                        <li>Rules</li>
                    </a>
                </div>
                <div className='right'>
                    <a href="#join">
                        <li>Join</li>
                    </a>
                </div>
            </ul>
        </nav>
    );
}