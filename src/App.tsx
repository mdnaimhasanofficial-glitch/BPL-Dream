
import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import NavBar from "./Components/NavBar"
import Players from "./Components/Players";
import type { IPlayers } from "./PlayersType";
import { ToastContainer } from "react-toastify";

const playersFetch = async ():Promise<IPlayers[]> =>{
  const res =await fetch('/players.json');
  const data = await res.json();
  return data;
}




function App() {
  const [coin, setCoin] = useState(15000000)

  const playersPromise = playersFetch();

  return (
    <>
        <NavBar coin={coin}/>
        <Banner/>
        <Suspense fallback={<p>Loding..</p>}>
          <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
        </Suspense>
        <ToastContainer />

    </>
  )
}

export default App
