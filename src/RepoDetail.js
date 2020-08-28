import React from 'react';

const RepoDetail = ({ repoDetails, setRepoToDisplay}) => {
  const {
    forks_count,
    html_url,
    name,
    stargazers_count,
  } = repoDetails;
  return (
    <>
      <button id="back-button" onClick={() => setRepoToDisplay(null)}>Back To List</button>
      <h1><a href={html_url}>{name}</a></h1>
      <h3>Stars: {stargazers_count}</h3>
      <h3>Forks: {forks_count}</h3>
    </>
  );
}

export default RepoDetail;