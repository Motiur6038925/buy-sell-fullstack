import React from 'react';

const SearchBar = () => {
    return (
        <div className=' bg-[#149777] py-[50px]  flex items-center justify-center'>
        <input type="email" name="email" id="email" className="bg-gray-50 border py-4 border-gray-300 text-gray-900    rounded-3xl   block w-[800px] p-2.5 " placeholder="What are you lokin for?" required=""></input>
        
        </div>
    );
};

export default SearchBar;