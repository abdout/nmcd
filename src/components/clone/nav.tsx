interface NavLinkProps {
    label: string;
    isActive: boolean;
  }
  
  export const NavLink = ({ label, isActive }: NavLinkProps) => (
    <div className={`w-[255px] h-[60px] pl-2.5 pr-${isActive ? '[143px]' : '32'} py-[15px] justify-start items-center gap-5 inline-flex`}>
      <div className="w-[30px] h-[30px] justify-center items-center inline-flex" />
      <div className={`text-[19px] font-bold font-['SF Compact Display'] ${isActive ? 'text-[#1da1f2]' : 'text-[#0f1419]'}`}>{label}</div>
    </div>
  );
  