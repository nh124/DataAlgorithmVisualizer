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
      className="flex h-[100px] items-center gap-3 px-4 text-white w-fit"
    >
      <div className="flex flex-row gap-3">
        <input
          className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outlin bg-[#52796f]"
          id="Node"
          type="number"
          placeholder="Ex. 4"
          value={inputNode}
          onChange={onChange}
          required
          max="10"
        />
        <input
          type="submit"
          className="hover:cursor-pointer w-full h-auto bg-[#52796f] rounded-sm py-2 shadow-lg hover:scale-105 ease-in-out duration-300"
        />
      </div>
    </form>
  );
};

export default FormButton;
