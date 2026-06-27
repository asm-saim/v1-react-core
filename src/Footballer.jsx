export default function Footballer({ footballer }) {
    return (
        <div className="universal">
            <h2>Name:{footballer.Name} </h2>
            <p>Goal: {footballer.goal} </p>
        </div>
    )
}