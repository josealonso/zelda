import React from 'react'
import "./browse.scss";

function Browse() {
  return (
    <div className='browseWrapper'>
      <div className='browseBox'>
        <div className='navigation'>
          <h3 className='browseTitle'> Browse Items</h3>
          <button className='refreshButton'>Refresh</button>
        </div>
      </div>
    </div>
  )
}

export default Browse