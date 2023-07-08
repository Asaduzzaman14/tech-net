import { RootState } from "./components/redux/store"
import { useSelector } from "react-redux"

function App() {

  const count = useSelector((state: RootState) => state.counter.count)


  return (
    <>
      <div className="flex gap-3 justify-center mt-5">
        <button className="border-2 py-2 px-5 border-red-500">Increment</button>
        <div className="mt-2">{count}</div>
        <button className="border-2 py-2 px-5 border-blue-500">decrement</button>
      </div>
    </>
  )
}

export default App
