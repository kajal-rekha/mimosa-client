import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface beautyPackageItemImageProps {
  images: string[];
}

const BeautyPackageItemImage: React.FC<beautyPackageItemImageProps> = ({
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className='flex flex-col  gap-5'>
      <div className='h-[550px] w-full overflow-hidden'>
        <Image
          src={selectedImage}
          alt='beauty package image'
          width={780}
          height={780}
          priority
          className='eq h-full w-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center gap-5'>
        {images?.map((image, i) => (
          <div key={i}>
            <div className='h-20 w-20 overflow-hidden'>
              <Image
                src={image}
                alt='beauty package image'
                width={750}
                height={750}
                priority
                onClick={() => setSelectedImage(image)}
                className={cn(
                  'h-full w-full object-cover',
                  image === selectedImage ? 'border border-blue' : ''
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyPackageItemImage;
