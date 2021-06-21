import "./feed.css"
export default function Topbar(){
    return(
        <div className="feedContainer">
            <img className="feedImg" src="/assets/header1.png" alt=""/>
            <div class="text-block">  
                    <h1>Domino's Online Ordering</h1>
                    <h3>Yummy Pizza Fast and Fresh</h3>
                    <button className="feedButton">ORDER ONLINE NOW</button>
                    <button className="feedButton">Coupons And Offers</button>                 
                </div>
                     
        </div>
        
    )
}