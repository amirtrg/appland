import React from 'react';
import Card from './../components/Ui/Card/Card';

const Test = () => {
    return (
       <>
        <Card bg="bg-red-500" styles={{padding:"p-20",background:"bg-red-700"}}>
            test
        </Card>
        <Card>
            test
        </Card>
        <Card bg="bg-blue-400">
            test
        </Card>

       </>
    );
}

export default Test;
