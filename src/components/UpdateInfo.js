import React from 'react'

const UpdateInfo = () => {
  return <div className="overflow-hidden flex flex-row items-center justify-center py-[7px] px-4 gap-[23px]">
      <div className="rounded-8xs bg-lightcoral h-[162px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-6 px-[93px] box-border">
        <div>12:00 PM</div>
        <div className="relative text-39xl text-center flex items-center justify-center h-[58px] shrink-0">
          42
        </div>
      </div>
      <div className="rounded-8xs bg-lightcoral h-[162px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-6 px-[93px] box-border">
        <div>3:00 PM</div>
        <div className="relative text-39xl text-center flex items-center justify-center h-[58px] shrink-0">
          42
        </div>
      </div>
    </div>;
}

export default UpdateInfo;