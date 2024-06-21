function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //subistituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto-1.jpg")
  } else {
    img.setAttribute("src", "./assets/foto-2.jpg")
  }
}
