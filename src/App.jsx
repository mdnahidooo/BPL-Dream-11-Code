
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Homepage/Players/Players';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPromise={playersPromise}></Players>
        </Suspense>

      </main>
    </>
  )
}

export default App
