import React from 'react'
import Header from '../Header/Header'

function Lay0ut({children}) {
  return (
    <div>
        < Header />
        {children}
    </div>
  )
}

export default Lay0ut