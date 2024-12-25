import Chai from "./chai"

function App() {
    const username = 'chai aur code'
  return (
    <>
    <h1>Chai aur react {username}</h1>   {/* evaluated expression = final expression*/}
    <Chai />
    </>
  )
}

export default App