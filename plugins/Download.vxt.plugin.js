function download() {
    if (window._faf3egw4g == true) { return };
    try {
        let download_text = document.querySelector("#action-button > yt-button-shape > button > div > span");
        download_text.innerText = "Download";

        document.querySelector("#description").style.display = 'none';

        document.querySelector("#action-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").addEventListener("click", (e)=>{
            console.log(this.API.get_checked_download())
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

            return button;
        }

        let act = document.querySelector("#action-button");

        act.parentNode.replaceChild(createStyledButton(), act);
        window._faf3egw4g = true;
    }
    catch {}

}