import Image from "next/image";

const SliderItem = () => {

  // console.log("ref", ref)
  return (
    <div className="h-[32rem] flex items-center rounded-lg bg-[#f8f9ff] p-[4rem]">
      <div className="flex-1">
        <h3 className="text-[#0F072C] mb-[2rem] font-bold text-[1.8rem] tracking-wide">
          Building out an effective lead generation strategy
        </h3>

        <p className="opacity-70 mb-[2rem]">
          AVIS Saudi Arabia, one of the largest vehicle rental companies
          operating in Saudi, approached Surge to understand how they can build
          out an effective lead generation strategy.
        </p>

        <div className="mb-[1rem]">
          <Image
            src={"https://surge.global/wp-content/uploads/2022/06/Quote.svg"}
            alt=""
            height={30}
            width={30}
          />
        </div>

        <p className="opacity-70 mb-[1rem]">
          Every week I would look forward to what other information that they
          have found, research that they have discovered and things that I was
          not aware of, but looking forward to implementing as soon as possible.
        </p>

        <p className="font-bold">Hussam Al-Saleh, <span className="font-normal">D. CEO</span> </p>
      </div>

      <div className="relative flex-1">
        <Image src={"https://surge.global/wp-content/uploads/2022/09/avis-saudi.webp"} alt="" height={500} width={700} className="" />
      </div>
    </div>
  );
};

export default SliderItem;
