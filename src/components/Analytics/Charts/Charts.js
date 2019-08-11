import React, { Component } from 'react'
import TopEmployeesChart from './TopEmployeesChart'
import SalesByCountry from './SalesByCountry'
// import ClientAcquisitionChart from './ClientAcqusitionChart'
// import SalesSinceChart from './SalesSinceChart'
import axios from 'axios'

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <div className="charts">
                    <TopEmployeesChart users={this.props.users} />
                    <SalesByCountry users={this.props.users} />
                    {/* <ClientAcquisitionChart data={this.state.data} /> */}
                </div>
            </div>
        )
    }
}

export default Charts