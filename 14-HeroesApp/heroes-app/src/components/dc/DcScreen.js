import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {

    const publisher = 'DC Comics'; 

    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            <HeroList 
                publisher = { publisher }
            />
        </div>
    );
};

export default DcScreen;