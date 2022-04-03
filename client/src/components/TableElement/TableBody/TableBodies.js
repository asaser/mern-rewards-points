import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import moment from 'moment';

const TableBodies = () => {

    const usersAllData = useSelector(state => state.users);

    const [usersData, setUsersData] = useState([]);

    // console.log('moneyRewardsPoints', moneyRewardsPoints);

    useEffect(() => {
        const dataFetch = async () => {
            const response = await usersAllData;
            setUsersData(response)
        }
        dataFetch()
    }, [usersAllData]);


    // function for counting points
    function countingPoints(money) {
        let points = 0;
    
        if(money > 100) {
            points = (money - 100) * 2 + 50;
        } else if(money > 50 && money <= 100) {
            points = money - 50;
        } else {
            points = 0;
        }
    
        return points;
    }

    return (
        <>
            {usersData && usersData.map((data, idx) => {
                return (
                    <tr key={idx}>
                        <td>{data.username}</td>
                        <td>{data.surname}</td>
                        <td>{data.money}</td>
                        <td>{moment(data.date).format('MMMM')}</td>
                        <td>{countingPoints(data.money)}</td>
                        {/* <td className='opration'> */}
                        {/* <button className='button' onClick={() => removeData(id)}>Delete</button> */}
                        {/* </td> */}
                    </tr>
                )
            })}
        </>
    )
}

export default TableBodies;