import React from 'react';

const Uploader = (props) => {
    return (
        <div className="row">
            <div className="col-sm-10 offset-sm-1">
                <form>
                    <div className="form-group text-center" id="inputContainer">
                        <input id="uploadFile" type="file" />
                        <div id="dragbox">
                        <p id="dragboxmsg">Drag and drop a file here to upload!</p>
                        </div>
                        <button type="submit" onClick={props.handleSubmit} id="submitBtn" className="btn btn-primary float-right">Submit</button>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

export default Uploader;