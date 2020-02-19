import React, { useState } from 'react'
import './Styles/NoteContainer.css'
import TextField from './TextField'
import SideBar from './SideBar'

function NoteContainer(){
    return(
        <div className="NoteContainer">
            <SideBar />
            <TextField />
        </div>
    )
}


export default NoteContainer