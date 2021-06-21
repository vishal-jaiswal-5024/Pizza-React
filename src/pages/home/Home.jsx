import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import PizzaGrid from "../../components/pizzaGrid/PizzaGrid";
import "./home.css"
export default function Home(){
    return(
        <>
           <Topbar/>
            <Feed/>
            <PizzaGrid/>
            


        </>
    )
}