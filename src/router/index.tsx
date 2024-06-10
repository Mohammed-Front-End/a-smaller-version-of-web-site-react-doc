import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "../pages";
import ContantPage from "../pages/ContantPage";
import AboutUs from "../pages/AboutUs";
import RootLayout from "../pages/Layout";
import QuickStartPage from "../pages/learn";
import LearnLayout from "./Layout";
import ThinkinginReact from "../pages/learn/ThinkinginReact";
import Installation from "../pages/learn/Installation";
import LoginPage from "../pages/Login";
import ContributePage from "../pages/ContributePage";
import ProductedRoute from "../components/auth/ProductedRoute";
import ErrorHandler from "../components/error/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true;
const userData:{email:string} | null=isLoggedIn ? {email:"email@gmail.com"}:null;
const router = createBrowserRouter(createRoutesFromElements(
  <>
    {/* Root Layout */}
    <Route  path="/" element={<RootLayout/>}errorElement={<ErrorHandler/>}>
      <Route index element={<HomePage/>}/>
      <Route path="contant" element={<ContantPage/> }/>
      <Route path="about" element={<AboutUs/>}/>
      <Route path="contribute" element={
        <ProductedRoute data={userData} isAllowed={isLoggedIn} redirectPath="/login">
          <ContributePage/> 
        </ProductedRoute>
      }/>

      <Route path="login" element={
          <ProductedRoute data={userData} isAllowed={!isLoggedIn} redirectPath="/contribute">
            <LoginPage/> 
          </ProductedRoute>
        }/>
    </Route>


    {/* Learn Layouts */}
    <Route path="/learn" element={<LearnLayout/>}>
      <Route index element={<QuickStartPage/>}/>
      <Route path="ThinkinginReact" element={<ThinkinginReact/>}/>
      <Route path="Installation" element={<Installation/>}/>
    </Route>

    {/* Page Not Found */}
    <Route path="*" element={<PageNotFound/>}>

    </Route>
  </>
)) 



export default router