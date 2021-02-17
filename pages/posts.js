import React,{Component} from "react";
import {getPost} from "../actions";
class Posts extends Component{
    static getInitialProps(){
        return getPost().then((posts)=>{
            return {posts};
        })
    }
    render(){
        return <div className="container">
            <h1>I am a Post page</h1>
            {JSON.stringify(this.props.posts)}
        </div>
    }
}
export default Posts;