import React from 'react';
import coinImg from '../../assets/dollar_1.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2">
                        0 Coins
                        <img src={coinImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;