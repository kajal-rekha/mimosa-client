import { beautyPackageType } from '@/types/beautyPackage';
import Image from 'next/image';
import { useState } from 'react';
import BeautyPackageItemContent from './BeautyPackageItemContent';

import BeautyPackageItemImage from './BeautyPackageItemImage';

interface beautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<beautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp grid-cols container mt-20 grid gap-20 md:grid-cols-2'>
      <div>
        <BeautyPackageItemImage images={item.images} />
      </div>

      <div>
        <BeautyPackageItemContent beautyPackage={item} />
      </div>
    </section>
  );
};

export default BeautyPackageItem;
