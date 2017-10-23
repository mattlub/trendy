# Trending Github Repos

A small app for discovering trending repositories on GitHub, made with Vue.js

### Requirements
- The idea of this project is to implement a small client application for discovering trending repositories on GitHub.
- A list of the most popular repositories of the last week should be displayed and the user should be able to star them.
- The starred repositories, should be visible either through a filter or in a diferent tab.
- Some basic info of the repo should be displayed, such as: repo name, link to GitHub, description and number of stars.
- To keep things simple, the starring won’t be sent back to GitHub’s servers but just stored in localStorage.
- Bonus task: if time allows, a language filter would be an awesome addition to have. 

### Implementation Details
GitHub provides a public search endpoint which you can use for fetching the most popular repositories:
`https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc`
We will really value: concise and clean code, use of semantic HTML, CSS naming conventions and unit tests