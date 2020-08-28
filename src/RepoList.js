
import React from 'react';
import './RepoList.css'

const RepoList = ({ repos, fetchError, setRepoToDisplay }) => {
  if (fetchError) {
    return <div>Frowny Face: Failed to fetch from GH! Try Refreshing</div>
  }

  return (
    <div>
      {!repos
        ? 'Gettin\' stuff from Github!'
        : 
        <ul id="repo-list" onClick={({target}) => setRepoToDisplay(target.textContent)}>
          {repos.map(({id, name, stargazers_count}) =>
              <li key={id}>
                  <span className="repo-name"><strong>{`${name}`}</strong></span>
                  <span className="repo-star-count">{`${stargazers_count} `}{String.fromCharCode(10026)}</span>
              </li>
          )}
        </ul>
      }
    </div>
  );
}

export default RepoList;
