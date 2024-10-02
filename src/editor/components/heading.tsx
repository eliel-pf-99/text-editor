import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5 } from "react-icons/lu"

export default function Heading() {
  const options = [
    {value: 1, icon: <LuHeading1 />},
    {value: 2, icon: <LuHeading2 />},
    {value: 3, icon: <LuHeading3 />},
    {value: 4, icon: <LuHeading4 />},
    {value: 5, icon: <LuHeading5 />}
  ];

  const renderOptions = options.map(option => {
  return <option value={option.value} className="flex items-center">
      <span>{option.value}</span>
    </option>
})

  return renderOptions
}
