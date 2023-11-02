import Overlay from '@/components/ui/Overlay';
import Image from 'next/image';

const SignInPicture = () => {
  return (
    <div className='relative h-full w-full overflow-hidden '>
      <Image
        src='https://images.pexels.com/photos/3218801/pexels-photo-3218801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        alt='sign in picture'
        width={720}
        height={1280}
        priority
        className='h-full w-full object-cover'
      />

      <Overlay />
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white'>
        <h3>“Everything has beauty, but not everyone sees it.” — Confucius</h3>
      </div>
    </div>
  );
};

export default SignInPicture;
