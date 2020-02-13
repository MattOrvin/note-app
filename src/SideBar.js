import React from 'react'
import Note from './Note.js'

function SideBar(){

    const divStyle = {
        display: 'flex',
        alignItems: 'left'
    }

    return(
        <div style={divStyle}>
            <h3>Side Bar</h3>
            <Note />
        </div>
    )
}


export default SideBar