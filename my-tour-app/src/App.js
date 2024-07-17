//U22562170

import React, {useState, useEffect, createContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const TourContext = createContext();

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  return (
    <TourContext.Provider value={{tours, setTours}}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Gallery} />
          </Switch>
        </div>
      </Router>
    </TourContext.Provider>
  );
};

export default App;