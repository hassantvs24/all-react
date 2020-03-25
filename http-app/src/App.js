import React, { Component } from "react";
import axios from 'axios';
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount(){
    const {data: posts} = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = {title: 'a', body: 'b'};
    const {data: post} = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    const originalPosts = this.state.posts;
    post.title = "Updated";

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post};
    this.setState({posts});

    try{
      await axios.put(apiEndpoint+'/'+post.id, post);
    }catch (ex){
      alert('Something failed while updating data!');
      this.setState({posts: originalPosts});
    }

  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts});
//Optimistic Example
    try{
      await axios.delete('ds'+apiEndpoint+'/'+post.id);
    }catch (ex){
     // ex.request //Expected error
     // ex.response //Unexpected error
     if(ex.response && ex.request.status === 404)
     alert('This post id not found!');
     else{
       console.log('Logging the error', ex);
       alert('Unexpected error occurred!');
     }
      this.setState({posts: originalPosts});
    }
    
    
    

  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
