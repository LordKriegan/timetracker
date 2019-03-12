import React, { Component } from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown, FaCheck, FaBan } from 'react-icons/fa';

class Timetracker extends Component {
    state = {
        data: ""
    }
    componentDidMount() {
        //check to see if location.state has any data, if not go back to upload page
        if (!this.props.location.state) this.props.history.push("/");
        else this.setState({ data: this.props.location.state.data })
    }

    moveActivity = (id, destId) => {
        if (destId < 0 || destId === this.state.data.length) return;
        let data = this.state.data.slice();
        let start = data[id];
        let dest = data[destId];
        data[id] = dest;
        data[destId] = start;
        this.setState({
            data: data
        })
    }

    skipActivity = (id) => {
        let data = this.state.data.slice();
        data[id].skipActivity = !data[id].skipActivity;
        this.setState({
            data: data
        })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <div className="row">
                    <div className="col-sm-1 text-center">
                        Number
                    </div>
                    <div className="col-sm-1 text-center">
                        Length
                    </div>
                    <div className="col-sm-4 text-center">
                        Description
                    </div>
                    <div className="col-sm-3 text-center">
                        Priority
                    </div>
                    <div className="col-sm-1 text-center">
                        Skip
                    </div>
                    <div className="col-sm-1 text-center">
                        Move Up
                    </div>
                    <div className="col-sm-1 text-center">
                        Move Down
                    </div>
                </div>
                <hr />
                {
                    (this.state.data)
                        ? this.state.data.map((elem, id) => {
                            return (
                                <div className="row">
                                    <div className="col-sm-1 text-center">
                                        {elem.activityNum}
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        {elem.activityTime + "m"}
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        {elem.activityDesc}
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        {elem.activityPriority}
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <span className="icon" onClick={() => this.skipActivity(id)}>{(elem.skipActivity) ? <FaCheck /> : <FaBan />}</span>
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <FaAngleDoubleUp onClick={() => this.moveActivity(id, id - 1)} className="icon" />
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <FaAngleDoubleDown onClick={() => this.moveActivity(id, id + 1)} className="icon" />
                                    </div>
                                </div>
                            )
                        })
                        : ""
                }
            </>
        )
    }
}

export default Timetracker;