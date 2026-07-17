import type { JSX } from 'react';
import { motion } from 'framer-motion';
import './btns.css';

type BtnProps = {
    href?: string;
    children?: React.ReactNode;
    className?: string;
}

export function Btn({ href, className, children} : BtnProps): JSX.Element {
    return (
        <motion.div 
            className="btns"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            layout
            viewport={{ once: true, amount: 0.3 }}
            transition={{ layout: {
            duration: 0.8,
            ease: [0.16, 1, 0.3,1 ]
        },
            delay: 0.3,
            duration: 0.8,
            ease: [0.16, 1, 0.3,1 ]
        }}
        > 
            <a  
                href={href} 
                className={className}
                target='_blank'
                rel='noopener noreferrer'
            >{children}</a>
        </motion.div>
    );
}