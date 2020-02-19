import React, { useState } from 'react'
import Note from './Note.js'
// import TextField from './TextField.js'
import './Styles/SideBar.css'


function SideBar(){
    const [userText] = useState("hello world")
    
    return(
        <div className="SideBar">
            <h3>Side Bar</h3>
            <p>{userText}</p>
            <Note />
            <Note />
            <Note />
        </div>
    )
}


export default SideBar