import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar bg-base-100">
  <div className="flex-1">
  <div className="w-20 rounded-full"><CartWidget/></div>
    
    <a className="btn btn-ghost normal-case text-xl">Deco Dreams</a>
  </div>
  <div className="flex-1">
    { <Link to='/shop' className="btn btn-ghost normal-case text-xl">Deco Dreams Tienda</Link> }
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
        <CartWidget/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Vinilos
            <span className="badge"></span>
          </a>
        </li>
        <li><a>Agendas</a></li>
        <li><a>Empapelados</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}

export default NavBar