import type { Dispatch, SetStateAction } from "react";
import type { IPlayers } from "../PlayersType";
import SelectedPlayersCard from "./SelectedPlayersCard";

interface PropsSelected {
    selected: IPlayers[]
    coin: number
    setCoin: Dispatch<SetStateAction<number>>;
    setSelected: Dispatch<SetStateAction<IPlayers[]>>
}

const SelectedPlayers = ({ selected, setSelected, coin, setCoin}: PropsSelected) => {
 

    return (
        <SelectedPlayersCard coin={coin} setCoin={setCoin} selected={selected} setSelected={setSelected} ></SelectedPlayersCard>
        
    );
};

export default SelectedPlayers;