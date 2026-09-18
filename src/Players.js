import React from 'react'
import { Players } from 'src/shared/ListOfPlayers'
export default function Players() {
    return (
    <div className='container'>
             {Players.map((player) =>(
               <div className='column'>
           <div className='card'>
           <img src='{player.img}'/>
             <h3></h3>
             <p className='title'></p>
             <p><button>Detail</button></p>
           </div>
         </div> 
             ))}
    </div>
  )
}
