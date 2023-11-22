import React from 'react'
import Card2Text from '../Card/Card2Text'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function ListCard({ ItemList, clickNavigate }) {
  return (
    <div>

      {ItemList.length == 0 ? <ErrorMessage error={'No records found'} /> :
        <>
          {ItemList.map((Item, i) => {
            return (
              <div key={i}>
                <Card2Text Item={Item}
                // <Card2Text Text1={Item.Text1} Text2={Item.Text2} Link={Item.Link} 
                clickNavigate={clickNavigate} />
              </div>
            )
          })}

        </>
      }

    </div>
  )
}

export default ListCard