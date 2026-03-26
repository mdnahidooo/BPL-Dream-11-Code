import React from 'react';
import Card from '../../../ui/Card/Card';



const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    console.log(players);
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
                {
                    players.map((player, ind) => {
                        // console.log(player);
                        return (
                            <Card key={ind} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;