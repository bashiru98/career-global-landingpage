import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[46rem] bg-[#0F072C] text-white py-[2rem] pt-[10rem]">
      <div className="w-full flex-1 h-full xl:w-[1150px] mx-auto flex flex-col items-center justify-between">
        
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[5.1rem] leading-[6rem] font-bold text-center tracking-wider mb-[2rem]">
            Your Product Engineering + Growth Marketing
            <span className="block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
              Powerhouse
            </span>
          </h1>

          <h4 className="text-center w-[49rem] text-[1.3rem] font-medium">
            Surge provides everything from expert advice to dedicated staffing,
            taking your business from idea to implementation.
          </h4>
        </div>

        <div className="flex w-full flex-col items-center">
          <p className="text-center text-[#7d8ef7] font-medium mb-[1rem] tracking-wider">EXPERTS IN</p>

          <div className="w-full flex items-center justify-between">
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/js.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/aws.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/salesforce.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/meta.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/react.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/azure.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/powerbi.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/google-analytics.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/08/image2vector-1-1.1.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/figma-1.svg"
              alt=""
              width={80}
              height={50}
            />
            <Image
              src="https://surge.global/wp-content/uploads/2022/06/xd.svg"
              alt=""
              width={80}
              height={50}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
