import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log(player)

    const [isSelected, setIsSelected] = useState(false)

    const handleChoosePlayer = () => {
        const newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(coin - player.price)
        }
        else {
            toast.error("Not enough coin to purchase this player");
            return;
        }

        toast.success(`${player.playerName} is selected`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player]);
    }


    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={player.playerImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />{player.playerName}</h2>

                    <div className='flex items-center gap-2'>
                        <p className='flex items-center gap-2'><FaFlag /> {player.playerCountry}</p>
                        <button className='btn'>{player.playerType}</button>
                    </div>

                    <div className="divider"></div>
                    <p className='font-bold'>Rating({player.rating
                    })</p>

                    <div className='flex items-center font-bold'>
                        <p>{player.battingStyle}</p>
                        <p>{player.bowlingStyle}</p>

                    </div>

                    <div className="card-actions justify-between flex items-center">
                        <p className='font-semibold'>Price: ${player.price}</p>

                        <button
                            className="btn"
                            onClick={handleChoosePlayer}
                            disabled={isSelected ? true : false}
                        >
                            {isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;