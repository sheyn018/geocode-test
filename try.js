// Replace 'YOUR_API_KEY' with the actual API key you obtained
const apiKey = '';

// Function to get the user's current location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    resolve(userLocation);
                },
                error => {
                    reject(`Error getting geolocation: ${error.message}`);
                }
            );
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}

// Call the function to get the user's location
getUserLocation()
    .then(coords => {
        // Now you can use userLocation.latitude and userLocation.longitude
        console.log(coords);
    })
    .catch(error => {
        console.error(error);
    });
    