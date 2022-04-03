
const TableHeaders = () => {
    const headerTitles = ['Username', 'Surname', 'Money', 'Date', 'Points'];

    return (
        <>
            {headerTitles.map((titles) => {
                return (
                    <th key={titles}>{titles}</th>
                )
            })}
        </>
    )
}

export default TableHeaders;
