import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={`w-full sm:w-full md:w-3/4 mx-auto ${className}`}>
            {children}
        </div>
    );
}

export default Container;
