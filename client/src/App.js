// useDispatch - send data to databse
// useSelector - take data from database
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from './actions/users';

import UserTables from './components/UserTable/UserTables';

import './App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  return (
    <div className="App">
      <UserTables />
    </div>
  );
}

export default App;
