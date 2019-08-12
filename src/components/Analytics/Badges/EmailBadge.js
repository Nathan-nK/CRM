import React, { Component } from 'react'

class EmailBadge extends Component {

    render() {
        let emailsNum = 0
        this.props.users.filter(c => c.emailType).map(c => emailsNum++)
        return (
            <div className="badge" >
                <div className="circle two"><i class="fas fa-envelope"></i></div>
                <div className="data">
                    <h2 className='statNumber'>{emailsNum}</h2>
                </div>
                <h4 className='statHeader'>Emails sent</h4>
            </div>
        )
    }
}

export default EmailBadge
