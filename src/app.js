const reposUrl = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc'

new Vue({

  el: '#app',

  data: {
    isLoading: true,
    hasErrored: false,
    // viewOption can be "all" or "starred"
    viewOption: 'all',
    repos: [],
    starred: []
  },

  created: function () {
    // window.localStorage.setItem('starredRepos', ['id1', 'id2'])
    this.fetchRepos()
    this.fetchStarred()
  },

  methods: {
    fetchRepos: function () {
      fetch(reposUrl)
      .then(response => response.json())
      .then(result => {
        this.repos = result.items
        this.isLoading = false
      })
      .catch(fetchErr => {
        console.log({ fetchErr })
        this.isLoading = false
        this.hasErrored = true
      })
    },

    fetchStarred: function () {
      // local storage array comes back as string
      const starred = window.localStorage.getItem('starredRepos')
      const starredArray = starred
        ? starred.split(',')
        : []
      console.log({ starredArray })
      this.starred = starredArray
    },

    filteredRepos: function () {
      // TODO
      return this.repos.slice(0, 10)
    },

    toggleStarred: function (repoId) {

    },

    starButtonLabel: function (repoId) {
      return this.starred.inlcudes(repoId)
        ? 'Unstar'
        : 'Star'
    }
  }
})
