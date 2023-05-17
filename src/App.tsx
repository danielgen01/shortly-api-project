import { Endcard } from "./Endcard/Endcard"
import Intro from "./Intro/Intro"
import NavDesktop from "./Navbar/NavDesktop"
import NavbarMobile from "./Navbar/NavbarMobile"
import ShortLinkBox from "./ShortLink/ShortLinkBox"
import Testimonials from "./Testimonials/Testimonials"

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavbarMobile />
      <NavDesktop />
      <main>
        <Intro />
        <ShortLinkBox />
        <Testimonials />
      </main>

      <Endcard />
    </div>
  )
}

export default App
