import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
    state = {
        sheetNum: "1"
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append('file', document.getElementById('uploadFile').files[0])
        axios
            .post("/api/parsexlsx?sheet=" + this.state.sheetNum, data)
            .then((response) => {
                this.props.history.push("/timetracker", {data: response.data})
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
    render() {
        return (
            <div className="col-sm-10 offset-sm-1">
                <form>
                    <div className="form-group text-center" id="inputContainer">
                        <input id="uploadFile" type="file" />
                        <div id="dragbox"><p id="dragboxmsg">Drag and drop a file here to upload!</p></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2"><label htmlFor="sheetNum">Sheet Number: </label></div>
                        
                        <div className="col-sm-10"><input name="sheetNum" id="sheetNum" value={this.state.sheetNum} onChange={this.handleInputChange} type="number" min="1" /></div> 
                    </div>

                    <button type="submit" onClick={this.handleSubmit} id="submitBtn" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        )
    }
}

export default Upload;