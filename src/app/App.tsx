import React from 'react';
import Button from './components/Button';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Button type="primary">Learn React</Button>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default App;
