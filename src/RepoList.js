
import React from 'react';

const GithubRepoList = ({ repos, fetchError, setRepoToDisplay }) => {
  if (fetchError) {
    return <div>Frowny Face: Failed to fetch from GH! Try Refreshing</div>
  }

  return (
    <div>
      {!repos
        ? 'Gettin\' stuff from Github!'
        : 
        <ul name="github-list" onClick={({target}) => setRepoToDisplay(target.textContent)}>
          {repos.map(({id, name, stargazers_count}) =>
              <li key={id}>
                  <strong>{`${name}`}</strong>
                  {`${stargazers_count}`}
              </li>
          )}
        </ul>
      }
    </div>
  );
}

export default GithubRepoList;
