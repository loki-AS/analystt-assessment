import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <>
      <div className='flex justify-center items-center'>
        {pageNumbers.map(number => (
          <div key={number} className='mx-3'>
            <a onClick={() => paginate(number)} href="/#" className={`text-lg font-semibold py-1 px-2 rounded-md bg-red-500 text-white active:bg-red-200 hover:bg-red-600`}>
                {number}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pagination;