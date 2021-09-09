import React from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/announce.css'

function Announcement() {

    const router = useHistory()

    return (
        <div className="announceDiv">
            <div className="announce-left">
                <button onClick={()=>router.push('/dashboard')}>back to dashboard</button>
            </div>

            <div className="announce-right">
                <h5>Subject</h5>
                <input></input>
                <h5>Message</h5>
                <textarea cols='40' rows='40'></textarea>
            </div>
            
        </div>
    )
}

export default Announcement
