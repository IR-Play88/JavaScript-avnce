function addZero(i) {
  if (i < 10) { i = "0" + i } {
    return i;
  }
}

function mostrarHora() {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  let time = h + ":" + m + ":" + s;
  document.getElementById("time").innerHTML = time;
  document.getElementById("barra").value = s;
  setTimeout(mostrarHora, 1000);
}