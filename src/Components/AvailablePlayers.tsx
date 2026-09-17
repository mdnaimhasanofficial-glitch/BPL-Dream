
import type { Dispatch, SetStateAction } from "react";
import type { IPlayers } from "../PlayersType";
import PlayerCard from "./PlayerCard";

interface Props{
    players: IPlayers[]
    coin: number
    selected: IPlayers
    setSelected: Dispatch<SetStateAction<IPlayers>>
    setCoin: Dispatch<SetStateAction<number>>
}


const AvailablePlayers = ({ players , coin, setCoin ,selected, setSelected}:Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player: IPlayers, ind:number) => {
                    return (


                        <PlayerCard key={ind} player={player} coin={coin} setCoin={setCoin} selected={selected} setSelected={setSelected}/>


                    );
                })}
            </div>
        </div>
    );
};

export default AvailablePlayers;