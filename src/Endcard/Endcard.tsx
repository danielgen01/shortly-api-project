import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"

export const Endcard = () => {
  return (
    <footer className="EndCard grid grid-cols-1">
      <section className="boost-your-links bg-Custom-dark-violet  flex flex-col items-center py-10 gap-5">
        <h1 className="text-white font-bold text-4xl">
          Boost your links today
        </h1>
        <button className="bg-Custom-cyan px-7 py-2 rounded-full text-white font-bold">
          Get Started
        </button>
      </section>

      <div className="links-social-etc grid grid-cols-1 lg:grid-cols-12 bg-Custom-Very-Dark-Violet py-10  gap-y-10">
        <div className="headline flex justify-center lg:col-span-4">
          <h2 className="text-white font-bold text-3xl lg:col-span-4">
            Shortly
          </h2>
        </div>
        <section className="ressources flex flex-col items-center">
          <h3 className="font-bold text-white">Features</h3>
          <ul className="links flex flex-col gap-2 mt-5">
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Link Shortening
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Branded Links
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Analytics
              </a>
            </li>
          </ul>
        </section>

        <section className="ressources flex flex-col items-center">
          <h3 className="font-bold text-white">Ressources</h3>
          <ul className="links flex flex-col gap-2 mt-5">
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Developers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Support
              </a>
            </li>
          </ul>
        </section>

        <section className="company flex flex-col items-center">
          <h3 className="font-bold text-white">Company</h3>
          <ul className="links flex flex-col gap-2 mt-5">
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-Custom-cyan text-center text-Custom-Grayish-Violet font-semibold "
              >
                Contact
              </a>
            </li>
          </ul>
        </section>

        <section className="socials flex items-center justify-center text-white gap-5 lg:col-span-5">
          <AiFillFacebook className="text-3xl hover:text-Custom-cyan" />
          <AiOutlineTwitter className="text-3xl hover:text-Custom-cyan" />
          <BsPinterest className="text-3xl hover:text-Custom-cyan" />
          <AiOutlineInstagram className="text-3xl hover:text-Custom-cyan" />
        </section>
      </div>
    </footer>
  )
}
