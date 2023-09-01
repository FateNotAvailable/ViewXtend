import ViewXtendAPI from './api/ViewXtendAPI';
import ADBlock from './utils/ADBlocker';
import Artworks from './utils/Artworks';
//import EasterEggs from './utils/EasterEggs';
import Features from './utils/Features';

const home_route = () => {
    let API = new ViewXtendAPI();
    let title = API.get_title()
    API.set_title(title.replace("YouTube", "YouTube Premium"))
}

const router = () => {
    if (window.location.pathname == '/') {
        home_route()
    }
    else if (window.location.pathname.includes("/watch")) {
        //let EE = new EasterEggs();
        let ADB = new ADBlock();
        let FT = new Features();
        
        //EE.player();
        FT.drag_speed();
        setInterval(()=>{
            ADB.block_player_ads()
        }, 1000)

    }
}


const main = () => {
    let API = new ViewXtendAPI();
    let ART = new Artworks();
    let ADB = new ADBlock();

    setInterval(()=>{
        ADB.block_general_ads()
    }, 1000)

    API.get_logo().parentNode.innerHTML = ART.get_premium_logo();
    router();
}
main()

window.addEventListener("load", main)