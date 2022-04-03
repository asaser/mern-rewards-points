
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import TableUser from '../TableUser/TableUsers';

// library for parsing, validating, manipulating, and formatting dates
import moment from "moment";
import Moment from 'react-moment';


const UserTables = () => {

    // useSelector - take state.users from folder reducers file index.js
    const usersData = useSelector((state) => state.users);
    const usersDate = useSelector((state) => state.users.map(stateUserMonths => stateUserMonths.date));

    const [data, setData] = useState([])
    const [months, setMonths] = useState([])


    useEffect(() => {
        const dataFetch = async () => {
            const response = await usersData
            setData(response)
        }
        dataFetch()
    }, [usersData])

    // use library moment to better manage Data from mongodb
    useEffect(() => {
        setMonths(
            usersDate.map(stateDate => {
                return moment(stateDate).format("MMM")
            })
        );
    }, [usersDate])

    

    const columns = useMemo(() => [
        {
            Header: 'Username',
            accessor: 'username'
        },
        {
            Header: 'Surname',
            accessor: 'surname'
        },
        {
            Header: 'Money',
            accessor: 'money',
            // Cell: ({ cell: { value } }) => {
            //     const hour = Math.floor(value / 60);
            //     const min = Math.floor(value % 60);
            //     return (
            //       <>
            //         {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
            //         {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
            //       </>
            //     );
            //   }
        },
        {
            Header: 'Date',
            accessor: 'date',   
        },
    ],
    []
    )


    return (
        <div className="table-user">
            <TableUser columns={columns} data={data} />
        </div>
    )
}

export default UserTables;