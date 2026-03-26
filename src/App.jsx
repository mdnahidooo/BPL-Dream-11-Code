
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Homepage/Players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(500000);

  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
        <Banner></Banner>
      </header>
      <main>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players
            playersPromise={playersPromise}
            setCoin={setCoin}
            coin={coin}
          >
          </Players>
        </Suspense>




        {/* react toastify */}
        <ToastContainer />

      </main>
    </>
  )
}

export default App
