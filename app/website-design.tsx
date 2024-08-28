'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import eventmanagment from "../public/images/eventmangment.jpg"
import reputation from "../public/images/reputaion.webp"
import corporate from "../public/images/corporate.jpg"
import market from "../public/images/market.jpg"
import community from "../public/images/community.jpg"

import seo from "../public/images/seo.png"
import culture from "../public/images/culture.webp"


import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          PR that connects, converts, <br /> and captivates
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We are a dynamic team of strategic management professionals specializing in navigating the ever-evolving social media landscape.
        </p>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: "Event Management",
    description: "Executing memorable events to elevate brand experiences.",
    header: (
      <Image
        src={eventmanagment} // Replace with your image path
        alt="Event Management"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Reputation Management",
    description: "Protecting and enhancing your brand's public image.",
    header: (
      <Image
        src={reputation} // Replace with your image path
        alt="Reputation Management"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Market Research",
    description: "Gathering insights to drive informed PR strategies.",
    header: (
      <Image
        src={market} // Replace with your image path
        alt="Market Research"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "SEO & Digital PR",
    // description:
    //   "Boosting online presence through strategic digital outreach.",
    header: (
      <Image
        src={seo} // Replace with your image path
        alt="SEO & Digital PR"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Corporate Communications",
    description: "Aligning internal and external messaging with brand values.",
    header: (
      <Image
        src={corporate} // Replace with your image path
        alt="Corporate Communications"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community Engagement",
    description: "Building strong connections with target audiences online.",
    header: (
      <Image
        src={community} // Replace with your image path
        alt="Community Engagement"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "Cultural Consulting",
    // description: "Navigating global markets with culturally sensitive strategies.",
    header: (
      <Image
        src={culture} // Replace with your image path
        alt="Cultural Consulting"
        width={500}
        height={300}
        className="rounded-xl"
      />
    ),
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default WebsiteDesign;
