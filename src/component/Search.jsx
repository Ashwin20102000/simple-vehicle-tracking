import React from 'react'
import { Button } from 'react-bootstrap'
import useDebounce from '../hooks/useDebounce';

const Search = (props) => {
  const searchRef = React.useRef("");
  const debounceSearch = useDebounce(searchRef.current?.value,500);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   try {
  //     const search = searchRef?.current?.value;
  //     if(search.trim().length>0){
  //       props.setSearch(search);
  //       props.filterVechicleSearch();
  //     }
  //   } catch (error) {
  //     console.log('error', error)
  //   }  
  // };
  React.useEffect(()=>{
     const search = searchRef?.current?.value;
        props.filterVechicleSearch();
  },[debounceSearch])
  return (
     <div className="w-100 d-flex justify-content-center">
        {/* <form onSubmit={handleSearch} className='d-flex m-2'> */}
          <input onChange={e=>props.setSearch(e?e.target.value:props.filterVechicleSearch())}  ref={searchRef} style={{width:"20rem"}} placeholder='Search by Register Id ...' className='form-control shadow-none mx-3' type="search" />
          {/* <Button variant='outline-primary' type='submit' >Search</Button> */}
        {/* </form> */}
      </div>
  )
}

export default Search