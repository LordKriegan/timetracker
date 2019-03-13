import React, { Component } from 'react';

import { Table, Controlbar } from '../components';

class Timetracker extends Component {
    state = {
        data: "",
        activityMarker: 0,
        timeLeft: 0,
        etc: "00:00",
        classStarted: false
    }
    componentDidMount() {
        //check to see if location.state has any data, if not go back to upload page
        if (!this.props.location.state) this.props.history.push("/");
        else this.setState({ data: this.props.location.state.data })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    moveActivity = (id, destId) => {
        //dont do anything if it would move an element out of bounds
        if (destId < 0 || destId === this.state.data.length) return;
        //dont move activity if it is completed
        if (this.state.data[id].completed) return;

        let newState = {}

        //if id or destId are = activityMarker, make sure to move activityMarker as well
        if (id === this.state.activityMarker) {
            newState["activityMarker"] = destId;
        } else if (destId === this.state.activityMarker) {
            newState["activityMarker"] = id;
        }

        //handle swap
        let data = this.state.data.slice();
        let start = data[id];
        let dest = data[destId];
        data[id] = dest;
        data[destId] = start;
        newState["data"] = data
        this.setState(newState)
    }

    skipActivity = (id) => {
        let data = this.state.data.slice();
        data[id].skipActivity = !data[id].skipActivity;
        let newState = {}
        newState["data"] = data;
        if (this.state.classStarted) {
            let skipped = data.filter((elem) => ((!elem.skipActivity) && (!elem.completed)))
            let time = 0;
            let now = new Date();
            skipped.forEach((elem) => time += elem.activityTime);
            newState["etc"] = new Date(now.getTime() + (time * 60000));
        }
        this.setState(newState)
    }
    changeStart = (id) => {
        this.setState({
            activityMarker: id
        }, () => {
            if (this.state.classStarted) this.startButton();
        })
    }

    startButton = () => {
        //end if all activitys are done
        if (this.state.activityMarker === this.state.data.length) {
            this.stopButton();
            alert("End class!");
            return;
        }
        //move onto next activity if this one is to be skipped
        if (this.state.data[this.state.activityMarker].skipActivity ||
            this.state.data[this.state.activityMarker].completed) {
            this.setState({
                activityMarker: (this.state.activityMarker + 1)
            }, () => this.startButton());
            return;
        }
        //clear out previous interval
        clearInterval(this.interval);

        //calculate ETA, get all unskipped activitys, start with 0, then run a loop to add minutes from each one and set down below
        let data = this.state.data.filter((elem) => ((!elem.skipActivity) && (!elem.completed)))
        let time = 0;
        let now = new Date();
        data.forEach((elem) => time += elem.activityTime)

        //enter callback hell
        //start by setting state
        this.setState({
            timeLeft: (this.state.data[this.state.activityMarker].activityTime) * 60,
            etc: new Date(now.getTime() + (time * 60000)),
            classStarted: true
        }, () => { //after state is set, start interval on every 1000ms (see below)
            this.interval = setInterval(() => {
                this.setState({ //every 1s, reduce timeLeft by 1 in state
                    timeLeft: (this.state.timeLeft - 1)
                }, () => { //after timeLeft is reduced, check to see if timeLeft is 0, and if so, mark activity completed and set the state.
                    if (this.state.timeLeft === 0) {
                        this.moveNextActivity();
                    }
                })
            }, 1000)
        })
    }

    moveNextActivity = () => {
        //dont run this code if class isnt running
        if (!this.state.classStarted) return;

        let newData = this.state.data.slice();
        newData[this.state.activityMarker].completed = true;
        this.setState({
            data: newData
        }, () => { //after activity is marked complete, increase activityMarker by 1, and set the state.
            this.setState({
                activityMarker: (this.state.activityMarker + 1)
            }, () => { //after state is set start next activity
                this.startButton();
            })
        })
    }
    stopButton = () => {
        clearInterval(this.interval);
        this.setState({
            classStarted: false,
            timeLeft: 0
        })
    }

    render() {
        return (
            <>
                <Controlbar skipButton={this.moveNextActivity} startButton={this.startButton} stopButton={this.stopButton} timeLeft={this.state.timeLeft} etc={this.state.etc} />
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
                <Table data={this.state.data} activityMarker={this.state.activityMarker} moveActivity={this.moveActivity} changeStart={this.changeStart} skipActivity={this.skipActivity} />
            </>
        )
    }
}

export default Timetracker;