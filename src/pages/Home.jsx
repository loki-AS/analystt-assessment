import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import UserCard from '../components/UserCard';

const Home = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const fetchData = async() => {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");  
        setData(res.data);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='my-3 px-6 lg:px-16'>
      <h1 className='uppercase text-2xl font-bold font-epilogue tracking-[1px] mt-6'>User Details</h1>
        <UserCard 
        posts={currentPosts}
        loading={loading}
        />
        <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}        
        />
    </div>
  )
}

export default Home