import { Link, useLocation } from "react-router-dom";

interface IProps {
  statusCode?: number,
  title?: string,
}

function ErrorHandler ({statusCode=500,title="Server Error "}:IProps) {
  const {pathname} = useLocation()
  return (
    <div className="flex items-center justify-center p-5 w-full">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-red-100 p-4">
          <div className="rounded-full stroke-red-600 bg-red-200 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><circle cx="11" cy="8" r="1" fill="currentColor"/><circle cx="11" cy="16" r="1" fill="currentColor"/><circle cx="11" cy="24" r="1" fill="currentColor"/>
              <path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 
              2h10v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"/>
              <path fill="currentColor" d="M29 24.415L27.586 23L25 25.587L22.414 
              23L21 24.415L23.586 27L21 29.586L22.414 31L25 28.414L27.586 31L29 
              29.586L26.414 27z" strokeWidth={'2'} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h2 className="mt-5 text-[36px] font-bold lg:text-[50px]">
          {statusCode} - {title}
        </h2>
        <p className="mt-5 lg:text-lg">
          Oops something went worng. try to refresh this page or <br/> feel free to contact us if the problem presists
        </p>
        <div className="flex items-center space-x-4 justify-center my-10">
        <Link to={"/"} reloadDocument 
          className="inline-block bg-[#149eca] p-2 text-white hover:!text-white rounded-md">
          Home
        </Link>

        <Link to={pathname} reloadDocument 
          className="inline-block bg-[#149eca] p-2 text-white hover:!text-white rounded-md">
          Refresh
        </Link>
        </div>

      </div>
    </div>
  )
}

export default ErrorHandler


// Status code 

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);