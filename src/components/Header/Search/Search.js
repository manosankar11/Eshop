import { FormControl } from 'react-bootstrap';
import './Search.css';



const Search = ({ productDispatch }) => {
  
  return (
    <div>
       <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            /> 
    </div>
  )
}

export default Search;
