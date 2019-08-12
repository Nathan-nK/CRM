import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import axios from 'axios'

export default class ClientAquisitionChart extends PureComponent {
    constructor() {
        super()
        this.state = {
            lastMonth: '',
            LastHalfYear: '',
            OverYear: '',
        }
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
    
    findLastMonth = async () => {
        let newClients = await axios.get('http://localhost:3030/monthlyclients')
        let outStandingNum = 0
        newClients.data.map(c => outStandingNum++)
        this.setState({ lastMonth: outStandingNum })
    }

    findLastHalfYear = async () => {
        let newClients = await axios.get('http://localhost:3030/HalfYearSales')
        let outStandingNum = 0
        newClients.data.map(c => outStandingNum++)
        this.setState({ LastHalfYear: outStandingNum })
    }

    findOverYear = async () => {
        let newClients = await axios.get('http://localhost:3030/YearlySales')
        let outStandingNum = 0
        newClients.data.filter(c => c.sold === true).map(c => outStandingNum++)
        this.setState({ OverYear: outStandingNum })
}

    render() {
        this.findLastMonth()
        this.findLastHalfYear()
        this.findOverYear()
        const data = [
            { name: 'Last Month', value: this.state.lastMonth },
            { name: '6-12 Months', value: this.state.LastHalfYear },
            { name: 'Over 12 Month', value: this.state.OverYear },
        ];
        return (
            <div>
                <h4>Client Aquisition</h4>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" isAnimationActive={false} data={data} cx={160} cy={100} outerRadius={100} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </div>
        );
    }
}



