class Isogram {
  constructor (string) {
    this.string = string
  }

  isIsogram () {
    let filtered = this.string.replace(/-| /g,'')
    const arr = filtered.toLowerCase().split('')

    for (var i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf(arr[i]) !== i) {
        return false
      }
    }

    return true
  }
}

module.exports = Isogram
