import React from 'react'
import '../styles/Header.css'
const Header = ({page, setPage}) => {
  return (
    <div className='header-main' >
      <p className='header-title' >Rick y Morty Api</p>
      <button className='header-button' onClick={()=>setPage(page+1)}>Next Page: {page} </button>
    </div>
  )
}
export default Header;