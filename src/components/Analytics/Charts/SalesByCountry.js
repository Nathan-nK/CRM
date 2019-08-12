import React, { Component, PureComponent } from 'react';
import {
   BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class SalesByCountry extends PureComponent {
   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

   findCountries = () => {
       let countriesList = {}
       this.props.users.filter(m => m.sold).map(m => countriesList[m.country] ? null : countriesList[m.country] = 0)
       this.props.users.filter(m => m.sold).map(m => countriesList[m.country]++)
       return countriesList
   }
   
   sortForChartCountries = (countries) => {
       const arr =[]
       let highestSales = Object.values(countries)
       let topCountries = Object.keys(countries)
       let i = 0
       while (i < highestSales.length) {
           arr[i] = {name : topCountries[i], pv : highestSales[i]}
           i++
       }
       return arr
   }

   render() {
       let countries = this.findCountries()
       let country = this.sortForChartCountries(countries)
       return (
           <div>
               <h4 className='chartTitle'>Sales By Country</h4>
           <BarChart
               width={800}
               height={200}
               data={country}
               margin={{
                   top: 5, right: 30, left: 20, bottom: 5,
               }}
           >
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Bar dataKey="pv" fill="#8884d8" />
           </BarChart>
           </div>
       );
   }
}
export default SalesByCountry