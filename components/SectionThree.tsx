import Image from "next/image";
import { CgPhone } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";

const SectionThree = () => {
  return (
    <div className="pb-[8rem]">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-[#0F072C] text-center font-bold text-[2.5rem] w-[49rem]">
          How can we help?
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Talk to our experts today.
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center mt-[2rem] space-y-4">
          <Image
            src={
              "https://surge.global/wp-content/uploads/2022/07/experts-group.png"
            }
            alt=""
            height={50}
            width={130}
          />
          <p className="text-[#6f6a80] text-center">
            Experts in marketing, analytics, engineering, etc.
          </p>
        </div>

        <button className="h-[3rem] mt-4 flex items-center space-x-2 px-7 bg-[#ff3841] font-bold text-white hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-110 duration-500">
          <CgPhone size={20} />
          <p>Schedule a call</p>
          <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SectionThree;
