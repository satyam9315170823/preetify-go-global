import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import strategy from "../public/images/strategy.webp"
import content from "../public/images/content.jpg"
import research from "../public/images/research.png"

const GraphicDesign: React.FC = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          What We Do <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
          Our approach is holistic, focusing not just on immediate gains but also on building lasting brand equity and goodwill.
        </p>

        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample
              title="Strategic Branding"
              description="Craft a strong brand identity that resonates with your target audience."
              imageSrc={strategy.src}
             
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample
              title="Creative Content"
              description="Engage your audience with compelling and visually stunning content."
              imageSrc={content.src}
            
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCardExample
              title="Global Reach"
              description="Expand your brand’s presence across the globe with targeted strategies."
              imageSrc={research.src}
             
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
