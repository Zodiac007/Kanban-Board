import DropDown from "../icons/DropDown";

export default function OutlinedButton({ icon, name, dropdown }) {
  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4">
      {icon}
      <p className="text-sm text-[#767486]">{name}</p>
      {dropdown && <DropDown />}
    </div>
  );
}
