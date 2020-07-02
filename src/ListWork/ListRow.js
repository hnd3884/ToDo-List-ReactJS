import React from 'react';
import './ListRow.css'

var ListRowField = (
    <div className="work-row">
        &nbsp;&nbsp;
        <input type="checkbox"></input>
        &nbsp; Eat breakfirst
        <button className="btn btn-danger">Delete</button>
        <hr></hr>
    </div>
);

function ListRow() {
    return ListRowField;
}

export default ListRow;