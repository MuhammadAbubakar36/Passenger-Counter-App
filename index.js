let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment () {
  count += 1
  countEl.innerText= count
}

function save() {
let countStr = count + " _ "
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}



