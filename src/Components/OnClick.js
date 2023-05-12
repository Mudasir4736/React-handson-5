import React, { useState } from 'react';
import Hoc from './Hoc';
const OnClick = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.submit}>Increment by Click</button>
        </div>
    );
}

export default Hoc(OnClick) ;
