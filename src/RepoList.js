
import React from 'react';

const GithubRepoList = ({ repos, fetchError }) => {
  if (fetchError) {
    return <div>Frowny Face: Failed to fetch from GH! Try Refreshing</div>
  }

  return (
    <div>
      {!repos
        ? 'Gettin\' stuff from Github!'
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
