let PL_VX_API = new window.ViewXtendAPI();
PL_VX_API.suicidalInterval((die)=>{
    PL_VX_API.get_logo().parentNode.innerHTML = `<svg version="1.1" id="SVGRoot" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 388.8 79.8" style="enable-background:new 0 0 388.8 79.8" xml:space="preserve"><style type="text/css">.st0{fill:red}.st1{fill:#fff}</style><path id="path6" class="st0" d="M111.7,12.5c-1.3-4.9-5.2-8.8-10.1-10.1C92.7,0,57,0,57,0S21.4,0,12.5,2.4C7.5,3.7,3.7,7.5,2.4,12.5
    C0,21.4,0,39.9,0,39.9s0,18.6,2.4,27.5c1.3,4.9,5.2,8.8,10.1,10.1c8.9,2.4,44.6,2.4,44.6,2.4s35.7,0,44.6-2.4
    c4.9-1.3,8.8-5.2,10.1-10.1c2.4-8.9,2.4-27.5,2.4-27.5S114.1,21.4,111.7,12.5z"/><path id="path8" class="st1" d="M45.6,57l29.6-17.1L45.6,22.8V57z"/><path id="path10" d="M164.7,25.3v2.8c0,13.8-6.1,21.9-19.5,21.9h-2v24.1h-10.9V5.7h13.9C158.9,5.7,164.7,11.1,164.7,25.3z
     M153.2,26.3c0-9.9-1.8-12.3-8-12.3h-2v27.8h1.9c5.9,0,8.2-4.2,8.2-13.5L153.2,26.3z M190.6,23.3l-0.6,13c-4.6-1-8.5-0.2-10.2,2.8
    v35.1H169v-50h8.6l1,10.8h0.4c1.1-7.9,4.8-11.9,9.5-11.9C189.2,23.1,189.9,23.1,190.6,23.3L190.6,23.3z M203.1,52.9v2.5
    c0,8.8,0.5,11.8,4.2,11.8c3.6,0,4.4-2.8,4.5-8.5l9.7,0.6c0.7,10.8-4.9,15.6-14.4,15.6c-11.6,0-15-7.6-15-21.4v-8.7
    c0-14.5,3.8-21.6,15.3-21.6c11.6,0,14.5,6,14.5,21.1v8.6H203.1z M203.1,42.6v3.6h8.2v-3.6c0-9.2-0.7-11.8-4.1-11.8
    C203.7,30.8,203.1,33.5,203.1,42.6L203.1,42.6z M277.9,36.3v37.8h-11.2V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.8,1.1-5,3.3
    c0.1,0.7,0.1,1.4,0.1,2v37.8H247V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.7,1.1-4.9,3.2v39.9h-11.3v-50h8.9l1,6.4h0.2
    c2.5-4.8,6.6-7.4,11.4-7.4c4.7,0,7.4,2.4,8.6,6.6c2.6-4.3,6.5-6.6,11-6.6C275.3,23.1,277.9,27.9,277.9,36.3z M283.5,11.3
    c0-5.4,2-6.9,6.1-6.9c4.2,0,6.1,1.8,6.1,6.9c0,5.5-1.9,6.9-6.1,6.9C285.5,18.2,283.5,16.9,283.5,11.3z M284.2,24.1H295v50h-10.8
    V24.1z M331.7,24.1v50h-8.8l-1-6.1h-0.2c-2.5,4.9-6.2,6.9-10.8,6.9c-6.7,0-9.7-4.2-9.7-13.5V24.1h11.3v36.7c0,4.4,0.9,6.2,3.2,6.2
    c2.1-0.1,3.9-1.3,4.8-3.2V24.1H331.7z M388.8,36.3v37.8h-11.3V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.8,1.1-5,3.3c0.1,0.7,0.1,1.3,0.1,2
    v37.8h-11.3V37.2c0-4.1-1.1-6.1-3.5-6.1c-2,0-3.7,1.1-4.9,3.2v39.9h-11.3v-50h8.9l1,6.4h0.2c2.5-4.8,6.6-7.4,11.4-7.4
    c4.7,0,7.4,2.4,8.6,6.6c2.6-4.3,6.5-6.6,11-6.6C386.2,23.1,388.8,27.9,388.8,36.3z"/></svg>`;
    die();
}, 100)

setInterval(()=>{
    let title = PL_VX_API.get_title();

    if (!title.includes("Premium")) {
        PL_VX_API.set_title(title + " Premium");
    }
}, 100)