const container = document.querySelector(".container")

const makeGrid = () => {
  const input = parseInt(prompt("Choose the number of squares per each side"))

  for ( let i = 0; i < input * input; i++) {
  const square = document.createElement("div")
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
  container.style.width = `${input * 31.7}px`

  Array.from(squares).map(sq => {
  sq.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black"
    console.log("event happened")
  })
})
}

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => makeGrid())