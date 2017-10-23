const dummyData = [
  {
    id: 123456,
    name: 'test',
    description: 'cool new library',
    html_url: 'https://www.github.com',
    stargazers_count: 103,
    language: 'JavaScript'
  }
]

new Vue({

  el: '#app',

  data: {
    loading: true,
    // viewOption can be "all" or "starred"
    viewOption: "all",
    repos: dummyData,
    starred: []
  },

  methods: {
    
  }
  
})