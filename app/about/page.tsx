
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';


const About = ()=> {
  return (
    <main className='container sp'>
     <SectionTitle title='About Us' />

      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='md:w-2/3 flex flex-col gap-4'>
          <h2 className='text-2xl font-bold text-blue'>
            Empowering Beauty, Enhancing Confidence: Your Journey Starts Here
          </h2>
          <p>
            {`At Mimosa Center of Beauty, we believe that true beauty comes from
            within, and our mission is to help you unveil your inner radiance.
            Founded in 2010 by our passionate owner Betty White, our salon has
            become a sanctuary for those seeking not just beauty treatments, but
            a transformative experience.`}
          </p>
          <p>
            {`Our team of highly skilled professionals is dedicated to providing
            personalized care and attention to each client. We stay at the
            forefront of beauty trends and techniques, ensuring that you receive
            the most innovative and effective treatments available.`}
          </p>
          <p>
           {` What sets us apart is our commitment to using only the finest,
            ethically sourced products that are kind to both you and the
            environment. We believe in beauty that doesn't compromise on health
            or sustainability. Our salon is a reflection of this ethos – a
            serene, eco-friendly space where you can relax, rejuvenate, and
            emerge feeling confident and beautiful.`}
          </p>
          <p>
           {` Whether you're preparing for a special occasion or simply treating
            yourself to some well-deserved pampering, Betty Center of Beauty is
            here to exceed your expectations. We're not just about outer beauty
            – we're about nurturing your self-esteem and helping you feel
            amazing in your own skin.`}
          </p>
          <p className='text-xl font-semibold text-red/60'>
           Sara Blakely | Founder & Master Stylist
          </p>
        </div>
        <div className='md:h-[40rem] md:w-1/2 group overflow-hidden'>
          <Image
            src='https://images.pexels.com/photos/16120497/pexels-photo-16120497/free-photo-of-beautician-making-facial-beauty-procedures-for-woman-in-salon.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Beauty Salon'
            width={600}
            height={800}
            priority
            className='h-full w-full rounded-lg shadow-lg group-hover:scale-125 eq'
          />
        </div>
      </div>
    </main>
  );
}

export default About;