const Button = ({
  action,
  value,
  icon,
}: {
  action: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  icon: React.ReactElement;
}) => {
  return (
    <div
      className={`flex h-fit items-center gap-3 text-white w-fit justify-center hover:scale-110 group relative max-md:scale-75 max-md:inline ${
        value === "responsive" ? "hidden" : ""
      }`}
    >
      <button
        className="max-md:bg-[#253741] px-2 py-2 relative z-10 rounded-lg max-md:scale-100"
        onClick={action}
      >
        {!icon ? value : icon}
      </button>
      {value !== "responsive" && (
        <div
          className={`absolute max-md:left-0 bottom-0 overflow-hidden group-hover:translate-y-[1.3rem] ease-in-out duration-300 text-xs inline-block w-auto justify-start items-start opacity-0 group-hover:opacity-100 whitespace-nowrap`}
        >
          <span>{value}</span>
        </div>
      )}
    </div>
  );
};

export default Button;
