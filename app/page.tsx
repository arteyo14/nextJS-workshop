"use client";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { decrement, increment, incrementByAmount, resetValue } from "./store";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex  flex-col w-52">
      <span>this is home page</span>
      <br />
      <span>{count}</span>
      <br />
      <button
        onClick={() => dispatch(increment())}
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
      >
        Increment
      </button>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={() => dispatch(resetValue())}
      >
        reset
      </button>
    </div>
  );
}
