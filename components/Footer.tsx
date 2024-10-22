import Link from 'next/link';
import { Facebook, Heart, Instagram, Scissors, Star, Twitter } from 'lucide-react';

export default function Footer() {
  return (
   <footer className="bg-red/10  text-black/90 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-red/80 flex items-center">
         Mimosa
              <Scissors className="ml-2 h-6 w-6" />
            </h2>
            <p className="text-sm italic">Where Beauty Blossoms</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Facebook className="h-6 w-6 text-red/80" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="h-6 w-6 text-red/80" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Twitter className="h-6 w-6 text-red/80" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className=" rounded-lg p-6 ">
            <h3 className="text-lg font-semibold text-red/80 mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5" /> Our Services
            </h3>
            <ul className=" flex flex-col gap-2">
              {['Hair Styling', 'Makeup', 'Nail Care', 'Skin Treatments', 'Massages'].map((service) => (
                <li key={service} className="flex  items-center gap-1 text-lg">
                  <Star className="h-4 w-4 text-red mr-2" />
                  <Link href={`/services#${service.toLowerCase().replace(' ', '-')}`} className="hover:text-red/80 eq">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className=" rounded-lg p-6 ">
            <h3 className=" font-semibold text-red/80 mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {['Home','Beauty packages', 'Specialists', 'About Us', 'Contact'].map((item) => (
                <li key={item} className='text-lg'>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red/80 eq">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className=" rounded-lg p-6 flex flex-col gap-2">
            <h3 className=" font-semibold text-red/80 text-lg">Get in Touch</h3>
            <p>123 Beauty Lane, Glamour City, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@bettybeauty.com</p>
<div className='mt-3'>
              <Link href="/contact" className="bg-red/90 text-white px-7 py-3 rounded-full hover:bg-red/85 eq text-center  ">
              Book Appointment
            </Link>
</div>
          </div>
        </div>
        
       
      </div>
       <div className="text-center p-10 border-t border-red/50">
          <p>&copy; {new Date().getFullYear()} <Link href="/" className='border-b border-red/80 hover:text-red/80 eq'>mimosa</Link> Center of Beauty. All rights reserved.</p>
          
        </div>
    </footer>
  );
}
