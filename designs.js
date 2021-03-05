// Select color input
// Select size input
const colorSelector = document.getElementById('colorPicker')
const sizeEl = document.getElementById('sizePicker')
const height = sizeEl.children[0]
const width = sizeEl.children[1]
const tableSelector = document.getElementById('pixelCanvas')
// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
// Your code goes here!
tableSelector.innerHTML = ''
e.preventDefault()
  createRows(height.value, width.value)
}

function createRows(height, width) {
  let w = 0
  let h = 0

  while (h < height) {
    let tr = document.createElement('tr')
    tr.setAttribute("id", `row${h}`)
    tr.setAttribute("onclick", 'colorIn(event)')
    tableSelector.appendChild(tr)

    while (w < width) {
        let td = document.createElement('td')
        let currentRow = document.getElementById(`row${h}`)
        currentRow.appendChild(td)
        w += 1
    }
    h += 1
    w = 0
  }
}

function colorIn(e) {
  e.preventDefault()
  let color= colorPicker.value
  e.target.style.backgroundColor= color
}
