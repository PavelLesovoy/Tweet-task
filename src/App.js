// import { CardList } from 'components/Card/CardList';
// import './App.css';
// import { getTweets } from 'services/api/getTweets';
// import { useEffect, useState } from 'react';
// // import items from './data/users.json';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const data = await getTweets();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <CardList users={users} />
//     </div>
//   );
// }

// export default App;

import { CardList } from './components/Card/CardList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://63b96a113329392049f2d95f.mockapi.io/users'
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
}

export default App;
