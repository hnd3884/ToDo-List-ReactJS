import React, { Component } from 'react';
import './App.css';
import ListRow from './ListWork/ListRow';

class App extends Component {
  countWork = 0;
  constructor(props) {
    super(props)
    this.state = { 
      description: "",
      list: []
    }
  }

  DescriptionChangeEvent = (event) => {
    this.setState({ description: event.target.value.toString() });
  }

  AddWorkEvent = (event) => {
    event.preventDefault();
    if (this.state.description !== "") {
      var row = <ListRow des={this.state.description} index={this.countWork} key={this.countWork}></ListRow>;
      this.setState({
        description: "",
        list: [...this.state.list, row]
      });

      this.countWork += 1;
      document.getElementById('add-work-form').reset();
    }
    else{
      alert('none description input');
    }
  }

  render() {
    return (
      <div className="cont">
        {/* Form add new work */}
        <div className="add-work-field">
          <div className="form-group">
            <form id="add-work-form">
              <input placeholder="What needs to be done?" className="form-control" onChange={this.DescriptionChangeEvent}></input>
              <button type="submit" className="btn btn-primary" onClick={this.AddWorkEvent}>Add</button>
            </form>
          </div>
        </div>
        <div className="list-work-field">
          <span>TODO LIST</span>
          <hr></hr>
          <div className="list-work">
            {this.state.list}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
