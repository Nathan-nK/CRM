import React, { Component } from 'react'

class EditUser extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surename: "",
            country: "",
        }
    }
    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateSurename = (event) => {
        this.setState({
            surename: event.target.value
        })
    }

    updateCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    updateBox = () => {
        let id = this.props.id
        let user = this.props.users.find(f => f._id == id)
        console.log(user)
        let fname = user.name.split(" ", 2)[0]
        console.log(fname)
        let surename = user.name.split(" ", 2)[1]
        console.log(surename)
        let country = user.country
        console.log(country)

        if (this.state.name !== "") {
            fname = this.state.name[0].toUpperCase() + this.state.name.slice(1).toLowerCase()
        }
        if (this.state.surname !== "") {
            surename = this.state.surename[0].toUpperCase() + this.state.surename.slice(1).toLowerCase()
        }
        let fullname = fname + " " + surename
        this.props.updateBox("name", fullname, user._id)
        if (this.state.country !== "") {
            country = this.state.country[0].toUpperCase() + this.state.country.slice(1).toLowerCase()
        }
        this.props.updateBox("country", country, user._id)
    }

    render() {
        let id = this.props.id
        let user = this.props.users.find(f => f._id == id)
        return (
            <div class='editUserBox'>
                <table>
                <tr>
                    <td><span class='upTitle'>Name: </span></td>
                    <td><input class='upInput' onChange={this.updateName} placeholder={user.name.split(" ", 2)[0]}></input></td>
                    </tr>

                <tr>
                    <td><span class='upTitle'>Surename: </span></td><input class='upInput' placeholder='Surename' onChange={this.updateSurename} placeholder={user.name.split(" ", 2)[1]}>
                        </input>
                        </tr>

                <tr>
                    <td><span class='upTitle'>Country: </span></td>
                    <td><input class='upInput' placeholder='Country' onChange={this.updateCountry} placeholder={user.country}></input>
                    </td>
                    </tr>

                <tr>
                    <td colspan='2'><button class='updateButton' onClick={this.updateBox}>Update</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default EditUser