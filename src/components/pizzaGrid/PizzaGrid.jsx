import "./pizzaGrid.css"
import {Users} from "../../dummyData";
import Vegbar from "../../components/vegbar/Vegbar";


export default function PizzaGrid(){
    return(
        
 <div class="grid-container">
  
  {Users.map((u) => (
                       <Vegbar key={u.id} user={u} />
                     ))}
                     </div>





    )
}
