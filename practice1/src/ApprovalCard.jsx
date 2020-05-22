import React from 'react'
import CommentDetail from './CommentDetail'

function ApprovalCard(props){
    return(
    <div className="ui-card">
        <div className="content">
            {props.children}
            <div className="extra content">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
            </div>
        </div>
    </div>


    )
}

export default ApprovalCard;
