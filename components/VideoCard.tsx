import { BsArrowRight } from "react-icons/bs";

interface Props {
    title: string
    description: string
    video: string
    heading: string
    capabilities: string[]
    titleColor: string
    buttonColor: string
}


const VideoCard = ({capabilities, description, heading, title, video, titleColor, buttonColor}: Props) => {
  return (
    <div className="bg-[#f9f9ff] flex-1 p-[2rem]">
      <p className={`${titleColor} font-medium text-[1.2rem]`}>
        {title}
      </p>

      <h2 className="font-medium text-[1.9rem] leading-[2.5rem] mt-4">
        {heading}
      </h2>

      <div className="my-6">
        <iframe
          src={video}
          height={250}
          width={"100%"}
        />
      </div>

      <p className="text-[#6f6a80]">
        {description}
      </p>

      <div className="mt-6">
        <p className="font-medium">Capabilities</p>

        <div className="mt-4 flex flex-wrap mb-[4rem]">

            {
                capabilities.map((capability, idx) => (
            <div key={idx} className="px-4 py-2 bg-[#E5E8FD] text-[#7d8ef7] w-fit mr-2 mb-3">
                {capability}
            </div>

                ))
            }

          <div className="px-2 py-2 text-[#6f6a80] w-fit mr-2 mb-3">
            + 100s more
          </div>
        </div>

        <button className={`h-[3rem] px-7 ${buttonColor} text-white font-bold flex items-center space-x-2`}>
          <p>Learn more</p>
          <BsArrowRight size={20} />
        </button>

      </div>
    </div>
  );
};

export default VideoCard;
