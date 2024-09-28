import { Separator } from "../ui/separator";
import TrendingItem from "./trend-item";

const TrendingSection = () => {
  return (
    <div className="px-6 py-4 bg-[#f6f7f9] w-[250px] justify-end rounded-sm">
      <div className="h-[25px] text-[16px] font-semibold flex">
        الحاصل شنو
      </div>
      <Separator className='w-[250px] -mx-6 my-2'/>
      
      <TrendingItem
        category="الكوليرا"
        time="لليلة امس "
        title="أعلنت وزارة الصحة الاتحادية رسميا عن تفشي مرض الكوليرا"
        trendingWith="#الاطباء"
      />
      <Separator className='w-[250px] -mx-6 my-2'/>
      
      <TrendingItem
        category="السودان"
        time=" 4 س"
        title="الجيش السوداني يواصل تقدمه وسط العاصمة الخرطوم ويصل منتزه المقرن"
        trendingWith="#السودان"
        imageUrl="https://via.placeholder.com/71x69"
      />
      <Separator className='w-[250px] -mx-6 my-2'/>
      
      <div className="h-[25px] text-sm text-[#0077B5] font-medium py-2 px-2">
        المزيد
      </div>
    </div>
  );
};

export default TrendingSection;