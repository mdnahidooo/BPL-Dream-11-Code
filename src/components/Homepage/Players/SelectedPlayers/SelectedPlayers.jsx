import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPlayers);

        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        console.log(filteredPlayers);

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            <div className='space-y-5'>
                {
                    selectedPlayers.map((player, ind) => {
                        return <div key={ind} className='flex justify-between items-center p-10 gap-6 rounded-2xl border'>
                            <div className='flex items-center gap-6'>
                                <img src={player.playerImg} alt={player.playerName} className='h-18 w-auto rounded-md' />
                                <div>
                                    <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser />{player.playerName}</h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>

                            <button
                                className='btn text-red-500'
                                onClick={() => handleDeleteSelectedPlayer(player)}
                            >
                                <MdDelete />
                            </button>


                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;