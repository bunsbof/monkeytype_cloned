import { useSelector } from "react-redux";
import CustomButton from "./CustomButton";
import {
  FaClock,
  BiPencil,
  RiDoubleQuotesL,
  BsFillTriangleFill,
  FaAccessibleIcon,
  MdOutlineAutoFixHigh,
} from "../../assets";

const FunctionMenu = () => {
  const menuColor = useSelector((state) => state.theme.menuColor);
  const themeColor = useSelector((state) => state.theme.themeValue);
  const mainButton = useSelector((state) => state.theme.mainBtnColor);
  const textColor = useSelector((state) => state.theme.textColor);
  return (
    <div
      className="w-[54%] p-2 rounded-lg"
      style={{ backgroundColor: menuColor }}
    >
      <div
        style={{ backgroundColor: themeColor }}
        className="flex flex-row justify-between"
      >
        <div className="mr-1 flex flex-row">
          <CustomButton
            type="button"
            title="@ punctuation"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="# number"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
        </div>
        <div className="mr-1 flex flex-row">
          <CustomButton
            type="button"
            title="time"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<FaClock />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="words"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<BiPencil />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="quotes"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<RiDoubleQuotesL />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="zen"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<BsFillTriangleFill />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="custom"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<FaAccessibleIcon />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
        </div>
        <div className="mr-4 flex flex-row">
          <CustomButton
            type="button"
            title="10"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="25"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="50"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title="100"
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon=""
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
          <CustomButton
            type="button"
            title=""
            color={mainButton}
            hoverColor={textColor}
            fullWidth
            icon={<MdOutlineAutoFixHigh />}
            size={12}
            handleClick={() => {}}
            bg={menuColor}
          />
        </div>
      </div>
    </div>
  );
};

export default FunctionMenu;
