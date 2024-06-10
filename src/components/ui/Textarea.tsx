import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
function Textarea({ ...rest }: IProps) {
  return (
    <textarea
      className="border-[1px] border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none
      focus:ring-1 focus-ring-[#21657c] "
      rows={6}
      {...rest}
    ></textarea>
  );
}

export default Textarea;