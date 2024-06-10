import { NavLink } from "react-router-dom";


function LearnAside () {
  return (
    <aside className="px-4">
      <nav className=" my-8">
      <ul className="flex flex-col">
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/learn" end>Quick Start</NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/learn/ThinkinginReact">Thinking in React</NavLink></li>
        <li className="hover:text-[#149eca] duration-200"><NavLink  to="/learn/installation">Installation </NavLink></li>
      </ul>
      </nav>
    </aside>
  )
}

export default LearnAside