const Button = ({
  action,
  value,
}: {
  action: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}) => {
  return (
    <div className="flex h-[100px] items-center gap-3 px-4 text-white w-fit">
      <button
        className="hover:cursor-pointer w-full h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300 px-3"
        onClick={action}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
