import React from 'react';
import './ListWork.css'
import ListRow from './ListRow'

var LisWorkField = (
    <div className="list-work-field">
        <span>TODO LIST</span>
        <hr></hr>
        <ListRow></ListRow>
    </div>
);

function ListWork() {
    return LisWorkField;
}

export default ListWork;