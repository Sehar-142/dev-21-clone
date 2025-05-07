"use client";

import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/motion';

export function Hero() {
  return (
  
    <section className="pb-24 md:pb-32 flex flex-col items-center mt-12">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto"
      >
        <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
  Discover, share &amp; remix the
  <span className="block">best UI components</span>
</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Built by design engineers, loved by vibe coders.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      
<Button
  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium px-5 py-3 text-base transition-all group"
>
  Browse components
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</Button>

<Button

  className="text-black bg-transparent  rounded-md font-medium px-5 py-3 text-base transition-all"
>
  Integrate in IDE AI Agent
  <ExternalLink className="ml-2 h-5 w-5" />
</Button>





        </div>
      </motion.div>
    </section>
  );
}