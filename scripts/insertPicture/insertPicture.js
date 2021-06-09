javascript: (function () {
  var ii = document.createElement("input");
  ii.type = "file";
  ii.style = "position:fixed;bottom:5px;left:5px;z-index:99998";
  ii.accept = "image/jpeg,image/png";
  document.body.appendChild(ii);
  var iii = document.createElement("img");
  iii.alt = "";
  iii.draggable = false;
  iii.onload = function () {
    width = iii.clientWidth;
    height = iii.clientHeight;
  };
  var sitKey = false,
    sitTop = 0,
    sitLeft = 0,
    sitScale = 1,
    width = 0,
    height = 0;
  iii.style =
    "position:fixed;top:0;left:0;z-index:99999;opacity:0.8;display:block;";
  iii.addEventListener("mousedown", (e) => {
    sitKey = true;
  });
  iii.addEventListener("mouseup", (e) => {
    sitKey = false;
  });
  iii.addEventListener("mouseleave", (e) => {
    sitKey = false;
  });
  iii.addEventListener("mousemove", (e) => {
    if (sitKey) {
      sitTop += e.movementY;
      sitLeft += e.movementX;
      iii.style.top = sitTop + "px";
      iii.style.left = sitLeft + "px";
    }
  });
  document.body.appendChild(iii);
  ii.onchange = function (e) {
    if (!this.files[0]) return;
    var r = new FileReader();
    r.readAsDataURL(this.files[0]);
    r.onload = function () {
      iii.src = this.result;
    };
  };
  window.onkeydown = (e) => {
    if (e.key == "q") {
      iii.style.opacity = Math.min(+iii.style.opacity + 0.1, 1);
    } else if (e.key == "e") {
      iii.style.opacity = Math.max(iii.style.opacity - 0.1, 0);
    } else if (e.key == "w") {
      sitTop -= 1;
      iii.style.top = sitTop + "px";
    } else if (e.key == "s") {
      sitTop += 1;
      iii.style.top = sitTop + "px";
    } else if (e.key == "a") {
      sitLeft -= 1;
      iii.style.left = sitLeft + "px";
    } else if (e.key == "d") {
      sitLeft += 1;
      iii.style.left = sitLeft + "px";
    } else if (e.key == "z") {
      sitScale += 0.01;
      iii.style.width = width * sitScale + "px";
      iii.style.height = height * sitScale + "px";
    } else if (e.key == "x") {
      sitScale -= 0.01;
      iii.style.width = width * sitScale + "px";
      iii.style.height = height * sitScale + "px";
    } else if (e.key == "c") {
      sitScale = 1;
      iii.style.width = width + "px";
      iii.style.height = height + "px";
    } else {
      return;
    }
    e.preventDefault();
  };
  void 0;
})();
