
import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayers } from "../PlayersType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
    playersPromise: Promise<IPlayers[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {

    const players = use(playersPromise);

    // selected = অনেকগুলো selected player-এর array
    const [selected, setSelected] = useState<IPlayers[]>([]);

    // কোন button/tab active সেটা রাখবে
    const [buttonType, setButtonType] = useState("available");

    return (
        <div className="container mx-auto my-5">

            <div className="flex justify-between mb-5 px-2">

                <h2 className="font-bold text-1xl">
                    {buttonType === "available"
                        ? "Available Players"
                        : "Selected Players"
                    }
                </h2>

                <div className="flex">

                    <button
                        onClick={() => setButtonType("available")}
                        className={`btn ${
                            buttonType === "available"
                                ? "btn-primary"
                                : ""
                        } rounded-r-none`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => setButtonType("selected")}
                        className={`btn ${
                            buttonType === "selected"
                                ? "btn-primary"
                                : ""
                        } rounded-l-none`}
                    >
                        Selected
                    </button>

                </div>
            </div>

            <div>
                {buttonType === "available" ? (

                    <AvailablePlayers
                        players={players}
                        coin={coin}
                        setCoin={setCoin}
                        selected={selected}
                        setSelected={setSelected}
                    />

                ) : (

                    <SelectedPlayers
                        coin={coin}
                        setCoin={setCoin}
                        selected={selected}
                        setSelected={setSelected}
                    />

                )}
            </div>

        </div>
    );
};

export default Players;
