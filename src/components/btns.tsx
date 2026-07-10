import type { JSX } from 'react';
import './btns.css';

type BtnProps = {
    href?: string;
    children?: React.ReactNode;
    className?: string;
}
export function Btn({ href, className, children} : BtnProps): JSX.Element {
    return (
        <div className="btns"> 
            <a href={href} className={className}>{children}</a>
        </div>
    );
}