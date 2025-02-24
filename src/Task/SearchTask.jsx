import React,{ useState } from 'react'
import { CiSearch } from "react-icons/ci";

const SearchTask = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTask = (e) => {
    e.preventDefault();
    onSearch(searchTerm);

    setSearchTerm('');
  }
  return (
    <div className="container mx-auto flex justify-between items-center py-5">
        <form id="searchForm" action="" method="">
            <div className="flex">
                <input
                    className="shadow appearance-none border w-full rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="searchTask"
                    type="text"
                    placeholder="Search Task"
                    name='searchTerm'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    required
                />
                <button type='submit' onClick={searchTask} className='bg-red-500 text-white px-5 py-3 ml-2 rounded-2xl'><CiSearch /></button>
            </div>
        </form>
    </div>
  )
}

export default SearchTask