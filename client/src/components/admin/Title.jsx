import React from "react";


const Title = ({text1,text2}) => {
    return(
        <div>
           <h1>
            {text1}<span className="unerline text-primary">{text2}</span>
           </h1>
        </div>
    )
}
export default Title;