const Lottery3D = () => {
  const cardColor = {
    background:
      "radial-gradient(circle, rgba(43,142,38,0.7030461842940301) 0%, rgba(46,80,52,1) 100%)"
  };
  return <div className="flex flex-col justify-center h-[82vh]">
      <div className="flex flex-col justify-between items-center w-full overflow-hidden py-10">
        <form>
          <div className="w-full">
            <input type="text" name="" value="" className="w-96 py-3 px-3 my-1 rounded-md focus:outline-none" placeholder="အနည်းဆုံး (ကျပ် ၁၀၀)ဖိုးထိုးပါ" />
          </div>
          <div className="w-full">
            <input type="text" name="" value="" className="w-96 py-3 px-3 my-1 rounded-md focus:outline-none" placeholder="ထိုးမည့် (၃လုံး) ဂဏန်း ထည့်ပါ" />
          </div>
          <div className="text-center">
            <button type="submit" className="text-center px-5 py-1 rounded-lg bg-blue-500 text-white mt-5">
              ထိုးမည်
            </button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <button type="submit" className="text-center px-5 py-1 rounded-lg bg-red-600 text-white mt-5">
              မထိုးတော့ပါ
            </button>
            <button type="submit" className="text-center px-5 py-1 rounded-lg bg-green-500 text-white mt-5">
              ငွေချေမည်
            </button>
          </div>
        </form>
      </div>
    </div>;
};

export default Lottery3D;
