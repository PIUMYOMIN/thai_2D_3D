import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegUser,
  FaPlayCircle,
  FaGift,
  FaShoppingBasket
} from "react-icons/fa";
const Footer = () => {
  const cardColor = {
    background:
      "linear-gradient(0deg, rgba(59,27,164,1) 0%, rgba(9,121,15,1) 100%)"
  };

  return <div className="w-full rounded-t-2xl flex flex-row justify-between items-center mt-2 mx-auto border-t-gray-900" style={cardColor}>
      <Link to="/thai_2D_3D" className="flex flex-col items-center justify-between box-border no-underline px-3">
        <FaHome className="text-2xl text-white my-2" />
        <div className="relative flex items-center justify-center shrink-0 text-sm text-white">
          မူလစာမျက်နှာ
        </div>
      </Link>
      <Link to="#!" className="flex flex-col items-center justify-between box-border no-underline">
        <FaShoppingBasket className="text-2xl text-white my-2" />
        <div className="relative flex items-center justify-center shrink-0 text-sm text-white">
          ပရိုမို
        </div>
      </Link>
      <Link to="/2d-lottery" className="box-border overflow-hidden shrink-0 flex flex-col items-center justify-center no-underline">
        <FaPlayCircle className="text-2xl text-white my-2" />
        <div className="relative flex items-center justify-center shrink-0 text-sm text-white">
          ထိုးမည်
        </div>
      </Link>
      <Link to="#!" className="flex flex-col items-center justify-between box-border no-underline">
        <FaGift className="text-2xl text-white my-2" />
        <div className="relative flex items-center justify-center shrink-0 text-sm text-white">
          ဘောနပ်စ်
        </div>
      </Link>
      <Link to="/profile" className="flex flex-col items-center justify-between box-border no-underline px-3">
        <FaRegUser className="text-2xl text-white my-2" />
        <div className="relative flex items-center justify-center shrink-0 text-sm text-white">
          ပရိုဖိုင်
        </div>
      </Link>
    </div>;
};

export default Footer;