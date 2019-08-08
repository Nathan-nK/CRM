import React, { Component } from 'react'
import Update from './Update';
import Add from './Add';

class Actions extends Component {
        render() {        
        return (
            <div> 
                <Update users={this.props.users} updateOwnership={this.props.updateOwnership} updateEmail = {this.props.updateEmail} updateSale={this.props.updateSale}/>
                <Add users={this.props.users} addClient = {this.props.addClient}/>
            </div>
        )
    }
}

export default Actions