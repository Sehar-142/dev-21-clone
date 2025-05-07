"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from '@/components/motion';

type PlatformProps = {
  name: string;
  logo: string;
  className?: string;
  
  delay?: number;
};

const platforms = [
  {
    name: "Cursor",
    logo: "/logos/cursor-ai.svg",
    className: "col-span-1"
  },

  {
    name: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    className: "col-span-1"
  },

  {
    name: "Lovable",
    logo: "/logos/love.png",
    className: "col-span-1"
  },
  {
    name: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg",
    className: "col-span-1"
  },

 
  {
    name: "Replit",
    logo: "/logos/replit.svg",
    className: "col-span-1"
  },






  
];

export function OptimizedFor() {
  return (
        <section className="">


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-10"
      >
        <h2 className="text-xl font-semibold text-gray-400">Optimized for</h2>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center ml-70">
        {platforms.map((platform, index) => (
          <Platform 
            key={`${platform.name}-${index}`}
            name={platform.name}
            logo={platform.logo}
            className={platform.className}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function Platform({ name, logo, className, delay = 0 }: PlatformProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + delay }}
      className={`flex items-center justify-center ${className}`}
    >
      <div className="relative w-12 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 mx-auto">

        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
        />
           <p className="mt-1 ml-1 text-xl text-center text-gray-500 font-bold">{name}</p>
      </div>
    </motion.div>
  );
}