import { useState } from "react"
import axios from "axios"

const ShortLinkBox = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

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

  console.log(shortUrl)

  return (
    <>
      <section className="mt-20 flex justify-center">
        <div
          className="short-link-box 
         bg-Custom-dark-violet w-[90%] min-h-[150px] rounded-xl
         px-5 py-5 flex flex-col lg:flex-row gap-5 lg:py-20 lg:w-[75%]"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-12 rounded-md px-5 outline-none lg:w-[75%] "
            placeholder="Shorten a link here..."
          />
          <button
            className="bg-Custom-cyan rounded-md py-2 text-white font-bold whitespace-nowrap lg:px-6"
            onClick={shortenUrl}
          >
            Shorten it!
          </button>
        </div>
      </section>

      <section className=" h-10 w-full results flex justify-between">
        <div className="bg-white w-[90%] flex px-10 items-center justify-between">
          <p>{url}</p>

          <a
            href={shortUrl}
            target="_blank"
            className="text-Custom-cyan font-bold"
          >
            {shortUrl}
          </a>
          <button
            className="bg-Custom-Very-Dark-Violet hover:bg-Custom-cyan px-3 py-1 rounded-lg text-white uppercase font-bold"
            onClick={() => navigator.clipboard.writeText(shortUrl)}
          >
            copy
          </button>
        </div>
      </section>
    </>
  )
}

export default ShortLinkBox
