export default function House({ name, location, isActive, duration=0 }) {

    if (isActive === true) {
        return (
            <div className="pet">
                <h3>House name: {name}</h3>
                <p>House location: {location}</p>
                <p>Current time: {duration}</p>
            </div>
        )
    }
    else {
        return (
            <div className="pet">
                <h3>House name: {name}</h3>
                <p>Location changed to: {location}</p>
                <p>Current time: {duration}</p>
            </div>
        )
    }


}