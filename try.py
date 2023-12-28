import requests
import geocoder

# Replace 'YOUR_API_KEY' with the actual API key you obtained
api_key = ''

# Get the user's current location based on their IP address
user_location = geocoder.ip('me').latlng

# Specify the type of place you're interested in (e.g., 'ramen restaurant')
place_type = 'ramen restaurant'

# Build the API request URL
url = f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={",".join(map(str, user_location))}&radius=2000&type={place_type}&key={api_key}'

# Make the request
response = requests.get(url)

# Parse the JSON response
data = response.json()

# Extract and print information about nearby ramen restaurants
if data['status'] == 'OK':
    for place in data['results']:
        name = place['name']
        address = place['vicinity']
        print(f"{name} - {address}")
else:
    print(f"Error: {data['status']}")
