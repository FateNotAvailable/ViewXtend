class Plugins {
    constructor() {}

    loadFromLocalStorage(key, defaultValue) {
        // Check if the key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
            try {
                // Parse the JSON data from localStorage
                const data = JSON.parse(localStorage.getItem(key));
        
                // Check if the parsed data is an object (JSON)
                if (typeof data === 'object' && data !== null) {
                return data;
                } else {
                // Handle the case where the data is not a valid JSON object
                console.error('Data in localStorage is not a valid JSON object.');
                }
            } catch (error) {
                // Handle any errors that occur during JSON parsing
                console.error('Error parsing data from localStorage:', error);
            }
        }
        return defaultValue;
    }

    load_plugins() {
        const pluginsData = this.loadFromLocalStorage('plugins', {});

        for (const key in pluginsData) {
            if (pluginsData.hasOwnProperty(key)) {
                const value = pluginsData[key];
        
                // Check if the URL matches the regex pattern
                const regex = new RegExp(value['runs_on']);
                const currentURL = window.location.href;
        
                if (regex.test(currentURL)) {
                    const script = document.createElement('script');
                    script.src = value['url'];
                    document.head.appendChild(script);
                }
            }
        }
    }
}

export default Plugins;