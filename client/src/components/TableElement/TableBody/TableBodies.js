import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import moment from 'moment';
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

import { deleteUser, getUsers } from '../../../actions/users';

const TableBodies = () => {

    const usersAllData = useSelector(state => state.users);

    const [usersData, setUsersData] = useState([]);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            const response = await usersAllData;
            setUsersData(response)
        }
        dataFetch()
    }, [usersAllData]);

    const dispatch = useDispatch();

    const deleteUserTransaction = (idTransaction) => {
        dispatch(deleteUser(idTransaction));
    }

    const getAllTransactions = () => {
        dispatch(getUsers());
    }


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
                            <Button variant="danger" onClick={() => setShow(true)}>
                                Delete
                            </Button>

                            <Modal show={show} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                <Modal.Title>Delete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do you want delete this transaction?</Modal.Body>
                                <Modal.Footer>
                                <Button variant="primary" onClick={() => {
                                    setShow(false);
                                }}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={() => {
                                    deleteUserTransaction(data._id);
                                    getAllTransactions();
                                    setShow(false);
                                    getAllTransactions();
                                }}>
                                    Delete
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default TableBodies;