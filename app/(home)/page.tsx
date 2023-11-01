import BeautyPackages from '../beauty-packages/_components/BeautyPackages';
import Specialists from '../specialists/-components/Specialists';
import Slider from './_components/Slider';

const page = () => {
  return (
    <main>
      <Slider />
      <BeautyPackages />
      <Specialists />
    </main>
  );
};

export default page;
