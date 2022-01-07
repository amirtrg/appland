
import { animate, motion } from 'framer-motion';
const Card = ({children,className,onMouseEnter,onMouseLeave,initial,animate}) => {
    const styles = " m-4 p-4 rounded-2xl "
    return (
        <motion.div initial={initial} animate={animate} className={className ? `${styles} ${className}` : `${styles}` } 
        onMouseEnter={onMouseEnter&&onMouseEnter}
        onMouseLeave={onMouseLeave&&onMouseLeave}
        >
            {children}
        </motion.div>
    );
}

export default Card;
