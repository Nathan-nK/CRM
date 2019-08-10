import React, { Component } from 'react'
import axios from 'axios'

class NewClientBadge extends Component {
    constructor() {
        super()
        this.state = {
            numberOfNewClients: 0
        }
    }

    componentDidMount = async () => {
        let data = await axios.get('http://localhost:3030/monthlyclients')
        this.setState({
            numberOfNewClients: data.data.length
        })
    }

    render() {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        return (
            <div className="badge">
                <div className="circle one"><span className='icon'></span><i class="fas fa-chart-line"></i></div>
                <div className="data">
                    <h2 className='statNumber'>{this.state.numberOfNewClients}</h2>
                    <h4 className='statHeader'>New {month} Clients</h4>
                </div>
            </div>
        )
    }
}

export default NewClientBadge