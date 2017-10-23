# Trending Github Repos

A small app for discovering trending repositories on GitHub, made with Vue.js.

See it [here](https://mattlub.github.io/trendy/public/index.html).

See the tests run [here](https://mattlub.github.io/trendy/tests/index.html).

### Design Decisions
- Vue.js for making a simple app which is well-structured and readable
- BEM for clear and reusable CSS, Normalize to normalize across browsers
- Webpack to transpile ES6 for browser compatibility
- QUnit for testing (because I had used it before)

### notes
- CSS took me longer than I planned
- had to limit time for testing, as implementation took longer than expected.

### improvements
- fix out the design on mobile
- style the status messages (loading, error)
- more in depth testing of functionality
- think about pagination
- add languages filter

### Things learnt
- multiple bundles with webpack
- Vuex is a library which adds the Elm/Flux/Redux architecture to a Vue app
- there's a lot to learn about testing with Vue

-----------

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
