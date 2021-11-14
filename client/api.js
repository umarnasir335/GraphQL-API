import React, { Component } from 'react'

export default class api extends Component {
    render() {
        return (
            <div>
                
try
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


$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    https://api.github.com/user/repos

            </div>
    }
}
