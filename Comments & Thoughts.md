# Weather App

## About the project

This very simple weather app is built in React Native. Since it was a four hour-project, I put my effort in the very basic functionality of inputting a city name and get the current weather and temperature as a response. 

## Technical

The only third-party library I imported was styled components, which I used to represent how I would structure a larger project. By defining and styling the components in separate files that share folders with the .js-files, it's easy to know where to look if you want to edit something. I also have reusable common components and a layout-file which exports data to the styled-files, so that it will be easilly adjustable to keep up to date with new devices. 

The app is mainly an interface for the user to communcate with the OpenWeatherApp API. All it does is that i makes a GET-request and displays the relevant information based on user input.

## If i had had more time

First of all, I would implement Redux. The file structure for this project is a bit ambitious for this kind of app, and to make state handling more responsive and enable components to communicate without passing their data via functions, Redux could would have been a logical choice. I would also made use of a drawer-navigator, accessible from the header, where the user could access more advanced functionality. 