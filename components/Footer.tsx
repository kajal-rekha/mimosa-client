import Link from 'next/link';
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Scissors,
  Star,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-red/10 pt-10 text-black/90'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 flex flex-col items-center justify-between md:flex-row'>
          <div className='mb-6 md:mb-0'>
            <h2 className='flex items-center text-3xl font-bold text-blue'>
              Mimosa
              <Scissors className='ml-2 h-6 w-6' />
            </h2>
            <p className='text-sm italic'>Where Beauty Blossoms</p>
          </div>

          <div className='flex gap-5'>
            <Link
              href='https://facebook.com'
              target='_blank'
              className='rounded-full bg-white p-2 shadow-md transition-shadow hover:shadow-lg'
            >
              <Facebook className='h-6 w-6 text-blue' />
            </Link>

            <Link
              href='https://instagram.com'
              target='_blank'
              className='rounded-full bg-white p-2 shadow-md transition-shadow hover:shadow-lg'
            >
              <Instagram className='h-6 w-6 text-blue' />
            </Link>

            <Link
              href='https://twitter.com'
              target='_blank'
              className='rounded-full bg-white p-2 shadow-md transition-shadow hover:shadow-lg'
            >
              <Twitter className='h-6 w-6 text-blue' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              className='rounded-full bg-white p-2 shadow-md transition-shadow hover:shadow-lg'
            >
              <Linkedin className='h-6 w-6 text-blue' />
            </Link>
          </div>
        </div>

        <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className=' rounded-lg p-6 '>
            <h3 className='mb-4 flex items-center text-lg font-semibold text-blue'>
              <Heart className='mr-2 h-5 w-5' /> Our Services
            </h3>
            <ul className=' flex flex-col gap-2'>
              {[
                'Hair Styling',
                'Makeup',
                'Nail Care',
                'Skin Treatments',
                'Massages',
              ].map((service) => (
                <li key={service} className='flex  items-center gap-1 text-lg'>
                  <Star className='mr-2 h-4 w-4 text-blue' />
                  <Link
                    href={`/services#${service.toLowerCase().replace(' ', '-')}`}
                    className='eq hover:text-blue'
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=' rounded-lg p-6 '>
            <h3 className=' mb-4 font-semibold text-blue'>Quick Links</h3>
            <ul className='flex flex-col gap-2'>
              {[
                'Home',
                'Beauty packages',
                'Specialists',
                'About Us',
                'Contact',
              ].map((item) => (
                <li key={item} className='text-lg'>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className='eq hover:text-blue'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=' flex flex-col gap-3 rounded-lg p-6'>
            <h3 className=' text-lg font-semibold text-blue'>Get in Touch</h3>
            <p>123 Beauty Lane, Glamour City, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@mimosa.com</p>
            <div className='mt-3'>
              <Link
                href='/contact'
                className='eq rounded-full bg-blue px-7 py-3 text-center text-white hover:bg-blue/80  '
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-blue p-10 text-center'>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href='/'
            className='eq border-b border-blue hover:text-blue'
          >
            mimosa
          </Link>{' '}
          Center of Beauty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
