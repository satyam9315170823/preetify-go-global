"use client";
import React from "react";
import { HeroParallax } from "../components/ui/HeroParallax";
import { motion } from "framer-motion";
import media from "../public/images/media.jpg"
export const products = [
  {
    title: "Brand Strategy: Craft a cohesive identity resonating with target audiences.",
    link: "#",
    thumbnail:
      "/images/brandstrategy.webp",
  },
  {
    title:"Crisis Management: Handle negative publicity to protect brand reputation effectively.",
    link: "#",
    thumbnail:"/images/cr.jpeg",
  },
  {
    title: "Media Relations: Build connections with journalists for increased media exposure.",
    link: "#",
    thumbnail:"/images/media.jpg",
  },

  {
    title: "Social Media Management: Manage online presence to engage audiences and boost awareness.",
    link: "#",
    thumbnail:
      "/images/social.jpeg",
  },
  {
    title: "Content Creation: Develop compelling narratives that align with brand goals.",
    link: "#",
    thumbnail:
      "/images/cont.jpg",
  },
  {
    title: "Influencer Partnerships: Collaborate with influencers to amplify brand messages and reach.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Event Planning: Organize impactful events to showcase brand and engage stakeholders.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Reputation Management: Monitor and improve the public perception of the brand.",
    link: "#",
    thumbnail:
      "/images/repo.webp",
  },
  {
    title: "Digital PR: Use online platforms to enhance visibility and brand credibility.",
    link: "#",
    thumbnail:
      "/images/online.jpeg",
  },
  {
    title: "SEO and Content Marketing: Optimize content for better search visibility and strategic keywords.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Market Research: Analyze audience insights to refine PR strategies effectively.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Corporate Communications: Ensure consistent messaging across all communications channels.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Brand Storytelling: Craft memorable stories to emotionally connect with audiences.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Thought Leadership: Position clients as industry experts through authoritative content.",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "Analytics and Reporting: Measure PR effectiveness and optimize strategies based on data",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export function HeroParallaxDemo() {
  return(
<div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
     BLOG

      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      Know More About Preetify Go Gloabal
        </p>
        </div>


        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >

<HeroParallax products={products} />
          </motion.div>




        </div>
  ) 
}
