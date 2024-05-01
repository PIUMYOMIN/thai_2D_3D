const Header = () => {
  return (
    <div className="bg-salmon w-[744.1px] overflow-hidden flex flex-row items-start justify-between py-5 px-[21px] box-border text-center text-31xl text-white font-inter">
      <img
        className="relative w-[46.9px] h-[41px]"
        alt=""
        src="/-icon-bars.svg"
      />
      <b className="relative flex items-center justify-center w-[286px] h-10 shrink-0">
        2D | 3D
      </b>
      <img
        className="relative w-[41.3px] h-[41.3px]"
        alt=""
        src="/-icon-sync.svg"
      />
    </div>
  );
};

export default Header;
