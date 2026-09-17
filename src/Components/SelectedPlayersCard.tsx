
import { TbTrash } from 'react-icons/tb';
import type { IPlayers } from '../PlayersType';
import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

interface ISelectedProps{
    player: IPlayers
        selected: IPlayers[]
        coin: number
        setCoin: Dispatch<SetStateAction<number>>;
        setSelected: Dispatch<SetStateAction<IPlayers[]>>
}
const SelectedPlayersCard = ({ selected, setSelected, coin, setCoin}: ISelectedProps) => {

       const handleRemovePlayer = (player: IPlayers) => {
        const newPlayer = selected.filter(playerName => playerName.playername != player.playername);
        toast.warning(`${player.playername} is deleted`)
        setSelected(newPlayer)

        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
        toast.success(`Coin Is Updated`)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                selected.map((player) => {
                    return (
                        <div className="flex gap-2 justify-between p-4 border border-gray-200 rounded-2xl items-center">
                            <div className="flex gap-2 items-center">
                                <div className=" w-20">
                                    <img className="h-20 w-auto rounded-2xl" src='https://tse2.mm.bing.net/th/id/OIP.IZhymuUl71KqYF42sc9dIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt="" />

                                </div>
                                <div>
                                    <h2 className="font-bold">{player.playername}</h2>
                                    <p>{player.playerteam}</p>

                                </div>
                            </div>
                            <div className="border border-gray-200 p-3 rounded-4xl text-red-500 font-bold"
                                onClick={() => handleRemovePlayer(player)}
                            >
                                < TbTrash />
                            </div>

                        </div>

                    )

                })
            }
        </div>
    );
};

export default SelectedPlayersCard;