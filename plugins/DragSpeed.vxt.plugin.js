function drag_speed() {
    function get_info_elem() {
        let elem = document.getElementById("vxt-player-info");
        if (elem) return elem;

        var player__ = document.querySelector("#movie_player");
        var div_element = document.createElement("div");
        div_element.id = "vxt-player-info";
        div_element.style.color = "#fff";
        div_element.style.left = "0";
        div_element.style.padding = "7px 0";
        div_element.style.position = "absolute";
        div_element.style.top = "0";
        div_element.style.width = "100%";
        div_element.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        div_element.style.fontSize = '17px';
        div_element.style.textAlign = 'center';
        div_element.style.zIndex = '2147483647';
        div_element.style.display = 'none';
        div_element.innerText = "10x";
        player__.appendChild(div_element);
        return document.getElementById("vxt-player-info");
    }

    function hide(elem) {
        elem.style.display = "none";
    }

    function show(elem) {
        elem.style.display = "block";
    }

    let DS_API = new window.ViewXtendAPI();
    DS_API.suicidalInterval(() => {
        try {
            const video = DS_API.get_player();
            let playbackSpeed = 1; // Start with 1 as the initial playback speed

            const playbackSpeeds = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

            video.addEventListener('mousedown', (e) => {
                if (e.button === 0) { // Left click
                    const startX = e.clientX;
                    const initialSpeed = playbackSpeed;

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);

                    function handleMouseMove(e) {
                        const deltaX = e.clientX - startX;
                        const sensitivityFactor = 500; // Adjust this value for even less sensitivity

                        const speedChange = deltaX / sensitivityFactor;

                        playbackSpeed = initialSpeed + speedChange;

                        // Find the closest speed from the predefined list
                        const closestSpeed = findClosestSpeed(playbackSpeed, playbackSpeeds);
                        let old_pr = video.playbackRate;
                        video.playbackRate = closestSpeed;
                        let elem = get_info_elem();

                        if (old_pr != closestSpeed) {
                            show(elem);
                            elem.innerText = `${closestSpeed.toString()}x`;

                            setTimeout(()=>{
                                hide(elem);
                                // TODO: Fix pauses after change
                                //if (DS_API.get_player().paused) {
                                //    DS_API.get_player().play();
                                //}
                            }, 1000)
                        }
                    }

                    function handleMouseUp() {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
                }
            });

            // Helper function to find the closest speed from the predefined list
            function findClosestSpeed(targetSpeed, speedList) {
                return speedList.reduce((closest, current) => {
                    return Math.abs(current - targetSpeed) < Math.abs(closest - targetSpeed) ? current : closest;
                });
            };
            die();
        } catch {}
    }, 1000);

};
window.addEventListener("load", () => {
    drag_speed();
})