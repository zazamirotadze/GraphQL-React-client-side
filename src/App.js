import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import {useState, useEffect} from 'react';





function App() {

  const [zaza, setZaza] = useState("")
  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  // const client = ...
  useEffect(() => {
    client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) =>  setZaza(result.data.locations.map((element) => <li key={element.id}>{element.description}</li>) ));
    
  }, [0]);



  return (
      <div className="App">
        {zaza && zaza}
      </div>
    
  );
}

export default App;

