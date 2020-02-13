import React from 'react'
import './SideBar.css'
import Note from './Note.js'

function SideBar(){

    return(
        <div className="SideBar">
            <h3>Side Bar</h3>
            <Note />
        </div>
    )
}


export default SideBar