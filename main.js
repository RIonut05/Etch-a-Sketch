const container = document.querySelector(".container")

for (let i = 1; i < 256; i++) {
  const square = document.createElement("div")
  square.setAttribute("id", "square" + i)
  square.classList.add("square")
  container.append(square)
}

let squares = document.querySelectorAll(".square")
Array.from(squares).map((sq) => {
  sq.style.border = "0.5px solid black "
  sq.style.width = "30px"
  sq.style.height = "30px"
})

container.style.display = "flex"
container.style.flexDirection = "row"
container.style.flexWrap = "wrap"
container.style.width = "480px"

