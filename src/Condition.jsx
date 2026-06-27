export default function House({ name, location, isActive }) {

    if (isActive === true) {
        return (
            <div className="pet">
                <h3>House name: {name}</h3>
                <p>House location: {location}</p>
            </div>
        )

    }


}