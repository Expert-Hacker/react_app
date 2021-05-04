import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import './index.css'
function Createnote()
{

    const[txt,Newtxt]=useState('')
    function addTxt(e)
    {
        let val=e.target.value;
        Newtxt(val)
    }

    return(
        <>
        <div className="notecont">
            <div>
            <input id="inp1" type="text" placeholder="Title" onChange={addTxt}/>
            </div>
            <textarea name="" id="inp2" cols="" rows=""  onChange={addTxt} placeholder="Content here"></textarea>
        <button className="cbtn"><AddIcon/></button>
        </div>
        </>
    )
}
export default Createnote;