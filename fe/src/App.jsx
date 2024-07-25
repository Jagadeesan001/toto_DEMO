import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [value, setvalue] = useState("")
  const [arr, setarr] = useState([])
  function handlevalue(evt) {
    setvalue(evt.target.value)
  }
  const addvluetoarr = () => {
    axios.post("http://localhost:4000/datasent",{newvalue:value})

    setvalue("")
  }
  useEffect(() => {
    axios.get("http://localhost:4000/data").then((data) => {
      setarr(data.data)
      console.log(data.data);
    },[])
  })
  return (

    <div>
      <input value={value} onChange={handlevalue} type="text" />
      <button onClick={addvluetoarr}>Add..</button>
      <ul>
        {
          arr.map((itm, index) => {
            return (
              <h1 key={index}>{itm.name}</h1>
            )
          })
        }
      </ul>
    </div>
  )
}
export default App