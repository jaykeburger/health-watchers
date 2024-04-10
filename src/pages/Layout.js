import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jake">Jakee</Link>
          </li>
          <li>
            <Link to = "/joseph">Joseph</Link>
          </li>
          <li>
            <Link to = "/sara">Sara</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;