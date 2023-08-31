class ViewXtendAPI {
    constructor () {
        
    }

    get_player() {
        /**
         * Get's video player element
         */

        const found_element = document.querySelector("#movie_player > div.html5-video-container > video");
        if (found_element) {
            return found_element;
        }
        return null;
    }

    get_logo() {
        /**
         * Get's youtube logo
         */

        const found_element = document.querySelector("#logo-icon > yt-icon-shape > icon-shape > div > svg");
        if (found_element) {
            return found_element;
        }
        return null;
    }

    get_videos() {
        return document.getElementsByTagName("ytd-rich-grid-media");
    }

    get_fake_videos() {
        return document.getElementsByTagName("ytd-in-feed-ad-layout-renderer");
    }

    set_title(title) {
        document.title = title
    }


}

export default ViewXtendAPI;