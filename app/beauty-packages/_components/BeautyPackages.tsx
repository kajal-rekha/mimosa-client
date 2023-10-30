'use client';

import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import BeautyPackageCard from './BeautyPackageCard';

const BeautyPackages = () => {
  const {
    data: beautyPackages,
    isLoading,
    error,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='sp container'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}
      {beautyPackages && (
        <div className='grid-cols grid gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {beautyPackages.map((item) => (
            <BeautyPackageCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BeautyPackages;
