import './App.css'
// import Animal from './Animal'
// import House from './Condition'
// import Books from './Books'
import Actors from './Actors'

function App() {
  const time = 30
  const actors = ["Tom Cruse", "Jason Bourne", "IP Man", "Dwyne Jonson", "Json Statham"];
  return (
    <>
      <h2>React Core Concepts</h2>
      {
        actors.map(actor =><Actors name={actor}></Actors>)
      }


      {/* <Books name="Harry Potter" pages={300}></Books>
      <Books name="Anne's Diary" pages={200}></Books>
      <Books name="TinTin" pages={150}></Books>

      <House name="WhiteHouse" location="USA" isActive={true} duration={time}></House>
      <House name="Pentagon" location="Manhattan" isActive={true}></House>
      <House name="UN-Center" location="New York" isActive={false}></House> */}

      {/* <Animal name="Tiger" age="35"></Animal> */}
      {/* <Info></Info>
      <Team></Team>
      <Pet></Pet>
      <Pet></Pet>

      <Device name="Laptop" price="200$"></Device>
      <Device name="Mobile" price="80$"></Device>
      <Device name="Tab" price="120$"></Device>

      <Sports deptName="Soccer" player="22"></Sports>
      <Sports deptName="Basketball" player="26"></Sports>

      <Fruits name="Orange" color="yellow" ></Fruits>
      <Fruits name="Berry" color="red-wine" ></Fruits>
      <Fruits name="Apple"></Fruits> */}


    </>

  )
}

//component: obj destructuring
function Sports({ depName, player }) {
  // console.log(props)
  // const {depName,player}={deptName:"Basketball", player:"26"}
  return (
    <div className='pet'>
      <h2>Department: {depName} </h2>
      <p>Players: {player}</p>
    </div>
  )
}

//component: destructuring
function Fruits({ name, color = "not-given" }) {
  return (
    <div className='pet'>
      <h2>Fruits Name: {name} </h2>
      <p>Color: {color}</p>
    </div>
  )
}


//component:
function Device(props) {
  return (
    <div style={{ border: "2px solid gray", padding: "20px", margin: "20px" }}>
      <h3>Device Name:{props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}


//for style:
const design = {
  color: "blue",
  textAlign: "left"
}

//make a component:
function Info() {
  const code = 777
  return (
    <h4 style={design}>I am a Programmer code {code}</h4>
  )
}

//component:
function Pet() {
  return (
    <div className='pet'>
      <p>Different types of pet:</p>
      <ul>
        <li>Cat</li>
        <li>Fish</li>
        <li>Bird</li>
      </ul>
    </div>

  )
}

//component:
function Team() {
  const task = "dept.Head"
  return (
    <p style={
      { border: "2px solid green", padding: "10px", margin: "10px" }
    }>Team Name is assign by: {task}</p>
  )
}

export default App
