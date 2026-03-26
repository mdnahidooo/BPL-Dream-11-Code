import React, { useState } from 'react';
import { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    // console.log(playersPromise);

    const players = use(playersPromise);
    // console.log(players);

    const [selectedType, setSelectedType] = useState('available');
    console.log(selectedType);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                {
                    selectedType === "available" ? <h2 className='text-2xl font-bold my-8'>Available Players</h2> : <h2 className='text-2xl font-bold my-8'>Selected Players (2/6)</h2>
                }

                <div>
                    <button
                        onClick={() => { setSelectedType("available") }}
                        className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-xl`}
                    >
                        Available
                    </button>


                    <button
                        onClick={() => { setSelectedType("selected") }}
                        className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-xl`}>
                        Selected(0)
                    </button>
                </div>
            </div>


            {
                selectedType === 'available'
                    ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin}></AvailablePlayers>
                    : <SelectedPlayers></SelectedPlayers>
            }


        </div>
    );
};

export default Players;