import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard'



const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <h1>This is comment Approve Decline app</h1>
                <CommentDetail>
                    name={fullName()}
            date={faker.date.weekday()}
                </CommentDetail>
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail>
                    name={fullName()}
            date={faker.date.weekday()}
                </CommentDetail>
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail>
                    name={fullName()}
            date={faker.date.weekday()}
                </CommentDetail>
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail>
                    name={fullName()}
            date={faker.date.weekday()}
                </CommentDetail>
            </ApprovalCard>


        </div>
    );
};

//function as an arguement
const fullName = () => {
    return faker.name.findName() + faker.name.lastName();
}


ReactDOM.render(<App />, document.getElementById("root")); 
