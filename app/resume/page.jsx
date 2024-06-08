'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About Me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  info: [
    { fieldName: 'Name', fieldValue: 'Orel Alon' },
    { fieldName: 'Phone', fieldValue: '052-6707895' },
    { fieldName: 'Email', fieldValue: 'Orel.Alon.dev@gmail.com' },
  ],
};

// experience data
const experience = {
  icon: '/assets/rsume/badge.svg',
  title: 'My Experience',
  description:
    'Transforms design concepts into efficient code, ensuring top-notch user experience.',
  items: [
    {
      company: 'Rotem Consulting',
      position: 'Project Manager',
      duration: '2023 - 2024',
    },
    {
      company: 'Junex ',
      position: 'Full-Stack',
      duration: '2022 - 2023',
    },
    {
      company: 'AppleSeed - Intern',
      position: 'Front-End',
      duration: '2021',
    },
    {
      company: 'Shemen Industries Ltd',
      position: 'Economist',
      duration: '2019 - 2021',
    },
  ],
};

// education data
const education = {
  icon: '/assets/rsume/badge.svg',
  title: 'My Education',
  description: 'Continuously learning and evolving.',
  items: [
    {
      institution: 'Max Stern Yezreel',
      degree: 'BA',
      duration: 'Economics and Finance',
    },
    {
      institution: 'AppleSeeds Academy',
      degree: 'Full Stack Developer Bootcamp',
      duration: '740 hours program',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description: '',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'reactjs',
    },
    {
      icon: <FaNodeJs />,
      name: 'nodejs',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiNextdotjs />,
      name: 'nextjs',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind',
    },
    {
      icon: <SiMongodb />,
      name: 'Mongodb',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              {/* education */}
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>
                            {item.institution}
                          </span>
                          <h5 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h5>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              {/* skills */}
              <div className='flex flex-col gap-[30px] '>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[100px]'>
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className='w-fill h-[150px] w-[150px] bg-[#232329] 
                            rounded-xl flex justify-center items-center group'
                            >
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              {/* about me */}
              <div className='flex flex-col gap-[30px] '>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
