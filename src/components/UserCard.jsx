import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({posts, loading}) => {

    const navigate = useNavigate()

    const handleNavigate = (u) => {
        navigate(`/user/${u.id}`, { state: u })
      }
  
    return (
        <>
        <table className='my-6 w-full border-separate border-spacing-y-4 font-epilogue'>
        {loading ? (<h1>Loading...</h1>)
        : (<tbody className=''>
            {posts.map((u) => (
                <tr key={u.id} className=" bg-gray-100" >
                    <td className='p-3'>{u.company.name}</td>
                    <td className='p-3 py-5'>
                        <h1 className='font-bold uppercase'>Contact</h1>
                        <p>{u.username}</p>
                    </td>
                    <td className='p-3'>
                        <h1 className='font-bold uppercase'>Street</h1>
                        <p>{u.address.street}</p>
                    </td>
                    <td className='p-3'>
                        <h1 className='font-bold uppercase'>City</h1>
                        <p>{u.address.city}</p> 
                    </td>
                    <td className=''>
                        <button onClick={() => handleNavigate(u)} className='bg-red-500 text-white mr-2 rounded-md py-1 px-2 hover:bg-red-600'>View Details</button>
                    </td>
                </tr>
            ))}
        </tbody>)}
        </table>
        </>
  )
}

export default UserCard