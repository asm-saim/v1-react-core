export default function Books({ name, pages }) {
    return (
        <div className="universal">
            <h2>Books Name: {name}</h2>
            <p>Pages: {pages}</p>
        </div>
    )
}