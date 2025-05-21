import Lottery2DNumbers from "../components/Lottery2DNumbers";

const Lottery2D = () => {
  const backgroundColor = {
    background:
      "linear-gradient(180deg, rgba(65,59,172,1) 0%, rgba(9,121,15,1) 100%, rgba(0,212,255,1) 100%)"
  };

  const topColor = {
    background:
      "linear-gradient(180deg, rgba(72,31,219,1) 0%, rgba(9,121,15,1) 100%);"
  };

  return (
    <div
      className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[4px]"
      style={backgroundColor}
    >
      <div
        className="relative w-full flex flex-col justify-center items-center shadow-md shadow-green-500 text-white"
        style={topColor}
      >
        <h2 className=" text-6xl">42</h2>
        <div>
          <span>15/03/2024 /</span>
          <span> 02:30:51</span>
        </div>
      </div>
      <Lottery2DNumbers />
    </div>
  );
};

export default Lottery2D;
