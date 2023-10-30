import { beautyPackageType } from '@/types/beautyPackage';

interface beautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<beautyPackageItemProps> = ({ item }) => {
  return <section className='sp container'>{item.title}</section>;
};

export default BeautyPackageItem;
