'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
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
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    des: 'orel-alon',
    url: 'https://www.linkedin.com/in/orel-alon/',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();
      alert('Email sent successfully: ' + data.message);
    } catch (error) {
      alert('Error sending email: ' + error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
              onSubmit={handleSubmit}
            >
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <div className='grid grid-cols-1 md:grid-cols gap-6'>
                <Input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type='text'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                className='h-[200px]'
                name='message'
                placeholder='Type your message here...'
                value={formData.message}
                onChange={handleChange}
              />
              <Button type='submit' size='md' className='max-w-40'>
                Send
              </Button>
            </form>
          </div> */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>
                      {item.url ? (
                        <a
                          href={item.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-accent hover:underline'
                        >
                          {item.des}
                        </a>
                      ) : (
                        item.des
                      )}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
