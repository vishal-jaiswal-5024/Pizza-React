import "./topbar.css"
export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/dominos-logo-4178.png" alt="" className="topbarImg"></img>
            </div>
            <div className="topbarCenter">
                <span className="topbarLink">OUR MENU</span>
                <span className="topbarLink">STORE FINDER</span>
                <span className="topbarLink">GIFT CARD</span>
                <span className="topbarLink">CORPORATE ENQUIRY</span>   
                <span className="topbarLink">CONTACT</span>        
            </div>
            <div className="topbarRight">
                <div className="box">
                     <button className="topbarButton">Download App</button>
                </div>               
            </div>
            
        </div>
        
    )
}