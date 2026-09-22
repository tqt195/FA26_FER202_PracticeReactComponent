import React from 'react'
import { footballers } from '../src/shared/ListOfPlayers'
export default function Players() {
    return (
    <div className='container'>
             {footballers.map((player) =>(
               <div className='column'>
           <div className='card'>
           <img src={player.img}/>
           <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>

             <h3></h3>
             <p className='title'></p>
             <p><button>Detail</button></p>
           </div>
         </div> 
             ))}
    </div>
  )
}
