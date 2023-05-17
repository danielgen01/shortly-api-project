import TestiomonialBox from "./TestiomonialBox"
import iconBrandRecognition from "/assets/images/icon-brand-recognition.svg"
import iconDetailedRecords from "/assets/images/icon-detailed-records.svg"
import iconFullyCustomizable from "/assets/images/icon-fully-customizable.svg"

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20 -mt-10">
      <caption className="headline-and-pargraph flex flex-col mt-10 px-5 items-center gap-5">
        <h2 className="text-3xl text-Custom-Very-Dark-Blue font-bold lg:text-5xl">
          Advanced Statistics
        </h2>
        <p className="text-Custom-Grayish-Violet lg:text-xl">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </caption>
      <div className="testimonials flex flex-col mt-20 lg:flex-row  px-10 lg:px-52">
        <TestiomonialBox
          icon={iconBrandRecognition}
          headline={"Brand Recognition"}
          description={
            "Boost your brand recognition with each click. Generic links don’t mean   a thing. Branded links help instil confidence in your content."
          }
          verticalLineVisible={true}
        />
        <TestiomonialBox
          icon={iconDetailedRecords}
          headline={"Detailed Records"}
          description={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          }
          verticalLineVisible={true}
        />
        <TestiomonialBox
          icon={iconFullyCustomizable}
          headline={"Fully Customizable"}
          description={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
          verticalLineVisible={false}
        />
      </div>
    </section>
  )
}

export default Testimonials
