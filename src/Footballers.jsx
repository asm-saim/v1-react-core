import Footballer from "./Footballer"

export default function Footballers({ footballers }) {
    return (
        <div>
            <h1>Footballer's Biography</h1>
            <h2>Total player: {footballers.length}</h2>
            <ul>
                {
                    footballers.map(footballer => <Footballer footballer={footballer}></Footballer>)
                }
            </ul>

        </div>

    )
}