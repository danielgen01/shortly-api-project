import logo from "/assets/images/logo.svg"
import { AiOutlineMenu } from "react-icons/ai"

const NavbarMobile = () => {
  return (
    <nav className="h-[100px] w-screen block lg:hidden">
      <div className="nav-content px-5 w-full grid grid-cols-2 items-center h-[100px]">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon flex justify-end">
          <button>
            <AiOutlineMenu className="text-3xl text-gray-500" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMobile
