const container = document.querySelector(".container")

const makeGrid = () => {
  const squaresFlush = document.querySelectorAll(".square")
  Array.from(squaresFlush).map(sq => sq.remove())
  const input = parseInt(prompt("Choose the number of squares per each side"))

  for ( const i = 0; i < input * input; i++) {
  const square = document.createElement("div")
  square.classList.add("square")
  container.append(square)
  }

   const containerSize = 480
   const squareSize = containerSize / input

  const squares = document.querySelectorAll(".square")
  Array.from(squares).map((sq) => {
    sq.style.border = "0.5px solid black"
    sq.style.width = squareSize + "px"
    sq.style.height = squareSize + "px"
  })

  container.style.display = "flex"
  container.style.flexDirection = "row"
  container.style.flexWrap = "wrap"
  container.style.width = containerSize + "px"

  Array.from(squares).map(sq => {
  sq.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black"
  })
})
}

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => makeGrid())