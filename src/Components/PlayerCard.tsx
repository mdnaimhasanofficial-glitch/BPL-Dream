
import { CgProfile } from 'react-icons/cg';
import type { IPlayers } from '../PlayersType';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { toast } from 'react-toastify';
interface Types{
    player: IPlayers
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selected: IPlayers[]
    setSelected: Dispatch<SetStateAction<IPlayers[]>>
}

const PlayerCard = ({player, coin, setCoin , selected, setSelected}: Types) => {


    const [isClicked , setIsClicked] = useState(false);

const buttonHandler = () => {

    const newPrice = coin - player.price;

    if (newPrice >= 0) {

        setCoin(newPrice);

        toast.success(`${player.playername} purchase successfully`);

        setIsClicked(true);

        setSelected([...selected, player]);

    } else {

        toast.warning('Coin not enough');

    }
}
    


    return (
        <div key={player.playername}>
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1">

                                {/* Player Image */}
                                <figure className="p-3">
                                    <img
                                        src="https://tse2.mm.bing.net/th/id/OIP.IZhymuUl71KqYF42sc9dIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                                        alt="Player"
                                        className="w-full h-60  rounded-xl"
                                    />
                                </figure>

                                <div className="p-5">

                                    {/* Player Name */}
                                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800 mb-4">
                                        <CgProfile className="text-2xl" />
                                        {player.playername}
                                    </h2>

                                    {/* Country + Role */}
                                    <div className="flex justify-between items-center gap-2">
                                        <h2 className="text-gray-600 font-medium">
                                            {player.origin}
                                        </h2>

                                        <button className="px-3 py-1.5 rounded-lg bg-gray-100 text-sm font-semibold text-gray-700">
                                            All Rounder
                                        </button>
                                    </div>

                                    <div className="divider my-3"></div>

                                    {/* Rating */}
                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800 mb-3">
                                            Rating
                                        </h2>

                                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3">
                                            <h2 className="font-semibold text-gray-700">
                                                {player.batting_style}
                                            </h2>

                                            <h2 className="font-semibold text-gray-700">
                                                {player.bowling_stry}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Price + Button */}
                                    <div className="flex justify-between items-center mt-5 gap-3">
                                        <h2 className="font-bold text-xl text-gray-800">
                                            {player.price}
                                        </h2>

                                        <button
                                        onClick={()=> buttonHandler()}
                                        
                                        className={`bg-black text-white  px-4 py-2.5 rounded-xl font-semibold  ${isClicked === true ? "bg-gray-300 text-white cursor-crosshair" : "" }`}
                                        disabled={isClicked=== true ? true: false}
                                        >
                                            {isClicked === true ? "Selected" : "Choose Player"}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
    );
};

export default PlayerCard;