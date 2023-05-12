import { useState } from "react";
import Hoc from "./Hoc";

const OnMouseHover = (props) => {
    
    return (
        <div>
            <h1>{props.value}</h1>
            <button onMouseOver={props.submit} >Increment by Click</button>
        </div>
    );
}

export default Hoc(OnMouseHover) ;
