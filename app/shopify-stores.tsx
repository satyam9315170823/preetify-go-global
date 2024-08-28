"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image.jpg",
    quote: "Holistic approach, integrating strategic media management with creative, results-driven campaigns to build lasting brand equity..",
   
  },
  {
    image: "/images/shop.jpg",
    quote:
      "Proven expertise in crafting tailored PR strategies that amplify brand visibility and drive measurable success.",
    
  },

  {
    image: "/images/s2.jpg",
    quote:
      "Client-centric, delivering personalized solutions that enhance your brand's reputation and reach by understanding your unique goals.",
  
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Why To Choose Us <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
        With a proven track record of success, we are committed to helping our clients achieve their goals
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  {store.quote}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
