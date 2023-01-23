import React from 'react'
import { useLocation } from 'react-router-dom';

const UserDetails = () => {

  const { state } = useLocation();

  console.log(state)

  return (
    <div className='px-6 lg:px-16 flex flex-col justify-center my-6'>
      <h1 className='uppercase text-2xl font-bold mb-3 font-epilogue tracking-[1px]'>User Detail</h1>
      <table className='border-separate border-spacing-6 bg-slate-100 rounded-md'>
      <tbody>
        <tr>
          <td className='font-bold'>Name</td>
          <td className='font-semibold'>{state.name}</td>
        </tr>

        <tr>
          <td className='font-bold'>User Name</td>
          <td className='font-semibold'>{state.username}</td>
        </tr>

        <tr>
          <td className='font-bold'>Email</td>
          <td className='font-semibold'>{state.email}</td>
        </tr>

        <tr>
          <td className='font-bold uppercase underline'>Address</td>
        </tr>

        <tr>
          <td className='font-bold'>Street</td>
          <td className='font-semibold'>{state.address.street}</td>
        </tr>

        <tr>
          <td className='font-bold'>Suite</td>
          <td className='font-semibold'>{state.address.suite}</td>
        </tr>

        <tr>
          <td className='font-bold'>City</td>
          <td className='font-semibold'>{state.address.city}</td>
        </tr>

        <tr>
          <td className='font-bold'>ZipCode</td>
          <td className='font-semibold'>{state.address.zipcode}</td>
        </tr>

        <tr>
          <td className='font-bold'>Phone Number</td>
          <td className='font-semibold'>{state.phone}</td>
        </tr>

        <tr>
          <td className='font-bold'>website</td>
          <td className='font-semibold hover:cursor-pointer hover:underline'>{state.website}</td>
        </tr>

        <tr>
          <td className='font-bold uppercase underline'>Comapny Details</td>
        </tr>

        <tr>
          <td className='font-bold'>Company Name</td>
          <td className='font-semibold'>{state.company.name}</td>
        </tr>

        <tr>
          <td className='font-bold'>catchPhrase</td>
          <td className='font-semibold'>{state.company.catchPhrase}</td>
        </tr>

      </tbody>
    </table>
    </div>
  )
}

export default UserDetails