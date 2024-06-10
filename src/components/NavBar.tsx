import { NavLink } from "react-router-dom";

function NavBar () {
  return (
    <nav className=" my-7">
      <ul className="flex items-center justify-between">
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/">home</NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/contant">Contact</NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/about">About us </NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/learn">learn  </NavLink></li>
        
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/contribute">Contribute</NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/login">Login </NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar