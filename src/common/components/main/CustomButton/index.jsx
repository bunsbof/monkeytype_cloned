import { Button } from "@mui/material";

const CustomButton = ({
  type,
  title,
  icon,
  classNames,
  handleClick,
}) => {
  return (
    <Button
    className={classNames}      //   disabled={disabled}
      sx={{
        
      }}
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
