import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoDetail from './RepoDetail';
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

const getRepoDetails = (repos, repoName) => {
  return repos.find(repo => repo.name === repoName)
}

function App() {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const [repos, setRepos] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [repoToDisplay, setRepoToDisplay] = useState(null);

  useEffect(() => {
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
      {
        repoToDisplay
        ? <RepoDetail repoDetails={getRepoDetails(repos, repoToDisplay)} setRepoToDisplay={setRepoToDisplay}></RepoDetail>
        : (
        <>
          <RepoList repos={repos} fetchError={fetchError} setRepoToDisplay={setRepoToDisplay}/>
          <StarSelector numberOfStars={numberOfStars} setNumberOfStars={setNumberOfStars}/>
        </>
        )
      }
    </div>
  );
}

export default App;
