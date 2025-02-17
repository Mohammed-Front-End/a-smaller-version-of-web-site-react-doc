import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function LoginPage () {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2 className="text-center mb-3">Login To Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage