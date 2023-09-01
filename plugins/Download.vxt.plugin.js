function download() {
    ViewXtendAPI.suicidalInterval((die)=>{
        try {
            let download_text = document.querySelector("#action-button > yt-button-shape > button > div > span");
            download_text.innerText = "Download";

            document.querySelector("#description").style.display = 'none';

            document.querySelector("#action-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").addEventListener("click", (e)=>{
                console.log(ViewXtendAPI.get_checked_download())
            })

            function createStyledButton() {
                // Create a new button element
                const button = document.createElement("button");

                // Set the button's inner text
                button.textContent = "Download";

                // Apply the specified styles
                button.style.backgroundColor = "#3ea6ff";
                button.style.outline = "0";
                button.style.border = "0";
                button.style.borderRadius = "25px";
                button.style.padding = "10px";
                button.style.fontWeight = "bolder";

                // Add hover effect
                button.addEventListener("mouseover", function () {
                    button.style.backgroundColor = "#0073e6";
                    button.style.cursor = "pointer";
                });

                button.addEventListener("mouseout", function () {
                    button.style.backgroundColor = "#3ea6ff";
                });

                button.addEventListener("click", ()=>{
                    const queryString = window.location.search;
                    const urlParams = new URLSearchParams(queryString);
                    const vValue = urlParams.get('v');

                    const res = ViewXtendAPI.get_checked_download().parentElement.parentNode.querySelector("#label").innerText.split("(")[1].split(")")[0];
                    document.querySelector("#dismiss-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()
                    const mp4Url = `https://seagreenrecursivecommand--ywp78648.repl.co/download.mp4?id=${vValue}&res=${res}`;
                    const a = document.createElement('a');
                    a.href = mp4Url;
                    a.download = 'video.mp4';
                    a.click();
                })

                return button;
            }

            let act = document.querySelector("#action-button");

            act.parentNode.replaceChild(createStyledButton(), act);
            die();
        }
        catch {}
    }, 100)
}

window.addEventListener("load", ()=>{
    let e = document.querySelector("#flexible-item-buttons > ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
    e.addEventListener("click", ()=>{
        download()
    })
})