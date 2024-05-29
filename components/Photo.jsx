'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image 
            src='/me-b.png' 
            priority 
            quality={100} 
            fill 
            alt='Description of image' 
            className="object-contain"
          />
          photo
          <img src="/mee.jpeg" alt="Description of image" />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;