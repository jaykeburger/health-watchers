import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to = "/">Home</Link>
            <Link to = "/leaderboard"> Leaderboard </Link>
            <Link to = "/profile"> Profile </Link>
            <Link to = "/settings"> Settings </Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;