import React, { Component } from 'react';
import './ListRow.css'

class ListRow extends Component {
    render() {
        const ListRowField = (
            <div className="work-row">
                &nbsp;&nbsp;
                <input type="checkbox"></input>
                &nbsp; {this.props.des}
                <button className="btn btn-danger">Delete</button>
                <hr></hr>
            </div>
        );

        return ListRowField;
    }
}

export default ListRow;