import React from 'react';
import { FaArrowRight, FaAngleDoubleUp, FaAngleDoubleDown, FaCheck, FaBan } from 'react-icons/fa';

function Table(props) {
    return(
        <>
        {
            (props.data)
                ? props.data.map((elem, id) => {
                    return (
                        <div key={id} className="row" style={{backgroundColor: (elem.completed) ? "grey" : ""}}>
                            <div className="col-sm-1 text-center" onClick={() => props.changeStart(id)}>
                                <span className="icon" >{(id === props.activityMarker) ? <FaArrowRight /> : ""}</span>
                            </div>
                            <div className="col-sm-1 text-center" onClick={() => props.changeStart(id)}>
                                {elem.activityNum}
                            </div>
                            <div className="col-sm-1 text-center" onClick={() => props.changeStart(id)}>
                                {elem.activityTime + "m"}
                            </div>
                            <div className="col-sm-4 text-center" onClick={() => props.changeStart(id)}>
                                {elem.activityDesc}
                            </div>
                            <div className="col-sm-2 text-center" onClick={() => props.changeStart(id)}>
                                {elem.activityPriority}
                            </div>
                            <div className="col-sm-3 text-center">
                                <div className="btn-group">
                                    <button className="btn btn-default" onClick={() => props.skipActivity(id)}>{(elem.skipActivity) ? <FaCheck /> : <FaBan />}</button>

                                    <button onClick={() => props.moveActivity(id, id - 1)} className="btn btn-default"><FaAngleDoubleUp /></button>

                                    <button onClick={() => props.moveActivity(id, id + 1)} className="btn btn-default"><FaAngleDoubleDown /></button>
                                </div>

                            </div>
                        </div>
                    )
                })
                : ""
        }
        </>
    )
}

export default Table;