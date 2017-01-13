var interval = setInterval(function() {
  var arr = document.querySelectorAll('.modal-pase')
  if (arr.length) {
    document.getElementsByTagName('html')[0].style.overflowY = ""
    for (var i = 0; i < arr.length; i++) {
      arr[i].remove()
    }
    interval = null
  }
}, 100)