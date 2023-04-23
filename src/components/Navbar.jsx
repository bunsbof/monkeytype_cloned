import { logo, BiMenuAltRight, BsFillBellFill, FiUser } from "../assets";
import { useSelector } from "react-redux";

import CustomButton from "./commons/CustomButton";

const Navbar = () => {
  const themeValue = useSelector((state) => state.theme.themeValue);
  const textColor = useSelector((state) => state.theme.textColor);
  const mainBtnColor = useSelector((state) => state.theme.mainBtnColor);

  return (
    <nav style={{ backgroundColor: themeValue }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:5173/" className="flex items-center">
          <img
            src={logo}
            className="h-8 mr-3"
            alt="Majesty Logo"
            style={{ height: "70px" }}
          />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            style={{ textColor: textColor }}
          >
            MajestyType
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only" style={{ textColor: textColor }}>
            Open main menu
          </span>
          <BiMenuAltRight style={{ fontSize: "32px" }} />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <CustomButton
                type="button"
                title=""
                icon={<BsFillBellFill />}
                color={mainBtnColor}
                hoverColor={textColor}
                handleClick={() => {}}
              />
            </li>
            <li>
              <CustomButton
                type="button"
                title=""
                icon={<FiUser />}
                color={mainBtnColor}
                hoverColor={textColor}
                handleClick={() => {}}
              />
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <CustomButton
                type="button"
                title=""
                icon={<BsFillBellFill />}
                color={mainBtnColor}
                hoverColor={textColor}
                handleClick={() => {}}
              />
            </li>
            <li>
              <CustomButton
                type="button"
                title=""
                icon={<FiUser />}
                color={mainBtnColor}
                hoverColor={textColor}
                handleClick={() => {}}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
