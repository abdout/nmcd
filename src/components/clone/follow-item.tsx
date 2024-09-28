interface FollowItemProps {
    name: string;
    username: string;
    imageUrl: string;
  }
  
  const FollowItem: React.FC<FollowItemProps> = ({ name, username, imageUrl }) => {
    return (
      <div className="w-[350px] h-[70px] pb-px justify-center items-center inline-flex">
        <div className="w-[350px] h-[69px] relative flex-col justify-start items-start flex">
          <div className="w-[49px] h-[49px] pr-px pt-px rounded-full justify-center items-center inline-flex">
            <img className="w-12 h-12" src={imageUrl} alt={name} />
          </div>
          <div className="text-[#0f1419] text-base font-bold font-['SF Compact Display']">{name}</div>
          <div className="w-20 h-[30px] px-[93px] py-[15px] rounded-full border border-[#1da1f2] justify-center items-center inline-flex">
            <div className="text-center text-[#1da1f2] text-[15px] font-bold font-['SF Compact Display'] leading-[19px]">
              Follow
            </div>
          </div>
          <div className="text-[#5b7083] text-base font-medium font-['SF Compact Display']">{username}</div>
          <div className="w-[350px] h-px bg-[#ebeef0]" />
        </div>
      </div>
    );
  };
  
  export default FollowItem;
  