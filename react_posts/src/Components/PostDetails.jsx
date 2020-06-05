import React from 'react'
import axios from "axios"

const PostDetails = () => {

const [postinfo,setPostInfo]=React.useState({});


const getPostsDetail = async () => {
    await axios 
    .get(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response)=>{

    })


}
React.useEffect( () => {
    getPostsDetail()
},[])

    return (
        <div>
            
        </div>
    )
}

export default PostDetails;
