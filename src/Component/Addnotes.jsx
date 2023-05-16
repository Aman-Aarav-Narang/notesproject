import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'
import Notes from './Notes'

const Addnotes = ({ dis }) => {

    const [txtval, setTxtVal] = useState("");
    const [txtarrr, setTxtArr] = useState([]);

    const data = (e) => {
        console.clear()
        console.log(e.target.value)
        const actual = (e.target.value)

        
        setTxtArr((txtarrr) => {
            let updatelist = ([...txtarrr, txtval])
            console.log(updatelist)
         
            return updatelist
        })
        console.log(txtval)
    }

    < Notes txtdata={txtval} />

    return (
        <>
            <div className="grandparent">
                <div className="parent">
                    <textarea name="" id="inptxt" cols="30" rows="10" onChange={data}>
                    </textarea>
                    <div className="d-flex justify-content-between p-1 align-item-center ">
                        <p>200</p>
                        <button className='btn btn-primary text-light' onClick={dis}>Add note</button>
                    </div>
                </div>
             
            </div>

        </>
    )
}

export default Addnotes
