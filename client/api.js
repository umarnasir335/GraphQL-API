import React, { Component } from 'react'

export default class api extends Component {
    render() {
        return (
            <div>
                
try{


{
    // try to get the file (and with the file the last commit sha)
    var existingFile = await ghClient.Repository.Content.GetAllContentsByRef(owner, repo, targetFile, branch);

    // update the file
    var updateChangeSet = await ghClient.Repository.Content.UpdateFile(owner, repo, targetFile,
       new UpdateFileRequest("API File update", "Hello Universe! " + DateTime.UtcNow, existingFile.First().Sha, branch));
}
catch (Octokit.NotFoundException)
{
    // if file is not found, create it
    var createChangeSet = await ghClient.Repository.Content.CreateFile(owner,repo, targetFile, new CreateFileRequest("API File creation", "Hello Universe! " + DateTime.UtcNow, branch));
}


function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    response: err.response ? err.response.data : null,
  });
}
    }