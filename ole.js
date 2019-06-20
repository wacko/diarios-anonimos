var interval = setInterval(function () {
  var arr = document.querySelectorAll('.modalLoginPase')
  if (arr.length) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].remove()
    }
    interval = null
  }
  var modal = document.querySelector('#paseModalContainer');
  if (modal) {
    modal.remove();
  }
}, 500)
