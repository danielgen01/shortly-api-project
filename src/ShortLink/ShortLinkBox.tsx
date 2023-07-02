import { useState, useEffect } from "react"

type shortLinkProps = {
  url: any
  setUrl: any
  shortUrl: any
  setShortUrl: any
  shortenUrl: any
}

type UrlItem = {
  url: string,
  shortUrl: string,
}

const ShortLinkBox: React.FC<shortLinkProps> = ({
  url,
  setUrl,
  shortUrl,
  shortenUrl
}) => {

 const [urlList, setUrlList] = useState<UrlItem[]>([])

const addItemToList = (newItem: UrlItem) => {
  setUrlList((prevList: UrlItem[]) => [...prevList, newItem])
}

  const handleClick = () => {
    shortenUrl()
  }

  useEffect(() => {
    if(shortUrl) { // To avoid adding an empty url at the initial render
      addItemToList({ url, shortUrl })
    }
  }, [shortUrl])

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
            onClick={handleClick}
          >
            Shorten it!
          </button>
        </div>
      </section>

      <ul className="flex flex-col gap-4">
        {urlList.map((item:any, index:number) => (
          <ShortedLinkComp
            key={index}
            url={item.url}
            shortUrl={item.shortUrl}
          />
        ))}
      </ul>
    </>
  )
}

export default ShortLinkBox

type shortedLinkProps = {
  url: any
  shortUrl: any
}

const ShortedLinkComp: React.FC<shortedLinkProps> = ({ url, shortUrl }) => {
  return (
    <section className=" h-10 w-screen results flex justify-between relative top-10 left-[10%] ">
      <div className="bg-white grid grid-cols-2 md:grid-cols-3 place-items-center px-2">
        <p className="hidden lg:block">{url}</p>

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
  )
}
