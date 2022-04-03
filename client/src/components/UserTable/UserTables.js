
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

import styled from 'styled-components'


const UserTables = () => {

    // useSelector - take state.users from folder reducers file index.js
    const usersData = useSelector((state) => state.users);    
    
    const [data, setData] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            const response = await usersData
            setData(response)
            console.log('Check response of all users for react-table: ', response)
        }
        dataFetch()
    }, [usersData])


    const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


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
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
    ],
    []
    )

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

    function Table({ columns, data}) {

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


    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default UserTables;