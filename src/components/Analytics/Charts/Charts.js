import React, { Component } from 'react'
import TopEmployeesChart from './TopEmployeesChart'
import SalesByCountry from './SalesByCountry'
import ClientAcqusitionChart from './ClientAcqusitionChart'
import SalesSinceChart from './SalesSinceChart'
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
                    <TopEmployeesChart clients={this.props.clients} />
                    <SalesByCountry clients={this.props.clients} />
                    <ClientAcqusitionChart data={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Charts