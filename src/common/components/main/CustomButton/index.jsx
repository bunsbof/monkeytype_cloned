const CustomButton = ({
  type,
  title,
  icon,
  classNames,
  handleClick,
  activeMode,
}) => {
  const isActive = title === activeMode;

  return (
    <div
      className={`${classNames}${isActive ? " active" : ""}`}
      sx={{}}
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
    >
      {icon}
      {title}
    </div>
  );
};

export default CustomButton;
