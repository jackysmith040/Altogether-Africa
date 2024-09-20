import React from 'react';
import { Users, Handshake, HandCoins } from 'lucide-react';

const cards = [
    {
        description: 'African-centered development prioritizing well-being and skills.',
        icon: <Users className='w-[50px] h-[50px] text-primary'/>
    },
    {
        description: 'Supporting African SMEs for economic growth.',
        icon: <HandCoins className='w-[50px] h-[50px] text-primary'/>
    },
    {
        description: 'Empowering African communities through knowledge sharing.',
        icon: <Handshake  className='w-[50px] h-[50px] text-primary'/>
    },
]
const Icons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center overflow-hidden p-6 gap-10 mx-auto">
    {cards.map((cards, index) => (
      <div key={index} className="flex flex-col items-center text-center shadow-sm border border-blue-200 bg-primary rounded-xl w-72 h-[250px] pt-10">
        <div className="mt-5 p-2 bg-white rounded-full">{cards.icon}</div>
        <p className="text-gray-100 font-light text-base pt-2 px-4 leading-7">{cards.description}</p>
      </div>
    ))}
    </div>
  )
}

export default Icons