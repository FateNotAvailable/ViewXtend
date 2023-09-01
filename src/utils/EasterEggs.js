import Artworks from "./Artworks";
import ViewXtendAPI from "../api/ViewXtendAPI";
//import {countries} from 'country-data-list';

class EasterEggs {
    constructor() {
        this.VX_API = new ViewXtendAPI();
        this.ART = new Artworks();
        console.log(countries.all);
    }

    player() {
        return
        // TODO: Add something that will read title and changes logo to specific country version
        for (let i = 0; i < countries.all.length; i++) {
            const country = countries.all[i];

            if (this.VX_API.get_video_title().innerText.toLowerCase().includes(country.name)) {
                this.VX_API.get_logo().parentNode.innerHTML = this.ART.get_premium_flag_logo(country.alpha2);
            }
        }
    }
}

export default EasterEggs;