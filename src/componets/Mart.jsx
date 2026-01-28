import React from 'react'
import Sidemart from './Sidemart'
import Dashboard from './Dashboard'


const Mart = () => {
  return (
    <div>
      <div className='row w-100'>
        <div className='col-3'>
            <Sidemart/>
        </div>

        <div className='col-9'>
            <Dashboard  />
        </div>

        
      </div>

    </div>
  )
}

export default Mart
