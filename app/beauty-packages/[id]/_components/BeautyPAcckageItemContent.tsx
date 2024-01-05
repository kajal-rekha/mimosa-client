import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { beautyPackageType } from '@/types/beautyPackage';
import Link from 'next/link';

interface beautyPAcckageItemContentProps {
  item: beautyPackageType;
}

const BeautyPAcckageItemContent: React.FC<beautyPAcckageItemContentProps> = ({
  item,
}) => {
  return (
    <div className='mt-8'>
      <h2 className='text-blue mb-5'>{item.title}</h2>
      <p className='mb-5'>{item.description}</p>
      <p className='font-bold mb-5'> Price: ${item.price}</p>
      <Link
        href={`/beauty-packages/${item._id}`}
        className={cn(buttonVariants({ variant: 'secondary', size: 'full' }))}
      >
        Booking Now
      </Link>
    </div>
  );
};

export default BeautyPAcckageItemContent;
