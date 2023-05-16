import React from 'react'
import Notes from './Notes'

const Nav = () => {
    return (
        <>
            <div className="">
                <nav aria-label="breadcrumb" >
                    <ol className="breadcrumb " style={{ color: "white", background: "black", padding: "10px" }}>
                        <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>iNotes</li>
                    </ol>
                </nav>
            </div>
            <Notes/>
        </>
    )
}

export default Nav
