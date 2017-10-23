const repos = [
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

const starred = [
  123456,
  111111,
  222222,
  333333,
  444444
]

module.exports = { repos, starred }
