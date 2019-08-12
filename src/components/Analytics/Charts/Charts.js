import React, { Component } from 'react'
import TopEmployeesChart from './TopEmployeesChart'
import SalesByCountry from './SalesByCountry'
import ClientAquisitionChart from './ClientAquisitionChart'
import SalesSinceChart from './SalesSinceChart'

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
                    <div className='TopCharts'>
                    <TopEmployeesChart users={this.props.users} />
                    <SalesByCountry users={this.props.users} />
                    </div>

                    <div className='BottomCharts'>
                    <SalesSinceChart />
                    <ClientAquisitionChart users={this.props.users} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts