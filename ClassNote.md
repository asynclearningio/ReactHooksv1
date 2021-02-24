Common React Hooks: 
-React.useState
-React.useEffect
-React.useContext
-React.useRef
-React.useReducer

1. affect State (data)
2. perform action (side effects)

Have different APIs
Some return value -> React.useRef & React.useContext
Some return pair of values -> React.useState && React.useReducer
Some return nothing. 


React.useState

Task
- Input type="text" takes 'cities' // City does not exist || get Weather 
- Button 'Get Weather' -> triggers the API call
- clickHandler => call to Weather API using that city 
                  returned data => passed into Weather component as props

- Weather => if not data, it can display not data || error
          => if data => display data. 
          Display Data => h2 - City Name
                       => p - additional location data
                       => p - temperature
                       => p - humidity
                       => p - wind speed   




input -> changing set (onChange)
button -> trigger a function - search


input -> 
button -> input.value -> make call to the API 


data => { cod: , something }


