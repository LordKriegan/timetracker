import React from 'react';
import {MdPlayArrow, MdStop} from 'react-icons/md'
function Controlbar(props) {
    return (
        <div className="row">
            <div className="col-sm-3 text-center">
                <p>Time left in Activity:</p>
                <p>{props.timeLeft}</p>
            </div>

            <div className="col-sm-4 offset-sm-1 text-center">
                <div className="btn-group">
                    <button onClick={props.startButton} className="btn btn-default"><MdPlayArrow /></button>
                    <button className="btn btn-default"><MdStop /></button>
                </div>
            </div>

            <div className="col-sm-3 offset-sm-1 text-center">
                <p>Estimated End of Class:</p>
                <p>{(props.etc === "00:00") ?  "00:00" : props.etc.toLocaleTimeString()}</p>
            </div>
        </div>
    )
}

export default Controlbar;