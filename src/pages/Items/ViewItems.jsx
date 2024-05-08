import { Link, Outlet, useLocation } from 'react-router-dom'
import '../../styles/view-items.css'

export default function ViewItem() {
  const { pathname } = useLocation()

  return (
    <div className='view-items'>
      <h1>Stock Items</h1>
      <nav>
        <Link to='/items' className={pathname === "/items" ? "active": ""}>All Items</Link>
        <Link to='new' className={pathname === "/items/new" ? "active": ""}>New Item</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

