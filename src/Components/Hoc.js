import { useState } from "react";


const Hoc = (WrappedComponent) => {
    function HocComponent(){
        const [value,SetValue]=useState(0)

        const Incfunction=()=>{
    SetValue(value+1)
        }
    
    return (
        <div>
        <WrappedComponent value={value} submit={Incfunction}/>
        </div>
    );

}
return HocComponent;
}
export default Hoc;
