import React from 'react';
import SelectedCard from '../../../ui/SelectedCard';


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
                    selectedPlayers.length === 0 ?
                        <div className='h-100 flex justify-center items-center flex-col gap-4'>
                            <h2 className='font-semibold text-xl'>No players selected yet</h2>
                            <p>Go to Available tab to select players</p>
                        </div>
                        : selectedPlayers.map((player, ind) => {
                            return (
                                <SelectedCard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;