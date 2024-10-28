import React, { useState } from 'react'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'
import Header from './components/Header'
import Modal from './components/Modal'

const App = () => {
  const [selectedPokemon,setSelectedPokemon]=useState("charmander");
  const [showModal,setShowModal]=useState(false);
  const [move,setMove]=useState({});
  return (
  
      <div className=' scroll-smooth w-screen min-h-screen text-white bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900'>
   <Header/>
   <div className='flex '>
   <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
   <PokeCard setMove={setMove}  setShowModal={setShowModal} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />

   </div>
{
  showModal &&   <Modal  setMove={setMove} move={move} setShowModal={setShowModal} />
}

   </div>
   

   
 
  )
}

export default App