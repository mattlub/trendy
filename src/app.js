import { updateStarredRepos } from './utils.js'

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
        ? starred.split(',').map(Number)
        : []
      this.starred = starredArray
    },

    filteredRepos: function () {
      if (this.viewOption === 'starred') {
        return this.repos
          .filter(repo => this.starred.includes(repo.id))
          .slice(0, 10)
      } else {
        return this.repos.slice(0, 10)
      }
    },

    toggleStarred: function (idToToggle) {
      const updatedStarred = updateStarredRepos(this.starred, idToToggle)
      // set the starred repos here and in local storage
      this.starred = updatedStarred
      window.localStorage.setItem('starredRepos', updatedStarred)
    },

    // conditional formatting
    getStarClass: function (repoId) {
      return this.starred.includes(repoId)
        ? 'repo__star-button--starred'
        : ''
    },
    
    getViewOptionClass: function (option) {
      return this.viewOption === option
        ? 'button-inputs__label--selected'
        : ''
    },

    // adds one to star count if it is starred in local storage
    getStarCount: function (repoId, count) {
      return this.starred.includes(repoId)
        ? count + 1
        : count
    }
  }
})
