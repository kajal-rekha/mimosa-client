import Link from 'next/link';
import { Facebook, Heart, Instagram, Scissors, Star, Twitter } from 'lucide-react';

export default function Footer() {
  return (
   <footer className="bg-red/10  text-black/90 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-pink-600 flex items-center">
         Mimosa
              <Scissors className="ml-2 h-6 w-6" />
            </h2>
            <p className="text-sm italic">Where Beauty Blossoms</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Facebook className="h-6 w-6 text-pink-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="h-6 w-6 text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Twitter className="h-6 w-6 text-pink-500" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className=" rounded-lg p-6 ">
            <h3 className="text-lg font-semibold text-pink-600 mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5" /> Our Services
            </h3>
            <ul className="">
              {['Hair Styling', 'Makeup', 'Nail Care', 'Skin Treatments', 'Massages'].map((service) => (
                <li key={service} className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <Link href={`/services#${service.toLowerCase().replace(' ', '-')}`} className="hover:text-pink-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className=" rounded-lg p-6 ">
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-pink-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className=" rounded-lg p-6 ">
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Get in Touch</h3>
            <p className="mb-2">123 Beauty Lane, Glamour City, ST 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p className="mb-4">Email: info@bettybeauty.com</p>
            <Link href="/contact" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors inline-block">
              Book Appointment
            </Link>
          </div>
        </div>
        
       
      </div>
       <div className="text-center bg-white/20 p-10">
          <p className="text-sm">&copy; {new Date().getFullYear()} mimosa Center of Beauty. All rights reserved.</p>
          
        </div>
    </footer>
  );
}
