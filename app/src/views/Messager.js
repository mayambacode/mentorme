import { useState } from "react";

const Messager = (props) => {
    const [selected, setSelected] = useState(false);
  
    return (
        <div className={selected ? "Messager Messager-Selected" : "Messager"} onClick={() => setSelected(!selected)}>
            <img alt="Profile Pic"></img>
            <div>
                <h5>{props.name}</h5>
                <p>{props.text}</p>
            </div>
        </div>
  
  
    );
  }
  
  export default Messager;
  