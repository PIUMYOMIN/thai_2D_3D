const ModernSectionCard = () => {
  const cardColor = { background: "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)" };
  return (
    <>
      <div className="rounded-8xs overflow-hidden shrink-0 flex flex-col items-center justify-between box-border text-white shadow-sm shadow-slate-400">
        <div className="w-full relative overflow-hidden shrink-0 flex items-center justify-between text-left text-11xl" style={cardColor}>
          <div className="relative flex items-center shrink-0 p-3">
            Modern
          </div>
          <div className="relative text-right flex items-center shrink-0 p-3">
            Internet
          </div>
        </div>
        <div className="w-full box-border overflow-hidden flex flex-row items-center justify-between border-b-[1px] border-solid border-black p-3" style={cardColor}>
          <h2 className="relative flex items-center justify-center shrink-0">
            68
          </h2>
          <div className="relative text-10xl flex items-center justify-center w-[198px] shrink-0">
            2:00 PM
          </div>
          <h2 className="relative flex items-center justify-center shrink-0">
            56
          </h2>
        </div>
        <div className="w-full relative overflow-hidden flex flex-row items-center justify-between" style={cardColor}>
          <h2 className="relative flex items-center justify-center shrink-0 p-3">
            20
          </h2>
          <div className="relative text-10xl flex items-center justify-center shrink-0">
            9:45 AM
          </div>
          <h2 className="relative flex items-center justify-center shrink-0 p-3">
            14
          </h2>
        </div>
      </div>
    </>
  );
};

export default ModernSectionCard;
