// export default function House({ name, location, isActive, duration = 0 }) {
// conditional rendering:1
// if (isActive === true) {
//     return (
//         <div className="pet">
//             <h3>House name: {name}</h3>
//             <p>House location: {location}</p>
//             <p>Current time: {duration}</p>
//         </div>
//     )
// }
// else {
//     return (
//         <div className="pet">
//             <h3>House name: {name}</h3>
//             <p>Location changed to: {location}</p>
//             <p>Current time: {duration}</p>
//         </div>
//     )
// }

// }


// conditional rendering 2: ternary operator
// export default function House({ name, location, isActive, duration = 0 }) {
//     return isActive === true ?
//         (<div className="pet">
//             <h3>House name: {name}</h3>
//             <p>House location: {location}</p>
//             <p>Current time: {duration}</p>
//         </div>)
//         :
//         (<div className="pet">
//             <h3>House name: {name}</h3>
//             <p>Location changed to: {location}</p>
//             <p>Current time: {duration}</p>
//         </div>)
// }

//conditional rendering 3: && (only true)
// export default function House({ name, location, isActive, duration = 0 }) {
//     return isActive && <div className="pet"><h3>House name: {name}</h3><p>House location: {location}</p></div>
// }

//conditional rendering 3: || (only false)
export default function House({ name, location, isActive, duration = 0 }) {
    return isActive || <div className="pet"><h3>House name: {name}</h3><p>House location: {location}</p></div>
}