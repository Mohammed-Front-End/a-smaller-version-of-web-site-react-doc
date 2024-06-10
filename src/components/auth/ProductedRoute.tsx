import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

  //! codition - redirectPath - children
interface IProps{
  isAllowed: boolean,
  redirectPath: string,
  children:ReactNode,
  data?: unknown,
}
function ProductedRoute ({isAllowed,redirectPath,children,data}: IProps) {
  // **----- TODO replace & State
  // ** replace => will replace the current entry in this history stach
  
  if (!isAllowed)  return  <Navigate to={redirectPath} replace state={data}/>
  return  children;
}

export default ProductedRoute