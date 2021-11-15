import React, { useState } from 'react'
import './Search.css';
import Data from './Data/Data.json'
const Search = ({ post }) => {
  // const [timeoutId, updateTimeoutId] = useState();
  // const [searchTerm, setSearchTerm] = useState('')

  // const onTextChange = (event) => {
  //   clearTimeout(timeoutId)
  //   const timeout = setTimeout(() => console.log("ramshiva"), 500);
  //   updateTimeoutId(timeout)
  // };
  return (
    <div className="search__input">
      <input type="text" placeholder="Search Products"  />
      {/* {Data.filter((post) => {
        if (searchTerm == "") {
          return post
        }////onChange={e => setSearchTerm(e.target.value)}/////
        else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return post;
        }
      }).map((post, key) => {
        return <div>{post.title} </div>
      })} */}

    </div>
  )
}

export default Search;
