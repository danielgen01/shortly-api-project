import logo from "/assets/images/logo.svg"

const NavDesktop = () => {
  return (
    <nav className="hidden lg:block">
      <div className="nav-content grid grid-cols-12 h-20  items-center">
        <section className="col-span-2 flex justify-end">
          <img src={logo} alt="logo" />
        </section>
        <ul className="links flex items-center col-span-5 justify-center gap-5">
          <li>
            <a
              href=""
              className="hover:text-black text-Custom-Grayish-Violet font-bold "
            >
              Features
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black text-Custom-Grayish-Violet font-bold"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black text-Custom-Grayish-Violet font-bold"
            >
              Ressources
            </a>
          </li>
        </ul>
        <div className="buttons col-span-5 flex gap-5 justify-center">
          <button className="text-Custom-Grayish-Violet font-semibold">
            Login
          </button>
          <button className="bg-Custom-cyan px-5 py-2 text-white font-bold rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavDesktop
