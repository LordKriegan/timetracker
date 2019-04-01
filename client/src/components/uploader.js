import React, { Component } from 'react';

// const Uploader = (props) => {
    
// }

class Uploader extends Component {
    state = {
        fileName: ""
    }
    onChange = (e) => {
        this.setState({
            fileName: (e.target.files[0] && e.target.files[0].name) ? e.target.files[0].name : ""
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1">
                    <form>
                        <div className="form-group text-center" id="inputContainer">
                            <input onChange={this.onChange} id="uploadFile" type="file" />
                            <div id="dragbox">
                            <p id="dragboxmsg">{(this.state.fileName) ? this.state.fileName : "Drag and drop a file here to upload!"}</p>
                            </div>
                            <button type="submit" onClick={this.props.handleSubmit} id="submitBtn" className="btn btn-primary float-right">Submit</button>
                        </div>     
                    </form>
                </div>
            </div>
        )
    }
}

export default Uploader;