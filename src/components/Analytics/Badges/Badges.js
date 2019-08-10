import React, { Component } from 'react'
import NewClientBadge from './NewClientBadge';
import EmailBadge from './EmailBadge';
import OutstandingBadge from './OutstandingBadge';
import CountryBadge from './CountryBadge';

class Badges extends Component {
    render() {
        return (
            <div className="badges">
                <NewClientBadge />
                <EmailBadge users={this.props.users} />
                <OutstandingBadge users={this.props.users} />
                <CountryBadge users={this.props.users} />
            </div>
        )
    }
}

export default Badges