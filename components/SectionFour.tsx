import { BsArrowRight } from "react-icons/bs";

const SectionFour = () => {
  return (
    <div className="w-full bg-[#f8f9ff] h-[35rem]">
      <div className="w-full xl:w-[1150px] mx-auto h-full flex items-center">
        <div className="w-[40%] flex flex-col justify-center h-full">
          <h2 className="text-[#0F072C] text-[2.5rem] font-bold mb-[1.5rem]">
            We’re hiring
          </h2>
          <p className="text-[#6f6a80] mb-[2rem]">
            Learn about our culture and how we’ve grown up to 250+ people.
          </p>
          <div className="text-[#ff3841] flex cursor-pointer   items-center space-x-4 font-bold">
            <p>Carrers</p>
            <BsArrowRight size={20} />
          </div>

          <div className="text-[#ff3841] mt-6 flex cursor-pointer  items-center space-x-4 font-bold">
            <p>See available Positions</p>
            <BsArrowRight size={20} />
          </div>
        </div>

        <div className="w-[60%]">
          <iframe src={"https://fast.wistia.net/embed/iframe/torbtgx8br?seo=false&videoFoam=true"} height={300} width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
