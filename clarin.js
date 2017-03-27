var interval = setInterval(function () {
  if (document.querySelector('.lock')) {
    document.querySelector('.lock').style.opacity = '1'
    document.querySelector('.lock').classList.remove('lock')
  };
}, 500)
