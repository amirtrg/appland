
const Card = ({children,className,onMouseEnter,onMouseLeave}) => {
    const styles = " m-4 p-4 rounded-2xl "
    return (
        <div className={className ? `${styles} ${className}` : `${styles}` } 
        onMouseEnter={onMouseEnter&&onMouseEnter}
        onMouseLeave={onMouseLeave&&onMouseLeave}
        >
            {children}
        </div>
    );
}

export default Card;
