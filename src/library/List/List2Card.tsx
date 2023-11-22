import React from 'react'
import Card3Text from '../Card/Card3Text'

function List2Card({ItemList ,Delete}) {
  return (
    <div>
   {ItemList.map((Item,i)=>{
    return(
        <div key={i}>
     <Card3Text Text1={Item.Text1} Text2={Item.Text2} Text3={Item.Text3} Id ={Item.Id} Delete={Delete}/>
        </div>
    )})}
    </div>
  )
}

export default List2Card