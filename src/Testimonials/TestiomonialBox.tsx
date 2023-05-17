import { AiOutlineLine } from "react-icons/ai"

type testimonialBoxProps = {
  icon: any
  headline: string
  description: string
  verticalLineVisible: boolean
}

const TestiomonialBox: React.FC<testimonialBoxProps> = ({
  icon,
  headline,
  description,
  verticalLineVisible,
}) => {
  return (
    <>
      <article className="bg-white h-72 rounded-md z-10">
        <div
          className="box-content px-5  flex flex-col items-center
       justify-start h-full gap-5"
        >
          <img
            src={icon}
            alt="Icon"
            className="bg-Custom-dark-violet rounded-full px-5 py-5 -mt-10"
          />
          <h1 className="font-bold text-3xl text-Custom-dark-violet">
            {headline}
          </h1>
          <p className="text-center text-Custom-Grayish-Violet font-semibold">
            {description}
          </p>
        </div>
      </article>

      {/* Vertical Line */}

      {verticalLineVisible ? (
        <div className="line flex justify-center">
          <AiOutlineLine className="rotate-90 lg:rotate-180 text-8xl text-Custom-cyan -mt-3 z-0" />
        </div>
      ) : null}
    </>
  )
}

export default TestiomonialBox
