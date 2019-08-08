import React, { Component } from 'react'

class Add extends Component {
  constructor() {
    super()
    this.state = {
      owners: {},
      fname: '',
      sname: '',
      country: '',
      owner: '',
    }
  }
  updateFirstName = (event) => {
    this.setState({
      fname: event.target.value
    })
  }

  updateSurName = (event) => {
    this.setState({
      sname: event.target.value
    })
  }

  updateCountry = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  updateOwner = (event) => {
    this.setState({
      owner: event.target.value
    })
  }

  addClient = () => {
    if (this.state.name !== "" && this.state.surname !== "" && this.state.country !== "" && this.state.owner !== "") {
      let newClient = {
        name: this.state.fname[0].toUpperCase() + this.state.fname.slice(1).toLowerCase() + " " + this.state.sname[0].toUpperCase() + this.state.sname.slice(1).toLowerCase(),
        country: this.state.country[0].toUpperCase() + this.state.country.slice(1).toLowerCase(),
        owner: this.state.owner[0].toUpperCase() + this.state.owner.slice(1).toLowerCase(),
        firstContact: new Date()
      }
      this.props.addClient(newClient)
      alert(`${newClient.name} Was Added Successfully`)
    }
    else { alert("Please Fill In All Fields") }
  }

  render() {
    return (
      <div class='add'>
        <h1>ADD CLIENT</h1>
        <table>
          <tr>
            <td><span>First Name:</span></td>
            <td><input value={this.state.fname} onChange={this.updateFirstName} className='AddInput'></input></td>
            </tr>

          <tr>
            <td><span>Surname:</span></td>
            <td><input value={this.state.sname} onChange={this.updateSurName} className='AddInput'></input></td>
            </tr>

          <tr>
            <td><span>Country:</span></td><td><input value={this.state.country} onChange={this.updateCountry} className='AddInput'></input></td>
            </tr>

          <tr>
            <td><span>Owner:</span></td>
            <td><input value={this.state.owner} onChange={this.updateOwner} className='AddInput'></input></td>
            </tr>
            <tr><td colspan="2"><button className='addClient' onClick={this.addClient}>Add New Client</button></td></tr>
        </table>
        
      </div>
    )
  }
}

export default Add