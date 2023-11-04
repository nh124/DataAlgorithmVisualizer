const FormButton = ({
  handleSubmit,
  inputNode,
  onChange,
}: {
  handleSubmit: (event: React.FormEvent) => void;
  inputNode: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex h-fit items-center gap-3 px-2 text-white max-sm:scale-75 max-md:scale-100 max-md:px-1 max-sm:px-0"
    >
      <div className="flex flex-row gap-3">
        <input
          className="shadow appearance-none border border-none rounded w-[80px] py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outlin bg-[#52796f] h-[40px]"
          id="Node"
          type="number"
          placeholder="Add"
          value={inputNode}
          onChange={onChange}
          required
          max="10"
        />
        {/* <input
          type="submit"
          className="hover:cursor-pointer w-fit px-2 h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300 h-[40px]"
        /> */}
      </div>
    </form>
  );
};

export default FormButton;
