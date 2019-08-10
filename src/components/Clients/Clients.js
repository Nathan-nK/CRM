import React, { Component } from 'react'
import EditUser from './EditUser'
import Client from './Client';

class Clients extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      category: "name",
      userPressed: false,
      page: 1,
      currentID: ""
    }
  }
  updateInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  updateCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }

  Next = () => {
    this.setState({
      page: this.state.page + 1
    })

  }

  Back = () => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      })
    } else if (this.state.page <  1) {
      alert('Already at the beggining')
    }
  }

  updateUserPressed = async (currentID) => {
    console.log(this.state.currentID)
    await this.setState({currentID: currentID},function(){console.log(this.state.currentID)})
    await this.setState({
      userPressed: !this.state.userPressed
    })
  }

  render() {
    return (
      <div>
        <center>
          <input className='searchClients' placeholder='Search For Clients' value={this.state.search} onChange={this.updateInput}></input>

          <select className="select-input" onChange={this.updateCategory}>
            <option value='name'>Name</option>
            {/* <option value='email'>E-mail</option> */}
            <option value='firstContact'>First Contact</option>
            {/* <option value='sold'>Sold</option> */}
            <option value='owner'>Owner</option>
            <option value='country'>Country</option>
          </select>

          <div class='arrows'>
            <span class='backNext' onClick={this.Back}><i class="fas fa-angle-left"></i>{(this.state.page * 10) - 10} - </span>
            <span class='backNext' onClick={this.Next}>{this.state.page * 10}<i class="fas fa-angle-right"></i></span>
          </div>
        </center>

        <Client users={this.props.users} search={this.state.search} page={this.state.page} category={this.state.category} updateUserPressed={this.updateUserPressed} />

        {this.state.userPressed ? <EditUser users={this.props.users} updateBox={this.props.updateBox} id={this.state.currentID}/> : null}
      </div>
    )
  }
}

export default Clients