"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Preetify Go Global has been instrumental in amplifying our brand’s voice in the market. Their innovative strategies and deep understanding of social media dynamics have significantly boosted our brand’s visibility. We couldn’t have asked for a better partner to help us navigate the digital landscape.",
    name: "Ananya Sharma",
    title: "CEO, GreenLeaf Organics",
  },
  {
    quote:
      "The team at Preetify Go Global is a powerhouse of creativity and strategic insight. They turned our brand into a household name with their meticulous planning and execution. Their dedication to our success is unmatched, and the results speak for themselves.",
    name: "Rahul Verma",
    title: "Founder, TechSavvy Solutions",
  },
  {
    quote:
      "Working with Preetify Go Global was a turning point for our company. They took the time to understand our brand and delivered tailored strategies that drove impressive growth in our market presence. Their expertise in brand management is unparalleled.",
    name: "Priya Mehta",
    title: "Marketing Head, UrbanStyle Apparel",
  },
  {
    quote:
      "Preetify Go Global exceeded our expectations with their comprehensive approach to brand building. Their team’s ability to craft compelling narratives and connect with our target audience was key to our brand’s success. We highly recommend their services to anyone looking to elevate their brand.",
    name: "Vikram Singh",
    title: "Director, PureBliss Skincare",
  },
  {
    quote:
      "From strategy to execution, Preetify Go Global delivered exceptional results. Their expertise in navigating the complex world of social media and branding helped us achieve our goals and expand our reach. They are true partners in every sense of the word.",
    name: "Ritu Kapoor",
    title: "Co-Founder, EcoNest Homes",
  },
];

