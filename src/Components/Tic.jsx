import React from 'react'

const Tic = () => {
  return (
    <div className='justify-center text-center' >
        <h1 className='justify-center text-center text-neutral-100 font-bold text-3xl'>Tic-Tac-Toe GAME </h1>


        <div>
        <table class="table-fixed">
 
  <tbody>
    <tr>
      <td className='border  border-neutral-100'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='border border-neutral-100'>Malcolm Lockyer</td>
      <td className='border border-neutral-100'>1961</td>
    </tr>
    <tr>
      <td className='border border-neutral-100'>Witchy Woman</td>
      <td className='border border-neutral-100'>The Eagles</td>
      <td className='border border-neutral-100'>1972</td>
    </tr>
    <tr>
      <td className='border border-neutral-100'>Shining Star</td>
      <td className='border border-neutral-100'>Earth, Wind, and Fire</td>
      <td className='border border-neutral-100'>1975</td>
    </tr>
  </tbody>
</table>
        </div>

        <button className='bg-cyan-400 text-white text-lg font-semibold rounded-3xl px-6 py-3'>Reset</button>


    </div>
  )
}

export default Tic