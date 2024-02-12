import React from 'react'


function Stage2({ count, count2, setCount2 }) {
  function decrease() {
    setCount2(count2 - count)
  }
  function increase() {
    setCount2(count2 + count)
  }
  return (
    <div className="flex mb-5 mt-3">
      <button
        onClick={decrease}
        type="button"
        className="rounded-full mx-5 bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      <p style={{ fontWeight: "500", fontSize: "23px" }}>Count: {count2}</p>
      <button
        onClick={increase}
        type="button"
        className="rounded-full mx-5 bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  )
}
export default Stage2
