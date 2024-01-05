import { beautyPackageType } from '@/types/beautyPackage';
import Image from 'next/image';
import { useState } from 'react';
import BeautyPAcckageItemContent from './BeautyPAcckageItemContent';
import BeautyPackageItemImage from './BeautyPackageItemImage';

interface beautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<beautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp grid-cols container grid gap-20 md:grid-cols-2 mt-20'>
      <div>
        <BeautyPackageItemImage images={item.images}/>
      </div>

      <div>
        <BeautyPAcckageItemContent item={item} />
      </div>
    </section>
  );
};

export default BeautyPackageItem;
