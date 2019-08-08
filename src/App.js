import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import { async } from 'q';
import Clients from './components/Clients/Clients'
import Actions from './components/Actions/Actions'
import data from './data'


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount = async () => {
    let data = await axios.get('http://localhost:3030/clients')
    this.setState({
      users: data.data
    })
  }

  // addToDB = () => {
  //   data.map(m => axios.post('http://localhost:3030/client', m))
  // }

  addClient = async (newClient) => {
    await axios.post('http://localhost:3030/client', newClient)
    this.componentDidMount()
  }

  updateOwnership = async (name, owner) => {
    let userID = this.state.users.find(f => f.name == name)._id
    let newOwner = { owner: owner }
    await axios.put(`http://localhost:3030/client/${userID}`, newOwner)
    this.componentDidMount()
  }

  updateEmail = async (name, emailType) => {
    let userID = this.state.users.find(f => f.name == name)._id
    let newEmail = { emailType: emailType }
    await axios.put(`http://localhost:3030/client/${userID}`, newEmail)
    this.componentDidMount()
  }

  updateSale = async (name) => {
    let userID = this.state.users.find(f => f.name == name)._id
    let newSold = { sold: true }
    await axios.put(`http://localhost:3030/client/${userID}`, newSold)
    this.componentDidMount()
  }

  updateBox = async (key, value, userID) => {
    let updated = { [key]: value }
    await axios.put(`http://localhost:3030/client/${userID}`, updated)
    this.componentDidMount()
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="nav-bar">
            <Link to='/Clients' className='link'>Clients</Link>
            <Link to='/Actions' className='link'>Actions</Link>
            <Link to='/Analytics' className='link'>Analytics</Link>
          </div>

        </div>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/Clients" exact render={() => <Clients users={this.state.users} updateBox={this.updateBox} />} />
        <Route exact path="/Actions" exact render={() => <Actions users={this.state.users} addClient={this.addClient} updateOwnership={this.updateOwnership} updateEmail = {this.updateEmail} updateSale={this.updateSale}/>} />
        {/* <Route path="/directory/:fentities/:name" exact render={({ match }) => <Fentity match={match} state={state}/>}/> */}

      </Router>
    );
  }
}
export default App;
