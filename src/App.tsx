import { Endcard } from "./Endcard/Endcard"
import Intro from "./Intro/Intro"
import NavDesktop from "./Navbar/NavDesktop"
import NavbarMobile from "./Navbar/NavbarMobile"
import ShortLinkBox from "./ShortLink/ShortLinkBox"
import Testimonials from "./Testimonials/Testimonials"
import { useState } from "react"
import axios from "axios"

function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  // AXIOS call to the shortenAPI 

  const shortenUrl = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
      setShortUrl(response.data.result.full_short_link)
    } catch (error) {
      console.error("There was an issue with the API-Request: ", error)
    }
  }

  const shortLinkProps = {
    url,
    setUrl,
    shortUrl,
    setShortUrl,
    shortenUrl
  }

  return (
    <div className="overflow-x-hidden">
      <NavbarMobile />
      <NavDesktop />
      <main>
        <Intro />
        <ShortLinkBox {...shortLinkProps}/>
        <Testimonials />
      </main>

      <Endcard />
    </div>
  )
}

export default App
