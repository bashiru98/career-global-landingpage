import Image from "next/image";
import SliderItem from "./SliderItem";

const SectionTwo = () => {
  return (
    <div className="pb-[8rem]">
      <div className="w-full flex flex-col items-center space-y-4">
        <h2 className="text-[#0F072C] text-center font-bold text-[2.5rem] w-[49rem]">
        Don’t take our word for it
        </h2>

        <p className="text-[#6f6a80] w-[38rem] text-center ">
        We work with the best in the business with 100+ marketers, developers, and strategists helping achieve client goals.
        </p>
      </div>

        <div className="flex items-center justify-evenly mt-[2rem]">
            <Image src={"https://surge.global/wp-content/uploads/2022/09/fp_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500" />
            <Image src={"https://surge.global/wp-content/uploads/2022/09/avis_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500"/>
            <Image src={"https://surge.global/wp-content/uploads/2022/09/evidentiq_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500"/>
            <Image src={"https://surge.global/wp-content/uploads/2022/09/atticus_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500"/>
            <Image src={"https://surge.global/wp-content/uploads/2022/09/prompthealth_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500"/>
            <Image src={"https://surge.global/wp-content/uploads/2022/09/slocoach_clr.svg"} alt="" height={50} width={110} className="opacity-60 hover:opacity-100 cursor-pointer duration-500"/>
        </div>

        <div>
            <SliderItem />
        </div>
    </div>
  );
};

export default SectionTwo;
