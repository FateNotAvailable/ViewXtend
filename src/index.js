import ViewXtendAPI from "./api/ViewXtend";
import Plugins from "./utils/Plugins";
import htmlContent from "./web/index.html";
window.ViewXtendAPI = ViewXtendAPI;

/*
get_premium_flag_logo(alpha2_code) {
      return `<svg version="1.1" id="SVGRoot" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 388.8 79.8" style="enable-background:new 0 0 388.8 79.8" xml:space="preserve">
      <defs>
        <pattern id="imgpattern" x="0" y="0" width="1" height="1" viewBox="0 0 1024 576" preserveAspectRatio="xMidYMid slice">
          <image width="1024" height="576" xlink:href="https://flagcdn.com/w2560/${alpha2_code.toLowerCase()}.png" />
        </pattern>
      </defs>
      <style type="text/css">
        .st0 {
          fill: url(#imgpattern);
        }
        .st1 {
          fill: #fff;
        }
      </style>
      <path id="path6" class="st0" d="M111.7,12.5c-1.3-4.9-5.2-8.8-10.1-10.1C92.7,0,57,0,57,0S21.4,0,12.5,2.4C7.5,3.7,3.7,7.5,2.4,12.5
        C0,21.4,0,39.9,0,39.9s0,18.6,2.4,27.5c1.3,4.9,5.2,8.8,10.1,10.1c8.9,2.4,44.6,2.4,44.6,2.4s35.7,0,44.6-2.4
        c4.9-1.3,8.8-5.2,10.1-10.1c2.4-8.9,2.4-27.5,2.4-27.5S114.1,21.4,111.7,12.5z" />
      <path id="path8" class="st1" d="M45.6,57l29.6-17.1L45.6,22.8V57z" />
      <path id="path10" d="M164.7,25.3v2.8c0,13.8-6.1,21.9-19.5,21.9h-2v24.1h-10.9V5.7h13.9C158.9,5.7,164.7,11.1,164.7,25.3z M153.2,26.3c0-9.9-1.8-12.3-8-12.3h-2v27.8h1.9c5.9,0,8.2-4.2,8.2-13.5L153.2,26.3z M190.6,23.3l-0.6,13c-4.6-1-8.5-0.2-10.2,2.8 v35.1H169v-50h8.6l1,10.8h0.4c1.1-7.9,4.8-11.9,9.5-11.9C189.2,23.1,189.9,23.1,190.6,23.3L190.6,23.3z M203.1,52.9v2.5 c0,8.8,0.5,11.8,4.2,11.8c3.6,0,4.4-2.8,4.5-8.5l9.7,0.6c0.7,10.8-4.9,15.6-14.4,15.6c-11.6,0-15-7.6-15-21.4v-8.7 c0-14.5,3.8-21.6,15.3-21.6c11.6,0,14.5,6.0,14.5,21.1v8.6H203.1z M203.1,42.6v3.6h8.2v-3.6c0-9.2-0.7-11.8-4.1-11.8 C203.7,30.8,203.1,33.5,203.1,42.6L203.1,42.6z M277.9,36.3v37.8h-11.2V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.8,1.1-5,3.3 c0.1,0.7,0.1,1.4,0.1,2v37.8H247V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.7,1.1-4.9,3.2v39.9h-11.3v-50h8.9l1,6.4h0.2 c2.5-4.8,6.6-7.4,11.4-7.4c4.7,0,7.4,2.4,8.6,6.6c2.6-4.3,6.5-6.6,11-6.6C275.3,23.1,277.9,27.9,277.9,36.3z M283.5,11.3 c0-5.4,2-6.9,6.1-6.9c4.2,0,6.1,1.8,6.1,6.9c0,5.5-1.9,6.9-6.1,6.9C285.5,18.2,283.5,16.9,283.5,11.3z M284.2,24.1H295v50h-10.8 V24.1z M331.7,24.1v50h-8.8l-1-6.1h-0.2c-2.5,4.9-6.2,6.9-10.8,6.9c-6.7,0-9.7-4.2-9.7-13.5V24.1h11.3v36.7c0,4.4,0.9,6.2,3.2,6.2 c2.1-0.1,3.9-1.3,4.8-3.2V24.1H331.7z M388.8,36.3v37.8h-11.3V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.8,1.1-5,3.3 c0.1,0.7,0.1,1.3,0.1,2v37.8h-11.3V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.7,1.1-4.9,3.2v39.9h-11.3v-50h8.9l1,6.4h0.2 c2.5-4.8,6.6-7.4,11.4-7.4c4.7,0,7.4,2.4,8.6,6.6c2.6-4.3,6.5-6.6,11-6.6C386.2,23.1,388.8,27.9,388.8,36.3z" />
    </svg>
    `
    }

*/
const vx_main_fun = () => {
    if (window.location.pathname == "/plugins") {
        document.open();
        document.write(htmlContent);
        document.close();
        return;
    }

    let API = new ViewXtendAPI();
    let PLG = new Plugins();

    PLG.load_plugins();

    setInterval(() => {
        try {
            var parentElement = document.querySelector("#sections > yt-multi-page-menu-section-renderer:nth-child(1)").querySelector("#items");
            if (parentElement.childNodes.length == 4) {
                var firstItem = parentElement.firstElementChild;
                parentElement.insertBefore(API.create_plugins_button(), firstItem.nextSibling);
                var icon = document.querySelectorAll("#content-icon > yt-icon")[1];
                icon.innerHTML = `<icon-shape class="yt-spec-icon-shape">            <div style="width: 100%; height: 100%; fill: currentcolor;">
                <svg viewBox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1206 1.02129C12.109 1.0067 12.9592 1.54344 13.7096 2.29199L13.7104 2.29285L14.9707 3.5531C15.1118 3.34249 15.2753 3.14257 15.461 2.95679C17.0025 1.4153 19.5018 1.4153 21.0433 2.9568C22.5848 4.49829 22.5848 6.99754 21.0433 8.53904C20.8575 8.72481 20.6576 8.88828 20.447 9.02939L21.7072 10.2896L21.708 10.2905C22.4565 11.0408 22.9932 11.891 22.9787 12.8794C22.9642 13.8602 22.41 14.6797 21.7058 15.3789C21.7054 15.3793 21.7049 15.3798 21.7045 15.3802L20.4287 16.656C19.9519 17.1327 19.3279 17.0824 18.9512 16.9234C18.5783 16.7659 18.1803 16.4041 18.0897 15.8508C18.0262 15.4628 17.8456 15.0914 17.5452 14.791C16.7847 14.0306 15.5518 14.0306 14.7914 14.791C14.0309 15.5515 14.0309 16.7844 14.7914 17.5448C15.0917 17.8452 15.4631 18.0259 15.8511 18.0894C16.4044 18.18 16.7663 18.5779 16.9237 18.9509C17.0827 19.3276 17.1331 19.9516 16.6564 20.4283L15.377 21.7077C15.3766 21.7081 15.3762 21.7085 15.3757 21.709C14.6777 22.412 13.8591 22.965 12.8794 22.9795C11.8922 22.994 11.0429 22.4585 10.2938 21.7112L10.2929 21.7103L9.0295 20.4469C8.88841 20.6575 8.72496 20.8573 8.53922 21.0431C6.99773 22.5846 4.49847 22.5846 2.95698 21.0431C1.41549 19.5016 1.41549 17.0023 2.95698 15.4608C3.14272 15.2751 3.3426 15.1116 3.55317 14.9706L2.29294 13.7103L2.29208 13.7095C1.54353 12.9591 1.00681 12.1089 1.02141 11.1205C1.03589 10.1397 1.59009 9.32029 2.29424 8.62107C2.29469 8.62062 2.29515 8.62017 2.2956 8.61972L3.57165 7.34366C4.0484 6.86691 4.67249 6.9173 5.04916 7.07633C5.4221 7.23378 5.82003 7.59563 5.91062 8.14898C5.97414 8.53701 6.15479 8.90842 6.45519 9.20882C7.21563 9.96926 8.44856 9.96926 9.209 9.20882C9.96945 8.44837 9.96945 7.21545 9.20901 6.455C8.90861 6.1546 8.53719 5.97396 8.14917 5.91043C7.59581 5.81984 7.23397 5.42191 7.07652 5.04897C6.91749 4.6723 6.86709 4.04821 7.34384 3.57146L8.61978 2.29553C8.62025 2.29506 8.62071 2.29459 8.62118 2.29413C9.32039 1.58996 10.1398 1.03576 11.1206 1.02129ZM11.1501 3.02107C10.9456 3.02409 10.6003 3.13919 10.0393 3.70438L10.0367 3.70706L9.49334 4.25039C9.90279 4.44025 10.2863 4.70387 10.6232 5.04079C12.1647 6.58228 12.1647 9.08154 10.6232 10.623C9.08173 12.1645 6.58247 12.1645 5.04098 10.623C4.70406 10.2861 4.44044 9.9026 4.25058 9.49315L3.70715 10.0366L3.70449 10.0392C3.13933 10.6002 3.02421 10.9455 3.02119 11.1501C3.01827 11.3476 3.11651 11.7039 3.70773 12.2967C3.70782 12.2968 3.70792 12.2969 3.70801 12.297L6.03813 14.6271C6.30605 14.895 6.39954 15.2913 6.2796 15.6508C6.15966 16.0102 5.8469 16.2709 5.47177 16.3243C5.06894 16.3815 4.68196 16.5643 4.37119 16.8751C3.61075 17.6355 3.61075 18.8684 4.3712 19.6289C5.13164 20.3893 6.36456 20.3893 7.12501 19.6289C7.43577 19.3181 7.61854 18.9311 7.67581 18.5283C7.72914 18.1532 7.9899 17.8404 8.34931 17.7205C8.70872 17.6005 9.10505 17.694 9.37296 17.9619L11.7063 20.2953C11.7066 20.2955 11.7068 20.2958 11.7071 20.296C11.7071 20.2961 11.7071 20.2961 11.7072 20.2961C12.2975 20.8848 12.6529 20.9826 12.8499 20.9797C13.0539 20.9767 13.3986 20.8619 13.9575 20.2988L13.9601 20.2961L14.5069 19.7494C14.0975 19.5595 13.714 19.2959 13.3772 18.9591C11.8357 17.4176 11.8357 14.9183 13.3772 13.3768C14.9186 11.8353 17.4179 11.8353 18.9594 13.3768C19.2963 13.7137 19.5599 14.0972 19.7497 14.5065L20.2929 13.9633L20.2956 13.9607C20.8608 13.3998 20.9759 13.0544 20.9789 12.8499C20.9818 12.6524 20.8836 12.2961 20.2928 11.7036C20.2925 11.7034 20.2923 11.7031 20.2921 11.7029L17.9619 9.3728C17.694 9.10487 17.6005 8.70853 17.7205 8.34912C17.8404 7.9897 18.1532 7.72895 18.5284 7.67564C18.9312 7.61839 19.3183 7.43561 19.6291 7.12482C20.3895 6.36438 20.3895 5.13145 19.6291 4.37101C18.8686 3.61056 17.6357 3.61056 16.8752 4.37101C16.5644 4.6818 16.3817 5.06882 16.3244 5.4717C16.2711 5.84683 16.0104 6.15962 15.6509 6.27957C15.2915 6.39953 14.8952 6.30604 14.6273 6.03812L12.2971 3.70792C12.2969 3.70779 12.2968 3.70767 12.2967 3.70754C11.704 3.11638 11.3476 3.01815 11.1501 3.02107Z"></path>
    </svg></div>
            </icon-shape> `;
                icon.parentNode.parentElement.querySelector("#label").innerText = "Plugins";
            }

        } catch {};
    }, 150);


}
vx_main_fun()