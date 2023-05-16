import React, { useEffect, useState } from 'react'
import Addnotes from './Addnotes'


// const Notes = ({ txtdata }) => {
//     const disp = () => {
//         alert("you input value" + txtdata)
//         console.log(txtdata)
// }
const Notes = () => {
    const [userdata, setUserData] = useState('')
    const [localstoragedata, setLocalStorageData] = useState(JSON.parse(localStorage.getItem('notes')))
    // const [notearr, setNoteArr] = useState(JSON.parse(localStorage.getItem('notes')));
    const [notearr, setNoteArr] = useState(JSON.parse(localStorage.getItem('notes')) ||
        []);

    const [localdata, setLocalData] = useState('')
    // const [another, setAnother] = useState()


    useEffect(() => {
    }, [])
    console.log(localstoragedata)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notearr));
        const localstoredata = JSON.parse(localStorage.getItem('notes'));
        if (localstoredata) {
            setLocalStorageData(localstoredata)
        }
    }, [notearr])

    const del = (id) => {
        // console.log(id)
        const newnotes = localstoragedata.filter((note) => note.id !== id);
        setLocalStorageData(newnotes);
        console.log(localstoragedata)
    }
    const disp = () => {
        // alert("you input value" + txtdata)
        // console.log(txtdata)
        // alert(`${userdata}`)
        // setNoteArr()
        setUserData("")
        setNoteArr((notearr) => {
            let updatelist = ([...notearr, userdata])
            console.log(updatelist)
            return updatelist
        })
    }


    const data = (e) => {
        console.clear()
        console.log(e.target.value)
        setUserData(e.target.value)
        setUserData(e.target.value)
    }
    return (
        <>
            {/* <Addnotes dis={disp} /> */}
            {/* const localval = JSON.parse(localStorage.getItem('notes')); */}
            {/* const localval = setLocalData(JSON.parse(localStorage.getItem('notes')));
                            console.log(localval) */}
            <div className="container">
                <div className="grandparent">
                    {
                        notearr ? notearr.map((obj, index) => {
                            const getdate = new Date().toLocaleDateString();
                            return (
                                <>
                                    <div className="localparent">
                                        <textarea name="" id="inptxt" cols="30" rows="10" value={localstoragedata[index]} style={{ background: "transparent" }} disabled>
                                        </textarea>
                                        <div className="d-flex justify-content-between p-1 align-item-center ">
                                            <span>{getdate}</span>
                                            <button className='btn btn-danger' onClick={(e) => del(index)}>Del</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : ""
                    }
                    <div className="parent">
                        <textarea name="" id="inptxt" cols="30" rows="10" onChange={data} placeholder='add notes........' value={userdata}>
                        </textarea>
                        <div className="d-flex justify-content-end p-1 align-item-center ">
                            <button className='btn btn-light text-dark' onClick={disp}>Add note</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Notes
