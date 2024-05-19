import { Link, Outlet} from "react-router-dom";

export default function RootView() {
  return (
    <div className="container">
      <header>
        <Link to='/' className="logo"><span>S</span>tock <span>M</span>anager</Link>
        <nav >
          <Link to='/'>Home</Link>
          <Link to='/items'>Items</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Create by Adriano Rosa</footer>
    </div>
  )
}