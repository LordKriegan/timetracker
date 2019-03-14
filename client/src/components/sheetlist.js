import React from 'react';

const Sheetlist = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4 offset-sm-4 text-center">
                <form>
                    {props.sheetlist.map((elem,id) => {
                        return(
                            <div key={id} className="form-check">
                                <input onChange={props.onChangeHandler} className="form-check-input" type="radio" name="sheetName" value={elem}></input>
                                <label className="form-check-label">{elem}</label>
                            </div>
                        )
                    })}
                    <button onClick={props.submitHandler} type="submit" className="btn btn-primary">Go!</button>
                </form>

            </div>
        </div>
    );
}

export default Sheetlist;