import React from 'react'
import Header from '../_components/Header'

function TrainexDetailLearnlayout({children}) {
  return (
    <div>
      <div className='p-1'>
          <Header/>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default TrainexDetailLearnlayout