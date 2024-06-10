import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

function ContributePage () {
  const {state} = useLocation();
  return (
    <div>
        <h2 className="text-center mb-4">Email: {state.email}</h2>
        <h2 className="text-center mb-4">Issue: Bug Report</h2>
        <form className="space-y-3 max-w-sm mx-auto">
          <Textarea/>
          <Button>Submit new Issue</Button>
        </form>
    </div>
  )
}


export default ContributePage