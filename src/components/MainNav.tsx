import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <div className="navbar-nav mr-auto">
      <NavLink to="/" exact className="nav-link" activeClassName="router-link-exact-active">
        Home
      </NavLink>
      <NavLink to="/profile" exact className="nav-link" activeClassName="router-link-exact-active">
        Profile
      </NavLink>
    </div>
  );
};

export default MainNav;
