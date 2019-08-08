import React, { Component } from 'react'

class Client extends Component {
    updateUserPressed = (event) => {
        let id = event.target.getAttribute('name')
        console.log(id)
        this.props.updateUserPressed(id)
    }
    render() {
        return (
            <div>
                <table className="clientTable">
                    <tr className='rowClassHead'>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Country</td>
                        <td>First Contact</td>
                        <td>E-Mail</td>
                        <td>Sold</td>
                        <td>Owner</td>
                    </tr>
                    {this.props.users.filter(f => f[this.props.category].toLowerCase().includes(this.props.search)).slice((this.props.page * 10) - 10, (this.props.page * 10)).map(u => {
                        return (
                            <tr className='rowClass' name={u._id} onDoubleClick={this.updateUserPressed}>
                                <td name={u._id} className='tdClass'>{(u.name.split(" "))[0]}</td>
                                <td name={u._id} className='tdClass'>{(u.name.split(" "))[1]}</td>
                                <td name={u._id} className='tdClass'>{u.country}</td>
                                <td name={u._id} className='tdClass'>{u.firstContact.slice(0, 10)}</td>
                                <td name={u._id}className='tdClass'>{u.emailType}</td>
                                <td name={u._id} className='tdClass'>{u.sold ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}</td>
                                <td name={u._id} className='tdClass'>{u.owner}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default Client