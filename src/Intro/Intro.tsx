import working from "/assets/images/illustration-working.svg"
const Intro = () => {
  return (
    <section className="Intro grid grid-cols-1 lg:grid-cols-2  w-screen px-5 ">
      <figure className="lg:order-2">
        <img
          src={working}
          alt="Working-image"
          className="ml-[20%] w-full h-full lg:ml-0 "
        />
      </figure>
      <figcaption className="flex flex-col items-center mt-5 gap-5 px-10  lg:items-start lg:justify-center lg:order-1 ">
        <h1 className="text-5xl text-center font-bold text-Custom-Very-Dark-Blue lg:text-8xl lg:text-left">
          More than just shorter links
        </h1>
        <p className="text-center text-md text-Custom-Grayish-Violet lg:text-xl">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Custom-cyan text-white font-bold px-10 py-3 rounded-full">
          Get started
        </button>
      </figcaption>
    </section>
  )
}

export default Intro
