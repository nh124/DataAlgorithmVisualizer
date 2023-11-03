import { FaTrashCan } from "react-icons/fa6";
const TrashIcon = ({ size }: { size: number }) => {
  return (
    <div
      className={`flex flex-col group`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="w-full h-1/4 flex justify-start items-start overflow-hidden group-hover:rotate-12 origin-bottom-right duration-300">
        <FaTrashCan size={size} />
      </div>
      <div className="w-full h-3/4 flex justify-start items-end overflow-hidden">
        <FaTrashCan size={size} />
      </div>
      <div></div>
    </div>
  );
};

export default TrashIcon;
