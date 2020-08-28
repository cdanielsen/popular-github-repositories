import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoDetail from './RepoDetail';
import RepoList from './RepoList'
import StarSelector from './StarSelector';
import './App.css';

const getGihubRepoData = ({ numberOfStars }) => {
  return axios({
    url: 'https://api.github.com/search/repositories',
    auth: {
      username: process.env.REACT_APP_GITHUB_USERNAME,
      password: process.env.REACT_APP_GITHUB_TOKEN,
    },
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
      <h1 id="title">Github Repo Search</h1>
      {
        repoToDisplay
        ? <RepoDetail repoDetails={getRepoDetails(repos, repoToDisplay)} setRepoToDisplay={setRepoToDisplay}></RepoDetail>
        : (
        <main>
          <div id='filters-container'>
            <h2>Filters:</h2>
            <StarSelector numberOfStars={numberOfStars} setNumberOfStars={setNumberOfStars}/>
          </div>
          <RepoList repos={repos} fetchError={fetchError} setRepoToDisplay={setRepoToDisplay}/>
        </main>
        )
      }
    </div>
  );
}

export default App;
