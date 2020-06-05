import React from 'react'
import axios from "axios"
import Panel from "react-bootstrap/lib/Panel"
import Button from  "react-bootstrap/lib/Button"





const Posts = () => {
    
    const [posts, setPosts] = React.useState([]);
    const[postsID,setPostsID]= React.useState(1);




    //call the API and get APP Post

    const getPostList = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return setPosts(response.data);
            });

    };

    React.useEffect(() => {
        getPostList();
    }, [])




    return (
        <div>
            <div className="col-md-4">
                {posts.map((post) => {
                    return (<Panel bsStyle="info" key={post.id} className="centeralign">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">
                                Post ID: {post.id}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <p> Title : {post.title}</p>
                            <Button bsStyle="info" onClick={" "}>View Details</Button>
                        </Panel.Body>

                    </Panel>
                    )
                })}
            </div>
            <div className="col-md-8"></div>




        </div>
    )
}

export default Posts;
