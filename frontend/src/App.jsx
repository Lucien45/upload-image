// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     title: '',
//     content: '',
//     image: null,
//     posts: []
//   };

//   componentDidMount() {
//     this.fetchPosts();
//   }

//   fetchPosts = () => {
//     axios.get('http://localhost:8000/api/posts/')
//       .then(res => {
//         this.setState({ posts: res.data });
//       })
//       .catch(err => console.log(err));
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };

//   handleImageChange = (e) => {
//     this.setState({
//       image: e.target.files[0]
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     let form_data = new FormData();
//     form_data.append('image', this.state.image, this.state.image.name);
//     form_data.append('title', this.state.title);
//     form_data.append('content', this.state.content);
//     let url = 'http://localhost:8000/api/posts/';
//     axios.post(url, form_data, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     })
//     .then(res => {
//       console.log(res.data);
//       this.fetchPosts(); // Fetch the updated list of posts
//     })
//     .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
//           </p>
//           <p>
//             <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>
//           </p>
//           <p>
//             <input type="file" id="image" accept="image/png, image/jpeg" onChange={this.handleImageChange} required/>
//           </p>
//           <input type="submit"/>
//         </form>
//         <div>
//           <h2>Posts</h2>
//           <ul>
//             {this.state.posts.map(post => (
//               <li key={post.id}>
//                 <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//                 <img src={`http://localhost:8000/${post.image}`} alt={post.title} width="100" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }

// }

// export default App;


//----------- App Using Route ------------//

import { useState, useEffect } from "react";
import { ToastContainer } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexRoutes from "./routes/IndexRoutes";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/*" element={<IndexRoutes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;