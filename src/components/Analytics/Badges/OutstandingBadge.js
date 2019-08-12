import React, { Component } from 'react'

class OutstandingBadge extends Component {

    render() {
        let outStandingNum = 0
        this.props.users.filter(c => c.sold===false).map(c => outStandingNum++)
        return (
            <div className="badge" >
                <div className="circle four"> <i class="fas fa-user-circle"></i></div>
                <div className="data">
                    <h2 className='statNumber'>{outStandingNum}</h2>     
                </div >
                <h4 className='statHeader'>Outstanding clients</h4>
           </div>
        )
    }
}
export default OutstandingBadge