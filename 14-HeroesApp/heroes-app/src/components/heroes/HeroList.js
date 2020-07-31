import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <li key = { hero.id }>
                        { hero.superhero }
                    </li>
                ))
            }
        </div>
    );

};

export default HeroList;