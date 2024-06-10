import { Link } from "react-router-dom";

function PageNotFound () {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-[#149eca] text-9xl">404</h1>
            <p className="mb-2 text-2x1 font-bold text-center md:text-3x1">
              <span className="text-red-500">Oops!</span>
              <span>Page not Found</span>
            </p>
            <p className="mb-8 text-center md:text-lg">The page you're looking for doesn't exist.</p>
            <Link to={'/'} className="inline-block bg-[#149eca] p-2 hover:!text-white rounded-md" reloadDocument>GO Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound