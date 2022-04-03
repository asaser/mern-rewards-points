import { useSelector } from 'react-redux';

const UserTables = () => {

    // useSelector - take state.users from folder reducers file index.js
    const users = useSelector((state) => state.users.map(state => state.username)); 

    console.log('here is data: ', users);

    return (
        <>
            <p>user tables will be here :D</p>
            <p>{users}</p>
        </>
    );
}

export default UserTables;