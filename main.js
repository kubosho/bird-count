class Counter {
  constructor () {
    this.count = Number(Storage.getData()) || 0
  }

  getCount () {
    return this.count
  }

  increase () {
    this.count = this.count + 1
    ga('send', 'event', 'count', 'click')
    Storage.add(this.count)
  }

  reset () {
    this.count = 0
    Storage.clear()
  }
}

class Storage {
  static key () {
    return 'count'
  }

  static add (data) {
    localStorage.setItem(Storage.key(), data)
  }

  static getData () {
    return localStorage.getItem(Storage.key())
  }

  static clear () {
    localStorage.removeItem(Storage.key())
  }
}

const counter = new Counter()
const app = new Vue({
  el: '#app',
  data: {
    count: counter.getCount()
  },
  methods: {
    increase: counter.increase,
    reset: counter.reset
  }
})

document.addEventListener('DOMContentLoaded', app)
