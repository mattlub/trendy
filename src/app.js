const dummyData = [
  {
    id: 123456,
    name: 'test',
    description: 'cool new library',
    html_url: 'https://www.github.com',
    stargazers_count: 103,
    language: 'JavaScript'
  },
  {
    id: 333444,
    name: 'another one',
    description: 'cool newer library',
    html_url: 'https://www.github.com',
    stargazers_count: 300,
    language: 'Elm'
  }
]

new Vue({

  el: '#app',

  data: {
    loading: true,
    // viewOption can be "all" or "starred"
    viewOption: "all",
    repos: dummyData,
    starred: [ 123456 ]
  },

  methods: {
    filteredRepos: function () {
      // TODO
      return this.repos
    }
  }
  
})