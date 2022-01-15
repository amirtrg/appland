import React from 'react';

const Heading = ({type,children}) => {
    switch (type){
        case "h1":
        return (
            <h1 className='text-6xl font-black'>
                {children}
            </h1>
        );
        case "h2":
        return (
            <h2 className='text-5xl font-extrabold'>
                {children}
            </h2>
        );
        case "h3":
        return(
            <h3 className='text-4xl font-bold'>
                {children}
            </h3>
        );
        case "h4":
        return(
            <h3 className='text-3xl font-semibold'>
                {children}
            </h3>
        );
        case "h5":
        return(
            <h3 className='text-2xl font-medium'>
                {children}
            </h3>
        );
        case "h6":
        return(
            <h3 className='text-xl font-normal'>
                {children}
            </h3>
        )
        default :
        return (
            <h6 className='text-lg font-light'>
                {children}
            </h6>
        )
    }
}

export default Heading;
