# Github

## Basic usage

### Idea of local + remote

The idea of local and remote is about where your work is stored. **Local** means the files are on your own computer, where you can edit and save them directly. **Remote** means the files are stored somewhere else, like on a server or online platform (e.g. a GitHub repository). With tools like Git, you can keep a local version of your work on your computer and a remote version as a backup or to share with others. This setup lets you work locally on your machine and test changes, synchronizing them with the remote - often public - repository when the changes are properly implemented.

### Clone

The gist of "cloning" is that you make a copy of whatever repository you want to work on/use. Usually, if you want to work on something locally, you would just `git clone` a repository. All this does is create a copy to then be synchronized with the original repository (the "origin") after you have made changes.

Here is an example of how to clone a repository:

- You copy the repository link, found in the big green "Code" button:
    
    ![image.png](image.png)
    
- then you use your terminal to navigate to the folder you want to clone into:
    
    ![image.png](image%201.png)
    
- and you clone the repo by typing `git clone` followed by the repo link:
    
    ![image.png](image%202.png)
    

This will automatically create a folder named after the cloned repo that you can `cd` into and start working.

### Commit

In Git, **committing** is like saving a snapshot of your work. When you make changes to your files and you're happy with them, you create a commit to record those changes. Each commit includes a description (called a commit message) so you can remember what was changed and why. Think of it as adding a page to a diary (the "git log") where you log the progress of your project. Commits also include so-called "diffs". These are highlights in your code that show exactly what was added or removed and where. This is what an example diff looks like on GitHub:

![image.png](image%203.png)

As you can see, it shows which line has been edited, what was removed, what was added, and even which lines these changes happened in (the two columns on the left).

This makes it easy to track your work, go back to earlier versions, and see a clear history of what’s been done.

### Push & Pull

These concepts comprise the standard git workflow. Pulling means updating your local copy of the repository with the most recent changes from the remote one, so you always work on the most updated version of your project. Pushing essentially means the opposite, i.e. uploading your local changes to the remote repository. Reading this, you might ask what the difference between committing and pushing is, and the answer is relatively simple: committing means "telling" git you made a change, and pushing means actually uploading that change.

A standard workflow in your own repository would look something like this (things in `code blocks` are terminal commands):

1. `git pull` before starting to work on something, so you always have the most up to date project files, in case someone else made a change or you made one at a different computer
2. working on the project locally, making changes
3. `git add .` This just tells git to "stage" everything in the folder you’re working on. I.e. this is how to tell git which files (with changes) you want to commit changes in. The dot just means "everything", but you can also specify files or folders to stage, like `git add readme.md` if you only want to commit changes in `readme.md`
4. `git commit -m "example message"` Here, you commit the change (creating an entry in the git log) and attach a message (in quotes, following `-m`) to describe what change you made.
5. `git push`This uploads your changes to your repository, so when other people look at or clone/pull the repository, they also receive the change you made

### Branches

In Git, **branches** are like different paths or versions of your project. By creating a branch, you can work on new ideas, features, or fixes without affecting the main version of your project (often called the "main" or "master" branch). Each branch keeps its own set of commits, so you can experiment freely. When you're done, you can merge your branch back into the main project to combine the changes. This is super helpful for teamwork, as everyone can work on their own branch and then bring their updates together. This can also be used to test features before they are merged into the main branch

## Working on other people’s repositories/suggesting changes

When you are working on a repository that you don’t have edit access to, you have to take some additional steps, namely **forking** the repo, and then submitting a **pull request** to have your changes merged into the official repo.

### Forking

A “fork” in a general sense is a copy of a project, but with changes someone else made, or in this case, changes you want to make to someone else’s project.  When you fork a project on GitHub, you create a separate version of it under your account, so you can make changes without affecting the original. You can do it like this:

![This button is found on the top right of a repository page](image%204.png)

This button is found on the top right of a repository page

In your forked project, you can make and commit changes as described above, and when you’re done, you might want to have it merged into the main repository, so that a new feature you created gets added to an open source project or a bug you fixed gets fixed in the official repository. You can do this by:

### Pull request

A pull request, in simple terms, means “look at my branch [in my repository] and copy the changes I made”. To do that, you click on the “Pull requests” tab:

![image.png](image%205.png)

then “New pull request”:

![image.png](image%206.png)

and then you choose which branches (every project has a “main” or “master” branch) you want to compare, so they can be merged:

![image.png](image%207.png)

The repository maintainers then have to approve or deny your pull request.