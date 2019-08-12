import React, { Component, PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'
class SalesSinceChart extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: {}
        }
    }

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    findDates = async () => {
        let newClients = await axios.get('http://localhost:3030/monthlySales')
        let a = newClients.data.map(m => m.firstContact.slice(0, 10)).reduce(function (acc, curr) {
            if (typeof acc[curr] == 'undefined') {
                acc[curr] = 1;
            } else {
                acc[curr] += 1;
            }
            return acc;
        }, {});
        this.setState({
            data: a
        })
    }

    componentDidMount() {
        this.findDates()
    }

    findSalesByDate = (data) => {
        const arr = []
        let highestSales = Object.values(data)
        let topCountries = Object.keys(data)
        let i = 0
        while (i < highestSales.length) {
            arr[i] = { name: topCountries[i], Sales: highestSales[i] }
            i++
        }
        return arr
    }

    render() {
        let dateOfMonthAgo = new Date();
        dateOfMonthAgo.setDate(dateOfMonthAgo.getDate() - 30)
        dateOfMonthAgo = dateOfMonthAgo.toString().split(' ')

        let data = this.state.data
        let finalData = this.findSalesByDate(data)
        return (
            <div><h4>Sales Since {dateOfMonthAgo[1]}-{dateOfMonthAgo[2]}</h4>
                <LineChart
                    width={900}
                    height={300}
                    data={finalData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        );
    }
}
export default SalesSinceChart


