// js/configLoader.js

/**
 * Loads the configuration from config.json.
 * @returns {Promise<Object>} A promise that resolves with the configuration object.
 */
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const config = await response.json();
        return config;
    } catch (error) {
        console.error('Error loading config.json:', error);
        return null; // Return null or a default config in case of error
    }
}