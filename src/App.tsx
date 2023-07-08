import { decrement, increment, incrementbyValue } from "./components/redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./components/redux/hooks"


function App() {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()


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
