// takes an array of (integer) repo id's and an (integer) id of the repo to toggle
// return a new array of repo id's
export const updateStarredRepos = (currentStarred, idToToggle) => {
  return currentStarred.includes(idToToggle)
    ? currentStarred.filter(id => id !== idToToggle)
    : currentStarred.concat([ idToToggle ])
}
