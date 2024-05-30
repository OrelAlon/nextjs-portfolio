'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import orel from './../components/img/orel.png'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}}animate={{opacity:1,transition:{delay:2,duration:0,ease:'easeIn'} }}>
      <motion.div initial={{opacity:0}}animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeInOut'} }}>
       
       
        <div className=" w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image 
            src='/../public/next.svg' 
            priority 
            quality={100} 
            fill 
            alt='f image' 
            className="object-contain"
          />
          photo
          <img src={orel} alt=" image" />
        </div>
      </motion.div>
      </motion.div>
                <img src={orel} alt=" image" />

    </div>
  );
};

export default Photo;