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

  return <div className="w-full sticky bottom-0 z-50 shadow-lg mt-5" style={cardColor}>
      <div className="max-w-[744px] mx-auto px-2 sm:px-4 py-3 flex justify-between items-center">
        <Link to="/thai_2D_3D" className="flex flex-col items-center px-2 sm:px-3">
          <FaHome className="text-xl sm:text-2xl text-white mb-1" />
          <span className="text-[10px] sm:text-xs text-white">
            မူလစာမျက်နှာ
          </span>
        </Link>
        <Link to="#!" className="flex flex-col items-center px-2 sm:px-3">
          <FaShoppingBasket className="text-xl sm:text-2xl text-white mb-1" />
          <span className="text-[10px] sm:text-xs text-white">
            ပရိုမိုးရှင်း
          </span>
        </Link>
        <Link to="/2d-lottery" className="flex flex-col items-center px-2 sm:px-3">
          <FaPlayCircle className="text-xl sm:text-2xl text-white mb-1" />
          <span className="text-[10px] sm:text-xs text-white">ထိုးမည်</span>
        </Link>
        <Link to="#!" className="flex flex-col items-center px-2 sm:px-3">
          <FaGift className="text-xl sm:text-2xl text-white mb-1" />
          <span className="text-[10px] sm:text-xs text-white">ဘောနပ်စ်</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center px-2 sm:px-3">
          <FaRegUser className="text-xl sm:text-2xl text-white mb-1" />
          <span className="text-[10px] sm:text-xs text-white">ပရိုဖိုင်</span>
        </Link>
      </div>
    </div>;
};

export default Footer;