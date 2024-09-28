import FollowItem from "./follow-item";


const FollowSection = () => {
  return (
    <div className="bg-[#f7f9fa] rounded-2xl flex-col justify-start items-start flex">
      <div className="w-[350px] h-[46px] relative">
        <div className="left-[16px] top-[11px] absolute text-[#0f1419] text-xl font-bold font-['SF Compact Display']">
          Who to follow
        </div>
        <div className="w-[350px] h-px left-0 top-[45px] absolute bg-[#ebeef0]" />
      </div>
      <FollowItem name="Bessie Cooper" username="@alessandroveronezi" imageUrl="https://via.placeholder.com/48x48" />
      <FollowItem name="Jenny Wilson" username="@gabrielcantarin" imageUrl="https://via.placeholder.com/48x48" />
      <div className="self-stretch p-[15px] justify-start items-start inline-flex">
        <div className="text-[#1da1f2] text-[15px] font-medium font-['SF Compact Display']">Show more</div>
      </div>
    </div>
  );
};

export default FollowSection;
