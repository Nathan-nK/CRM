import React, { Component } from 'react'

class CountryBadge extends Component {
    
    getCountries = () => {
        let countries2 = {}
        this.props.users.filter(m => m.sold).map(m => countries2[m.country] ? null : countries2[m.country] = 0)
        this.props.users.filter(m => m.sold).map(m => countries2[m.country]++)
        return countries2
    }

    findCountry = (countries) => {
        let highest = Object.values(countries).sort(function (a, b) { return b - a })[0]
        for (let i of Object.keys(countries)) {
            if (countries[i] == highest) {
                return i
            }
        }
    }

    render() {
        let countries = this.getCountries()
        let country = this.findCountry(countries)
        return (
            <div className="badge" >
                <div className="circle three"><i class="fas fa-globe-asia"></i></div>
                <div className="data">
                    <h2 className='statNumber'>{country}</h2>
                </div>
                <h4 className='statHeader'>Hottest country </h4>
            </div>
        )
    }
}

export default CountryBadge