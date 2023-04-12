import React from 'react'

function List({contacts}) {

  return (
    <div>
      <ul className='list'>
        {contacts.map((contacts, i)=>(
          <li key={i}>{contacts.todo}</li>
        ))

        }
      </ul>
    </div>
  )
}

export default List
