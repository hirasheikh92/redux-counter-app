"use client";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@/store/slice/CounterSlice";
import type { RootState } from "../store/store";
const Counter = () => {
  const counterValue = useSelector(
    (state: RootState) => state.CounterSlice.value
  );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className='p-30 flex justify-between items-center flex-col mt-20'>
      <button onClick={increment} className='py-4 px-5 rounded-md bg-green-500'>
        <span className=' text-2xl text-bold'>+</span>
      </button>
      <div className='py-6 flex-gap-6 '>
        <span className="text-bold text-3xl"> {counterValue}</span>
      </div>
      <button onClick={decrement} className='py-4 px-5 rounded-md bg-red-500'>
        <span className='text-2xl text-bold'>-</span>
      </button>
    </div>
  );
};

export default Counter;
