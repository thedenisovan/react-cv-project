// import { useState } from "react";

function ControlButtons({className}) {
  return (
    <div className="flex justify-around">
      <button className={className}>Previous</button>
      <button className={className}>Next</button>
    </div>
  )
}

export default function Footer() {
  return (
    <ControlButtons
      className='bg-gray-500 text-amber-50 rounded-xl w-[5rem]'
    />
  )
}