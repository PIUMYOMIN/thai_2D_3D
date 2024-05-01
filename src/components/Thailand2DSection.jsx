const Thailand2DSection = () => {
  const cardColor = { background: "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)" };
  return <div>
      <div className="flex justify-between text-white">
        <div className="rounded-8xs w-[48%] py-5 overflow-hidden shrink-0 flex flex-col items-center justify-center box-border shadow-sm shadow-slate-400" style={cardColor}>
          <div>12:00 PM</div>
          <div className="relative text-center flex items-center justify-center shrink-0 text-11xl font-bold">
            42
          </div>
        </div>
        <div className="rounded-8xs w-[48%] py-5 overflow-hidden shrink-0 flex flex-col items-center justify-center box-border shadow-sm shadow-slate-400" style={cardColor}>
          <div>3:00 PM</div>
          <div className="relative text-center flex items-center justify-center shrink-0 text-11xl font-bold">
            02
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-between my-2 rounded-8xs text-center font-inter text-white shadow-sm shadow-white">
        <div className="w-[50%] overflow-hidden shrink-0 flex flex-col items-center justify-between box-border text-xl py-5" style={cardColor}>
          <div className="relative flex items-center justify-between shrink-0">
            Thailand 2D
          </div>
          <div className="relative flex items-center justify-center shrink-0 font-bold">
            40
          </div>
        </div>
        <div className="w-[50%] box-border overflow-hidden shrink-0 flex flex-col items-center justify-between border-l-[1px] border-solid border-black text-xl py-5" style={cardColor}>
          <div className="flex justify-between items-start">
            <div className="relative">VALUE</div>
            <div className="relative ml-3 font-bold">220.21</div>
          </div>
          <div className="flex justify-between items-start">
            <div className="relative">TAIEX</div>
            <div className="relative ml-3 font-bold">1245.00</div>
          </div>
        </div>
      </div>
    </div>;
};

export default Thailand2DSection;
