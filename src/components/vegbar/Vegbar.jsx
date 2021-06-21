import "./vegbar.css"
// import {Users} from "../../dummyData";
import {useState} from "react";
export default function Vegbar({user}){
    const [pizzaAvailable,setPizzaAvailable] = useState(user.pizzaAvailable)
    const [isPizzaAvailabled,setIsPizzaAvailabled] = useState(false)
    const pizzaAvailableHandler = () => {
        setPizzaAvailable(isPizzaAvailabled ? pizzaAvailable+1 : pizzaAvailable-1)
        setIsPizzaAvailabled(!isPizzaAvailabled)
    }
    
    return(
        
        <div class="item">
              <div classname="vegTop">
                <span className="vegUsername">{user.pizzaName}</span>                 
             </div>
              <div classname="vegCenter">
                 <img className="vegImg" src={user.pizzaImg} onClick={pizzaAvailableHandler} alt=""></img>
                 <span className="vegAvailable">Pizza Availabe {pizzaAvailable}</span>
             </div>
             <div className="vegBottom">
                 
                 <span className="vegSize">{user.pizzaSize}<br/></span>
                 <span className="vegDesc">{user.pizzaDesc}<br/></span>
                 <button className="vegButton" onClick={pizzaAvailableHandler}>ORDER NOW</button>
             </div>
            

        </div>
            
        )
}
