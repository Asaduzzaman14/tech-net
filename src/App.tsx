import { decrement, increment, incrementbyValue } from "./components/redux/features/counter/counterSlice"
import { RootState } from "./components/redux/store"
import { useSelector, useDispatch } from "react-redux"

function App() {

  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()


  return (
    <>
      <div className="flex gap-3 justify-center mt-5">
        <button
          onClick={() => dispatch(decrement())}
          className="border-2 py-2 px-5 border-blue-500">decrement</button>

        <div className="mt-2">{count}</div>

        <button
          onClick={() => dispatch(increment())}
          className="border-2 py-2 px-5 border-red-500">Increment</button>

        <button
          onClick={() => dispatch(incrementbyValue(5))}
          className="border-2 py-2 px-5 border-red-500">incrementbyValue</button>
      </div>
    </>
  )
}

export default App
