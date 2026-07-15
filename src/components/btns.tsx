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
            <a href={href} className={className}>{children}</a>
        </motion.div>
    );
}