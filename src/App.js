import { CardList } from 'components/Card/CardList';
import './App.css';
import items from './data/users.json';

function App() {
  return (
    <div className="App">
      <CardList users={items.users} />
    </div>
  );
}

export default App;
