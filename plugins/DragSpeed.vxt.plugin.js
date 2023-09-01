function drag_speed() {
    if (window._faf3egw4p == true) { return };
        let DS_API = new window.ViewXtend();
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
                    video.playbackRate = closestSpeed;
                    API.get_video_title().innerText = closestSpeed.toString();
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
        }
        window._faf3egw4p = true;
};
window.addEventListener("load", ()=>{
    drag_speed();
})