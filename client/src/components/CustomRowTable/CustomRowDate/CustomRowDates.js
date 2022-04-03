// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// // library for parsing, validating, manipulating, and formatting dates
// import moment from "moment";


// const CustomRowDates = ({ values }) => {

//     const usersDate = useSelector((state) => state.users.map(stateUserMonths => stateUserMonths.date));

//     const [months, setMonths] = useState([])

//     // use library moment to better manage Data from mongodb
//     useEffect(() => {
//         setMonths(
//             usersDate.map(stateDate => {
//                 return moment(stateDate).format("MMM")
//             })
//         );
//     }, [usersDate])

//     return (
//         <>
//             <div>{months.map((stateMonth) => (
//                 <p>{stateMonth}</p>
//             ))}</div>
//         </>
//     )
// }

// export default CustomRowDates;