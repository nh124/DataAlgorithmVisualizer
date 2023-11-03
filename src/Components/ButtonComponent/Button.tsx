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
    <div className="flex h-[80px] items-center gap-3 text-white w-fit justify-center">
      <button
        className="hover:cursor-pointer h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300 px-3"
        onClick={action}
      >
        {icon}
      </button>
    </div>
  );
};

export default Button;
