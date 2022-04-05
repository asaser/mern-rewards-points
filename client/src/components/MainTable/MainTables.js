import { Table } from 'react-bootstrap';
import TableHeaders from '../TableElement/TableHeader/TableHeaders';
import TableBodies from '../TableElement/TableBody/TableBodies';

const MainTables = () => {

    return (
        <>
        {/* Table with all transactions */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <TableHeaders />
                    </tr>
                </thead>
                <tbody>
                    <TableBodies />
                </tbody>
            </Table>
        </>
    )
}

export default MainTables;