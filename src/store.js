var Vue =  require('vue')
var Vuex = require('vuex')
var router = require('./router.js')

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    router: require('./router.js'),
    title: 'vuex + vue-router bug test',
  },
})


module.exports = store
