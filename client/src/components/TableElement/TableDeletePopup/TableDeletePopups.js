
import { Modal } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from "react-redux";

import { deleteUser, getUsers } from '../../../actions/users';


const TableDeletePopups = (props) => {


    const dispatch = useDispatch();

    return (
        <>

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{
                backgroundColor: 'rgba(34, 34, 34, 0.192)',
                zIndex: '10007',
            }}
        >
            <Modal.Header closeButton style={{ backgroundColor: 'rgba(250, 18, 18, 0.89)' }}>
                <Modal.Title id="contained-modal-title-vcenter">
                <Button actionName='warning' className='warning-popup' />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <Card.Title>Are you sure?</Card.Title>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button onClick={props.onHide}>Close</Button>

                <Button
                onClick={
                    props.delete
                    // props.onHide
                }
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

        </>
    )
}

export default TableDeletePopups;

