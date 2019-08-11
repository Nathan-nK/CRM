import React, { Component } from 'react'
import Badges from './Badges/Badges'
import Charts from './Charts/Charts'
class Analytics extends Component {
    render() {
        return (
            <div> 
                <Badges users={this.props.users} />
                <Charts users={this.props.users} />
            </div>
        )
    }
}

export default Analytics