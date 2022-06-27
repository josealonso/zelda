import React from 'react';
import "./lineInfo.scss";

interface LineInfoProps {
    i: {
        name: string
        sold: boolean
        forSale: boolean
        currentOwner: string
    }
}

const LineInfo: React.FC<LineInfoProps>= ({ i }) => {
  return (
    <div key={i.name} className="token x">
        <div className='wrapper'>
          <div className='title'>Title:&nbsp;&nbsp;</div>
          <div className='data'>{i.name}</div>
        </div>
        <div className='wrapper'>
          <div className='title'>Sold:&nbsp;&nbsp;</div>
          {i.sold === true ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='wrapper'>
          <div className='title'>For sale:&nbsp;&nbsp;</div>
          {i.forSale === true ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='owner'>
          <div className='title'>Current Owner:&nbsp;&nbsp;</div>
          <div className='data'>{i.currentOwner}</div>
        </div>
    </div>
  )
}

export default LineInfo