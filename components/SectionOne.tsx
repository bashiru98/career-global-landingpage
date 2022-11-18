import VideoCard from "./VideoCard"


const capabilities1 = ["UX/UI", "Architecture", "AWS", "Node", "Salesforce", "PHP"]

const capabilities2 = ["Strategy", "SEO", "A/B testing", "Blogging", "PPC", "Creative", "Web development"]

const SectionOne = () => {
  return (
    <div className="py-[8rem]">
        <div className="w-full flex flex-col items-center space-y-4">
            <h2 className="text-[#0F072C] text-center font-bold text-[2.5rem] w-[49rem]">
            Great teams are built on product + market expertise, we’ve got both
            </h2>

            <p className="text-[#6f6a80]">
            Over 250 consultants with expertise ranging from Hemp to SaaS, from Boston to Dubai.
            </p>
        </div>

        <div className="w-full mt-[4rem] flex space-x-4">
            <VideoCard 
                description="Surge provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects."
                title="PRODUCT ENGINEERING"
                heading="Launch your tech-product, hire your 1st or 100th developer."
                video="https://fast.wistia.net/embed/iframe/c8carq4png?seo=false&videoFoam=true"
                capabilities={capabilities1}
                titleColor="text-[#b04aff]"
                buttonColor="bg-gradient-to-r from-[#9b3ce5d1] to-[#6473f7e3] hover:from-[#6c2c99] hover:to-[#5763AD]"
            />
            <VideoCard 
                capabilities={capabilities2}
                description="Surge provides consulting and qualified marketing professionals who have managed millions in ad spends with solid performance benchmarks."
                title="GROWTH MARKETING"
                heading="Go to market, find your customers, and supercharge marketing."
                video="https://fast.wistia.net/embed/iframe/9auql8mhky?seo=false&videoFoam=true"
                titleColor="text-[#40d8ff]"
                buttonColor="bg-gradient-to-r from-[#40d8ff] to-[#7d8ef7] hover:from-[#268199] hover:to-[#33accc]"
            />
        </div>

    </div>
  )
}

export default SectionOne