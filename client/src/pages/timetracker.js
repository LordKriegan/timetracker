import React, {Component} from 'react';

class Timetracker extends Component {
    state = {
        data: ""
    }
    componentDidMount() {
        //check to see if location.state has any data, if not go back to upload page
        if (!this.props.location.state) this.props.history.push("/");
        else this.setState({ data: this.props.location.state.data })
    }
    render() {
        console.log(this.state);
        return(
            <>
                <div className="row">
                    <div className="col-sm-1 text-center">
                        Number
                    </div>
                    <div className="col-sm-1 text-center">
                        Length
                    </div>
                    <div className="col-sm-7 text-center">
                        Description
                    </div>
                    <div className="col-sm-3 text-center">
                        Priority
                    </div>
                </div>
                <hr />
                {
                (this.state.data) 
                    ? this.state.data.map((elem) => {
                        return(
                            <div className="row">
                                <div className="col-sm-1 text-center">
                                    {elem.activityNum}
                                </div>
                                <div className="col-sm-1 text-center">
                                    {elem.activityTime + "m"}
                                </div>
                                <div className="col-sm-7 text-center">
                                    {elem.activityDesc}
                                </div>
                                <div className="col-sm-3 text-center">
                                    {elem.activityPriority}
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