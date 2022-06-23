import React from 'react';
import "./main.scss";

interface MainProps {
    chosenLine: string
}

const Main: React.FC<MainProps> = ({ chosenLine }) => {

    function log(val: any) {
        console.log(val)
    }
  return (
    <div>
        <button onClick={() => log(chosenLine)}> sdfasdfgasdfasdfasdfasdf</button>
    </div>
  )
}

export default Main