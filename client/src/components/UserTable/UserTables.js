
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

const UserTables = () => {

    // useSelector - take state.users from folder reducers file index.js
    const usersData = useSelector((state) => state.users);    
    
    const [data, setData] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            const response = await usersData
            console.log('aaa', response)
            setData(response)
        }
        doFetch()
      }, [usersData])

    console.log('sssss', data);

    // const data = [
    //       {
    //         createdAt: "2022-04-01T23:49:05.835Z",
    //         date: "2010-11-10T23:00:00.000Z",
    //         money: 20,
    //         surname: "Dog",
    //         updatedAt: "2022-04-01T23:49:05.835Z",
    //         username: "Freya",
    //       },
    //       {
    //         createdAt: "2022-04-01T23:49:37.692Z",
    //         date: "2022-10-09T22:00:00.000Z",
    //         money: 10,
    //         surname: "Doggo",
    //         updatedAt: "2022-04-01T23:49:37.692Z",
    //         username: "Morgan",
    //       },
    //       {
    //         createdAt: "2022-04-02T00:02:26.714Z",
    //         date: "1999-01-01T00:00:00.000Z",
    //         money: 21,
    //         surname: "Office Dog",
    //         updatedAt: "2022-04-02T00:04:54.217Z",
    //         username: "Naila",
    //       },
    //     ]

    const columns = useMemo(() => [
        {
            Headers: 'Username',
            accessor: 'username'
        },
        {
            Headers: 'Surname',
            accessor: 'surname'
        },
        {
            Headers: 'Money',
            accessor: 'money'
        },
        {
            Headers: 'Date',
            accessor: 'date'
        },
        {
            Headers: 'updatedAt',
            accessor: 'updatedAt'
        },
        {
            Headers: 'createdAt',
            accessor: 'createdAt'
        },
    ],
    []
    )

    // const allUsersTable = useTable({
    //     columns,
    //     users
    // })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable ({
        columns,
        data
    })

    return (
        // apply the table props
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup
                    .headers
                    .map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row
                    .cells
                    .map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )
            })}
            </tbody>
        </table>

    );
}

export default UserTables;