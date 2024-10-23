'use client';

import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import { bookingType } from '@/types/booking';

const BookingData: React.FC = () => {
  const { data: booking, isLoading, error } = useFetch('/api/bookings');

  return (
    <section className='sp container'>
      <SectionTitle title='Bookings' />
      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {!isLoading && !error && booking?.length === 0 && (
        <p>No bookings available!</p>
      )}

      {booking &&
        booking.map((item: bookingType) => (
          <div key={item._id}>
            <p>{item.beautyPackage.title}</p>
          </div>
        ))}
    </section>
  );
};

export default BookingData;
