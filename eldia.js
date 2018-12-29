setInterval(() => {
  // make body scrollable
  document.querySelector("body").style = "overflow: scroll";

  // remove overlays
  ["#login-popup", "#opacityBody"].forEach((id) => {
    const element = document.querySelector(id);

    if (element) {
      element.remove();
    }
  });
}, 100);
