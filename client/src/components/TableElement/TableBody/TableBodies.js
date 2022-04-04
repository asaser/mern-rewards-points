import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import moment from 'moment';

import { deleteUser, getUsers } from '../../../actions/users';

import TableDeletePopups from '../TableDeletePopup/TableDeletePopups';
import { Button, Modal } from 'react-bootstrap';

const TableBodies = () => {

    const usersAllData = useSelector(state => state.users);

    const [usersData, setUsersData] = useState([]);

    const [modalShow, setModalShow] = useState(false);



    const dispatch = useDispatch();

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
                        <td>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Launch vertically centered modal
                        </Button>

                        <TableDeletePopups
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            // data = {data._id}
                            delete = {() => dispatch(deleteUser(data._id))}
                        />
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default TableBodies;