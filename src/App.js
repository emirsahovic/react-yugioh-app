import CardList from "./card/CardList";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import SpellcasterCard from "./card/SpellcasterCard";
import DragonCard from "./card/DragonCard";
import ZombieCard from "./card/ZombieCard";
import MachineCard from "./card/MachineCard";
import Card from "./card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/spellcaster" element={<SpellcasterCard />} />
        <Route path="/dragon" element={<DragonCard />} />
        <Route path="/zombie" element={<ZombieCard />} />
        <Route path="/machine" element={<MachineCard />} />
        <Route path="/card/:name" element={<Card />} />
      </Routes>
    </>
  )
}

export default App;
