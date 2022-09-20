

const NavBar = () => {
    return(
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Deco Dreams</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img src= "https://media.revistagq.com/photos/5dbab1e1d19dec0008a41e77/3:4/w_600,h_800,c_limit/terminator%20portada.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">Nuevo</span>
          </a>
        </li>
        <li><a>Configuraciones</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}

export default NavBar