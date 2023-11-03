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
    <div className="flex h-fit items-center gap-3 text-white w-fit justify-center hover:scale-110 group relative max-md:scale-75">
      <button
        className="bg-[#2f3e46] group-hover:bg-[#253741] px-2 py-2 relative z-10 rounded-lg"
        onClick={action}
      >
        {!icon ? value : icon}
      </button>
      <div className="flex absolute bottom-0 overflow-hidden group-hover:translate-y-[1.3rem] ease-in-out duration-300 text-xs w-[100px] justify-center items-center opacity-0 group-hover:opacity-100">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Button;
