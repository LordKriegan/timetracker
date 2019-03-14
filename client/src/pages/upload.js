import React, { Component } from 'react';
import axios from 'axios';
import { Uploader, Sheetlist } from '../components';

class Upload extends Component {
    state = {
        sheets: "",
        sheetName: "",
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append('file', document.getElementById('uploadFile').files[0])
        axios
            .post("/api/parsexlsx", data)
            .then((response) => {
                this.setState({
                    sheets: response.data
                })
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    handleInputChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        })
    }
    pickSheet = (event) => {
        event.preventDefault();
        const {sheets, sheetName} = this.state 
        if (sheetName) {
            this.props.history.push("/timetracker", { data: sheets[sheetName] })
        }
    }
    render() {
        return (
            <>
                <Uploader handleSubmit={this.handleSubmit} />
                {(this.state.sheets) ? <Sheetlist submitHandler={this.pickSheet} onChangeHandler={this.handleInputChange} sheetlist={Object.keys(this.state.sheets)} /> : "" }
            </>
        )
    }
}

export default Upload;