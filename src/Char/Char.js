import React from 'react';
import './Char.css'


const Char = (props) => {
    return(
        <div className='box' onClick={props.clicked}>
            {props.character}
        </div>
    )
};

export default Char;