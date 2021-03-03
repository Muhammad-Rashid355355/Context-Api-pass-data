import React, { useContext } from 'react';
import Countercontext from './createContext';

const Child=()=>{
    
    const counterdata=useContext(Countercontext)
    console.log(counterdata)

return (
<>
{counterdata.map((data)=>(
    <div>{data.Name}{data.Age}{data.City}</div>
)
)}
</>
)
}
export default Child;
