import { Button } from "@mui/material";

const CustomButton = ({
  type,
  title,
  color,
  hoverColor,
  icon,
  handleClick,
}) => {
  return (
    <Button
    //   disabled={disabled}
      sx={{
        color,
        fontSize: 16,
        fontWeight: 600,
        textTransform: "capitalize",
        "&:hover": {
          color: hoverColor
        },
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
