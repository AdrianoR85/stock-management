import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

import '../../styles/view-items.css'

function ViewItem(props) {
  const [active, setActive] = useState('items')

  function handleToggle(link) {
    console.log(link)
    if (link !== active) {
      setActive(link)
    }
  }

  return (
    <div className='view-items'>
      <h1>Stock Items</h1>
      <nav>
        <Link 
          to='/items' 
          className={active === "items" ? "active": ""} 
          onClick={() => handleToggle('items')} >
            All Items
        </Link>
        <Link 
          to='new' 
          className={active === "new" ? "active": ""} 
          onClick={() => handleToggle('new')} >
            New Item
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

ViewItem.propTypes = {

}

export default ViewItem

