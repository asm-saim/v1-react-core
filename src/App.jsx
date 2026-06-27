import './App.css'

function App() {

  return (
    <>
      <h2>JS+React</h2>
      <Info></Info>
      <Team></Team>
      <Pet></Pet>
      <Pet></Pet>

    </>

  )
}

//make a component:
function Info() {
  const code = 777
  return (
    <h4>I am a Programmer code {code}</h4>
  )
}

//component:
function Pet() {
  return (
    <>
      <p>Different types of pet:</p>
      <ul>
        <li>Cat</li>
        <li>Fish</li>
        <li>Bird</li>
      </ul>
    </>

  )
}

//component:
function Team() {
  const task = "dept.Head"
  return (
    <p >Team Name is assign by: {task}</p>
  )
}

export default App
