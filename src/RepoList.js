
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import mockGithubData from './github_output_backup.json';

function GithubRepoList() {
  const [repos, setRepos] = useState(null);

  const getGihubRepoData = () => {
    return axios({
      url: 'https://api.github.com/search/repositories',
      params:{
        q: 'stars:>25000',
        sort: 'stars',
        order: 'desc'
      }
    })
  }

  useEffect(() => {
    setRepos(mockGithubData.items);
    // getGihubRepoData()
    //   .then(({ data }) => {
    //     setRepos(data.items)
    // }).catch(err => console.error(err))
  }, [])

  return (
    <div>
      {!repos
        ? 'Gettin stuff from Github!'
        : 
        <ul name="github-list">
          {repos.map(repo => 
            <li key={repo.id}>
              <strong>{`${repo.name}`}</strong>
              {`${repo.stargazers_count}`}
            </li>
          )}
        </ul>
      }
    </div>
  );
}

export default GithubRepoList;
