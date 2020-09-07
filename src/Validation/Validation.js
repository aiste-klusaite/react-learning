import React from 'react';


const Validation = (props) => {
    let validMessage = "Text long enough";

    if(props.textLength <= 5){
        validMessage = "Text too short >:(";
    }
return (
<div>
    {validMessage}
</div>

);
}


export default Validation