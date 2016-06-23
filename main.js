class Counter {
  constructor () {
    this.count = 0
    this.totalCount = Storage.getData() || 0
  }

  getCounts () {
    return {
      count: this.count,
      totalCount: this.totalCount
    }
  }

  increase () {
	  this.count = this.count + 1
    this.totalCount = this.totalCount + 1
  }

  reset () {
    this.count = 0
  }
  
  allReset () {
    this.count = 0
    this.totalCount = 0
    Storage.clear()
  }
  
  save () {
    Storage.add(this.totalCount)
  }
}

class Storage {
  static key() {
    return 'count'
  }

  static add (data) {
    localStorage.setItem(Storage.key(), data)
  }
  
  static getData () {
	  localStorage.getItem(Storage.key())
  }
  
  static clear () {
    localStorage.removeItem(Storage.key())
  }
}

const counter = new Counter()
const app = new Vue({
  el: '#app',
  data: counter.getCounts(),
  methods: {
    increase: function () {
      console.log(counter)
      counter.increase()
      counter.save()
    },
    reset: counter.reset,
    allReset: counter.allReset
  }
})

document.addEventListener('DOMContentLoaded', app)
