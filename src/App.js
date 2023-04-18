import { CardList } from 'components/Card/CardList';
import './App.css';
import { getTweets } from 'services/api/getTweets';
import { useEffect, useState } from 'react';
// import items from './data/users.json';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getTweets();
    };
  }, []);

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
}

export default App;
