import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App container">
        <h1> Sogeti Employee Directory</h1>
        { this.state.employees.map((employee, index) => {
          return (
            <div class="media col-12 mb-4 directoryEntry">
            <img src={employee.imgURL} class="mr-3 directoryImage" alt="..."/>
              <div class="media-body">
                <h5 class="mt-0">{employee.name}, </h5>
                {employee.from}
              </div>
            </div>
          )
          })
        }
      </div>

    );
}}

export default App;