import Link from 'next/link';
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Orel<span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className='hidden xl:flex items-center gap-8'>
          {' '}
          <Nav />
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/17wGx6-20Xu02v4S87wu4nHbAHufuNVzd/view?usp=sharing'
          >
            <Button>CV</Button>
          </Link>
        </div>

        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
