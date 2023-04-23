import { Button } from "@mui/material";

const CustomButton = ({
  type,
  title,
  color,
  fullWidth,
  hoverColor,
  bg,
  icon,
  size,
  handleClick,
}) => {
  return (
    <Button
      //   disabled={disabled}
      sx={{
        // width: fullWidth ? "100%" : "fit-content",
        color,
        fontSize: size ?? 16,
        fontWeight: 600,
        textTransform: "capitalize",
        background: bg ?? "",
        borderRadius: "0%",
        "&:hover": {
          color: hoverColor,
          cursor: "pointer",
          background: bg ?? "",
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
