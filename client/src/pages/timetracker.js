import React, {Component} from 'react';

class Timetracker extends Component {
    componentDidMount() {
        //check to see if location.state has any data, if not go back to upload page
        if (!this.props.location.state) this.props.history.push("/");
    }
    render() {
        return(
            <p>Timetracker page</p>
        )
    }
}

export default Timetracker;