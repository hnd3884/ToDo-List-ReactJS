import React from 'react';
import './AddWork.css'

var AddWorkField = (
    <div className="add-work-field">
        <div className="form-group">
            <input placeholder="What needs to be done?" className="form-control"></input>
            <button type="button" className="btn btn-primary">Add</button>
        </div>
    </div>
);

function AddWork() {
    return AddWorkField;
}

export default AddWork;