import React, { Component } from 'react'

class Update extends Component {
    constructor() {
        super()
        this.state = {
            owners: {},
            clientName: "",
            owner: "Emily Durhar",
            emailType: 'A',
        }
    }
    updateClientNameState = (event) => {
        this.setState({
            clientName: event.target.value
        }, function () { console.log(this.state.clientName) })
    }

    updateOwnerState = (event) => {
        this.setState({
            owner: event.target.value
        }, function () { console.log(this.state.owner) })
    }

    updateEmailState = (event) => {
        this.setState({
            emailType: event.target.value
        }, function () { console.log(this.state.emailType) })
    }

    findOwners = () => {
        this.props.users.map(u => this.state.owners[u.owner] ? null : this.state.owners[u.owner] = true)
    }

    updateOwnership = () => {
        let name = this.state.clientName
        if (name != '') {
            let owner = this.state.owner
            this.props.updateOwnership(name, owner)
            alert('Ownership Transfer Successful!')
        } else alert('Please Fill The Name Field')
    }

    updateEmail = () => {
        let name = this.state.clientName
        if (name != '') {
            let emailType = this.state.emailType
            this.props.updateEmail(name, emailType)
            alert('Email Type Updated Successfuly Successful!')
        } else alert('Please Fill The Name Field')
    }

    updateSale = () => {
        let name = this.state.clientName
        if (name != '') {
            this.props.updateSale(name)
            alert('Sale Declaration Successful!')
        } else alert('Please Fill The Name Field')
    }

    render() {
        this.findOwners()
        return (
            <div className='update'>
                <h1>UPDATE</h1>
                <div>
                    Client: <datalist id="searchClient" className='select-input' onChange={this.updateClientNameState}>
                        {this.props.users.map(c => <option value={c.name}>{c.name}</option>)}
                    </datalist>
                    <input autoComplete="on" list="searchClient" value={this.state.clientName} placeholder='Client Name' onChange={this.updateClientNameState} className='select-input' />
                </div>

                <table>
                    <tr>
                        <td><span>Transfer Ownership To</span></td>
                        <td><select className="select-input" onChange={this.updateOwnerState} >
                            {Object.keys(this.state.owners).map(u => {
                                return (<option value={u}>{u}</option>)
                            })}
                        </select>
                        </td>
                        <td><button onClick={this.updateOwnership} className='UpdateButtons'>Transfer</button></td>
                    </tr>

                    <tr>
                        <td><span>Send Email</span></td>
                        <td><select className="select-input" onChange={this.updateEmailState}>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                        </select>
                        </td>
                        <td><button onClick={this.updateEmail} className='UpdateButtons'>Send</button></td>
                    </tr>

                    <tr>
                        <td><span>Declare Sale!</span></td>
                        <td></td>
                        <td><button onClick={this.updateSale} className='UpdateButtons'>Declare</button></td>
                    </tr>

                </table>

                <hr></hr>
            </div>
        )
    }
}

export default Update


