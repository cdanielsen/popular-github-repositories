import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoList from './RepoList'
import StarSelector from './StarSelector';
import './App.css';

const getGihubRepoData = ({ numberOfStars }) => {
  return axios({
    url: 'https://api.github.com/search/repositories',
    params:{
      q: `stars:>${numberOfStars}`,
      sort: 'stars',
      order: 'desc'
    }
  })
}

function App() {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const [repos, setRepos] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    console.log('Sending!', numberOfStars)
    getGihubRepoData({ numberOfStars })
      .then(({ data }) => {
        setRepos(data.items)
    }).catch(err => {
      console.error(err);
      setFetchError(true);
    })
  }, [numberOfStars])

  return (
    <div className="App">
      <RepoList repos={repos} fetchError={fetchError}/>
      <StarSelector numberOfStars={numberOfStars} setNumberOfStars={setNumberOfStars}/>
    </div>
  );
}

export default App;
