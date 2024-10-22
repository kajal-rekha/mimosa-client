import SpecialistCard from '@/app/specialists/-components/SpecialistCard';
import Button, { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { RootState } from '@/redux/store';
import { beautyPackageType } from '@/types/beautyPackage';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface beautyPackageItemContentProps {
  beautyPackage: beautyPackageType;
}

const BeautyPackageItemContent: React.FC<beautyPackageItemContentProps> = ({
  beautyPackage,
}) => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const router = useRouter();

  const handleBooking = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/create/${beautyPackage._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        toast.success('Booking beauty package!');

        return res.data;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className='mt-8'>
      <h2 className='mb-5 text-blue'>{beautyPackage.title}</h2>
      <p className='mb-5'>{beautyPackage.description}</p>
      <div className='flex justify-between'>
        <p className='mb-5 font-bold'> Price: ${beautyPackage.price}</p>

        <Button
          className={cn(buttonVariants({ variant: 'secondary', size: 'full' }))}
          onClick={handleBooking}
        >
          Booking Now
        </Button>
      </div>
    </div>
  );
};

export default BeautyPackageItemContent;
