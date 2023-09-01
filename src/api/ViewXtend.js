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
        return document.getElementsByTagName("ytd-ad-slot-renderer");
    }

    set_title(title) {
        document.title = title
    }

    get_title() {
        return document.title
    }

    get_video_title() {
        return document.querySelector("#title > h1 > yt-formatted-string")
    }

    get_video_download_button() {
        return document.querySelector("#action-button > yt-button-shape > button > div > span")
    }

    get_download_dialog() {
        return document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog")
    }

    get_download_options() {
        return document.querySelector("#premium-options").childNodes;
    }

    get_checked_download() {
        let pr = document.querySelectorAll('paper-ripple');
        for (let i = 0; i < pr.length; i++) {
            if (pr[i].getAttributeNames().includes("checked")) {
                return pr[i]
            }
        }
        return null;
    }

    create_plugins_button() {
        const f = document.createElement("ytd-compact-link-renderer");
        f.className = "style-scope yt-multi-page-menu-section-renderer"
        f.setAttribute("compact-link-style", "")
        f.setAttribute("hide-secondary-string", "")
        f.onclick = () => {
            window.location.href = '/plugins';
        }
        f.innerHTML = `
        <a id="endpoint" class="yt-simple-endpoint style-scope ytd-compact-link-renderer" tabindex="-1" href="/plugins">
            <tp-yt-paper-item role="link" class="style-scope ytd-compact-link-renderer" style-target="host" tabindex="0" aria-disabled="false">
                <div id="content-icon" class="style-scope ytd-compact-link-renderer">
                    <yt-img-shadow height="40" width="40" class="style-scope ytd-compact-link-renderer" disable-upgrade="" hidden="">
                    </yt-img-shadow>
                    <yt-icon class="style-scope ytd-compact-link-renderer">
                        <yt-icon-shape class="style-scope yt-icon vxt-plugins-icon">
                            <icon-shape class="yt-spec-icon-shape">
                                <div style="width: 100%; height: 100%; fill: currentcolor;">
                                <svg viewBox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1206 1.02129C12.109 1.0067 12.9592 1.54344 13.7096 2.29199L13.7104 2.29285L14.9707 3.5531C15.1118 3.34249 15.2753 3.14257 15.461 2.95679C17.0025 1.4153 19.5018 1.4153 21.0433 2.9568C22.5848 4.49829 22.5848 6.99754 21.0433 8.53904C20.8575 8.72481 20.6576 8.88828 20.447 9.02939L21.7072 10.2896L21.708 10.2905C22.4565 11.0408 22.9932 11.891 22.9787 12.8794C22.9642 13.8602 22.41 14.6797 21.7058 15.3789C21.7054 15.3793 21.7049 15.3798 21.7045 15.3802L20.4287 16.656C19.9519 17.1327 19.3279 17.0824 18.9512 16.9234C18.5783 16.7659 18.1803 16.4041 18.0897 15.8508C18.0262 15.4628 17.8456 15.0914 17.5452 14.791C16.7847 14.0306 15.5518 14.0306 14.7914 14.791C14.0309 15.5515 14.0309 16.7844 14.7914 17.5448C15.0917 17.8452 15.4631 18.0259 15.8511 18.0894C16.4044 18.18 16.7663 18.5779 16.9237 18.9509C17.0827 19.3276 17.1331 19.9516 16.6564 20.4283L15.377 21.7077C15.3766 21.7081 15.3762 21.7085 15.3757 21.709C14.6777 22.412 13.8591 22.965 12.8794 22.9795C11.8922 22.994 11.0429 22.4585 10.2938 21.7112L10.2929 21.7103L9.0295 20.4469C8.88841 20.6575 8.72496 20.8573 8.53922 21.0431C6.99773 22.5846 4.49847 22.5846 2.95698 21.0431C1.41549 19.5016 1.41549 17.0023 2.95698 15.4608C3.14272 15.2751 3.3426 15.1116 3.55317 14.9706L2.29294 13.7103L2.29208 13.7095C1.54353 12.9591 1.00681 12.1089 1.02141 11.1205C1.03589 10.1397 1.59009 9.32029 2.29424 8.62107C2.29469 8.62062 2.29515 8.62017 2.2956 8.61972L3.57165 7.34366C4.0484 6.86691 4.67249 6.9173 5.04916 7.07633C5.4221 7.23378 5.82003 7.59563 5.91062 8.14898C5.97414 8.53701 6.15479 8.90842 6.45519 9.20882C7.21563 9.96926 8.44856 9.96926 9.209 9.20882C9.96945 8.44837 9.96945 7.21545 9.20901 6.455C8.90861 6.1546 8.53719 5.97396 8.14917 5.91043C7.59581 5.81984 7.23397 5.42191 7.07652 5.04897C6.91749 4.6723 6.86709 4.04821 7.34384 3.57146L8.61978 2.29553C8.62025 2.29506 8.62071 2.29459 8.62118 2.29413C9.32039 1.58996 10.1398 1.03576 11.1206 1.02129ZM11.1501 3.02107C10.9456 3.02409 10.6003 3.13919 10.0393 3.70438L10.0367 3.70706L9.49334 4.25039C9.90279 4.44025 10.2863 4.70387 10.6232 5.04079C12.1647 6.58228 12.1647 9.08154 10.6232 10.623C9.08173 12.1645 6.58247 12.1645 5.04098 10.623C4.70406 10.2861 4.44044 9.9026 4.25058 9.49315L3.70715 10.0366L3.70449 10.0392C3.13933 10.6002 3.02421 10.9455 3.02119 11.1501C3.01827 11.3476 3.11651 11.7039 3.70773 12.2967C3.70782 12.2968 3.70792 12.2969 3.70801 12.297L6.03813 14.6271C6.30605 14.895 6.39954 15.2913 6.2796 15.6508C6.15966 16.0102 5.8469 16.2709 5.47177 16.3243C5.06894 16.3815 4.68196 16.5643 4.37119 16.8751C3.61075 17.6355 3.61075 18.8684 4.3712 19.6289C5.13164 20.3893 6.36456 20.3893 7.12501 19.6289C7.43577 19.3181 7.61854 18.9311 7.67581 18.5283C7.72914 18.1532 7.9899 17.8404 8.34931 17.7205C8.70872 17.6005 9.10505 17.694 9.37296 17.9619L11.7063 20.2953C11.7066 20.2955 11.7068 20.2958 11.7071 20.296C11.7071 20.2961 11.7071 20.2961 11.7072 20.2961C12.2975 20.8848 12.6529 20.9826 12.8499 20.9797C13.0539 20.9767 13.3986 20.8619 13.9575 20.2988L13.9601 20.2961L14.5069 19.7494C14.0975 19.5595 13.714 19.2959 13.3772 18.9591C11.8357 17.4176 11.8357 14.9183 13.3772 13.3768C14.9186 11.8353 17.4179 11.8353 18.9594 13.3768C19.2963 13.7137 19.5599 14.0972 19.7497 14.5065L20.2929 13.9633L20.2956 13.9607C20.8608 13.3998 20.9759 13.0544 20.9789 12.8499C20.9818 12.6524 20.8836 12.2961 20.2928 11.7036C20.2925 11.7034 20.2923 11.7031 20.2921 11.7029L17.9619 9.3728C17.694 9.10487 17.6005 8.70853 17.7205 8.34912C17.8404 7.9897 18.1532 7.72895 18.5284 7.67564C18.9312 7.61839 19.3183 7.43561 19.6291 7.12482C20.3895 6.36438 20.3895 5.13145 19.6291 4.37101C18.8686 3.61056 17.6357 3.61056 16.8752 4.37101C16.5644 4.6818 16.3817 5.06882 16.3244 5.4717C16.2711 5.84683 16.0104 6.15962 15.6509 6.27957C15.2915 6.39953 14.8952 6.30604 14.6273 6.03812L12.2971 3.70792C12.2969 3.70779 12.2968 3.70767 12.2967 3.70754C11.704 3.11638 11.3476 3.01815 11.1501 3.02107Z"></path>
        </svg></div>
                            </icon-shape>
                        </yt-icon-shape>
                    </yt-icon>
                </div>
                <div id="primary-text-container" class="style-scope ytd-compact-link-renderer">
                    <yt-formatted-string id="label" class="style-scope ytd-compact-link-renderer">Plugins</yt-formatted-string>
                    <yt-formatted-string id="subtitle" class="style-scope ytd-compact-link-renderer" is-empty="">
                        <yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string>
                    </yt-formatted-string>
                </div>
                <yt-icon id="right-icon" class="style-scope ytd-compact-link-renderer" disable-upgrade="" hidden="">
                </yt-icon>
                <yt-formatted-string id="secondary-text" class="style-scope ytd-compact-link-renderer" is-empty="" hidden="">

                    <yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string>
                </yt-formatted-string>
        
            </tp-yt-paper-item>
        </a>`;
        return f
    }

}

export default ViewXtendAPI;