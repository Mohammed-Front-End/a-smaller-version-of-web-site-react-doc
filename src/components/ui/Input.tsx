import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{ }
function Input ({...rest}:IProps) {
  return (
    <input 
    className="border-[1px] border-gray-300 shadow-md focus:border-[#149eca] 
    focus:outline-none focus:ring-1 focus:ring-[#24657b]" {...rest}/>
  )
}

export default Input