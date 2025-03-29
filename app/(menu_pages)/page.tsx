import Landing_page from "@/components/home/Landing_page";
import Vision_page from "@/components/home/Vision_page";
import Statebycrop from "@/components/home/Statebycrope"
import Agriculturalconditions from "@/components/home/Agriculturalconditions"
import Workingmember from "@/components/home/Workingmember"
 
export default function Home() {
  return (
   <div>
   <Landing_page/>
   <Vision_page/>
   <Statebycrop/>
   <Agriculturalconditions/>
   <Workingmember/>
   </div>
  );
}
