import React from 'react'
import new_collection from '../../assets/NewCollection'
import Item from '../Item/Item'
import './NewCollection.css'

const  NewCollection = () => {
  return (
    <div className='newCollection' >
        <h1>New Collection</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            
            
            </div>     
        
    </div>
  )
}

export default NewCollection