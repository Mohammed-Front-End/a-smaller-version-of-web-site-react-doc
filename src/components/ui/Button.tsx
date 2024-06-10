import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string,
  width?: "w-full"| "w-fit"
}
function Button ({children,className,width='w-full',...rest}:IProps) {
  return (
    <button className={
      `${className} ${width} reounded-lg text-white px-3 duration-200 font-medium bg-[#149eca]`
    }{...rest}>
      
      {children}
    </button>
  )
}

export default Button;