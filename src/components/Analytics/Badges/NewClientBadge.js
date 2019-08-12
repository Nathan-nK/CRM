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

        return (
            <div className="badge">
                <div className="circle one"><span className='icon'></span><i class="fas fa-chart-line"></i></div>
                <div className="data">
                    <h2 className='statNumber'>{this.state.numberOfNewClients}</h2>    
                </div>
                <h4 className='statHeader'>New Clients Over Last Month</h4>
            </div>
        )
    }
}

export default NewClientBadge