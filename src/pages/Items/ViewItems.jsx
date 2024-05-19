import { Link, Outlet, useLocation } from 'react-router-dom'
import '../../styles/view-items.css'
export default function ViewItem() {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className='view-items'>
      <nav>
        <Link to='/items' className={pathname === '/items' ? 'active' : ''}>Item List</Link>
        <Link to='new' className={pathname === '/items/new' ? 'active' : ''}>New Item</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

