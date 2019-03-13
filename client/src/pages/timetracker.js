import React, { Component } from 'react';

import {Table, Controlbar} from '../components';

class Timetracker extends Component {
    state = {
        data: "",
        startActivity: 0,
        timeLeft: 0,
        etc: "00:00"
    }
    componentDidMount() {
        //check to see if location.state has any data, if not go back to upload page
        if (!this.props.location.state) this.props.history.push("/");
        else this.setState({ data: this.props.location.state.data })
    }

    moveActivity = (id, destId) => {
        //dont do anything if it would move an element out of bounds
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
    changeStart = (id) => {
        this.setState({
            startActivity: id
        })
    }

    startButton = () => {
        let data = this.state.data.filter((elem) => !elem.skipActivity)
        let time = 0;
        let now = new Date();
        data.forEach((elem) => time += elem.activityTime)
        this.setState({
            etc: new Date(now.getTime() + (time*60000))
        })

    }

    render() {
        return (
            <>
                <Controlbar startButton={this.startButton} timeLeft={this.state.timeLeft} etc={this.state.etc} />
                <div className="row">
                    <div className="col-sm-1 offset-sm-1 text-center">
                        Number
                    </div>
                    <div className="col-sm-1 text-center">
                        Length
                    </div>
                    <div className="col-sm-4 text-center">
                        Description
                    </div>
                    <div className="col-sm-2 text-center">
                        Priority
                    </div>
                </div>
                <hr />
                <Table data={this.state.data} startActivity={this.state.startActivity} moveActivity={this.moveActivity} changeStart={this.changeStart} skipActivity={this.skipActivity} />
            </>
        )
    }
}

export default Timetracker;