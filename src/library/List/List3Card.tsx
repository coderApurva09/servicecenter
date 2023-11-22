import React from 'react'
import Card3Text from '../Card/Card3Text'
import Card4Text from '../Card/Card4Text'

function List3Card({ItemList}) {
  return (
    <div>
   {ItemList.map((Item,i)=>{
    return(
        <div key={i}>
     <Card4Text Text1={Item.Text1} Text2={Item.Text2} Text3={Item.Text3} Text4={Item.Text4} />
        </div>
    )})}
    </div>
  )
}

export default List3Card