import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { useAsync } from 'react-async';
import './App.css';

const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  // const {
  //   data: posts,
  //   isPending,
  //   error,
  // } = useAsync({
  //   promiseFn: axios.get(POSTS_ENDPOINT).then((res) => res.data),
  // });
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    // in this block it will run on mount (in useEffect)
    // async await inside use effect:
    async function getPosts() {
      setIsLoading(true);
      try {
        const response = await axios.get(POSTS_ENDPOINT);
        setPosts(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    }

    // calling the function:
    getPosts();
  }, []);

  // \\ another way we can write a function ang get the data:
  // in this block it will run on mount
  // setIsLoading(true);
  // axios
  //   .get(POSTS_ENDPOINT)
  //   .then((response) => {
  //     // console.log(response.data);
  //     setPosts(response.data);
  //     setIsLoading(false);
  //   })
  //   .catch((error) => {
  //     setError(error);
  //   });

  // if an error comes out this will be shown
  if (error) {
    return <div className="App">We are sorry something went wrong.</div>;
  }

  // the logo will be shown till the data loads
  // if (isPending) {
  if (isLoading) {
    return (
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        console.log(data);
      </div>
    );
  }

  const array = posts.map((post) => {
    return (
      <div key={post.id}>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>{array}</div>
        How to make HTTP requests!!!
      </header>
    </div>
  );
}
export default App;
// const [data, setData] = useState([]);
// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//       console.log('Getting from server', res.data);
//       setData(res.data);
//     })
//     .catch((err) => console.error(err));
// }, []);

// const arr = data.map((data, index) => {
//   return (
//     <tr key={index}>
//       <td>{data.id}</td>
//       <td>{data.title}</td>
//       <td>{data.body}</td>
//     </tr>
//   );
// });

// return (
//   <div className="App">
//     <h1>Axios with React.js</h1>
//     <table>
//       <tr>
//         <th>ID</th>
//         <th>Title</th>
//         <th>Body</th>
//       </tr>
//       {arr}
//     </table>
//   </div>
// );
