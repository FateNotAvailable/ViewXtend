import ViewXtendAPI from './api/ViewXtendAPI';
import ADBlock from './utils/ADBlocker';
import Artworks from './utils/Artworks';

const main = () => {
    let API = new ViewXtendAPI();
    let ART = new Artworks();
    let ADB = new ADBlock();

    setInterval(()=>{
        ADB.block_general_ads()
    }, 1000)

    API.get_logo().innerHTML = ART.get_premium_logo();
}
main()

window.addEventListener("load", main)