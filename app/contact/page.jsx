'use client';

import { Buttonutton } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    des: '052-6707895',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    des: 'orel.alon.dev@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'think',
    des: '052-6707895',
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      skills
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3>Let's work together</h3>
            </form>
          </div>
          <div className='flex-1 flex items-center xl-justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            info
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
