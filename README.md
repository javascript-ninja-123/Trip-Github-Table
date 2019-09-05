

### Libray 

- Create-React-App from Facebook
- Semantic-React-UI for Styling

### Structure

- Utilized App.js as the main container
- Created the utils folder and came up with a couple of util functions that handle Date converter, sorting algorithms
- Created containers folder to keep a component like Table
- Created components folder to keep a UI component like Loader
- Created hooks folder to keep custom React Hook useFetch as well as React.useReducer to handle data
- Utilized Provider/Consumer pattern to avoid prop drilling down the road(scalability)

### General Description

- Utilized Loader component until fetch API retrieves data from Github API
- Utilized Table semantic HTML to render data 
- Utilized React hook to avoid cumbersome and bloated Class pattern
- Utilized Provider/Consumer pattern to avoid prop drilling as well as unnecessary rerendering


### Functionality

- Added Table Header Hover effect
- Added toggle sorting functionality by clicking a table header
- Utilized overflow-y:scroll to keep a table concise and readable