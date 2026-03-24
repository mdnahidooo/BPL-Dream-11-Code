import React from 'react';
import { use } from 'react';

const Players = ({ playersPromise }) => {
    console.log(playersPromise);

    const data = use(playersPromise);
    console.log(data);
    return (
        <div>
            <h2>Players: {data.length}</h2>
        </div>
    );
};

export default Players;