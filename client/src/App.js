// useDispatch - send data to databse
// useSelector - take data from database
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from './actions/users';

import MainTables from './components/MainTable/MainTables';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  return (
    <div className="App">
      <MainTables />
    </div>
  );
}

export default App;
